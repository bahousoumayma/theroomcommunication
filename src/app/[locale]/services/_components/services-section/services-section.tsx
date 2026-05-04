'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import styles from './services-section.module.css';

interface Service {
  title: string;
  description: string;
}

const images = [
  '/images/services/branding-and-brand-identity.jpg',
  '/images/services/digital-marketing.jpg',
  '/images/services/high-end-community-management.jpg',
  '/images/services/bespoke-event-planning.jpg',
];

export function ServicesSection() {
  const list = useRef<HTMLUListElement>(null);
  const t = useTranslations('Home.ServicesSection');
  const servicesList = t.raw('services') as Service[];
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Services</span>
          <h1 className={styles.heading}>
            Crafted Experiences
            <br />
            with Precision & Elegance
          </h1>
        </div>

        <ul ref={list} className={styles.grid}>
          {servicesList.map((item, i) => (
            <li key={i} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image src={images[i]} alt={item.title} fill className={styles.image} />
              </div>

              <div className={styles.overlay} />

              <div className={styles.content}>
                <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>

                <h2 className={styles.title}>{item.title}</h2>

                <p className={styles.description}>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
