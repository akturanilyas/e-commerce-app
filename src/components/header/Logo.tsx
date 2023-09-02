import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import BaseView from '../common/base-view/BaseView';
import { LogoProps } from './Logo.interface';
import Image from 'next/image';
import logo from './../../../public/vercel.svg';

const Logo: FC<LogoProps> = (props) => {
  const { className, logoClassName, onClick } = props;

  const classes = twMerge(`
     flex-row items-center w-64 px-4
    ${className || ''}
  `);

  const logoClasses = twMerge(`
     h-auto w-[140px]
    ${logoClassName || ''}
  `);

  return (
    <BaseView className={classes} onClick={onClick}>
      <Image src={logo} width={140} height={20} alt={'logo'} className={logoClasses} />
    </BaseView>
  );
};

export default Logo;
