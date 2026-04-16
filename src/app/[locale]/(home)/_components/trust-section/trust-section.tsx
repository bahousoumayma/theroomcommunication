import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import EnabelIcon from '@/components/ui/icons/enabel';
import Fm5Icon from '@/components/ui/icons/fm5';
import GizIcon from '@/components/ui/icons/giz';
import GopaIcon from '@/components/ui/icons/gopa';
import styles from './trust-section.module.css';

type Company = {
  name: string;
  href: string;
  Logo?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image?: string;
};

const COMPANIES: Company[] = [
  { name: 'Enabel', href: 'https://www.enabel.be', Logo: EnabelIcon },
  { name: 'FM5', href: 'https://fm5.ma', Logo: Fm5Icon },
  { name: 'Giz', href: 'https://www.giz.de', Logo: GizIcon },
  {
    name: 'Union Nationale des Femmes au Maroc',
    href: 'https://www.unfm.ma',
    image: '/images/logos/unfm.webp',
  },
  {
    name: 'Tibu Africa',
    href: 'https://tibuafrica.org/',
    image: '/images/logos/tibuafrica.webp',
  },
  { name: 'Gopa', href: 'https://www.gopa.eu', Logo: GopaIcon },
];

export function TrustSection() {
  const t = useTranslations('Home.Trust');

  return (
    <section className={styles.section} aria-label={t('title')}>
      <Container className={styles.wrapper}>
        <h2 className={styles.sectionTitle}>{t('title')}</h2>

        <div className={styles.logoTrack}>
          {COMPANIES.map(({ name, href, Logo, image }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className={styles.brandLink}
            >
              {Logo ? (
                <Logo className={styles.brandIcon} />
              ) : (
                <img src={image} alt={name} className={styles.brandImage} loading="lazy" />
              )}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
