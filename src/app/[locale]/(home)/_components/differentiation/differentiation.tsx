'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import styles from './differentiation.module.css';

export function Differentiation() {
  const t = useTranslations('Home.Differentiation');

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <span className={styles.kicker}>{t('kicker')}</span>
          <h2 className={styles.title}>
            {t.rich('title', {
              emphasis: (chunks) => <em className={styles.emphasis}>{chunks}</em>,
            })}
          </h2>

          <p className={styles.subTitle}>
            {t.rich('subTitle', {
              emphasis: (chunks) => <em className={styles.emphasis}>{chunks}</em>,
            })}
          </p>
          <p className={styles.description}>
            {t.rich('description', {
              emphasis: (chunks) => <em className={styles.emphasis}>{chunks}</em>,
            })}
          </p>
        </div>
        <figure className={styles.media}>
          <Image
            className={styles.image}
            src="/images/differentiation.jpg"
            alt="Art"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </figure>
      </Container>
    </section>
  );
}
