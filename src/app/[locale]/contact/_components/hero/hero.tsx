'use client';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import styles from './hero.module.css';

export function Hero() {
  const t = useTranslations('Contact.Hero');

  return (
    <section className={clsx('container', styles.section)}>
      <div className={styles.header}>
        <span className={styles.kicker}>{t('kicker')}</span>
        <h1 className={styles.title}>
          {t.rich('title', {
            br: () => <br />,
          })}
        </h1>
      </div>
    </section>
  );
}
