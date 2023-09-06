'use client';

import React, { FC, useEffect } from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import { CUSTOM_ICON } from '@/constants/customIcon.constant';
import BaseText from '@/components/common/base-text/BaseText';
import CustomIconProvider from '@/providers/CustomIconProvider';
import { SnackBarProps } from '@/components/snack-bar/SnackBar.interface';
import { useAppDispatch } from '@/hooks/useRedux';
import { removeResult } from '@/redux/slices/resultSlice';

export const SnackBar: FC<SnackBarProps> = (props) => {
  const { result } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(removeResult({ id: result.id }));
    }, 3000);
  }, []);

  return (
    <BaseView key={result.id} className={'flex flex-row bg-green-450 p-4 rounded-md gap-2'}>
      <CustomIconProvider icon={CUSTOM_ICON.CHECK_CIRCLE} />
      <BaseText text={'Successfully Purchased'} />
    </BaseView>
  );
};
