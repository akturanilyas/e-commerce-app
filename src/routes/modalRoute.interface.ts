import { FC, ReactElement } from 'react';

export interface IRoute {
  path: string;
  element: ReactElement;
}

export type ModalProps<T = Record<string, unknown>> = {
  name?: string;
  eventName?: string;
  props?: T;
};

export type IModalRoute = {
  name: string;
  component: FC<ModalProps>;
};
