import Image from 'next/image';
import { Badge } from '@/components/ui/badge/badge';
import styles from './project-card.module.css';

type Project = {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
};

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <figure className={styles.media}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
        />
        <div className={styles.overlay} />
      </figure>

      <div className={styles.content}>
        <header className={styles.header}>
          <h3 className={styles.title}>{project.title}</h3>
          <time className={styles.year}>{project.year}</time>
        </header>

        <Badge variant="outline" className={styles.badge}>
          {project.category}
        </Badge>
      </div>
    </article>
  );
}
