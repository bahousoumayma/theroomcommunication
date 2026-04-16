'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { SplitText } from 'gsap/SplitText';
import { gsap, useGSAP } from '@/lib/gsap';
import { Button } from '@/components/ui/button/button';
import { Container } from '@/components/ui/container';
import { Link } from '@/i18n/navigation';
import styles from './our-ethos.module.css';

export function OurEthos() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // Image reveal
    gsap.fromTo(
      imageRef.current,
      { clipPath: 'inset(0% 100% 0% 0%)', scale: 1.1 },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        scale: 1,
        duration: 1.4,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      },
    );

    // Title animation (lines)
    const splitTitle = new SplitText(titleRef.current, {
      type: 'lines',
      linesClass: 'overflow-hidden',
    });

    gsap.from(splitTitle.lines, {
      yPercent: 100,
      duration: 1.1,
      stagger: 0.1,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
      },
    });

    // Body animation (words)
    const splitBody = new SplitText(bodyRef.current, {
      type: 'words',
    });

    gsap.from(splitBody.words, {
      opacity: 0,
      y: 8,
      duration: 0.5,
      stagger: 0.015,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: bodyRef.current,
        start: 'top 85%',
      },
    });

    return () => {
      splitTitle.revert();
      splitBody.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <Container>
        <div className={styles.layout}>
          {/* Media */}
          <figure className={styles.media}>
            <Image
              ref={imageRef}
              src="/images/our-philosophy.png"
              alt="Studio ethos"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </figure>

          {/* Content */}
          <div className={styles.content}>
            <header className={styles.header}>
              <span className={styles.kicker}>Ethos</span>

              <h2 ref={titleRef} className={styles.title}>
                Refining the <em className={styles.emphasis}>vision</em>
                <br />
                of modern founders.
              </h2>
            </header>

            <div ref={bodyRef} className={styles.body}>
              <p className={styles.text}>
                We don’t just build—we curate. Aligning strategy, design, and performance through a
                lens of essentialism.
              </p>

              <blockquote className={styles.quote}>Aiming for the pinnacle.</blockquote>
            </div>

            <div className={styles.actions}>
              <Button
                variant="outline"
                size="lg"
                render={<Link href="/about">Learn more </Link>}
                nativeButton={false}
              ></Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
