'use client';

import { Get } from '@/api/commonService.interface';
import { ENDPOINT } from '@/api/endpoints';
import { baseApi } from '../../baseApi';
import { GetCategoryProductsQuery, ProductsQueryResponse } from './productService.interface';
import { ApiServiceMethod } from '@/enums/apiServiceMethods.enum';

export const productServiceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query<ProductsQueryResponse, Get>({
      query: ({ query }) => ({
        url: `${ENDPOINT.PRODUCTS}`,
        method: ApiServiceMethod.GET,
        data: { params: query },
      }),
    }),
    getCategories: builder.query<Array<string>, Get>({
      query: ({ query }) => ({
        url: `${ENDPOINT.PRODUCTS}${ENDPOINT.CATEGORIES}`,
        method: ApiServiceMethod.GET,
        data: { params: query },
      }),
    }),
    getCategoryProducts: builder.query<ProductsQueryResponse, Get<GetCategoryProductsQuery>>({
      query: ({ query }) => ({
        url: `${ENDPOINT.PRODUCTS}${ENDPOINT.CATEGORY}/${query?.type}`,
        method: ApiServiceMethod.GET,
        data: { params: query },
      }),
    }),
  }),
});

export const { useGetProductQuery, useLazyGetProductQuery, useGetCategoriesQuery, useLazyGetCategoryProductsQuery } = productServiceApi;
