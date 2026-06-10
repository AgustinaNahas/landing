"use client";

import Image from "next/image";
import { Reveal } from "@/components/visuals/Reveal";
import { EditorialNote } from "@/components/editorial/EditorialNote";
import { EditorialMedia } from "@/components/editorial/EditorialMedia";
import { EditorialDivider } from "@/components/editorial/EditorialDivider";
import type {
  About,
  EditorialImageItem,
  EditorialNoteItem,
  Person,
  SectionLabels,
} from "@/lib/types";
import styles from "./AboutSection.module.css";

interface AboutSectionProps {
  person: Person;
  contactCta: string;
  about: About;
  blockLabels: SectionLabels["aboutBlocks"];
  editorialNote?: EditorialNoteItem;
  editorialNoteAriaLabel: string;
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
  person,
  contactCta,
  about,
  blockLabels,
  editorialNote,
  editorialNoteAriaLabel,
  images = [],
}: AboutSectionProps) {
  const personalImages = images.filter((item) => item.placement === "personal");

  return (
    <section id="sobre" className={styles.section} aria-labelledby="about-name">
      <div className={styles.heroLayout}>
        <div className={styles.heroContent}>
          <Reveal delay={0}>
            <h1 id="about-name" className={styles.name}>
              {person.name}
            </h1>
          </Reveal>
          <Reveal delay={80}>
            <p className={styles.role}>{person.role}</p>
          </Reveal>
          <Reveal delay={160}>
            <p className={styles.tagline}>{person.tagline}</p>
          </Reveal>
          <Reveal delay={240}>
            <EditorialDivider variant="line" className={styles.introDivider} />
            <p className={styles.declaration}>{person.intention}</p>
          </Reveal>
          <Reveal delay={320}>
            <p className={styles.contactLink}>
              <a href="#contacto">{contactCta}</a>
            </p>
          </Reveal>
        </div>

        {person.avatar && (
          <Reveal delay={120} duration={800} className={styles.portraitReveal}>
            <figure className={styles.portrait}>
              <div className={styles.portraitFrame}>
                <Image
                  src={person.avatar.src}
                  alt={person.avatar.alt}
                  width={person.avatar.width}
                  height={person.avatar.height}
                  className={styles.portraitImage}
                  priority
                  sizes="(max-width: 767px) 80vw, 360px"
                />
              </div>
            </figure>
          </Reveal>
        )}
      </div>

      <div className={styles.blocksGrid}>
        {blockKeys.map((key, index) => (
          <Reveal key={key} className={styles.blockRow}>
            <article className={styles.block}>
              <h2 className={styles.blockLabel}>{blockLabels[key]}</h2>
              <div className={styles.blockText}>
                {about[key].split("\n\n").map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </article>
            {index < blockKeys.length - 1 && (
              <EditorialDivider variant="line" className={styles.blockDivider} />
            )}
          </Reveal>
        ))}

        {personalImages.map((item) => (
          <div key={item.id} className={styles.personalMargin}>
            <Reveal>
              <EditorialMedia media={item} variant="margin" />
            </Reveal>
          </div>
        ))}

        {editorialNote && (
          <Reveal className={styles.degreeMargin}>
            <EditorialNote
              text={editorialNote.text}
              ariaLabel={editorialNoteAriaLabel}
            />
          </Reveal>
        )}
      </div>
    </section>
  );
}
