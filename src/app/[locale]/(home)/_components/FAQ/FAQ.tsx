'use client';

import Image from 'next/image';
import { Accordion } from '@base-ui/react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import styles from './FAQ.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const t = useTranslations('Home.FAQ');
  const questions = t.raw('questions') as FAQItem[];

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <span className={styles.kicker}>{t('kicker')}</span>
          <h2 className={styles.heading}>{t('title')}</h2>
        </header>

        <div className={styles.grid}>
          <figure className={styles.media}>
            <Image className={styles.image} src="/images/x11.jpg" alt="Image" fill />
          </figure>
          <Accordion.Root className={styles.accordion}>
            {questions.map((FAQItem, index) => (
              <Accordion.Item key={index} value={FAQItem.question} className={styles.accordionItem}>
                <Accordion.Header className={styles.accordionHeader}>
                  <Accordion.Trigger className={styles.accordionTrigger}>
                    <span className={styles.accordionIndex}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={styles.accordionQuestion}>{FAQItem.question}</span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel className={styles.accordionPanel}>
                  <div className={styles.accordionContent}>{FAQItem.answer}</div>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </Container>
    </section>
  );
}
