import lodash, { isEmpty } from 'lodash';
import React, { FormEvent, ForwardedRef, forwardRef, useEffect } from 'react';
import { Controller, Noop } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { translate } from '@/utils/translateUtil';
import BaseView from '../base-view/BaseView';
import { InputProps } from './Input.interface';
import BaseInput from '@/components/common/base-input/BaseInput';
import { InputType } from '@/enums/common.enum';

const Input = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const {
    form,
    name,
    type,
    onChangeText,
    onKeyDown,
    onBlur,
    label,
    placeholder,
    className,
    inputClassName,
    labelClassName,
    suffix,
    rules,
    errorMessage,
    disabled,
    defaultValue,
    isUnmountUnregister = true,
  } = props;

  const classes = twMerge(`
    grow
    mb-4
    flex-1
    ${className || ''}
  `);

  const inputClasses = twMerge(`
    font-text
    ${inputClassName || ''}
  `);

  const handleOnChange = (event: FormEvent<HTMLInputElement>, onChange: (input: string | undefined) => void) => {
    const {
      value,
    }: {
      value: string | undefined;
    } = event.currentTarget;

    if (onChangeText) {
      onChangeText(value, onChange);
    }

    ![InputType.NUMBER].includes(type) && onChange(value);
  };

  const handleOnBlur = ({ value, _onBlur }: { value?: string; _onBlur: Noop }) => {
    onBlur && onBlur(value);
    _onBlur();
  };

  const isError = !isEmpty(lodash.get(form.formState.errors, name)) && !isEmpty(errorMessage);

  useEffect(
    () => () => {
      isUnmountUnregister && form.unregister(name);
    },
    [],
  );

  return (
    <BaseView className={classes}>
      <Controller
        control={form.control}
        {...props}
        defaultValue={defaultValue || ''}
        render={({ field: { onChange, onBlur, value } }) => (
          <BaseInput
            name={name}
            value={value}
            label={label}
            labelClassName={labelClassName}
            inputClassName={inputClasses}
            placeholder={placeholder && translate({ value: placeholder })}
            onBlur={() => handleOnBlur({ value, _onBlur: onBlur })}
            onChange={(event: FormEvent<HTMLInputElement>) => handleOnChange(event, onChange)}
            onKeyDown={(event) => onKeyDown && onKeyDown(event)}
            type={type}
            rules={rules}
            disabled={disabled}
            suffix={suffix}
            ref={ref}
            isError={isError}
          />
        )}
      />
    </BaseView>
  );
});

export default Input;
