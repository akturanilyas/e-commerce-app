import React, { FC } from 'react';
import { CustomIconProviderProps } from './CustomIconProvider.interface';
import { twMerge } from 'tailwind-merge';
import BaseView from '@/components/base-view/BaseView';

const CustomIconProvider: FC<CustomIconProviderProps> = (props) => {
  const { icon, customSize, className, name, iconClassName } = props;

  const classes = twMerge(`
    ${className || ''}
  `);

  return (
    <BaseView className={classes} data-testid={`icon.${name || 'default'}`}>
      {React.createElement(icon, {
        width: customSize || 24,
        height: customSize || 24,
        color: 'slate.200',
        className: iconClassName,
      })}
    </BaseView>
  );
};

export default CustomIconProvider;
