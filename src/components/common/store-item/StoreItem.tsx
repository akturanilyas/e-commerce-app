import BaseView from '@/components/common/base-view/BaseView';
import React, { FC, MouseEvent, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { StoreItemProps } from '@/components/common/store-item/StoreItem.interface';
import BaseText from '@/components/common/base-text/BaseText';
import { getFormattedAmount } from '@/utils/amountUtil';
import CustomIconProvider from '@/providers/CustomIconProvider';
import { CUSTOM_ICON } from '@/constants/customIcon.constant';
import BaseButton from '@/components/common/base-button/BaseButton';
import { useRouter } from 'next/navigation';
import { CarouselItem } from '@/components/carousel-item/CarouselItem';
import { MAIN_PATH } from '@/constants/mainPath.constant';
import { useAppDispatch } from '@/hooks/useRedux';
import { addProduct } from '@/redux/slices/mainSlice';
import { useLazyGetProductQuery } from '@/api/base/services/product-service/productService';

export const StoreItem: FC<StoreItemProps> = (props) => {
  const dispatch = useAppDispatch();
  const { className, item } = props;
  const [getProduct] = useLazyGetProductQuery();
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const classes = twMerge(`
     border-2 border-slate-200 
     rounded-2xl hover:scale-110 bg-slate-100 dark:bg-slate-600 dark:border-slate-700
     h-80
     group
     cursor-pointer
     justify-between
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

  const _addProduct = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    getProduct({ id: item.id })
      .unwrap()
      .then((product) => {
        dispatch(addProduct({ product: { ...product, count: 1 } }));
      });
  };

  return (
    <BaseView className={classes} ref={ref} onClick={() => router.push(`${MAIN_PATH.PRODUCTS}/${item.id.toString()}`)}>
      <BaseView className={'px-2'}>
        <CarouselItem
          images={item.images}
          imageContainerClassName={'h-40 dark:bg-slate-600'}
          imageClassName={'max-h-40'}
        />
        <BaseText text={item.title} className={'px-1 max-h line-clamp-3 pt-2'} />
        <BaseText
          text={getFormattedAmount({ amount: item.price, currency: 'USD' })}
          className={'px-1 pb-4 font-bold'}
        />
        <BaseView className={'flex flex-row items-center gap-2'}>
          <BaseView className={'flex flex-row items-center gap-2'}>{stars}</BaseView>
          <BaseText text={item.rating.toString()} className={'text-sm'} />
        </BaseView>
      </BaseView>

      <BaseView className={'p-4 z-60'}>
        <BaseButton
          label={'Add to Basket'}
          className={'invisible group-hover:visible bg-green-450 p-2'}
          onClick={_addProduct}
        />
      </BaseView>
    </BaseView>
  );
};
