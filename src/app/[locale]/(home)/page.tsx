import { Metadata } from 'next';
import { ScrollToTop } from '@/components/common/scroll-to-top/scroll-to-top';
import { Hero } from '@/app/[locale]/(home)/_components/hero/hero';
import { OurEthos } from '@/app/[locale]/(home)/_components/our-ethos/our-ethos';
import { FAQ } from './_components/FAQ';
import { AboutSection } from './_components/about-section';
import { MissionSection } from './_components/mission';
import { ServicesSection } from './_components/services-section/services-section';
import { TrustSection } from './_components/trust-section';
import { VisionSection } from './_components/vision-section';

export const metadata: Metadata = {
  title: 'Digital Marketing & Growth for Startups in Rabat',
  description:
    'Transform your business with Rabat’s premier marketing agency. From individual personal branding to startup scaling, we provide the tools to dominate the Moroccan market.',
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
      <OurEthos />
      <FAQ />
      <ScrollToTop />
    </main>
  );
}
