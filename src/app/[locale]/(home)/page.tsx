import { Metadata } from 'next';
import { ScrollToTop } from '@/components/common/scroll-to-top/scroll-to-top';
import { Hero } from '@/app/[locale]/(home)/_components/hero/hero';
import { WhoWeWorkWith } from '@/app/[locale]/(home)/_components/who-we-work-with/who-we-work-with';
import { CTA } from './_components/CTA';
import { FAQ } from './_components/FAQ';
import { AboutSection } from './_components/about-section';
import { MissionSection } from './_components/mission';
import { QuoteSection } from './_components/quote-section';
import { ServicesSection } from './_components/services-section/services-section';
import { TrustSection } from './_components/trust-section';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Agence de communication et de marketing digital',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <TrustSection />
      <MissionSection />
      <ServicesSection />
      <QuoteSection />
      <WhoWeWorkWith />
      <FAQ />
      <CTA />
      <ScrollToTop />
    </main>
  );
}
