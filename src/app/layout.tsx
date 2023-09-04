'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import ReduxProvider from '@/providers/ReduxProvider';
import { PersistGate } from 'redux-persist/integration/react';
import ModalProvider from '@/providers/ModalProvider';
import ResultProvider from '@/providers/ResultProvider';
import { persistor } from '@/redux/store';
import LoadingProvider from '@/providers/LoadingProvider';

const inter = Inter({ subsets: ['latin'] });

const Loading = () => (
  <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-opacity-50 bg-gray-200 z-50'>
    <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500'></div>
  </div>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'}>
      <head>
        <title>{'Trendburada'}</title>
        <meta name={'description'} content={'Trendburada kaçırma..'} />
      </head>
      <body className={inter.className}>
        <ReduxProvider>
          <PersistGate persistor={persistor}>
            <ModalProvider />
            <ResultProvider />
            <BaseView className={'flex flex-row justify-center min-h-screen w-full'}>
              <LoadingProvider />
              <BaseView className={'items-center min-h-full w-full bg-white dark:bg-gray-950'}>
                <Header className={'sticky top-0'} />
                <BaseView className={'w-2/3 items-center h-full'}>{children}</BaseView>
                <Footer />
              </BaseView>
            </BaseView>
          </PersistGate>
        </ReduxProvider>
      </body>
    </html>
  );
}
