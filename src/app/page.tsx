'use client';

import React, { useEffect } from 'react';
import {
  useGetProductsQuery,
  useLazyGetCategoryProductsQuery,
} from '@/api/base/services/product-service/productService';
import { usePathname } from 'next/navigation';
import { words } from 'lodash';
import ProductList from '@/components/product-list/ProductList';

const Page = () => {
  const pathname = usePathname();
  const { data: productsResponse } = useGetProductsQuery({});
  const [getProducts, { data: categoryProducts }] = useLazyGetCategoryProductsQuery();

  useEffect(() => {
    getProducts({ query: { type: words(pathname).pop() } });
  }, [pathname]);

  return <>{productsResponse && <ProductList products={productsResponse?.products} />}</>;
};

export default Page;
