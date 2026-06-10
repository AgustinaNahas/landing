"use client";

import { Reveal } from "@/components/visuals/Reveal";
import { EditorialNote } from "@/components/editorial/EditorialNote";
import { MicroViz } from "@/components/visuals/MicroViz";
import type { ExperienceEntry, EditorialNoteItem } from "@/lib/types";
import styles from "./ExperienceTimeline.module.css";

interface ExperienceTimelineProps {
  title: string;
  experience: ExperienceEntry[];
  editorialNote?: EditorialNoteItem;
  timelineAriaLabel: string;
  editorialNoteAriaLabel: string;
}

export function ExperienceTimeline({
  title,
  experience,
  editorialNote,
  timelineAriaLabel,
  editorialNoteAriaLabel,
}: ExperienceTimelineProps) {
  return (
    <section
      id="experiencia"
      className={styles.section}
      aria-labelledby="experience-title"
    >
      <Reveal>
        <div className={styles.header}>
          <h2 id="experience-title" className={styles.title}>
            {title}
          </h2>
          <MicroViz variant="timeline" className={styles.headerViz} />
        </div>
      </Reveal>

      <div className={styles.layout}>
        <ol className={styles.timeline} aria-label={timelineAriaLabel}>
          {experience.map((entry, index) => (
            <Reveal
              key={`${entry.period}-${entry.organization}`}
              className={styles.entryReveal}
            >
              <li className={styles.entry}>
                <div className={styles.marker} aria-hidden="true">
                  <span className={styles.dot} />
                  {index < experience.length - 1 && (
                    <span className={styles.line} />
                  )}
                </div>
                <div className={styles.entryContent}>
                  <time className={styles.period} dateTime={entry.period}>
                    {entry.period}
                  </time>
                  <h3 className={styles.role}>{entry.role}</h3>
                  <p className={styles.organization}>{entry.organization}</p>
                  <p className={styles.description}>{entry.description}</p>
                  {entry.note && (
                    <p className={styles.entryNote}>{entry.note}</p>
                  )}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        {editorialNote && (
          <div className={styles.margin}>
            <Reveal>
              <EditorialNote
                text={editorialNote.text}
                ariaLabel={editorialNoteAriaLabel}
              />
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
