import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { TextProps } from './BaseText.interface';
import { translate } from '@/utils/translateUtil';

const BaseText: FC<TextProps> = (props) => {
  const { text, options, className } = props;

  const classes = twMerge(`
    text-red-800
    dark:text-slate-200
    ${className || ''}
  `);

  return (
    <span {...props} className={classes}>
      {translate({ value: text, options }) || text}
    </span>
  );
};

export default BaseText;
