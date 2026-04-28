'use client';

import React, { useRef } from 'react';
import { Container } from '@/components/ui/container';
import { InstagramIcon, LinkedInIcon, XIcon } from '@/components/ui/icons';
import { members } from '@/data/team';
import { MemberCard } from './components/member-card';
import styles from './our-team.module.css';

export const iconMap: Record<string, React.ElementType> = {
  twitter: XIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
};

export default function OurTeam() {
  const sectionRef = useRef(null);

  return (
    <Container className={styles.container} ref={sectionRef} as="section">
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.kicker}>The Talent</span>

          <h2 className={styles.heading}>
            Our <span className={styles.emphasis}>Team.</span>
          </h2>
        </div>

        <p className={styles.description}>
          A specialized group of makers, thinkers, and designers dedicated to the craft of digital
          essentialism.
        </p>
      </header>

      <div className={styles.list}>
        {members.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>
    </Container>
  );
}
