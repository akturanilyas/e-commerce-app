import React, { FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { TabProps } from '@/components/common/tab/Tab.interface';
import BaseView from '@/components/common/base-view/BaseView';
import TextButton from '@/components/common/button/TextButton';

const Tab: FC<TabProps> = (props) => {
  const { className, items, textClassName, onClick } = props;
  const [currentTab, setCurrentTab] = useState<string | undefined>(props.currentTab);
  const classes = twMerge(`
    flex flex-row flex-1 justify-evenly dark:bg-slate-600 dark:border-slate-700
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
        const textClassName = twMerge(`${textClasses} ${currentTab === tab.label ? 'text-slate-50' : ''}`);

        const buttonClassName = `py-1 my-2 px-4 ${currentTab === tab.label ? 'bg-slate-400 dark:bg-green-450' : ''}`;

        return (
          <TextButton
            key={tab.label}
            label={tab.label}
            className={buttonClassName}
            textClassName={textClassName}
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
