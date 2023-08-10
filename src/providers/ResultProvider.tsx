import React from 'react';
import { twMerge } from 'tailwind-merge';
import BaseText from '../components/common/base-text/BaseText';
import BaseView from '../components/common/base-view/BaseView';
import WrapperButton from '../components/common/button/WrapperButton';
import { useResult } from '@/hooks/useSlices';
import { translate } from '@/utils/translateUtil';
import CustomIconProvider from './CustomIconProvider';
import useResultDispatcher from '@/hooks/useResultDispatcher';
import { ResultType } from '@/enums/common.enum';
import { CUSTOM_ICON } from '@/constants/customIcon.constant';
import CircleTimer from '@/components/common/circle-timer/CircleTimer';
import { isEmpty } from 'lodash';

const ResultProvider = () => {
  const { results } = useResult();
  const { removeSpecificResult, removeAllResults } = useResultDispatcher();

  const handleRemoveResult = (id: string) => {
    removeSpecificResult({ id });
  };

  const handleResultIconBadgeColor = (type: ResultType) => {
    switch (type) {
      case ResultType.DANGER:
        return 'bg-red-600 dark:bg-red-800';
      case ResultType.WARNING:
        return 'bg-yellow-600 dark:bg-yellow-800';
      case ResultType.SUCCESS:
        return 'bg-green-600 dark:bg-green-800';
      default:
        return 'bg-red-600 dark:bg-red-800';
    }
  };

  const resultsContainerClasses = twMerge(`
    fixed top-14 right-0 z-30 items-end
    h-full overflow-auto
    p-5 backdrop-blur
    supports-backdrop-blur:bg-slate-light
    supports-backdrop-blur:dark:bg-slate-dark
  `);

  const resultClasses = twMerge(`
    flex-row gap-4 justify-between
    w-[320px]
    bg-slate-100 dark:bg-slate-800
    p-4 rounded-lg
    border border-slate-200 dark:border-slate-700
    mb-4
  `);

  const resultIconBadgeClasses = (type: ResultType) =>
    twMerge(`
    inline-flex items-center justify-center flex-shrink-0 
    w-8 h-8 mt-1
    ${handleResultIconBadgeColor(type)}
    rounded-lg
    relative
  `);

  const clearAllButtonClasses = twMerge(`
    mb-4 px-3 py-1.5 rounded-full
    border border-slate-300 dark:border-slate-700
    bg-slate-100 dark:bg-slate-800
  `);

  return isEmpty(results) ? null : (
    <BaseView className={resultsContainerClasses}>
      {results.length > 1 ? (
        <WrapperButton className={clearAllButtonClasses} onClick={removeAllResults} name={'clear_all'}>
          <BaseView className={'flex-row items-center gap-2'}>
            <BaseText text={'GLOBAL.BUTTONS.CLEAR_ALL'} className={'text-xs'} />
            <CustomIconProvider icon={CUSTOM_ICON.CLOSE} customSize={16} />
          </BaseView>
        </WrapperButton>
      ) : null}
      {results?.map((result, index) => (
        <BaseView key={index} data-testid={`result.${result.id}`} className={resultClasses}>
          <BaseView className={'flex-row flex-1 gap-4'}>
            <BaseView className={resultIconBadgeClasses(result.type)}>
              <CustomIconProvider
                icon={CUSTOM_ICON[result.type.toUpperCase() as keyof typeof CUSTOM_ICON]}
                customSize={18}
              />
            </BaseView>
            <BaseView className={'justify-center'}>
              <BaseText
                className={'font-bold mb-0.5 text-xs break-all'}
                text={`${translate({ value: result?.title?.split(' ')?.[0] })} ${
                  result?.title?.split(' ')?.[1] || '(0)'
                }`}
              />
              <BaseText className={'text-sm break-all'} text={result.message} />
            </BaseView>
          </BaseView>
          <BaseView>
            <WrapperButton className={'relative w-[40px] h-[40px]'} onClick={() => handleRemoveResult(result.id)}>
              <BaseView className={'w-full items-center justify-center'}>
                <CustomIconProvider icon={CUSTOM_ICON.CLOSE} name={'close'} customSize={18} />
              </BaseView>
              <BaseView className={'absolute top-0 left-0'}>
                <CircleTimer
                  count={(result?.message?.length || 1) * 0.5}
                  onTimesUp={() => handleRemoveResult(result.id)}
                />
              </BaseView>
            </WrapperButton>
          </BaseView>
        </BaseView>
      ))}
    </BaseView>
  );
};

export default ResultProvider;
