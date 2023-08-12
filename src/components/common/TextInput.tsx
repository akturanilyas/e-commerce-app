import React, { FC } from 'react';
import { TextInputProps } from './TextInput.interface';
import Input from '@/components/common/input/Input';
import { InputType } from '@/enums/common.enum';

const TextInput: FC<TextInputProps> = (props) => <Input {...props} type={InputType.TEXT} />;

export default TextInput;
