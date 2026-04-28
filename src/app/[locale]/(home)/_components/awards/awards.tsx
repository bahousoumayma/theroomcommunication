'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import { Container } from '@/components/ui/container';
import { awards } from '@/data/awards';
import styles from './awards.module.css';

export function Awards() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const windowRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);

  const { contextSafe } = useGSAP({ scope: sectionRef });

  useGSAP(
    () => {
      if (!windowRef.current) return;

      gsap.set(windowRef.current, {
        xPercent: -50,
        yPercent: -50,
      });

      xTo.current = gsap.quickTo(windowRef.current, 'x', {
        duration: 0.4,
        ease: 'power3.out',
      });

      yTo.current = gsap.quickTo(windowRef.current, 'y', {
        duration: 0.4,
        ease: 'power3.out',
      });
    },
    { scope: sectionRef },
  );

  /* Handlers */
  const handleMove = contextSafe((e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;

    xTo.current?.(e.clientX - rect.left);
    yTo.current?.(e.clientY - rect.top);
  });

  const handleEnter = contextSafe(() => {
    gsap.to(windowRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.35,
      ease: 'expo.out',
    });
  });

  const handleLeave = contextSafe(() => {
    gsap.to(windowRef.current, {
      opacity: 0,
      scale: 0.85,
      duration: 0.25,
      ease: 'power2.in',
    });
  });

  const handleItemEnter = contextSafe((index: number) => {
    gsap.to(trackRef.current, {
      yPercent: -(index * 100),
      duration: 0.5,
      ease: 'expo.out',
    });
  });

  return (
    <section ref={sectionRef} className={styles.section}>
      <Container>
        {/* Header */}
        <header className={styles.header}>
          <span className={styles.kicker}>Recognition</span>
          <h2 className={styles.title}>Selected awards & distinctions</h2>
        </header>

        {/* List */}
        <ul
          className={styles.list}
          onMouseMove={handleMove}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          {awards.map((award, index) => (
            <li key={award.id} className={styles.item} onMouseEnter={() => handleItemEnter(index)}>
              <time className={styles.year}>{award.year}</time>

              <h3 className={styles.name}>{award.title}</h3>

              <p className={styles.category}>{award.category}</p>

              <span className={styles.indicator} />
            </li>
          ))}
        </ul>

        {/* Floating preview */}
        <div ref={windowRef} className={styles.preview}>
          <div ref={trackRef} className={styles.previewTrack}>
            {awards.map((award) => (
              <figure key={award.id} className={styles.previewItem}>
                <img src={award.image} alt={award.title} className={styles.previewImage} />
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
