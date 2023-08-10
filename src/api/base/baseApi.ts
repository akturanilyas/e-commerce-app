'use client';

import { createApi } from '@reduxjs/toolkit/query/react';
import { API_PREFIX } from '../prefixes';
import { ProvideTag } from '@/enums/apiServiceTag.enum';
import { ACCESS_TOKEN } from '@/constants/localStorage.constant';
import { ApiRequestProvider } from '@/providers/ApiRequestProvider';

const apiRequestProvider = new ApiRequestProvider({
  baseURL: process.env.APP_API_URL!,
  prefix: API_PREFIX.API,
  storageAuthKey: ACCESS_TOKEN,
});

export const baseApi = createApi({
  reducerPath: API_PREFIX.API,
  baseQuery: apiRequestProvider.requester(),
  endpoints: () => ({}),
  tagTypes: Object.keys(ProvideTag),
});
