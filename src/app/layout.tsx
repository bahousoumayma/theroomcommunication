import { Cormorant_Garamond, Geist, Geist_Mono, Jost } from 'next/font/google';
import clsx from 'clsx';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/json-ld';
import '@/styles/index.css';
import { ThemeProvider } from '@/providers/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-cormorant-garamond',
  subsets: ['latin'],
});

const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://theroomcommunication.ma'),
  title: {
    default: 'The Room Communication | Creative Marketing Agency in Rabat & Morocco',
    template: '%s | The Room Communication',
  },
  description:
    'The Room Communication is a premier digital marketing agency in Rabat. We specialize in branding, social media strategy, and growth solutions for Moroccan startups and established brands.',
  keywords: [
    'Agence de communication Rabat',
    'Marketing Agency Morocco',
    'Digital Strategy Rabat',
    'Branding Morocco',
    'Social Media Management Morocco',
    'Growth Hacking Morocco',
    'Agence de marketing digital',
  ],
  authors: [{ name: 'The Room Communication' }],
  creator: 'Oumayma Bahous',
  publisher: 'The Room Communication',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US', // Consider adding fr_FR if you support French
    url: 'https://theroomcommunication.ma',
    siteName: 'The Room Communication',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Room Communication - Elevating Moroccan Brands',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Room Communication | Marketing & Branding in Morocco',
    description: 'Transforming the digital landscape for startups and individuals in Morocco.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={clsx(
        geistSans.variable,
        geistMono.variable,
        cormorantGaramond.variable,
        jost.variable,
      )}
      suppressHydrationWarning
    >
      <head>
        {/* Structured Data for Google Rich Results */}
        <JsonLd />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
