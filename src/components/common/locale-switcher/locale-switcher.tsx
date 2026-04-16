'use client';

import { useTransition } from 'react';
import clsx from 'clsx';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import styles from './locale-switcher.module.css';

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (nextLocale: 'en' | 'fr') => {
    if (nextLocale === locale || isPending) return;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale, scroll: false });
    });
  };

  return (
    <nav
      aria-label="Language selector"
      className={clsx(styles.wrapper, isPending && styles.pending)}
    >
      <div className={styles.list}>
        {['en', 'fr'].map((lang) => {
          const isActive = locale === lang;

          return (
            <button
              key={lang}
              type="button"
              onClick={() => handleLocaleChange(lang as 'en' | 'fr')}
              className={styles.item}
            >
              <span className={clsx(styles.label, isActive ? styles.active : styles.inactive)}>
                {lang}
              </span>

              <span className={clsx(styles.indicator, isActive && styles.indicatorActive)} />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
