"use client";

import { Reveal } from "@/components/visuals/Reveal";
import { KnowledgeTags } from "@/components/editorial/KnowledgeTags";
import { EditorialDivider } from "@/components/editorial/EditorialDivider";
import type { KnowledgeTag, Interest } from "@/lib/types";
import styles from "./KnowledgeSection.module.css";

interface KnowledgeSectionProps {
  title: string;
  intro: string;
  interestsLabel: string;
  tags: KnowledgeTag[];
  interests: Interest[];
}

export function KnowledgeSection({
  title,
  intro,
  interestsLabel,
  tags,
  interests,
}: KnowledgeSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="knowledge-title">
      <Reveal>
        <h2 id="knowledge-title" className={styles.title}>
          {title}
        </h2>
        <p className={styles.intro}>{intro}</p>
      </Reveal>
      <KnowledgeTags tags={tags} className={styles.tags} />

      <EditorialDivider variant="line" className={styles.divider} />

      <Reveal>
        <h3 className={styles.interestsLabel}>{interestsLabel}</h3>
        <ul className={styles.interestsList}>
          {interests.map((interest) => (
            <li key={interest.title} className={styles.interestItem}>
              <span className={styles.interestTitle}>{interest.title}</span>
              <span className={styles.interestDesc}>{interest.description}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
