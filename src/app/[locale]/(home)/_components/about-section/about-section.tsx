import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/button/button';
import { Container } from '@/components/ui/container';
import styles from './about-section.module.css';

export async function AboutSection() {
  const t = await getTranslations('Home.About');

  return (
    <section className={styles.about}>
      <Container className={styles.about__container}>
        {/* Media */}
        <figure className={styles.about__media}>
          <Image
            src="/images/x11.jpg"
            alt="About our company"
            fill
            className={styles.about__image}
            priority
          />
        </figure>

        {/* Content */}
        <div className={styles.about__content}>
          <header className={styles.about__header}>
            <p className={styles.about__kicker}>{t('kicker')}</p>

            <h2 className={styles.about__title}>
              {t.rich('title', {
                em: (chunks) => <em className={styles.about__highlight}>{chunks}</em>,
              })}
            </h2>
          </header>

          <p className={styles.about__description}>{t('description')}</p>

          <div className={styles.about__actions}>
            <Button>{t('button')}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
