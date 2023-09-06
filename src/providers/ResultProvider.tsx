import React from 'react';
import BaseText from '../components/common/base-text/BaseText';
import BaseView from '../components/common/base-view/BaseView';
import { useResult } from '@/hooks/useSlices';
import CustomIconProvider from '@/providers/CustomIconProvider';
import { CUSTOM_ICON } from '@/constants/customIcon.constant';

const ResultProvider = () => {
  const { results } = useResult();

  return (
    <BaseView className={'z-50 absolute right-0 gap-2 pt-20'}>
      {results.map((result) => (
        <BaseView key={result.id} className={'flex flex-row bg-green-450 p-4 rounded-md gap-2'}>
          <CustomIconProvider icon={CUSTOM_ICON.CHECK_CIRCLE}/>
          <BaseText text={'Successfully Purchased'}/>
        </BaseView>
      ))}
    </BaseView>
  );
};

export default ResultProvider;
