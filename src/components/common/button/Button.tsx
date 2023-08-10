import React, { FC } from 'react';
import BaseButton from '../base-button/BaseButton';
import { ButtonProps } from './Button.interface';

const Button: FC<ButtonProps> = (props) => <BaseButton {...props} />;

export default Button;
