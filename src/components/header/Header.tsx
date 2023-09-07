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
import { MAIN_PATH } from '@/constants/mainPath.constant';
import CustomIconProvider from '@/providers/CustomIconProvider';
import { UserStatus } from '@/enums/common.enum';

const Header: FC<HeaderProps> = (props) => {
  const { basketItems, user } = useMain();
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

  const buttons = {
    [UserStatus.LOGGED_IN]: (
      <BaseView
        className={`
        flex flex-row bg-green-450 
        items-center gap-2 border-2 
        border-green-600 rounded-md px-4 cursor-pointer`}
      >
        <CustomIconProvider icon={CUSTOM_ICON.USER} />
        <BaseText text={`${user?.name} ${user?.surname}`} className={'truncate'} />
      </BaseView>
    ),
    [UserStatus.GUEST]: (
      <BaseView
        className={`
        flex flex-row bg-green-450 
        items-center gap-2 border-2 cursor-pointer
        border-green-600 rounded-md px-4 
        `}
        onClick={() => router.push(MAIN_PATH.LOGIN)}
      >
        <CustomIconProvider icon={CUSTOM_ICON.USER} />
        <BaseText text={'Login'} />
      </BaseView>
    ),
  };

  return (
    <BaseView className={classes}>
      <BaseView className={'w-1/6 items-start cursor-pointer'}>
        <Logo onClick={() => router.push(MAIN_PATH.DASHBOARD)} />
      </BaseView>
      <BaseView className={'flex flex-row w-1/6 justify-end gap-2'}>
        {user ? buttons[UserStatus.LOGGED_IN] : buttons[UserStatus.GUEST]}
        <BaseView className={'flex relative'} onClick={() => router.push(MAIN_PATH.BASKET)}>
          <Button
            icon={{
              icon: CUSTOM_ICON.SHOPPING_CARD,
              customSize: 20,
              className: 'text-slate-600 dark:text-slate-200',
            }}
            className={'bg-transparent'}
          />
          {basketItems?.length > 0 && (
            <BaseView
              className={`bottom-1 right-1 bg-red-600 rounded-2xl 
              w-[16px] h-[16px] absolute cursor-pointer
              text-center items-center`}
            >
              <BaseText text={basketItems.length.toString()} className={'text-slate-100 self-center text-xs'} />
            </BaseView>
          )}
        </BaseView>
        <DarkModeButton />
      </BaseView>
    </BaseView>
  );
};

export default Header;
