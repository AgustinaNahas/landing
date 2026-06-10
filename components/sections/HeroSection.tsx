"use client";

import Image from "next/image";
import { Reveal } from "@/components/visuals/Reveal";
import { EditorialDivider } from "@/components/editorial/EditorialDivider";
import type { Person } from "@/lib/types";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  person: Person;
  contactCta: string;
}

export function HeroSection({ person, contactCta }: HeroSectionProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Reveal>
        <div className={styles.layout}>
          <div className={styles.content}>
            <h1 id="hero-title" className={styles.name}>
              {person.name}
            </h1>
            <p className={styles.role}>{person.role}</p>
            <p className={styles.intention}>{person.tagline}</p>
            <EditorialDivider variant="line" className={styles.divider} />
            <p className={styles.declaration}>{person.intention}</p>
            <p className={styles.contactLink}>
              <a href="#contacto">{contactCta}</a>
            </p>
          </div>

          {person.avatar && (
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
          )}
        </div>
      </Reveal>
    </section>
  );
}
