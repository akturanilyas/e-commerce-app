'use client';

import BaseView from '@/components/common/base-view/BaseView';
import { FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Image } from '@/components/common/image/Image';
import { StoreItemProps } from '@/components/common/store-item/StoreItem.interface';
import BaseText from '@/components/common/base-text/BaseText';
import { getFormattedAmount } from '@/utils/amountUtil';
import CustomIconProvider from '@/providers/CustomIconProvider';
import { CUSTOM_ICON } from '@/constants/customIcon.constant';

export const StoreItem: FC<StoreItemProps> = (props) => {
  const { className, imageClassName, item } = props;
  const [currentImage, setCurrentImage] = useState<string>(item.images[0]);

  const classes = twMerge(`
     border-2 border-slate-200 rounded-2xl hover:scale-110 bg-slate-100
     h-80
     ${className} 
  `);

  const stars = (
    <BaseView className={'flex flex-row'}>
      {Array.from({ length: 5 }, (_, index) => (
        <CustomIconProvider
          key={index}
          icon={CUSTOM_ICON.STAR_FULL}
          iconClassName={`h-full ${index + 0.5 > item.rating ? '' : 'text-yellow-300 '} `}
          customSize={18}
        />
      ))}
    </BaseView>
  );

  const width = {
    1: 'w-1/1',
    2: 'w-1/2',
    3: 'w-1/3',
    4: 'w-1/4',
    5: 'w-1/5',
    6: 'w-1/6',
  };

  const setDefaultImage = () => {
    setCurrentImage(item.images[0]);
  };

  return (
    <BaseView className={classes} onClick={() => console.log('tıklandı')}>
      <BaseView className={'aspect-square items-center align-middle bg-white h-40 justify-center relative rounded-2xl'}>
        <Image src={currentImage} imageClassName={'max-h-40 w-full object-cover'} />
        <BaseView className={'absolute flex-row w-full h-full'}>
          {item.images.map((image) => (
            <BaseView
              key={image}
              className={`z-10 h-full flex ${width[item.images.length as keyof typeof width]}`}
              onMouseLeave={setDefaultImage}
              onMouseEnter={() => setCurrentImage(image)}
            />
          ))}
        </BaseView>
        <BaseView className={'flex-row absolute bottom-1 bg-slate-200 rounded-md'}>
          {item.images.map((image) => (
            <CustomIconProvider key={image} icon={CUSTOM_ICON.DOT_CIRCLE} iconClassName={`${image === currentImage && 'text-slate-500'}`} customSize={12} />
          ))}
        </BaseView>
      </BaseView>
      <BaseText text={item.title} className={'px-1 max-h line-clamp-3'} />
      <BaseText text={getFormattedAmount({ amount: item.price, currency: 'USD' })} className={'px-1 pb-4 font-bold'} />
      <BaseView className={'flex flex-row items-center gap-2'}>
        <BaseView className={'flex flex-row items-center gap-2'}>{stars}</BaseView>

        <BaseText text={item.rating.toString()} className={'text-sm'} />
      </BaseView>
    </BaseView>
  );
};
