import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/button/button';
import { Container } from '@/components/ui/container';
import styles from './about-section.module.css';

export async function AboutSection() {
  const t = await getTranslations('Home.About');

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <header className={styles.intro}>
          <h2 className={styles.kicker}> {t('title')}</h2>
        </header>

        <div className={styles.body}>
          <p className={styles.title}>{t('paragraphs.singularity')}</p>
          <h3 className={styles.lead}>{t('paragraphs.vision')}</h3>
          <h3 className={styles.lead}>{t('paragraphs.approach')}</h3>

          <div className={styles.cta}>
            <Button variant="outline">{t('button')}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
