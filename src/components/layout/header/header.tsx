'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useMenuStore } from '@/store/use-menu-store';
import { Button } from '@/components/ui/button';
import { LocaleSwitcher } from '@/components/common/locale-switcher/locale-switcher';
import { Link } from '@/i18n/navigation';
import styles from './header.module.css';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const openMenu = useMenuStore((state) => state.openMenu);
  const t = useTranslations('Layout.Header');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={styles.header} data-scrolled={isScrolled}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* LEFT: Menu Trigger */}
          <div className={styles.leftSection}>
            <button onClick={openMenu} className={styles.menuTrigger}>
              <div className={styles.hamburgerIcon}>
                <span className={styles.lineTop} />
                <span className={styles.lineBottom} />
              </div>
              <span className={styles.menuText}>Menu</span>
            </button>
          </div>

          {/* CENTER: Identity */}
          <div className={styles.centerSection}>
            <Link href="/" className={styles.logoLink}>
              <Image src="/images/logo-1.png" alt="Logo" className={styles.logo} fill />
            </Link>
          </div>

          {/* RIGHT: Actions */}
          <div className={styles.rightSection}>
            <LocaleSwitcher className={styles.localeSwitcher} />
            <Button
              variant="outline"
              size="sm"
              render={<Link href="/contact" />}
              nativeButton={false}
            >
              {t('button')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
