'use client';

import React from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import { useMain } from '@/hooks/useSlices';
import { BasketItem } from '@/components/common/basket-item/BasketItem';
import { TotalAmountCard } from '@/components/total-amound-card/TotalAmountCard';

const Page = () => {
  const { basketItems } = useMain();

  return (
    <BaseView className={'pt-2'}>
      <BaseView className={'flex flex-row w-full bg-slate-200 dark:bg-slate-900 rounded-xl gap-4 p-2'}>
        <BaseView className={'gap-4 w-3/4 p-4'}>
          {basketItems.map((item) => (
            <BasketItem key={item.id} item={item} />
          ))}
        </BaseView>

        <BaseView className={'w-1/4 p-4'}>
          <TotalAmountCard />
        </BaseView>
      </BaseView>
    </BaseView>
  );
};

export default Page;
