'use client';

import { useRef } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { SplitText, gsap, useGSAP } from '@/lib/gsap';
import { Container } from '@/components/ui/container';
import styles from './quote-section.module.css';

export function QuoteSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useGSAP(
    () => {
      const split = new SplitText(textRef.current, {
        type: 'lines',
        linesClass: 'line',
        mask: 'lines',
      });

      gsap.to(bgRef.current, {
        yPercent: 15,
        scale: 1.05,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.from(split.lines, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'center center',
          scrub: 1,
        },
      });

      return () => split.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className={styles.quote}>
      <div className={styles.quote__media}>
        <Image
          ref={bgRef}
          src="/images/4 copy.jpg"
          alt="Background texture"
          fill
          priority
          className={styles.quote__image}
        />
        <div className={styles.quote__overlay} />
      </div>

      {/* Content */}
      <Container className={clsx(styles.quote__container, styles.quote__perspective)}>
        <blockquote ref={textRef} className={styles.quote__text}>
          "We don't just build — we <strong>curate.</strong>
          <br />
          Aligning strategy, design, and performance
          <br />
          through a lens of <strong>essentialism.</strong>"
        </blockquote>
      </Container>
    </section>
  );
}
