'use client';

import { useRef } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { gsap, useGSAP } from '@/lib/gsap';
import styles from './services-section.module.css';

interface Service {
  title: string;
  description: string;
}

const images = ['/images/3 copy.jpg', '/images/4 copy.jpg', '/images/8.jpg', '/images/10.jpg'];

export function ServicesSection() {
  const list = useRef<HTMLUListElement>(null);
  const t = useTranslations('Home.Services');
  const servicesList = t.raw('items') as Service[];

  useGSAP(
    () => {
      const panels = gsap.utils.toArray<HTMLLIElement>('.panel');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: list.current,
          start: 'top top',
          end: () => `+=${panels.length * window.innerHeight}`,
          scrub: true,
          pin: true,
        },
      });

      panels.forEach((panel, i) => {
        tl.to(
          panel,
          {
            clipPath: 'inset(0% 0% 100% 0%)',
            ease: 'none',
            duration: 1,
          },
          i,
        );
      });
    },
    { scope: list },
  );

  return (
    <ul ref={list} className={styles.list}>
      {servicesList.map((item, i) => (
        <li
          key={i}
          className={clsx(styles.service, 'panel')}
          style={{ zIndex: servicesList.length - i }}
        >
          <Image className={styles.background} src={images[i]} alt="Background" fill />
          <div className={styles.overlay} />
          <div className={styles.content}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.description}>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
