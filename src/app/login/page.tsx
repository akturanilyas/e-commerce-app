'use client';

import React from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import LoginForm from '@/components/form/LoginForm';
import { useForm } from 'react-hook-form';
import Button from '@/components/common/button/Button';
import { CUSTOM_ICON } from '@/constants/customIcon.constant';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/slices/mainSlice';
import { useRouter } from 'next/navigation';
import { MAIN_PATH } from '@/constants/mainPath.constant';
import BaseText from '@/components/common/base-text/BaseText';

const Page = () => {
  const form = useForm();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (payload: Record<string, unknown>) => {
    dispatch(setUser({ ...payload }));
    router.push(MAIN_PATH.DASHBOARD);
  };

  return (
    <BaseView className={'h-full items-center justify-center gap-4'}>
      <BaseView className={'shadow-md px-16 py-8 border rounded-md gap-4'}>
        <BaseText text={'Welcome'} className={'text-4xl text-slate-400 text-center pb-4'} />
        <LoginForm form={form} />
        <Button
          label={'Login'}
          suffixIcon={{ icon: CUSTOM_ICON.LOGIN }}
          onClick={form.handleSubmit(handleSubmit)}
          className={'bg-green-450 dark:bg-green-450 self-end'}
        />
      </BaseView>
    </BaseView>
  );
};

export default Page;
