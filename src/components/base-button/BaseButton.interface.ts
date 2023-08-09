import { HTMLProps } from 'react';
import { CustomIconProviderProps } from '@/providers/CustomIconProvider.interface';

export interface BaseButtonProps extends HTMLProps<HTMLButtonElement> {
  label?: string;
  icon?: CustomIconProviderProps;
  suffixIcon?: CustomIconProviderProps;
  name?: string;
  textClassName?: string;
  tooltip?: string;
  tooltipClassName?: string;
}
