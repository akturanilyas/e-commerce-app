'use client';

import React from 'react';
import { useGetProductsQuery } from '@/api/base/services/product-service/productService';
import ProductList from '@/components/product-list/ProductList';

const Page = () => {
  const { data: productsResponse } = useGetProductsQuery({});

  return <>{productsResponse && <ProductList products={productsResponse?.products} />}</>;
};

export default Page;
