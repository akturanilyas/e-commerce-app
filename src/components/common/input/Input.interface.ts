import { KeyboardEvent, ReactNode } from 'react';
import { FieldValues, UseFormReturn, Validate, ValidationRule, ValidationValueMessage } from 'react-hook-form';
import { InputType } from '@/enums/common.enum';

export type FormRules = {
  required?: string | boolean | ValidationValueMessage<boolean>;
  min?: ValidationRule<string | number>;
  max?: ValidationRule<string | number>;
  maxLength?: number;
  minLength?: number;
  pattern?: RegExp | ValidationValueMessage<RegExp> | undefined;
  validate?: Validate<string, FieldValues> | undefined;
  fileType?: Array<string>;
};

export interface ErrorMessagesRules {
  required?: string;
  min?: string;
  max?: string;
  maxLength?: string;
  minLength?: string;
  pattern?: string;
  validate?: string;
}

export interface InputProps {
  form: UseFormReturn;
  label?: string;
  name: `${string}`;
  defaultValue?: string | boolean | number;
  type: InputType;
  placeholder?: string;
  onChangeText?: (input: string | undefined, onChange?: (input: string | undefined) => void) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (value?: string) => void;
  rules?: FormRules;
  errorMessage?: ErrorMessagesRules;
  required?: boolean;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  suffix?: ReactNode;
  disabled?: boolean;
  isUnmountUnregister?: boolean;
}
