'use client';

import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query/react';
import { Method } from 'axios';
import lodash from 'lodash';
import { silentServices } from '@/api/silentServices';
import { ACCESS_TOKEN } from '@/constants/localStorage.constant';
import { decrease, increase } from '@/redux/slices/loadingSlice';
import { setUser } from '@/redux/slices/mainSlice';
import { BaseQueryFunctionParams } from './ApiRequestProvider.interface';
import { AxiosProvider } from './AxiosProvider';
import { ApiError } from './AxiosProvider.interface';
import { addResult } from '@/redux/slices/resultSlice';
import { ResultType } from '@/enums/common.enum';
import { ApiErrorUseCase } from '@/enums/error.enum';

export class ApiRequestProvider {
  api;
  prefix;

  constructor({
    baseURL,
    prefix,
    headers,
    storageAuthKey,
    additionalSuffixParams,
  }: {
    baseURL: string;
    prefix?: string;
    headers?: Record<string, string | number | boolean>;
    storageAuthKey: string;
    additionalSuffixParams?: Record<string, unknown>;
  }) {
    this.api = new AxiosProvider({
      baseURL,
      headers,
      storageAuthKey,
      additionalSuffixParams,
    });
    this.prefix = prefix;
  }

  private pushError = (error: ApiError, dispatch: ThunkDispatch<unknown, unknown, Action<unknown>>) => {
    dispatch(
      addResult({
        id: lodash.uniqueId(),
        type: ResultType.DANGER,
        title: error.errorTitle,
        message: error.errorLabel,
      }),
    );
  };

  private logout = (dispatch: ThunkDispatch<unknown, unknown, Action<unknown>>) => {
    dispatch(setUser(undefined));
    localStorage.removeItem(ACCESS_TOKEN);
    window.location.replace('/');
  };

  private exceptionHandler = (error: ApiError, dispatch: ThunkDispatch<unknown, unknown, Action<unknown>>) => {
    if (error) {
      switch (error.useCase) {
        case ApiErrorUseCase.LOGOUT:
          this.logout(dispatch);
          this.pushError(error, dispatch);
          break;
        case ApiErrorUseCase.SHOW_MESSAGE:
          this.pushError(error, dispatch);
          break;
        default:
          break;
      }
    }
  };

  public requester
    = (): BaseQueryFn<BaseQueryFunctionParams> =>
    async ({ url, method, headers, data = {} }, { dispatch, endpoint }) => {
      const isSilentService = silentServices.includes(endpoint);

      try {
        !isSilentService && dispatch(increase());

        const result = await this.api.start({
          method: method as Method,
          url,
          prefix: this.prefix,
          body: data?.body,
          params: data?.params,
          headers,
        });

        return { data: result?.data || result };
      } catch (error) {
        const apiError = error as ApiError;

        this.exceptionHandler(apiError, dispatch);

        return {
          error: apiError,
        };
      } finally {
        !isSilentService && dispatch(decrease());
      }
    };
}
