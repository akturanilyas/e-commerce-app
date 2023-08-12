'use client';

import React from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import { useGetProductQuery } from '@/api/base/services/product-service/productService';

const Page = () => {
  const { data: pro } = useGetProductQuery({});

  return <BaseView className={'flex flex-row flex-wrap border-2 border-slate-200 rounded-md h-full my-4'}></BaseView>;
};

export default Page;
