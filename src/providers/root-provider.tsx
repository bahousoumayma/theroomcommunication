'use client';

import { type AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import SmoothScrollProvider from './smooth-scroll-provider';

interface RootProviderProps {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
  locale: string;
}

export function RootProvider({ children, messages, locale }: RootProviderProps) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
    </NextIntlClientProvider>
  );
}
