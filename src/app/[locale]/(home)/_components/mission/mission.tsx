'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button/button';
import { Container } from '@/components/ui/container';
import styles from './mission.module.css';

export function MissionSection() {
  const t = useTranslations('Home.Mission');

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.layout}>
          {/* Left */}
          <div className={styles.intro}>
            <span className={styles.kicker}>{t('kicker')}</span>
          </div>

          {/* Right */}
          <div className={styles.content}>
            <p className={styles.lead}>{t('lead')}</p>

            <h2 className={styles.statement}>{t('statement')}</h2>

            <div className={styles.cta}>
              <Button variant="outline">{t('cta')}</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
