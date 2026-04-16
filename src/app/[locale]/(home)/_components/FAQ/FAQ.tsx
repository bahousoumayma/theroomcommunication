'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { useTranslations } from 'next-intl';
import { gsap } from '@/lib/gsap';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion/accordion';
import { Container } from '@/components/ui/container';
import styles from './FAQ.module.css';

const FAQ_KEYS = ['localMarket', 'turnaround', 'services', 'culture'] as const;

export function FAQ() {
  const t = useTranslations('Home.FAQ');
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.15, y: 50 },
        {
          scale: 1,
          y: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className={styles.section}>
      <Container className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <span className={styles.kicker}>{t('title')}</span>
          <h2 className={styles.heading}>{t('description')}</h2>
        </header>

        {/* FAQ */}
        <div className={styles.wrapper}>
          <Accordion className={styles.accordion}>
            {FAQ_KEYS.map((key, index) => (
              <AccordionItem key={key} value={key} className={styles.accordionItem}>
                <AccordionTrigger className={styles.trigger}>
                  <div className={styles.triggerInner}>
                    <span className={styles.label}>{String(index + 1).padStart(2, '0')}</span>
                    <span className={styles.triggerTitle}>{t(`questions.${key}.question`)}</span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className={styles.content}>
                  {t(`questions.${key}.answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
