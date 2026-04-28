import Image from 'next/image';
import { Member } from '@/types/member';
import { iconMap } from '../../our-team';
import styles from './member-card.module.css';

export function MemberCard({ member }: { member: Member }) {
  return (
    <article className={styles.card}>
      <div className={styles.inner}>
        {/* IMAGE */}
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <Image src={member.image} alt={member.name} fill className={styles.image} />
          </div>
        </div>

        {/* IDENTITY */}
        <div className={styles.identity}>
          <h3 className={styles.name}>{member.name}</h3>
          <span className={styles.role}>{member.role}</span>
        </div>

        {/* DESCRIPTION */}
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>
            Specializing in refined aesthetics and functional precision.
          </p>
        </div>

        {/* SOCIALS */}
        <div className={styles.socialsWrapper}>
          <ul className={styles.socials}>
            {member.socials.map((social) => {
              const Icon = iconMap[social.platform];
              if (!Icon) return null;

              return (
                <li key={social.platform}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <Icon className={styles.socialIcon} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </article>
  );
}
