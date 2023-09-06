'use client';

import React, { FC } from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import { CUSTOM_ICON } from '@/constants/customIcon.constant';
import { twMerge } from 'tailwind-merge';
import BaseText from '@/components/common/base-text/BaseText';
import lodash, { map, sum } from 'lodash';
import Button from '@/components/common/button/Button';
import { getFormattedAmount } from '@/utils/amountUtil';
import { useMain } from '@/hooks/useSlices';
import { useAppDispatch } from '@/hooks/useRedux';
import { addResult } from '@/redux/slices/resultSlice';
import { ResultType } from '@/enums/common.enum';
import { TotalAmountCardProps } from '@/components/total-amound-card/TotalAmountCard.interface';

export const TotalAmountCard: FC<TotalAmountCardProps> = (props) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  const { basketItems } = useMain();

  const classes = twMerge(`
     bg-slate-100 dark:bg-slate-800 
     rounded-xl p-4 h-min gap-4 shadow-md
     ${className} 
  `);

  const getTotalAmount = () =>
    getFormattedAmount({
      amount: sum(basketItems.map((item) => item.count! * item.price)),
      currency: 'EUR',
    });

  return (
    <BaseView className={classes}>
      <BaseView className={'p-4 h-min gap-4'}>
        <BaseText text={`Selected items:${sum(map(basketItems, 'count'))}`} className={'text-lg'} />
        <BaseText text={getTotalAmount()} className={'text-3xl'} />
        <Button
          className={'bg-green-450 dark:bg-green-450 shadow-md'}
          label={'Purchase'}
          icon={{ icon: CUSTOM_ICON.SHOPPING_CARD }}
          onClick={() => {
            dispatch(
              addResult({
                id: lodash.uniqueId(),
                type: ResultType.SUCCESS,
                title: 'error',
                message: 'error.errorLabel',
              }),
            );
          }}
        />
      </BaseView>
    </BaseView>
  );
};
