'use client';

import React from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import { useGetProductQuery } from '@/api/base/services/product-service/productService';
import { usePathname } from 'next/navigation';
import { words } from 'lodash';
import { CarouselItem } from '@/components/carousel-item/CarouselItem';
import BaseText from '@/components/common/base-text/BaseText';
import BaseButton from '@/components/common/base-button/BaseButton';
import CustomIconProvider from '@/providers/CustomIconProvider';
import { CUSTOM_ICON } from '@/constants/customIcon.constant';
import { getFormattedAmount } from '@/utils/amountUtil';

const Page = () => {
  const pathname = usePathname();

  const { data: product } = useGetProductQuery({ id: words(pathname).pop() });

  const stars = (
    <>
      {product && (
        <BaseView className={'flex flex-row'}>
          {Array.from({ length: 5 }, (_, index) => (
            <CustomIconProvider
              key={index}
              icon={CUSTOM_ICON.STAR_FULL}
              iconClassName={`h-full ${index + 0.5 > product.rating ? '' : 'text-yellow-300 '} `}
              customSize={18}
            />
          ))}
        </BaseView>
      )}
    </>
  );

  return (
    <>
      {product && (
        <BaseView className={'h-full w-full pt-4'}>
          <BaseView className={'flex flex-row w-full border rounded-2xl dark:border-gray-700 divide-x-2 dark:divide-gray-700 h-3/5'}>
            <BaseView className={'w-1/2 align-middle h-full p-8'}>
              <BaseView className={'h-full max-h-full'}>
                <CarouselItem images={product.images} className={'h-full max-h-full'} imageClassName={'max-h-full'} imageContainerClassName={'h-full'} />
              </BaseView>
            </BaseView>

            <BaseView className={'w-1/2 bg-slate-100 dark:bg-gray-800 h-full rounded-r-2xl p-2 justify-between'}>
              <BaseView>
                <BaseText text={product.title} className={'text-lg font-bold pt-1 text-slate-400'} />
                <BaseText text={product.brand} className={'text-lg text-green-450 pb-2'} />
                <BaseText text={product.description} className={'pb-2'} />
                <BaseView className={'gap-4'}>
                  <BaseText
                    text={getFormattedAmount({ amount: product.price, currency: 'EUR' })}
                    className={'text-3xl '}
                  />
                  <BaseView className={'flex flex-row items-center justify-between'}>
                    <BaseView className={'w-1/2 flex-row gap-2'}>
                      <BaseView className={'flex flex-row items-center gap-2'}>{stars}</BaseView>

                      <BaseText text={product.rating.toString()} className={'text-sm'} />
                    </BaseView>

                    <BaseView className={'w-1/2'}>
                      <BaseText text={`Remaining Stock:${product.stock}`} />
                    </BaseView>
                  </BaseView>

                </BaseView>
              </BaseView>
              <BaseView className={'p-4'}>
                <BaseButton label={'Add to Basket'} className={'bg-green-450 p-2'} />
              </BaseView>
            </BaseView>
          </BaseView>
        </BaseView>
      )}
    </>
  );
};

export default Page;
