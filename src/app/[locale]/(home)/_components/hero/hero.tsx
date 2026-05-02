'use client';

import Image from 'next/image';
import { clsx } from 'clsx';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button/button';
import { Container } from '@/components/ui/container';
import { Link } from '@/i18n/navigation';
import styles from './hero.module.css';

export function Hero() {
  const t = useTranslations('Home.Hero');

  return (
    <section className={styles.section}>
      <div className={styles.overlay} />
      <div className={styles.panels}>
        <div className={styles.panel}>
          <Image className={styles.panelImage} src="/images/hero/left.jpg" alt="Image" fill />
        </div>
        <div className={styles.panel}>
          <Image className={styles.panelImage} src="/images/hero/middle.jpg" alt="Image" fill />
        </div>
        <div className={styles.panel}>
          <Image className={styles.panelImage} src="/images/hero/right.jpg" alt="Image" fill />
        </div>
      </div>
      <Container className={styles.container}>
        <div className={styles.content}>
          <h1 className={clsx(styles.title, styles.fadeUp)}>
            {t.rich('title', {
              primary: (chunks) => <span className={styles.titleSpecial}>{chunks}</span>,
            })}
          </h1>
          <p className={clsx(styles.description, styles.fadeUp)}>{t('description')}</p>
          <div className={styles.fadeUp}>
            <Button
              className={styles.cta}
              variant="secondary"
              render={<Link href="/about" />}
              nativeButton={false}
            >
              {t('button')}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
