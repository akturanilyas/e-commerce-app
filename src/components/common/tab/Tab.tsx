'use client';

import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { TabProps } from '@/components/common/tab/Tab.interface';
import BaseView from '@/components/common/base-view/BaseView';
import TextButton from '@/components/common/button/TextButton';
import { usePathname, useRouter } from 'next/navigation';

const Tab: FC<TabProps> = (props) => {
  const { className, items, textClassName } = props;
  const router = useRouter();
  const pathname = usePathname();

  const classes = twMerge(`
    flex flex-row flex-1 justify-evenly
    ${className}
  `);

  const textClasses = twMerge(`
    text-red-800
    hover:text-slate-100
    ${textClassName}
  `);

  return (
    <BaseView className={classes}>
      {items.map((tab) => {
        const _className = twMerge(`${textClasses} ${pathname === tab.path ? 'text-red-700' : ''}`);

        return (
          <TextButton
            key={tab.label}
            label={tab.label}
            className={'text-blue-900'}
            textClassName={_className}
            onClick={() => router.push(tab.path)}
          />
        );
      })}
    </BaseView>
  );
};

export default Tab;
