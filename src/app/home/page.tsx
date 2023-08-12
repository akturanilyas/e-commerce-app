'use client';

import React from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import { StoreItem } from '@/components/common/store-item/StoreItem';
import { useGetProductQuery } from '@/api/base/services/product-service/productService';

const Page = () => {
  const { data: products } = useGetProductQuery({});

  return (
    <BaseView className={'flex flex-row flex-wrap border-2 border-slate-200 rounded-md h-full my-4'}>
      {products?.map((item) => (
        <BaseView className={'sm:w-1/2 md:w-1/4 lg:w-1/5 p-4'}>
          <StoreItem key={item.id} item={item} />
        </BaseView>
      ))}
    </BaseView>
  );
};

export default Page;
