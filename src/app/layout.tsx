'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Header';
import ReduxProvider from '@/providers/ReduxProvider';
import { PersistGate } from 'redux-persist/integration/react';
import ModalProvider from '@/providers/ModalProvider';
import ResultProvider from '@/providers/ResultProvider';
import { persistor } from '@/redux/store';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <title>{'Trendburada'}</title>
        <meta name='description' content={'Trendburada kaçırma..'} />
      </head>
      <body className={inter.className}>
        <ReduxProvider>
          <PersistGate persistor={persistor}>
            <ModalProvider />
            <ResultProvider />
            <BaseView className={'flex flex-row justify-center h-screen w-full'}>
              <BaseView className={'items-center relative h-full w-full'}>
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
