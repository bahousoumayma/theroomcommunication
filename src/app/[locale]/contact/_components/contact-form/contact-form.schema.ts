import * as z from 'zod';

/**
 * We wrap the schema in a function so we can pass the
 * translation function (t) from the component.
 */
export const getContactSchema = (t: any) => {
  const noOnlySpaces = (val: string) => val.trim().length > 0;

  return z.object({
    name: z
      .string()
      .min(2, t('fields.name.errors.tooShort'))
      .max(50, t('fields.name.errors.tooLong'))
      .refine(noOnlySpaces, t('fields.name.errors.required'))
      .refine((val) => /^[a-zA-Z\s'-]+$/.test(val), t('fields.name.errors.invalid')),

    email: z
      .string()
      .email(t('fields.email.errors.format'))
      .max(100, t('fields.email.errors.tooLong'))
      .refine(noOnlySpaces, t('fields.email.errors.required')),

    subject: z
      .string()
      .min(3, t('fields.subject.errors.tooShort'))
      .max(100, t('fields.subject.errors.tooLong'))
      .refine(noOnlySpaces, t('fields.subject.errors.required')),

    message: z
      .string()
      .min(10, t('fields.message.errors.tooShort'))
      .max(1000, t('fields.message.errors.tooLong'))
      .refine(noOnlySpaces, t('fields.message.errors.required'))
      .refine((val) => val.trim().split(/\s+/).length > 2, t('fields.message.errors.moreWords')),
  });
};

// We export the type separately
export type ContactData = z.infer<ReturnType<typeof getContactSchema>>;
