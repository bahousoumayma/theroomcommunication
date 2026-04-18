import Image from 'next/image';
import { Container } from '@/components/ui/container';
import styles from './test.module.css';

export function Test() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <Image className={styles.background} src="/images/8.jpg" alt="" fill />
        <div className={styles.overlay} />
        <p className={styles.paragraph}>
          "The Room est née d'une conviction simple : au Maroc, trop de bonnes entreprises restent
          invisibles. Pas par manque de talent — par manque de voix. On est là pour changer ça."
        </p>
      </Container>
    </section>
  );
}
