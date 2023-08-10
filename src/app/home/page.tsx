import React from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import { StoreItem } from '@/components/common/store-item/StoreItem';
import { StoreItem as StoreItemModel } from '@/types/storeItem.model';

const Page = () => {
  const a = 2;
  const images = ['https://picsum.photos/seed/picsum/400/400'];
  const items: Array<StoreItemModel> = [
    {
      id: '1',
      description: 'Description 1',
      name: 'Ürün 1',
      price: 100,
      image: 'https://picsum.photos/seed/picsum/400/400',
      currency: 'TRY',
    },
    {
      id: '2',
      description: 'Description 2',
      name: 'Ürün 2',
      price: 100,
      image: 'https://picsum.photos/seed/picsum/400/400',
      currency: 'TRY',
    },
    {
      id: '3',
      description: 'Description 3',
      name: 'Ürün 3',
      price: 100,
      image: 'https://picsum.photos/seed/picsum/400/400',
      currency: 'EUR',
    },
    {
      id: '4',
      description: 'Description 4',
      name: 'Ürün 4',
      price: 100,
      image: 'https://picsum.photos/seed/picsum/400/400',
      currency: 'TRY',
    },
  ];

  return (
    <BaseView className={'flex flex-row flex-wrap gap-8 justify-center'}>
      {items.map((item) => (
        <StoreItem key={item.id} item={item} className={'w-1/6'} />
      ))}
    </BaseView>
  );
};

export default Page;
