import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Link } from '@/i18n/navigation';
import styles from './CTA.module.css';

export function CTA() {
  const t = useTranslations('Home.CTA');

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <h2 className={styles.title}>
          {t.rich('title', {
            em: (chunks) => <em className={styles.em}>{chunks}</em>,
          })}
        </h2>
        <p className={styles.description}>{t('description')}</p>
        <Button render={<Link href="/contact" />} nativeButton={false}>
          {t('button')}
        </Button>
      </Container>
    </section>
  );
}
