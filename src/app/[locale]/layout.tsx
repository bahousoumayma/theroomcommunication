import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Footer } from '@/components/layout/footer/footer';
import { Header } from '@/components/layout/header';
import { Menu } from '@/components/layout/menu/menu';
import { routing } from '@/i18n/routing';
import SmoothScrollProvider from '@/providers/smooth-scroll-provider';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === 'fr';

  return {
    metadataBase: new URL('https://theroomcommunication.ma'),
    title: {
      default: isFr
        ? 'The Room Communication | Agence de Marketing Créative à Rabat'
        : 'The Room Communication | Creative Marketing Agency in Rabat',
      template: '%s | The Room Communication',
    },
    description: isFr
      ? 'Expertise en branding, stratégie digitale et solutions de croissance pour les startups au Maroc. Propulsez votre marque avec The Room Communication.'
      : 'Leading Moroccan marketing agency in Rabat. We empower startups with digital strategy, branding, and high-impact growth solutions.',
    keywords: [
      'Marketing Agency Rabat',
      'Agence de communication Rabat',
      'Digital Marketing Morocco',
      'Branding Morocco',
      'Agence marketing digital Maroc',
      'Marketing Strategy Rabat',
    ],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en-US': '/en',
        'fr-FR': '/fr',
      },
    },
    openGraph: {
      type: 'website',
      locale: isFr ? 'fr_FR' : 'en_US',
      url: 'https://theroomcommunication.ma',
      siteName: 'The Room Communication',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'The Room Communication' }],
    },
    twitter: {
      card: 'summary_large_image',
      images: ['/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

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
