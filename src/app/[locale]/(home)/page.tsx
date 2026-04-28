import { Metadata } from 'next';
import { ScrollToTop } from '@/components/common/scroll-to-top/scroll-to-top';
import { Hero } from '@/app/[locale]/(home)/_components/hero/hero';
import { OurEthos } from '@/app/[locale]/(home)/_components/our-ethos/our-ethos';
import { CTA } from './_components/CTA';
import { FAQ } from './_components/FAQ';
import { AboutSection } from './_components/about-section';
import { MissionSection } from './_components/mission';
import { QuoteSection } from './_components/quote-section';
import { ServicesSection } from './_components/services-section/services-section';
import { TrustSection } from './_components/trust-section';
import { VisionSection } from './_components/vision-section';

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
      <VisionSection />
      <ServicesSection />
      <QuoteSection />
      <OurEthos />
      <FAQ />
      <CTA />
      <ScrollToTop />
    </main>
  );
}
