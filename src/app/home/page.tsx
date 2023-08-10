import React from 'react';
import BaseText from '@/components/common/base-text/BaseText';
import BaseView from '@/components/common/base-view/BaseView';

const Page = () => {
  const a = 2;

  return <BaseView>
    <BaseText className={'text-red-700'} text={'text'} />
    <h1 className={'text-red-700'}>asdnajsdn</h1>
  </BaseView>;
};

export default Page;
