'use client';

import { useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { useMenuStore } from '@/store/use-menu-store';
import { gsap } from '@/lib/gsap';
import { LocaleSwitcher } from '@/components/common/locale-switcher';
import { Link } from '@/i18n/navigation';
import styles from './menu.module.css';

// 1. Locale Data Structure
const menuDictionary = {
  en: {
    close: 'Close',
    connect: 'Connect',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  fr: {
    close: 'Fermer',
    connect: 'Connecter',
    links: [
      { label: 'Accueil', href: '/' },
      { label: 'À propos', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
  },
} as const;

type Locale = keyof typeof menuDictionary;

export function Menu() {
  const { isOpen, closeMenu } = useMenuStore();
  const locale = useLocale() as Locale;

  // Fallback to 'en' if an unsupported locale is somehow passed
  const content = menuDictionary[locale] || menuDictionary.en;

  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (!overlayRef.current) return;

    if (isOpen) {
      gsap.to(overlayRef.current, {
        display: 'flex',
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      });

      gsap.fromTo(
        linksRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: 'expo.out',
          delay: 0.1,
        },
      );
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(overlayRef.current, { display: 'none' });
        },
      });
    }
  }, [isOpen]);

  return (
    <div ref={overlayRef} className={styles.overlay}>
      {/* Top Left: Close Button */}
      <button onClick={closeMenu} className={styles.closeButton} aria-label={content.close}>
        <span className={styles.closeText}>{content.close}</span>
        <span className={styles.closeIcon}>✕</span>
      </button>

      {/* Top Right: Locale Switcher */}
      <div className={styles.localeSwitcherWrapper}>
        <LocaleSwitcher />
      </div>

      {/* Center: Navigation Links */}
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {content.links.map((link, i) => (
            <li
              key={link.href}
              ref={(el) => {
                linksRef.current[i] = el;
              }}
              className={styles.listItem}
            >
              <Link href={link.href} onClick={closeMenu} className={styles.link}>
                {link.label}
                <span className={styles.underline} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom: Social Connect Footer */}
      <footer className={styles.footer}>
        <p className={styles.footerLabel}>{content.connect}</p>
        <div className={styles.socialLinks}>
          <a
            className={styles.socialLink}
            href="https://www.instagram.com/theroomcommunication"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className={styles.socialLink}
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
