import React, { ForwardedRef, forwardRef } from 'react';
import { WrapperButtonProps } from './WrapperButton.interface';

const WrapperButton = forwardRef((props: WrapperButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const { children, name, ...resetProps } = props;

  return (
    <button data-testid={`button.${name || 'test-id'}`} {...resetProps} type={'button'} ref={ref}>
      {children}
    </button>
  );
});

export default WrapperButton;
