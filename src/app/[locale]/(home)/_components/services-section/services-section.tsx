'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import styles from './services-section.module.css';

// Define the keys so we can iterate over them
const SERVICE_KEYS = ['strategy', 'coaching', 'marketing', 'events'] as const;

export function ServicesSection() {
  const t = useTranslations('Home.Services');

  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <span className={styles.kicker}>{t('kicker')}</span>
          <h2 className={styles.title}>{t('title')}</h2>
        </header>

        <ul className={styles.list}>
          {SERVICE_KEYS.map((key) => (
            <li key={key} className={styles.item}>
              <h3 className={styles.serviceTitle}>{t(`items.${key}.title`)}</h3>
              <p className={styles.description}>{t(`items.${key}.description`)}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
