import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { translate } from '../../../utils/translateUtil';
import BaseText from '../base-text/BaseText';
import { BaseLabelProps } from './BaseLabel.interface';

const BaseLabel: FC<BaseLabelProps> = (props) => {
  const { name, text, className, htmlFor, isRequired } = props;

  const classes = twMerge(`
    text-slate-600 
    dark:text-slate-200
    ${className || ''}
  `);

  const textClasses = twMerge(`
    ${className || ''}
    text-xs
  `);

  return (
    <label data-testid={`label.${name || 'test-id'}`} htmlFor={htmlFor} className={classes}>
      {translate({ value: text }) || text}
      {isRequired && <BaseText className={textClasses} text={'*'} />}
    </label>
  );
};

export default BaseLabel;
