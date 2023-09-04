'use client';

import { FC } from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import { HeaderProps } from '@/components/header/Header.interface';
import { twMerge } from 'tailwind-merge';
import Logo from '@/components/header/Logo';
import DarkModeButton from '@/components/header/DarkModeButton';
import { useRouter } from 'next/navigation';
import BaseText from '@/components/common/base-text/BaseText';
import { CUSTOM_ICON } from '@/constants/customIcon.constant';
import Button from '@/components/common/button/Button';
import { useMain } from '@/hooks/useSlices';

const Header: FC<HeaderProps> = (props) => {
  const { basket_items } = useMain();
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
      <BaseView className={'flex flex-row w-1/6 justify-end'}>
        <BaseView className={'flex relative'}>
          <Button icon={{ icon: CUSTOM_ICON.BELL }} className={'bg-transparent'} />
          <BaseView className={'bottom-1 right-1 bg-red-600 rounded-2xl w-[16px] absolute'}>
            {basket_items && (
              <BaseText text={basket_items.length.toString()} className={'text-slate-100 self-center text-sm'} />
            )}
          </BaseView>
        </BaseView>
        <DarkModeButton />
      </BaseView>
    </BaseView>
  );
};

export default Header;
