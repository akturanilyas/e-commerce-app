'use client';

import { FC } from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import { HeaderProps } from '@/components/header/Header.interface';
import { twMerge } from 'tailwind-merge';
import Logo from '@/components/header/Logo';
import DarkModeButton from '@/components/header/DarkModeButton';
import TextInput from '@/components/common/TextInput';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const Header: FC<HeaderProps> = (props) => {
  const form = useForm();
  const { className } = props;
  const router = useRouter();
  const classes = twMerge(`
    flex flex-row items-center justify-between
    w-full
    px-4
    py-4
    bg-slate-100
    dark:bg-gray-800
    border-b-2
    dark:border-gray-900
    z-20
    ${className}
  `);

  return (
    <BaseView className={classes}>
      <BaseView className={'w-1/6 items-start cursor-pointer'}>
        <Logo onClick={() => router.push('/')} />
      </BaseView>
      <BaseView className={'w-1/6 items-end'}>
        <DarkModeButton />
      </BaseView>
    </BaseView>
  );
};

export default Header;
