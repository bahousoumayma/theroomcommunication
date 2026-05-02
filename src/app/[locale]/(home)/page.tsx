import { Metadata } from 'next';
import { ScrollToTop } from '@/components/common/scroll-to-top/scroll-to-top';
import { Hero } from '@/app/[locale]/(home)/_components/hero/hero';
import { WhoWeWorkWith } from '@/app/[locale]/(home)/_components/who-we-work-with/who-we-work-with';
import { CTA } from './_components/CTA';
import { FAQ } from './_components/FAQ';
import { About } from './_components/about';
import { Differentiation } from './_components/differentiation';
import { ServicesSection } from './_components/services-section/services-section';
import { Vision } from './_components/vision';

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
      <Vision />
      <Differentiation />
      <About />
      <ServicesSection />
      <WhoWeWorkWith />
      <FAQ />
      <CTA />
      <ScrollToTop />
    </main>
  );
}
