'use client';

import { Get } from '@/api/commonService.interface';
import { ENDPOINT } from '@/api/endpoints';
import { baseApi } from '../../baseApi';
import { ProductsQueryRequestParams } from './productService.interface';
import { ApiServiceMethod } from '@/enums/apiServiceMethods.enum';
import { Product } from '@/types/product.model';

export const productServiceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query<Array<Product>, Get<ProductsQueryRequestParams>>({
      query: ({ query }) => ({
        url: `${ENDPOINT.PRODUCTS}`,
        method: ApiServiceMethod.GET,
        data: { params: query },
      }),
    }),
  }),
});

export const { useGetProductQuery } = productServiceApi;
