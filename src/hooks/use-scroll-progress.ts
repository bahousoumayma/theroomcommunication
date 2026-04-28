'use client';

import { useEffect, useState } from 'react';
import { useLenis } from 'lenis/react';

export function useScrollProgress() {
  const lenis = useLenis();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!lenis) return;

    const handleScroll = ({ scroll, limit }: any) => {
      const value = limit > 0 ? (scroll / limit) * 100 : 0;
      setProgress(value);
    };

    lenis.on('scroll', handleScroll);

    return () => {
      lenis.off('scroll', handleScroll);
    };
  }, [lenis]);

  return progress;
}
