"use client";

import { Reveal } from "@/components/visuals/Reveal";
import { EditorialNote } from "@/components/editorial/EditorialNote";
import { EditorialMedia } from "@/components/editorial/EditorialMedia";
import { EditorialDivider } from "@/components/editorial/EditorialDivider";
import type {
  About,
  EditorialImageItem,
  EditorialNoteItem,
  SectionLabels,
} from "@/lib/types";
import styles from "./AboutSection.module.css";

interface AboutSectionProps {
  title: string;
  about: About;
  blockLabels: SectionLabels["aboutBlocks"];
  editorialNote?: EditorialNoteItem;
  images?: EditorialImageItem[];
}

const blockKeys = [
  "greeting",
  "code",
  "stories",
  "people",
  "personal",
] as const;

export function AboutSection({
  title,
  about,
  blockLabels,
  editorialNote,
  images = [],
}: AboutSectionProps) {
  const imagesByPlacement = (placement: string) =>
    images.filter((item) => item.placement === placement);
  return (
    <section id="sobre" className={styles.section} aria-labelledby="about-title">
      <Reveal>
        <h2 id="about-title" className={styles.title}>
          {title}
        </h2>
      </Reveal>

      <div className={styles.grid}>
        <div className={styles.content}>
          {blockKeys.map((key, index) => (
            <Reveal key={key}>
              <article className={styles.block}>
                <h3 className={styles.blockLabel}>{blockLabels[key]}</h3>
                <div className={styles.blockText}>
                  {about[key].split("\n\n").map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
              </article>
              {index < blockKeys.length - 1 && (
                <EditorialDivider variant="line" className={styles.blockDivider} />
              )}
              {imagesByPlacement(key).map((item) => (
                <Reveal key={item.id}>
                  <EditorialMedia media={item} className={styles.figureDefault} />
                </Reveal>
              ))}
            </Reveal>
          ))}
        </div>

        {editorialNote && (
          <div className={styles.margin}>
            <Reveal>
              <EditorialNote text={editorialNote.text} />
            </Reveal>
          </div>
        )}
      </div>

    </section>
  );
}
