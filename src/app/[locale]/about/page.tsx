import { Metadata } from 'next';
import OurTeam from './_components/our-team/our-team';

export const metadata: Metadata = {
  title: 'About',
  description: 'Agence de communication et de marketing digital',
  alternates: {
    canonical: '/',
  },
};

export default function About() {
  return (
    <main>
      <OurTeam />
    </main>
  );
}
