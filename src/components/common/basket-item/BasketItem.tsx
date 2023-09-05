import React, { FC } from 'react';
import { BasketItemProps } from '@/components/common/basket-item/BasketItem.interface';
import BaseView from '@/components/common/base-view/BaseView';
import BaseText from '@/components/common/base-text/BaseText';
import { getFormattedAmount } from '@/utils/amountUtil';
import { Image } from '@/components/common/image/Image';
import Button from '@/components/common/button/Button';
import { CUSTOM_ICON } from '@/constants/customIcon.constant';
import { useAppDispatch } from '@/hooks/useRedux';
import { decrementItem, incrementItem, removeProduct } from '@/redux/slices/mainSlice';

export const BasketItem: FC<BasketItemProps> = (props) => {
  const dispatch = useAppDispatch();
  const { item } = props;

  return (
    <BaseView className={'flex-row bg-slate-100 dark:bg-slate-700 p-4 rounded-xl gap-4 shadow-md'}>
      <Image src={item.thumbnail} className={'h-24 w-24 bg-slate-200 rounded-xl'} />
      <BaseView className={'w-full'}>
        <BaseView className={'flex flex-row justify-between'}>
          <BaseText text={`${item.title} - ${item.description}`} className={'w-10/12'} />
          <BaseText
            className={'w-2/12 text-right'}
            text={getFormattedAmount({ amount: item.count! * item.price, currency: 'USD' })}
          />
        </BaseView>

        <BaseText text={item.brand} />

        <BaseView className={'flex flex-row items-center'}>
          {item.count! > 1 ? (
            <Button
              icon={{
                icon: CUSTOM_ICON.MINUS,
                iconClassName: 'border-2 border-slate-300 rounded-full text-slate-300',
              }}
              onClick={() => dispatch(decrementItem({ id: item.id }))}
            />
          ) : (
            <Button
              icon={{
                icon: CUSTOM_ICON.TRASH,
                iconClassName: 'p-1 border-2 border-slate-300 rounded-full text-slate-300',
              }}
              onClick={() => dispatch(removeProduct({ id: item.id }))}
            />
          )}
          <BaseView
            className={
              'bg-slate-100 dark:bg-slate-700 border border-slate-300 rounded-full w-[32px] h-[32px] items-center justify-center'
            }
          >
            <BaseText text={item.count!.toString()} className={'text-sm'} />
          </BaseView>
          <Button
            icon={{
              icon: CUSTOM_ICON.PLUS,
              iconClassName: 'border-2 border-slate-300 rounded-full text-slate-300',
            }}
            onClick={() => dispatch(incrementItem({ id: item.id }))}
          />
        </BaseView>
      </BaseView>
    </BaseView>
  );
};
