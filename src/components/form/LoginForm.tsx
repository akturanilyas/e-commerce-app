import { FC } from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import { LoginFormProps } from '@/components/form/LoginForm.interface';
import TextInput from '@/components/common/TextInput';

const LoginForm: FC<LoginFormProps> = (props) => {
  const { form } = props;

  return (
    <BaseView>
      <TextInput form={form} name={'name'} label={'Name'} />
      <TextInput form={form} name={'surname'} label={'Surname'} />
      <TextInput form={form} name={'email'} label={'Email'} />
    </BaseView>
  );
};

export default LoginForm;
