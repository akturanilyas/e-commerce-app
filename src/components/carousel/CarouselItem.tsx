'use client';

import BaseView from '@/components/common/base-view/BaseView';
import { FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Image } from '@/components/common/image/Image';
import CustomIconProvider from '@/providers/CustomIconProvider';
import { CUSTOM_ICON } from '@/constants/customIcon.constant';
import { CarouselItemProps } from '@/components/carousel/CarouselItem.interface';

export const CarouselItem: FC<CarouselItemProps> = (props) => {
  const { className, images } = props;
  const [currentImage, setCurrentImage] = useState<string>(images[0]);

  const classes = twMerge(`
     aspect-square 
     items-center 
     align-middle 
     bg-white 
     h-40 
     justify-center 
     relative 
     rounded-2xl
     ${className} 
  `);

  const width = {
    1: 'w-1/1',
    2: 'w-1/2',
    3: 'w-1/3',
    4: 'w-1/4',
    5: 'w-1/5',
    6: 'w-1/6',
  };

  const setDefaultImage = () => {
    setCurrentImage(images[0]);
  };

  return (
    <BaseView className={classes}>
      <Image src={currentImage} imageClassName={'max-h-40 w-full object-cover'} />
      <BaseView className={'absolute flex-row w-full h-full'}>
        {images.map((image) => (
          <BaseView
            key={image}
            className={`z-10 h-full flex ${width[images.length as keyof typeof width]}`}
            onMouseLeave={setDefaultImage}
            onMouseEnter={() => setCurrentImage(image)}
          />
        ))}
      </BaseView>
      <BaseView className={'flex-row absolute bottom-2 bg-slate-200 rounded-md'}>
        {images.map((image) => (
          <CustomIconProvider
            key={image}
            icon={CUSTOM_ICON.DOT_CIRCLE}
            iconClassName={`${image === currentImage && 'text-slate-500'}`}
            customSize={12}
          />
        ))}
      </BaseView>
    </BaseView>
  );
};
