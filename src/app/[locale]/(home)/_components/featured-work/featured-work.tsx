import { Container } from '@/components/ui/container';
import { ProjectCard } from '../project-card';
import styles from './featured-work.module.css';

const projects = [
  {
    id: 1,
    title: 'Aura Residences',
    category: 'Architecture',
    year: '2025',
    image: '/images/works/indian-oud.webp',
    href: '/work/aura',
  },
  {
    id: 2,
    title: 'Lumina Edge',
    category: 'Interior',
    year: '2024',
    image: '/images/works/indian-oud.webp',

    href: '/work/lumina',
  },
  {
    id: 3,
    title: 'The Vertex',
    category: 'Commercial',
    year: '2024',
    image: '/images/works/indian-oud.webp',

    href: '/work/vertex',
  },
  {
    id: 4,
    title: 'Maison Blanc',
    category: 'Residential',
    year: '2023',
    image: '/images/works/indian-oud.webp',

    href: '/work/maison',
  },
];

export function FeaturedWork() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <div className={styles.intro}>
            <span className={styles.kicker}>Selected Works</span>

            <h2 className={styles.title}>
              Curated spaces for <br className={styles.break} />
              modern living.
            </h2>
          </div>

          <a href="/work" className={styles.cta}>
            View all projects
          </a>
        </header>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
