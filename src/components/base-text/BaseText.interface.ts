import { HTMLProps } from 'react';

export interface TextProps extends HTMLProps<HTMLDivElement> {
  text: string;
  options?: Record<string, unknown>;
}
