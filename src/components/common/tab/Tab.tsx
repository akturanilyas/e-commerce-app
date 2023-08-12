'use client';

import React, { FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { TabProps } from '@/components/common/tab/Tab.interface';
import BaseView from '@/components/common/base-view/BaseView';
import TextButton from '@/components/common/button/TextButton';

const Tab: FC<TabProps> = (props) => {
  const { className, items, textClassName, onClick } = props;
  const [currentTab, setCurrentTab] = useState<string | undefined>(props.currentTab);
  const classes = twMerge(`
    flex flex-row flex-1 justify-evenly
    ${className}
  `);

  const textClasses = twMerge(`
    text-slate-700 font-semibold
    hover:scale-110
    ${textClassName}
  `);

  return (
    <BaseView className={classes}>
      {items.map((tab) => {
        const _className = twMerge(`${textClasses} ${currentTab === tab.label ? 'text-slate-50' : ''}`);

        const buttonClass = `py-1 px-4 ${currentTab === tab.label ? 'bg-slate-400' : ''}`;

        return (
          <TextButton
            key={tab.label}
            label={tab.label}
            className={buttonClass}
            textClassName={_className}
            onClick={() => {
              setCurrentTab(tab.label);
              (tab?.onClick && tab?.onClick(tab.label)) || (onClick && onClick(tab.label));
            }}
          />
        );
      })}
    </BaseView>
  );
};

export default Tab;
