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
                emphasis: (chunks) => <em className={styles.emphasis}>{chunks}</em>,
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
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M7.712 4.818A1.5 1.5 0 0 1 10 6.095v2.972c.104-.13.234-.248.389-.343l6.323-3.906A1.5 1.5 0 0 1 19 6.095v7.81a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.505 1.505 0 0 1-.389-.344v2.973a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.5 1.5 0 0 1 0-2.552l6.323-3.906Z" />
              </svg>
            </button>
            <button className={styles.headerNextButton} type="button" onClick={goToNext}>
              <svg
                className={styles.headerNextButtonIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3.288 4.818A1.5 1.5 0 0 0 1 6.095v7.81a1.5 1.5 0 0 0 2.288 1.276l6.323-3.905c.155-.096.285-.213.389-.344v2.973a1.5 1.5 0 0 0 2.288 1.276l6.323-3.905a1.5 1.5 0 0 0 0-2.552l-6.323-3.906A1.5 1.5 0 0 0 10 6.095v2.972a1.506 1.506 0 0 0-.389-.343L3.288 4.818Z" />
              </svg>
            </button>
          </div>
        </header>
        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.viewportContainer}>
            {clients.map((client, index) => (
              <article className={styles.card}>
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
