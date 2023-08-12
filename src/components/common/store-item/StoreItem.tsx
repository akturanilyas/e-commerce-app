'use client';

import BaseView from '@/components/common/base-view/BaseView';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { Image } from '@/components/common/image/Image';
import { StoreItemProps } from '@/components/common/store-item/StoreItem.interface';
import BaseText from '@/components/common/base-text/BaseText';
import { getFormattedAmount } from '@/utils/amountUtil';
import CustomIconProvider from '@/providers/CustomIconProvider';
import { CUSTOM_ICON } from '@/constants/customIcon.constant';

export const StoreItem: FC<StoreItemProps> = (props) => {
  const { className, imageClassName, item } = props;

  const classes = twMerge(`
     border-2 border-slate-200 rounded-md hover:scale-110 bg-slate-100
     h-80
     ${className} 
  `);

  const stars = (
    <BaseView className={'flex flex-row'}>
      {Array.from({ length: 5 }, (_, index) => {
        console.log(index < item.rating.rate);

        return (
          <CustomIconProvider
            icon={CUSTOM_ICON.STAR_FULL}
            iconClassName={`h-full ${index + 0.5 > item.rating.rate ? '' : 'text-yellow-300 '} `}
            customSize={18}
          />
        );
      })}
    </BaseView>
  );

  return (
    <BaseView className={classes} onClick={() => console.log('tıklandı')}>
      <BaseView className={'aspect-square items-center align-middle bg-white h-40'}>
        <Image src={item.image} imageClassName={'max-h-40 w-full object-cover'} />
      </BaseView>
      <BaseText text={item.title} className={'px-1 max-h line-clamp-3'} />
      <BaseText text={getFormattedAmount({ amount: item.price, currency: 'USD' })} className={'px-1 pb-4 font-bold'} />
      <BaseView className={'flex flex-row items-center gap-2'}>
        <BaseView className={'flex flex-row items-center gap-2'}>{stars}</BaseView>

        <BaseText text={item.rating.rate.toString()} className={'text-sm'} />
      </BaseView>
    </BaseView>
  );
};
