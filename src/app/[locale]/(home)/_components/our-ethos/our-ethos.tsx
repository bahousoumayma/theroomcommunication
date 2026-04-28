'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button/button';
import { Container } from '@/components/ui/container';
import { Link } from '@/i18n/navigation';
import styles from './our-ethos.module.css';

export function OurEthos() {
  const t = useTranslations('Home.Ethos');

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <header className={styles.header}>
            <span className={styles.kicker}>{t('tag')}</span>
            <h2 className={styles.title}>
              {t.rich('title', {
                emphasis: (chunks) => <em className={styles.emphasis}>{chunks}</em>,
              })}
            </h2>
          </header>

          <div className={styles.body}>
            <p className={styles.bodyFirst}>
              {t.rich('bodyFirst', {
                emphasis: (chunks) => <em className={styles.emphasis}>{chunks}</em>,
              })}
            </p>
            <p className={styles.bodySecond}>{t('bodySecond')}</p>
          </div>

          <div className={styles.actions}>
            <Button render={<Link href="/about">{t('cta')}</Link>} nativeButton={false} />
          </div>
        </div>
        <figure className={styles.media}>
          <Image
            src="/images/x9.jpg"
            alt="Studio ethos"
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </figure>
      </Container>
    </section>
  );
}
