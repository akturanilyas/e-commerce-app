import React from 'react';
import { useGlobalLoading } from '@/hooks/useSlices';
import BaseView from '@/components/common/base-view/BaseView';

const LoadingProvider = () => {
  const { loading } = useGlobalLoading();

  return loading > 0 ? (
    <BaseView
      className={'fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-opacity-50 bg-gray-200 z-50'}
    >
      <BaseView className={'animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500'}></BaseView>
    </BaseView>
  ) : null;
};

export default LoadingProvider;
