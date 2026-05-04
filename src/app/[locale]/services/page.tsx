import { Metadata } from 'next';
import { ServicesSection } from './_components/services-section/services-section';

export const metadata: Metadata = {
  title: 'Digital Marketing & Branding Services',
  description:
    'From high-impact social media management to full-scale brand identity design, discover our range of marketing services tailored for the Moroccan market.',
};

export default function Page() {
  return (
    <main>
      <ServicesSection />
    </main>
  );
}
