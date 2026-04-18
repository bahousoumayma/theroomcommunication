'use client';

import { useEffect, useRef } from 'react';
import { useMenuStore } from '@/store/use-menu-store';
import { gsap } from '@/lib/gsap';
import { Link } from '@/i18n/navigation';
import styles from './menu.module.css';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
];

export function Menu() {
  const { isOpen, closeMenu } = useMenuStore();
  const overlayRef = useRef(null);
  const linksRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
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
      {/* Minimal Close Button */}
      <button onClick={closeMenu} className={styles.closeButton}>
        <span className={styles.closeText}>Close</span>
        <span className={styles.closeIcon}>✕</span>
      </button>

      {/* Centered Navigation */}
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {links.map((link, i) => (
            <li
              key={link.label}
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

      <div className={styles.footer}>
        <p className={styles.footerLabel}>Connect</p>
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
      </div>
    </div>
  );
}
