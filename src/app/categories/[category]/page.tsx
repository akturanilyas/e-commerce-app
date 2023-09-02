'use client';

import React, { useEffect } from 'react';
import { useLazyGetCategoryProductsQuery } from '@/api/base/services/product-service/productService';
import { usePathname } from 'next/navigation';
import { words } from 'lodash';
import ProductList from '@/components/product-list/ProductList';

const Page = () => {
  const pathname = usePathname();
  const [getProducts, { data: categoryProducts }] = useLazyGetCategoryProductsQuery();

  useEffect(() => {
    getProducts({ query: { type: words(pathname).pop() } });
  }, [pathname]);

  return <ProductList />;
};

export default Page;
