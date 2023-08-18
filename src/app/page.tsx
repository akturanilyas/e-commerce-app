'use client';

import React from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import { StoreItem } from '@/components/common/store-item/StoreItem';
import {
    useGetCategoriesQuery,
    useGetProductsQuery,
} from '@/api/base/services/product-service/productService';
import Tab from '@/components/common/tab/Tab';
import { usePathname, useRouter } from 'next/navigation';
import { words } from 'lodash';

const Page = () => {
  const route = useRouter();
  const pathname = usePathname();
  const { data: productsResponse } = useGetProductsQuery({});
  const { data: categories } = useGetCategoriesQuery({});
  const items = categories?.slice(0, 5).map((category) => ({
    label: category,
    path: category,
  }));

  return (
    <BaseView>
      <BaseView className={'bg-slate-100 py-2 mt-2 border border-slate-200 rounded-md'}>
        <Tab
          items={items || []}
          onClick={(label) => {
            let path = `categories/${label}`;

            if (pathname.includes('categories')) {
              path = `/${label}`;
            }

            route.push(path);
          }}
          currentTab={words(pathname).pop()}
        />
      </BaseView>
      <BaseView className={'flex flex-row flex-wrap border-2 border-slate-200 rounded-md h-full my-4'}>
        {productsResponse?.products?.map((item) => (
          <BaseView key={item.id} className={'sm:w-1/2 md:w-1/4 lg:w-1/5 p-4'}>
            <StoreItem key={item.id} item={item} />
          </BaseView>
        ))}
      </BaseView>
    </BaseView>
  );
};

export default Page;
