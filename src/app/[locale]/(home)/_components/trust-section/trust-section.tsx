'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import EnabelIcon from '@/components/ui/icons/enabel';
import Fm5Icon from '@/components/ui/icons/fm5';
import GizIcon from '@/components/ui/icons/giz';
import GopaIcon from '@/components/ui/icons/gopa';
import styles from './trust-section.module.css';

type Company = {
  name: string;
  href: string;
  Logo?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image?: string;
};

type Category = {
  id: string;
  titleKey: string;
  direction: 1 | -1;
  companiesPerHalf: number;
  companies: Company[];
};

const CATEGORIZED_COMPANIES: Category[] = [
  {
    id: 'communication-interpersonnelle',
    titleKey: 'Communication Interpersonnelle & Prise de Parole',
    direction: 1,
    companiesPerHalf: 12,
    companies: [
      { name: 'Enabel', href: 'https://www.enabel.be', Logo: EnabelIcon },
      { name: 'Giz', href: 'https://www.giz.de', Logo: GizIcon },
      { name: 'Gopa', href: 'https://www.gopa.eu', Logo: GopaIcon },
    ],
  },
  {
    id: 'marketing-digitale',
    titleKey: 'Marketing & Communication Digitale',
    direction: -1,
    companiesPerHalf: 12,
    companies: [
      { name: 'FM5', href: 'https://fm5.ma', Logo: Fm5Icon },
      {
        name: 'Union Nationale des Femmes',
        href: 'https://www.unfm.ma',
        image: '/images/logos/unfm.webp',
      },
      {
        name: 'Tibu Africa',
        href: 'https://tibuafrica.org/',
        image: '/images/logos/tibuafrica.webp',
      },
    ],
  },
  {
    id: 'communication-institutionnelle',
    titleKey: 'Communication Institutionnelle & Stratégique',
    direction: -1,
    companiesPerHalf: 12,
    companies: [
      { name: 'FM5', href: 'https://fm5.ma', Logo: Fm5Icon },
      {
        name: 'Union Nationale des Femmes',
        href: 'https://www.unfm.ma',
        image: '/images/logos/unfm.webp',
      },
      {
        name: 'Tibu Africa',
        href: 'https://tibuafrica.org/',
        image: '/images/logos/tibuafrica.webp',
      },
    ],
  },
];

export function TrustSection() {
  const t = useTranslations('Home.Trust');

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.headerTitle}>{t('title')}</h2>
        </header>
      </Container>
      <div className={styles.marquees}>
        {CATEGORIZED_COMPANIES.map((category, index) => (
          <Marquee key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}

export function Marquee({ category }: { category: Category }) {
  const half = Array.from({ length: category.companiesPerHalf }, (_, i) => {
    return category.companies[i % category.companies.length];
  });
  return (
    <div className={styles.marquee}>
      <h3 className={styles.marqueeTitle}>{category.titleKey}</h3>
      <div className={styles.track}>
        <ul className={styles.companies}>
          {[...half, ...half].map((company, index) => (
            <li className={styles.company} key={index}>
              {company.Logo ? (
                <company.Logo className={styles.logo} />
              ) : company.image ? (
                <div className={styles.companyImageWrapper}>
                  <Image
                    className={styles.companyImage}
                    src={company.image}
                    alt={company.name}
                    fill
                  />
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
