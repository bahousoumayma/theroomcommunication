'use client';

import * as React from 'react';
import clsx from 'clsx';
import styles from './textarea.module.css';

type TextareaProps = React.ComponentProps<'textarea'>;

function Textarea({ className, ...props }: TextareaProps) {
  return <textarea data-slot="textarea" className={clsx(styles.textarea, className)} {...props} />;
}

export { Textarea };
