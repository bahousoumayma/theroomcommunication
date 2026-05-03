'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import styles from './who-we-work-with.module.css';

const images = [
  '/images/clients/luxury-hotels-and-resorts.jpg',
  '/images/clients/spas-and-wellness-destinations.jpg',
  '/images/clients/high-end-real-estate.jpg',
  '/images/clients/exceptional-projects.jpg',
];

export function WhoWeWorkWith() {
  const t = useTranslations('Home.WhoWeWorkWith');
  const clients = t.raw('list') as string[];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <span className={styles.kicker}>{t('kicker')}</span>

            <h2 className={styles.title}>
              {t.rich('title', {
                primary: (chunks) => <em className={styles.primary}>{chunks}</em>,
              })}
            </h2>
            <p className={styles.subTitle}>
              {t.rich('subTitle', {
                emphasis: (chunks) => <em className={styles.emphasis}>{chunks}</em>,
              })}
            </p>
          </div>
          <div className={styles.headerButtons}>
            <button className={styles.headerPrevButton} type="button" onClick={goToPrev}>
              <svg
                className={styles.headerPrevButtonIcon}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button className={styles.headerNextButton} type="button" onClick={goToNext}>
              <svg
                className={styles.headerNextButtonIcon}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </header>
        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.viewportContainer}>
            {clients.map((client, index) => (
              <article className={styles.card} key={index}>
                <Image
                  src={images[index]}
                  alt="Studio ethos"
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, 60vw"
                />

                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{client}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
