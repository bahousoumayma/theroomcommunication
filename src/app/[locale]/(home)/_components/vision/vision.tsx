'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Link } from '@/i18n/navigation';
import styles from './vision.module.css';

export function Vision() {
  const t = useTranslations('Home.Vision');

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <figure className={styles.media}>
          <Image
            className={styles.image}
            src="/images/vision.jpg"
            alt="Art"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </figure>
        <div className={styles.content}>
          <span className={styles.kicker}>{t('kicker')}</span>
          <h2 className={styles.title}>
            {t.rich('title', {
              emphasis: (chunks) => <em className={styles.emphasis}>{chunks}</em>,
            })}
          </h2>

          <p className={styles.subTitle}>
            {t.rich('subtitle', {
              emphasis: (chunks) => <em className={styles.emphasis}>{chunks}</em>,
            })}
          </p>
          <p className={styles.description}>
            {t.rich('description', {
              emphasis: (chunks) => <em className={styles.emphasis}>{chunks}</em>,
            })}
          </p>
          <Button
            className={styles.ctaButton}
            render={<Link href="/about">{t('ctaButton')}</Link>}
            nativeButton={false}
          />
        </div>
      </Container>
    </section>
  );
}
