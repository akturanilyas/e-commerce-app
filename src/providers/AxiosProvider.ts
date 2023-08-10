import axios, { AxiosInstance, Method } from 'axios';
import { ENDPOINT } from '@/api/endpoints';
import { ACCESS_TOKEN } from '@/constants/localStorage.constant';
import { HTTP_STATUS } from '@/constants/network.constant';
import { ApiError } from './AxiosProvider.interface';
import { ApiErrorUseCase } from '@/enums/error.enum';
import { ApiServiceMethod } from '@/enums/apiServiceMethods.enum';

export class AxiosProvider {
  // Variables
  axiosInstance: AxiosInstance;
  baseURL: string | undefined;
  headers: Record<string, string | number | boolean> | undefined;
  isAlreadyFetchingAccessToken: boolean | undefined;
  subscribers: Array<(accessToken: string) => void>;
  additionalSuffixParams: Record<string, unknown> | undefined;
  storageAuthKey: string;

  constructor({
    baseURL,
    headers,
    storageAuthKey,
    additionalSuffixParams,
  }: {
    baseURL: string;
    headers?: Record<string, string | number | boolean>;
    storageAuthKey: string;
    additionalSuffixParams?: Record<string, unknown>;
  }) {
    this.axiosInstance = axios.create();
    this.storageAuthKey = storageAuthKey;
    this.baseURL = baseURL;
    this.setHeaders(headers);
    this.setAccessToken();
    this.additionalSuffixParams = additionalSuffixParams;
    this.setResponseInterceptors();

    // Default Values
    this.subscribers = [];
    this.isAlreadyFetchingAccessToken = false;
  }

  private setHeaders(_headers: Record<string, string | number | boolean> | undefined) {
    this.headers = _headers || {
      Accept: 'application/json',
    };
  }

  private onAccessTokenFetched(accessToken: string) {
    this.subscribers = this.subscribers.filter((callback: (accessToken: string) => void) => callback(accessToken));
  }

  private addSubscriber(callback: (accessToken: string) => void) {
    this.subscribers.push(callback);
  }

  private clearSubscribers() {
    this.subscribers = [];
  }

  public setAccessToken() {
    if (typeof localStorage !== 'undefined') {
      const raw = localStorage.getItem(this.storageAuthKey);
      const auth = (raw?.length && JSON.parse(raw)) || null;

      auth && (this.axiosInstance.defaults.headers.common.Authorization = `Bearer ${auth.access_token}`);
    }
  }

  private setResponseInterceptors() {
    this.axiosInstance.interceptors.response.use(
      (response) => response?.data || response,
      async (error) => {
        const errorResponse = error?.response;
        const originalRequest = error?.config;
        const errorStatusCode = errorResponse?.status;
        const errorCode = errorResponse?.data?.code;
        const errorMessage = errorResponse?.data?.description;

        const apiError: ApiError = {
          errorLabel: errorMessage,
          useCase: ApiErrorUseCase.SHOW_MESSAGE,
          statusCode: errorStatusCode,
        };

        // Make case Show Message when needed status code
        if (errorStatusCode && Object.keys(HTTP_STATUS)?.includes(errorStatusCode?.toString())) {
          apiError.errorLabel = errorMessage;
          apiError.useCase = ApiErrorUseCase.SHOW_MESSAGE;
        }

        if (!error || !errorResponse) {
          apiError.errorLabel = 'GLOBAL.API_ERROR.NETWORK.DESCRIPTION';
          apiError.useCase = ApiErrorUseCase.SHOW_MESSAGE;
        }

        if (errorStatusCode === HTTP_STATUS[401].code && typeof localStorage !== 'undefined') {
          const auth = localStorage.getItem(ACCESS_TOKEN);

          // Don't show message some cases
          if (!HTTP_STATUS[401].errors.includes(errorCode)) {
            apiError.errorLabel = '';
            apiError.useCase = ApiErrorUseCase.NONE;
          }

          if (originalRequest.url.indexOf(ENDPOINT.LOGOUT) > -1) {
            this.clearSubscribers();
            apiError.errorLabel = '';
            apiError.useCase = ApiErrorUseCase.NONE;

            return Promise.reject(apiError);
          }

          if (auth) {
            if (this.isAlreadyFetchingAccessToken && originalRequest.url.indexOf(ENDPOINT.REFRESH_TOKEN) > -1) {
              this.isAlreadyFetchingAccessToken = false;

              return Promise.reject(apiError);
            }

            if (!this.isAlreadyFetchingAccessToken) {
              this.isAlreadyFetchingAccessToken = true;
              const parsedAuth = JSON.parse(auth);
              const refreshToken = parsedAuth?.refresh_token;

              try {
                const authValue = await this.start({
                  method: ApiServiceMethod.POST,
                  url: ENDPOINT.REFRESH_TOKEN,
                  body: null,
                  params: {
                    refresh_token: refreshToken,
                  },
                });

                if (typeof localStorage !== 'undefined') {
                  localStorage.setItem(ACCESS_TOKEN, JSON.stringify(authValue.data));
                }

                this.setAccessToken();
                this.onAccessTokenFetched(authValue.data.access_token);
                originalRequest.headers.Authorization = `Bearer ${authValue.data.access_token}`;
                this.isAlreadyFetchingAccessToken = false;

                return await Promise.resolve(this.axiosInstance(originalRequest));
              } catch (_error) {
                const exception = _error as ApiError;

                // Logout
                apiError.errorLabel = exception.errorLabel;
                apiError.errorTitle = exception.errorTitle;
                apiError.useCase = ApiErrorUseCase.LOGOUT;

                return Promise.reject(apiError);
              }
            }

            const retryOriginalRequest = new Promise((resolve) => {
              this.addSubscriber((accessToken) => {
                originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                resolve(this.axiosInstance(originalRequest));
              });
            });

            return Promise.resolve(retryOriginalRequest);
          }

          return Promise.reject(apiError);
        }

        // If the error is HTTP 503 and has not already been retried
        if (errorStatusCode === HTTP_STATUS[503].code) {
          apiError.useCase = ApiErrorUseCase.LOGOUT;
        }

        return Promise.reject(apiError);
      },
    );
  }

  public async start({
    method,
    url,
    prefix,
    headers,
    body,
    params,
    rest,
  }: {
    method: Method;
    url: string;
    prefix?: string;
    headers?: Record<string, unknown> | unknown;
    body?: Record<string, unknown> | string | undefined | unknown;
    params?: Record<string, unknown> | string | undefined | unknown;
    rest?: Record<string, unknown>;
  }) {
    this.setAccessToken();
    const queryParams = typeof params === 'object' ? params : {};

    const axiosResponse = await this.axiosInstance({
      method,
      url,
      headers: { ...this.headers, ...(headers || {}) },
      baseURL: `${this.baseURL}${prefix || ''}`,
      data: body,
      params: { ...queryParams },
      ...rest,
    });

    return axiosResponse;
  }
}
