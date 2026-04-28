'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button/button';
import { Field, FieldError, FieldLabel } from '@/components/ui/field/field';
import { Input } from '@/components/ui/input/input';
import { Textarea } from '@/components/ui/textarea';
import styles from './contact-form.module.css';
import { ContactData, getContactSchema } from './contact-form.schema';

export default function ContactForm() {
  // Access the nested form translations
  const t = useTranslations('Contact.ContactSection.form');
  const [isZaml, setIsZaml] = useState(false);

  const form = useForm<ContactData>({
    // We call the schema function and pass 't' to localize Zod errors
    resolver: zodResolver(getContactSchema(t)),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    mode: 'onTouched',
  });

  function onSubmit(data: ContactData) {
    console.log('Form Data:', data);
    console.log(data.name);
    if (data.name == 'Ilyas Bahous') {
      setIsZaml(true);
    }
    form.reset();
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className={styles.formWrapper}>
      {isZaml && <h1>Ilyas Wa ZAml</h1>}
      <div className={styles.formContent}>
        <div className={styles.grid}>
          {/* NAME FIELD */}
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field className={styles.field}>
                <FieldLabel>{t('fields.name.label')}</FieldLabel>
                <Input {...field} placeholder={t('fields.name.placeholder')} />
                <FieldError>{fieldState.error?.message}</FieldError>
              </Field>
            )}
          />

          {/* EMAIL FIELD */}
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field className={styles.field}>
                <FieldLabel>{t('fields.email.label')}</FieldLabel>
                <Input {...field} type="email" placeholder={t('fields.email.placeholder')} />
                <FieldError>{fieldState.error?.message}</FieldError>
              </Field>
            )}
          />
        </div>

        {/* SUBJECT FIELD */}
        <Controller
          name="subject"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field className={styles.field}>
              <FieldLabel>{t('fields.subject.label')}</FieldLabel>
              <Input {...field} placeholder={t('fields.subject.placeholder')} />
              <FieldError>{fieldState.error?.message}</FieldError>
            </Field>
          )}
        />

        {/* MESSAGE FIELD */}
        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field className={styles.field}>
              <FieldLabel>{t('fields.message.label')}</FieldLabel>
              <Textarea {...field} rows={5} placeholder={t('fields.message.placeholder')} />
              <FieldError>{fieldState.error?.message}</FieldError>
            </Field>
          )}
        />
      </div>

      <Button type="submit" className={styles.submitButton}>
        {t('submit')}
      </Button>
    </form>
  );
}
