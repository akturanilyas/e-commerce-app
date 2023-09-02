import React from 'react';
import { CUSTOM_ICON } from '@/constants/customIcon.constant';
import useDarkMode from '../../hooks/useDarkMode';
import CustomIconProvider from '../../providers/CustomIconProvider';
import WrapperButton from '../common/button/WrapperButton';

const DarkModeButton = () => {
  const { isDarkMode, changeDarkMode } = useDarkMode();

  return (
    <WrapperButton onClick={() => changeDarkMode(!isDarkMode)} name={'dark-mode'}>
      <CustomIconProvider icon={CUSTOM_ICON[isDarkMode ? 'SUN' : 'MOON']} customSize={20} className={'text-slate-600 dark:text-slate-200'} />
    </WrapperButton>
  );
};

export default DarkModeButton;
