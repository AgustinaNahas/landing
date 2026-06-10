"use client";

import { Reveal } from "@/components/visuals/Reveal";
import { PullQuote } from "@/components/editorial/PullQuote";
import type { Manifesto } from "@/lib/types";
import styles from "./ManifestoSection.module.css";

interface ManifestoSectionProps {
  manifesto: Manifesto;
}

export function ManifestoSection({ manifesto }: ManifestoSectionProps) {
  return (
    <section className={styles.section} aria-label="Manifiesto">
      <Reveal>
        <PullQuote quote={manifesto.quote} />
        <p className={styles.body}>{manifesto.body}</p>
      </Reveal>
    </section>
  );
}
