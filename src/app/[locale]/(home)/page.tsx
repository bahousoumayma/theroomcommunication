import { Metadata } from 'next';
import { ScrollToTop } from '@/components/common/scroll-to-top/scroll-to-top';
import { Hero } from '@/app/[locale]/(home)/_components/hero/hero';
import { OurEthos } from '@/app/[locale]/(home)/_components/our-ethos/our-ethos';
import { FAQ } from './_components/FAQ';
import { AboutSection } from './_components/about-section';
import { MissionSection } from './_components/mission';
import { ServicesSection } from './_components/services-section/services-section';
import { Test } from './_components/test';
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
      <Test />
      <OurEthos />
      <FAQ />
      <ScrollToTop />
    </main>
  );
}
