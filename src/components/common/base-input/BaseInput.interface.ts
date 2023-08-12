import { HTMLProps, ReactNode } from 'react';
import { FormRules } from '@/components/common/input/Input.interface';

export interface BaseInputProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  rules?: FormRules;
  inputClassName?: string;
  labelClassName?: string;
  suffix?: ReactNode;
  isError?: boolean;
}
