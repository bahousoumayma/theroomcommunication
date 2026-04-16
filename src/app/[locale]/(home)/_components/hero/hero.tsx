'use client';

import { useRef } from 'react';
import { clsx } from 'clsx';
import { useTranslations } from 'next-intl';
import { ScrollTrigger, gsap, useGSAP } from '@/lib/gsap';
import { Button } from '@/components/ui/button/button';
import { Link } from '@/i18n/navigation';
import styles from './hero.module.css';

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const t = useTranslations('Home.Hero');

  useGSAP(
    () => {
      // Elegant entrance for centered text
      // We target the scoped module classes specifically
      gsap.from(`.${styles.fadeUp}`, {
        y: 30,
        opacity: 0,
        duration: 1.5,
        ease: 'expo.out',
        stagger: 0.2,
      });

      // Video expansion
      gsap.to(`.${styles.videoContainer}`, {
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        width: '100vw',
        height: '100vh',
        borderRadius: 0,
        ease: 'none',
      });

      ScrollTrigger.create({
        trigger: `.${styles.videoContainer}`,
        start: 'top 80%',
        onEnter: () => videoRef.current?.play(),
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 className={clsx(styles.title, styles.fadeUp)}>
            {t.rich('title', {
              primary: (chunks) => <span className={styles.titleSpecial}>{chunks}</span>,
            })}
          </h1>
          <p className={clsx(styles.description, styles.fadeUp)}>{t('description')}</p>
          <div className={styles.fadeUp}>
            <Button className={styles.cta} render={<Link href="/about" />} nativeButton={false}>
              {t('button')}
            </Button>
          </div>
        </div>
        <div className={styles.videoWrapper}>
          <div className={clsx(styles.videoContainer)}>
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              className={styles.video}
              src="/videos/hero-video.mp4"
            />
            <div className={styles.overlay} />
          </div>
        </div>
      </div>
    </section>
  );
}
