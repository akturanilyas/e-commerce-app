import { InputProps } from '@/components/common/input/Input.interface';

export interface TextInputProps extends Omit<InputProps, 'type'> {
  type?: string;
}
