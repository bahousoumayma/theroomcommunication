'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button/button';
import { Container } from '@/components/ui/container';
import { Link } from '@/i18n/navigation';
import styles from './who-we-work-with.module.css';

export function WhoWeWorkWith() {
  const t = useTranslations('Home.WhoWeWorkWith');
  const list = t.raw('list') as string[];

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
          <ul className={styles.list}>
            {list.map((item) => (
              <li key={item} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>

          <Button
            className={styles.cta}
            render={<Link href="/about">{t('cta')}</Link>}
            nativeButton={false}
          />
        </div>
        <figure className={styles.media}>
          <Image
            src="/images/our-partners.jpg"
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
