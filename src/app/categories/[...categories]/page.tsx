'use client';

import React, { useEffect } from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import { StoreItem } from '@/components/common/store-item/StoreItem';
import {
  useGetCategoriesQuery,
  useGetProductQuery,
  useLazyGetCategoryProductsQuery,
} from '@/api/base/services/product-service/productService';
import Tab from '@/components/common/tab/Tab';
import { usePathname, useRouter } from 'next/navigation';
import { words } from 'lodash';

const Page = () => {
  const route = useRouter();
  const pathname = usePathname();
  const { data: productsResponse } = useGetProductQuery({});
  const { data: categories } = useGetCategoriesQuery({});
  const [getProducts, { data: categoryProducts }] = useLazyGetCategoryProductsQuery();
  const items = categories?.slice(0, 5).map((category) => ({
    label: category,
    path: category,
  }));

  useEffect(() => {
    getProducts({ query: { type: words(pathname).pop() } });
  }, [pathname]);

  return (
    <BaseView className={'w-full h-full'}>
      <BaseView className={'py-3 shadow-md mt-2 border border-slate-200 rounded-md'}>
        <Tab
          items={items || []}
          onClick={(label) => {
            route.push(label);
          }}
          currentTab={words(pathname).pop()}
        />
      </BaseView>
      <BaseView className={'flex flex-row flex-wrap border-2 border-slate-200 rounded-md h-full my-4 shadow-md'}>
        {(categoryProducts?.products || productsResponse?.products)?.map((item) => (
          <BaseView key={item.id} className={'sm:w-1/2 md:w-1/4 lg:w-1/5 p-4'}>
            <StoreItem key={item.id} item={item} />
          </BaseView>
        ))}
      </BaseView>
    </BaseView>
  );
};

export default Page;
