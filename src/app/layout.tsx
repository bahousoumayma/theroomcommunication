import { Geist, Geist_Mono } from 'next/font/google';
import clsx from 'clsx';
import { Metadata } from 'next';
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

export const metadata: Metadata = {
  metadataBase: new URL('https://your-agency-website.com'), // Replace with your domain
  title: {
    default: 'Your Agency Name | Marketing Agency in Rabat',
    template: '%s | Your Agency Name',
  },
  description:
    'Leading Moroccan marketing agency in Rabat. We empower individuals and startups with digital strategy, branding, and growth solutions.',
  keywords: [
    'Marketing Agency Rabat',
    'Digital Marketing Morocco',
    'Startup Growth Morocco',
    'Branding Agency Rabat',
  ],
  authors: [{ name: 'Your Agency Name' }],
  creator: 'Your Agency Name',
  openGraph: {
    type: 'website',
    locale: 'en_US', // or 'fr_FR' / 'ar_MA'
    url: 'https://your-agency-website.com',
    siteName: 'Your Agency Name',
    images: [
      {
        url: '/og-image.jpg', // Put a 1200x630 image in your /public folder
        width: 1200,
        height: 630,
        alt: 'Your Agency Name - Empowering Startups in Rabat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Agency Name | Marketing Agency in Rabat',
    description: 'Empowering startups and individuals in Morocco through strategic marketing.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /* We keep the HTML/Body here so they never re-render on locale change */
    <html
      lang="en" // Default lang, updated by the locale layout below
      className={clsx(geistSans.variable, geistMono.variable)}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
