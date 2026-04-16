import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Footer } from '@/components/layout/footer/footer';
import { Header } from '@/components/layout/header';
import { Menu } from '@/components/layout/menu/menu';
import { routing } from '@/i18n/routing';
import SmoothScrollProvider from '@/providers/smooth-scroll-provider';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <SmoothScrollProvider>
        <Header />
        <Menu />
        {children}
        <Footer />
      </SmoothScrollProvider>
    </NextIntlClientProvider>
  );
}
