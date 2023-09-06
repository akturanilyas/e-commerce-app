import React from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import { CUSTOM_ICON } from '@/constants/customIcon.constant';
import CustomIconProvider from '@/providers/CustomIconProvider';
import BaseText from '@/components/common/base-text/BaseText';
import Button from '@/components/common/button/Button';
import { useRouter } from 'next/navigation';
import { MAIN_PATH } from '@/constants/mainPath.constant';

export const EmptyBasket = () => {
  const router = useRouter();
  const navigateToStore = () => router.push(MAIN_PATH.DASHBOARD);

  return (
    <BaseView className={'w-full bg-slate-200 dark:bg-slate-900 h-full justify-center items-center'}>
      <BaseView className={'bg-slate-100 dark:bg-slate-800 p-16 rounded-md shadow-md gap-4 justify-center items-center'}>
        <BaseView className={'flex flex-row items-center justify-center gap-4'}>
          <CustomIconProvider icon={CUSTOM_ICON.EMPTY_BOX} customSize={128} className={'text-green-450'} iconClassName={'text-green-450 fill-green-450'} />
          <BaseText text={'No Item Found'} className={'text-3xl text-green-450 dark:text-green-450'} />
        </BaseView>
        <BaseText text={'Please go to store page.'} className={'text-green-450 dark:text-green-450'} />

        <Button label={'Go To Store'} className={'bg-green-450'} onClick={navigateToStore} />
      </BaseView>
    </BaseView>
  );
};
