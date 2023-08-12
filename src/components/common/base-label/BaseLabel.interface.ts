import { HTMLProps } from 'react';

export interface BaseLabelProps extends HTMLProps<HTMLLabelElement> {
  text: string;
  isRequired?: boolean;
  labelContainerClasses?: string;
}
