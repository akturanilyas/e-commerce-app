'use client';

import React from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import { useGetProductQuery } from '@/api/base/services/product-service/productService';
import { usePathname } from 'next/navigation';
import { words } from 'lodash';
import { CarouselItem } from '@/components/carousel/CarouselItem';

const Page = () => {
  const pathname = usePathname();

  const { data: product } = useGetProductQuery({ id: words(pathname).pop() });

  return (
    <>
      {product && (
        <BaseView className={'w-full h-full'}>
          <CarouselItem images={product.images}></CarouselItem>
        </BaseView>
      )}
    </>
  );
};

export default Page;
