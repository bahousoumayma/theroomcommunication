'use client';

import Image from 'next/image';
import { Accordion } from '@base-ui/react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import styles from './FAQ.module.css';

const FAQ_KEYS = [
  'marrakechProjects',
  'brandTransformation',
  'luxurySales',
  'marketDominance',
] as const;

export function FAQ() {
  const t = useTranslations('Home.FAQ');

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <span className={styles.kicker}>{t('title')}</span>
          <h2 className={styles.heading}>{t('description')}</h2>
        </header>

        <div className={styles.grid}>
          <Accordion.Root className={styles.accordion}>
            {FAQ_KEYS.map((key, index) => (
              <Accordion.Item key={key} value={key} className={styles.accordionItem}>
                <Accordion.Header className={styles.accordionHeader}>
                  <Accordion.Trigger className={styles.accordionTrigger}>
                    <span className={styles.accordionIndex}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={styles.accordionQuestion}>
                      {t(`questions.${key}.question`)}
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel className={styles.accordionPanel}>
                  <div className={styles.accordionContent}>{t(`questions.${key}.answer`)}</div>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion.Root>
          <figure className={styles.media}>
            <Image className={styles.image} src="/images/x11.jpg" alt="Image" fill />
          </figure>
        </div>
      </Container>
    </section>
  );
}
