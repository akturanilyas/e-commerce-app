import React, { ForwardedRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { BaseViewProps } from './BaseView.interface';

const BaseView = forwardRef((props: BaseViewProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className } = props;

  const classes = twMerge(`
    flex
    flex-col
    ${className || ''}
  `);

  return (
    <div {...props} ref={ref} className={classes}>
      {props.children}
    </div>
  );
});

export default BaseView;
