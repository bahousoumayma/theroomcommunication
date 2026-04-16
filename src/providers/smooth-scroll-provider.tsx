'use client';

import { useEffect, useRef } from 'react';
import type { LenisRef } from 'lenis/react';
import { ReactLenis } from 'lenis/react';
import { gsap } from '@/lib/gsap';

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        // Critical: disables internal raf so GSAP can take over
        autoRaf: false,
        duration: 1.2,
        lerp: 0.07,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
