'use client';

import BaseView from '@/components/common/base-view/BaseView';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { Image } from '@/components/common/image/Image';
import { StoreItemProps } from '@/components/common/store-item/StoreItem.interface';
import BaseText from '@/components/common/base-text/BaseText';
import { getFormattedAmount } from '@/utils/amountUtil';

export const StoreItem: FC<StoreItemProps> = (props) => {
  const { className, imageClassName, item } = props;

  const classes = twMerge(`
     border-2 border-slate-400 rounded-md gap-2 hover:scale-110 bg-slate-100
     ${className}
  `);

  return (
    <BaseView className={classes} onClick={() => console.log('tıklandı')}>
      <Image
        src={item.image}
      />
      <BaseText text={item.name} className={'px-1 pb-4'} />
      <BaseText
        text={getFormattedAmount({ amount: item.price, currency: item.currency })}
        className={'px-1 pb-4 font-bold'}
      />
    </BaseView>
  );
};
