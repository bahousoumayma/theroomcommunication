'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { SplitText } from 'gsap/SplitText';
import { gsap, useGSAP } from '@/lib/gsap';
import { Container } from '@/components/ui/container';
import styles from './vision-section.module.css';

export function VisionSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;

      const ctx = gsap.context(() => {
        const images = gsap.utils.toArray(`.${styles.image}`);

        // Kicker animation
        gsap.fromTo(
          `.${styles.kicker}`,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: rootRef.current,
              start: 'top 85%',
            },
          },
        );

        // Text animation
        if (textRef.current) {
          const split = new SplitText(textRef.current, { type: 'words' });

          gsap.from(split.words, {
            yPercent: 100,
            opacity: 0,
            stagger: 0.025,
            duration: 1.2,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 85%',
            },
          });
        }

        // Images animation
        gsap.fromTo(
          images,
          { opacity: 0, y: 60, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: rootRef.current,
              start: 'top 75%',
            },
          },
        );
      }, rootRef);

      return () => ctx.revert();
    },
    { scope: rootRef },
  );

  return (
    <section className={styles.root} ref={rootRef}>
      <Container>
        <div className={styles.canvas}>
          {/* LEFT COLUMN */}
          <div className={styles.col}>
            <div className={styles.image}>
              <Image src="/images/1 copy.jpg" alt="" fill sizes="200px" />
            </div>
            <div className={styles.image}>
              <Image src="/images/2 copy.jpg" alt="" fill sizes="200px" />
            </div>
            <div className={`${styles.image} ${styles.desktopOnly}`}>
              <Image src="/images/3.jpg" alt="" fill sizes="200px" />
            </div>
          </div>

          {/* CONTENT */}
          <div className={styles.content}>
            <span className={styles.kicker}>Notre vision</span>

            <p ref={textRef} className={styles.statement}>
              Révéler l’essence des marques en construisant des univers uniques, alliant créativité,
              exigence et stratégie, pour positionner chaque projet dans une dimension premium et
              durable.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className={styles.col}>
            <div className={styles.image}>
              <Image src="/images/4 copy.jpg" alt="" fill sizes="200px" />
            </div>
            <div className={styles.image}>
              <Image src="/images/12.jpg" alt="" fill sizes="200px" />
            </div>
            <div className={`${styles.image} ${styles.desktopOnly}`}>
              <Image src="/images/5.jpg" alt="" fill sizes="200px" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
