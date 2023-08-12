import React, { ForwardedRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import BaseView from '../base-view/BaseView';
import { BaseInputProps } from './BaseInput.interface';
import BaseLabel from '@/components/common/base-label/BaseLabel';

const BaseInput = forwardRef((props: BaseInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const {
    label,
    type,
    name,
    inputClassName,
    placeholder,
    onChange,
    labelClassName,
    value,
    rules,
    disabled,
    suffix,
    isError = false,
    onBlur,
  } = props;

  const inputClasses = twMerge(`
    w-full
    flex-1
    p-2.5
    text-slate-600
    dark:text-slate-200
    bg-slate-100
    outline-none
    dark:bg-slate-800
    disabled:bg-grey-300
    dark:disabled:bg-grey-500
    disabled:cursor-not-allowed
    border border-slate-300 dark:border-slate-600
    ${suffix ? 'rounded-tl-md rounded-bl-md' : 'rounded-md'}
    ${isError ? 'border-red-500 dark:border-red-300' : ''}
    ${inputClassName || ''}
  `);

  const labelClasses = twMerge(`
    font-medium
    mb-1.5
    text-sm
    ${labelClassName || ''}
  `);

  const suffixContainerClasses = twMerge(`
    w-[45px] 
    justify-center 
    items-center 
    rounded-tr-md rounded-br-md
    text-sm 
    font-medium
    bg-slate-800
    bg-slate-100
    dark:bg-slate-800
    border border-slate-300 dark:border-slate-600
  `);

  const isRequired = () => rules && JSON.stringify(rules).includes('"required":true');

  return (
    <BaseView className={'grow'}>
      {label && (
        <BaseLabel name={name} text={label} htmlFor={name} isRequired={isRequired()} className={labelClasses} />
      )}
      <BaseView className={'flex-row'}>
        <input
          type={type}
          id={name}
          name={name}
          className={inputClasses}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required={isRequired()}
          disabled={disabled}
          data-testid={`input.${name || 'default'}`}
          ref={ref}
          onBlur={onBlur}
        />
        {suffix && <BaseView className={suffixContainerClasses}>{suffix}</BaseView>}
      </BaseView>
    </BaseView>
  );
});

export default BaseInput;
