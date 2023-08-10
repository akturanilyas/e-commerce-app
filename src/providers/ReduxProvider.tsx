'use client';

import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

const ReduxProvider: FC<{
  children: React.ReactNode;
}> = (props) => <Provider store={store}>{props.children}</Provider>;

export default ReduxProvider;
