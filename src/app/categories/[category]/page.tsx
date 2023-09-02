'use client';

import React, { useEffect } from 'react';
import { useLazyGetCategoryProductsQuery } from '@/api/base/services/product-service/productService';
import { useParams } from 'next/navigation';
import ProductList from '@/components/product-list/ProductList';

const Page = () => {
  const [getProducts, { data: categoryProducts }] = useLazyGetCategoryProductsQuery();
  const { category } = useParams() as {
    category: string;
  };

  useEffect(() => {
    category && getProducts({ query: { type: category } });
  }, [category]);

  return <>{categoryProducts && <ProductList products={categoryProducts.products} />}</>;
};

export default Page;
