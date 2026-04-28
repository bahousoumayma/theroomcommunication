'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import styles from './services-section.module.css';

const SERVICES = [
  {
    title: 'Mountain Expedition',
    description: 'Explore the highest peaks in the world.',
    image: '/images/1.jpg',
  },
  {
    title: 'Desert Oasis',
    description: 'Discover hidden waters in the dunes.',
    image: '/images/1.jpg',
  },
  {
    title: 'Ocean Depths',
    description: 'A journey into the blue unknown.',
    image: '/images/1.jpg',
  },
];

export function ServicesSection() {
  const list = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      const services = gsap.utils.toArray<HTMLUListElement>('.panel');
    },
    { scope: list },
  );

  return (
    <ul ref={list} className={styles.list}>
      {SERVICES.map((item, i) => (
        <li
          key={i}
          className={clsx(styles.service, 'panel')}
          style={{ zIndex: SERVICES.length - i }}
        >
          <Image className={styles.background} src={item.image} alt="Background" fill />
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
