import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import BaseText from '../base-text/BaseText';
import BaseView from '../base-view/BaseView';
import { BaseButtonProps } from './BaseButton.interface';
import CustomIconProvider from '@/providers/CustomIconProvider';

const BaseButton: FC<BaseButtonProps> = (props) => {
  const {
    label,
    name,
    className,
    icon,
    suffixIcon,
    textClassName,
    disabled,
    tooltip,
    tooltipClassName,
    onClick,
    ...restProps
  } = props;

  const classes = twMerge(`
    flex
    justify-center
    items-center
    p-3
    rounded-md
    bg-primary-dark
    dark:bg-primary-dark
    active:bg-primary
    dark:active:bg-primary
    disabled:cursor-not-allowed
    disabled:bg-grey-300
    dark:disabled:bg-grey-500
    gap-2 box-border
    relative
    group
    ${className || ''}
  `);

  const textClasses = twMerge(`
    font-semibold
    text-slate-100
    dark:text-slate-200
    text-sm
    ${textClassName || ''}
    ${
      disabled
      && `
      text-slate-800
      dark:text-slate-200
    `
    }
  `);

  const tooltipClasses = twMerge(`
    absolute top-0 right-0 
    min-w-full bg-black/60 
    -mt-8 p-1 px-2 rounded-md 
    hidden group-hover:flex
    text-sm whitespace-nowrap
    ${tooltipClassName || ''}
  `);

  return (
    <button
      {...restProps}
      onClick={disabled ? undefined : onClick}
      className={classes}
      type={'button'}
      data-testid={`button.${name || 'test-id'}`}
      disabled={disabled}
    >
      {tooltip && (
        <BaseView className={tooltipClasses}>
          <BaseText text={tooltip} className={'text-slate-200'} />
        </BaseView>
      )}
      {icon && <CustomIconProvider {...icon} />}
      {label && <BaseText className={textClasses} text={label} />}
      {suffixIcon && (
        <BaseView className={'flex-1 items-end'}>
          <CustomIconProvider {...suffixIcon} />
        </BaseView>
      )}
    </button>
  );
};

export default BaseButton;
