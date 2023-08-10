'use client';

import { FC } from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import { HeaderProps } from '@/components/header/Header.interface';
import { twMerge } from 'tailwind-merge';
import Logo from '@/components/header/Logo';
import Tab from '@/components/common/tab/Tab';
import DarkModeButton from '@/components/header/DarkModeButton';

const Header: FC<HeaderProps> = (props) => {
  const { className } = props;

  const classes = twMerge(`
    flex flex-row items-center justify-between
    w-full
    px-4
    py-4
    bg-slate-900
    ${className}
  `);

  const items = [
    {
      label: 'Home',
      path: '/home',
    },
    {
      label: 'Path 1',
      path: '/2',
    },
    {
      label: 'Path 2',
      path: '/3',
    },
  ];

  return (
    <BaseView className={classes}>
      <BaseView className={'w-1/6 items-start'}>
        <Logo />
      </BaseView>
      <Tab items={items} />
      <BaseView className={'w-1/6 items-end'}>
        <DarkModeButton />
      </BaseView>
    </BaseView>
  );
};

export default Header;
