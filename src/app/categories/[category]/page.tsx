import React from 'react';
import { useLazyGetCategoryProductsQuery } from '@/api/base/services/product-service/productService';
import { useParams } from 'next/navigation';
import ProductList from '@/components/product-list/ProductList';
import { useDebounce } from '@/hooks/useDebounce';

const Page = () => {
  const [getProducts, { data: categoryProducts }] = useLazyGetCategoryProductsQuery();
  const { category } = useParams() as {
    category: string;
  };

  useDebounce(
    () => {
      category && getProducts({ query: { type: category } });
    },
    1,
    [category],
  );

  return <>{categoryProducts && <ProductList products={categoryProducts.products} />}</>;
};

export default Page;
