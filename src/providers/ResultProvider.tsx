import React from 'react';
import BaseView from '../components/common/base-view/BaseView';
import { useResult } from '@/hooks/useSlices';
import { SnackBar } from '@/components/snack-bar/SnackBar';

const ResultProvider = () => {
  const { results } = useResult();

  return (
    <BaseView className={'z-50 absolute right-0 gap-2 pt-20'}>
      {results.map((result) => (
        <SnackBar key={result.id} result={result}/>
      ))}
    </BaseView>
  );
};

export default ResultProvider;
