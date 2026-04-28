'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import ContactForm from '../contact-form/contact-form';
import styles from './contact-section.module.css';

export function ContactSection() {
  const t = useTranslations('Contact.ContactSection');

  return (
    <Container className={styles.container} as="section" size="md">
      <div className={styles.formIntro}>
        <h2 className={styles.formKicker}>{t('kicker')}</h2>
        <p className={styles.formText}>{t('text')}</p>
      </div>
      <div className={styles.formWrapper}>
        <ContactForm />
      </div>
    </Container>
  );
}
