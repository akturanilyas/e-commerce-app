'use client';

import React, { FC, useEffect } from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import { StoreItem } from '@/components/common/store-item/StoreItem';
import {
  useGetCategoriesQuery,
  useLazyGetCategoryProductsQuery,
} from '@/api/base/services/product-service/productService';
import Tab from '@/components/common/tab/Tab';
import { useParams, useRouter } from 'next/navigation';
import { ProductListProps } from '@/components/product-list/ProductList.interface';
import { MAIN_PATH } from '@/constants/mainPath.constant';

const ProductList: FC<ProductListProps> = (props) => {
  const { products } = props;
  const { category } = useParams() as {
    category: string;
  };
  const route = useRouter();
  const { data: categories } = useGetCategoriesQuery({});
  const [getProducts, { data: categoryProducts }] = useLazyGetCategoryProductsQuery();
  const items = categories?.slice(0, 5).map((category) => ({
    label: category,
    path: category,
  }));

  useEffect(() => {
    category && getProducts({ query: { type: category } });
  }, [category]);

  return (
    <BaseView className={'w-full h-full'}>
      <Tab
        className={'py-3 shadow-md mt-2 border border-slate-200 rounded-md'}
        items={items || []}
        onClick={(label) => {
          route.push(`${MAIN_PATH.CATEGORIES}/${label}`);
        }}
        currentTab={category}
      />

      <BaseView className={'flex flex-row flex-wrap border-2 border-slate-200 dark:border-gray-700 dark:bg-gray-800 rounded-md h-full my-4 shadow-md'}>
        {(categoryProducts?.products || products)?.map((item) => (
          <BaseView key={item.id} className={'sm:w-1/2 md:w-1/4 lg:w-1/5 p-4'}>
            <StoreItem key={item.id} item={item} />
          </BaseView>
        ))}
      </BaseView>
    </BaseView>
  );
};

export default ProductList;
