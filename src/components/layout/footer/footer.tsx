import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import styles from './footer.module.css';

// These can stay as constants or move to your i18n JSON if labels change per language
const NAV_LINKS = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
];

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
];

const PHONES = ['+212706076165', '+212691736976'];

export function Footer() {
  const t = useTranslations('Layout.Footer');

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <Link href="/" className={styles.logo}>
            <Image src="/images/logo-1.png" alt={t('logoAlt')} fill sizes="3rem" priority />
          </Link>
        </div>

        <p className={styles.statement}>{t('statement')}</p>

        {/* Semantic <address> for contact information */}
        <address className={styles.contact}>
          <a href="mailto:contact@theroomcommunication.ma" className={styles.email}>
            contact@theroomcommunication.ma
          </a>

          <div className={styles.phones}>
            {PHONES.map((phone) => (
              <a key={phone} href={`tel:${phone}`} className={styles.phone}>
                {formatPhone(phone)}
              </a>
            ))}
          </div>
        </address>

        <nav className={styles.nav} aria-label={t('navAria')}>
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>
                  {t(`nav.${link.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className={styles.socials} aria-label={t('socialsAria')}>
          {SOCIAL_LINKS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>

        <p className={styles.note}>{t('locationNote')}</p>

        <div className={styles.bottom}>
          <small>
            © {new Date().getFullYear()} {t('copyright')}
          </small>
        </div>
      </div>
    </footer>
  );
}

function formatPhone(phone: string) {
  return phone.replace(/(\+212)(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5 $6');
}
