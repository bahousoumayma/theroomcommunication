'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { SplitText } from 'gsap/SplitText';
import { gsap, useGSAP } from '@/lib/gsap';
import { Container } from '@/components/ui/container';
import styles from './vision-section.module.css';

gsap.registerPlugin(SplitText);

export function VisionSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;

      const ctx = gsap.context(() => {
        const images = gsap.utils.toArray(`.${styles.image}`);

        // Kicker
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

        // SplitText
        if (textRef.current) {
          const split = new SplitText(textRef.current, {
            type: 'words',
          });

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

        // Images
        gsap.fromTo(
          images,
          { opacity: 0, y: 60, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.4,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: rootRef.current,
              start: 'top 75%',
            },
          },
        );
      }, rootRef);

      return () => ctx.revert(); // ✅ cleanup
    },
    { scope: rootRef },
  );

  return (
    <section className={styles.root} ref={rootRef}>
      <Container className={styles.container}>
        <div className={styles.canvas}>
          {/* Floating Images */}
          <div className={`${styles.image} ${styles.imageLeft}`}>
            <Image src="/images/1 copy.jpg" alt="" fill sizes="200px" priority />
          </div>

          <div className={`${styles.image} ${styles.imageRightTop}`}>
            <Image src="/images/2.jpg" alt="" fill sizes="260px" />
          </div>

          <div className={`${styles.image} ${styles.imageRightBottom}`}>
            <Image src="/images/4.jpg" alt="" fill sizes="220px" />
          </div>

          <div className={`${styles.image} ${styles.imageBottom}`}>
            <Image src="/images/3.jpg" alt="" fill sizes="240px" />
          </div>

          {/* Content */}
          <div className={styles.content}>
            <span className={styles.kicker}>Notre vision</span>

            <p ref={textRef} className={styles.statement}>
              Révéler l’essence des marques en construisant des univers uniques, alliant créativité,
              exigence et stratégie, pour positionner chaque projet dans une dimension premium et
              durable.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
