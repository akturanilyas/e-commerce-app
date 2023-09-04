'use client';

import React from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import { useMain } from '@/hooks/useSlices';
import { BasketItem } from '@/components/common/basket-item/BasketItem';

const Page = () => {
  const { basketItems } = useMain();

  return (
    <BaseView className={'w-full h-full bg-slate-200 gap-4 p-2'}>
      {basketItems.map((item) => (
        <BasketItem key={item.id} item={item} />
      ))}
    </BaseView>
  );
};

export default Page;
