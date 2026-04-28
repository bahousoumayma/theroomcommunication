import { z } from 'zod';

export const contactSchema = z.object({
  fullName: z.string().min(2, 'Full Name is required'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Please tell us a bit more (min 10 characters)'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
