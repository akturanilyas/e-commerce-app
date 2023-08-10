import { FC } from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import BaseText from '@/components/common/base-text/BaseText';

const Footer: FC = () => (
    <BaseView className={'bg-slate-900 w-full items-center'}>
      <BaseText text={'footer'} />
    </BaseView>
  );

export default Footer;
