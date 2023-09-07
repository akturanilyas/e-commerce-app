import { FC } from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import BaseText from '@/components/common/base-text/BaseText';

const Footer: FC = () => (
  <BaseView className={'bg-slate-100 dark:bg-gray-800 w-full items-center py-4 shadow-md'}>
    <BaseView className={'flex flex-row w-2/3 justify-evenly'}>
      <BaseView>
        <BaseText text={'77418 Hobart Cape East Kasandra'} className={'text-sm'}/>
        <BaseText text={'South Dakota 93942-5323'} className={'text-sm'}/>
      </BaseView>

      <BaseView>
        <BaseText text={'+90 505 555 55 55'} className={'text-sm'}/>
        <BaseText text={'Created by AKTURAN©'} className={'text-sm'}/>
      </BaseView>
    </BaseView>
  </BaseView>
);

export default Footer;
