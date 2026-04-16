'use client';

import { useRef } from 'react';
import clsx from 'clsx';
import { useLenis } from 'lenis/react';
import { useScrollProgress } from '@/hooks/use-scroll-progress';
import styles from './scroll-to-top.module.css';

export function ScrollToTop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const progress = useScrollProgress();

  const threshold = 10;
  const isVisible = progress > threshold;

  const handleScroll = () => {
    lenis?.scrollTo(0, {
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  return (
    <div
      ref={containerRef}
      className={clsx(styles.container, isVisible ? styles.visible : styles.hidden)}
    >
      <button onClick={handleScroll} aria-label="Back to top" className={styles.button}>
        <span className={styles.label}>Top</span>
      </button>
    </div>
  );
}
