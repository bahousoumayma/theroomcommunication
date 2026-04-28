'use client';

import * as React from 'react';
import clsx from 'clsx';
import styles from './label.module.css';

function Label({ className, ...props }: React.ComponentProps<'label'>) {
  return <label data-slot="label" className={clsx(styles.label, className)} {...props} />;
}

export { Label };
