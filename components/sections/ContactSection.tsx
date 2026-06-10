"use client";

import { Reveal } from "@/components/visuals/Reveal";
import { EditorialDivider } from "@/components/editorial/EditorialDivider";
import { MicroViz } from "@/components/visuals/MicroViz";
import type { Contact, SiteLink } from "@/lib/types";
import styles from "./ContactSection.module.css";

interface ContactSectionProps {
  title: string;
  contact: Contact;
  links: SiteLink[];
}

export function ContactSection({ title, contact, links }: ContactSectionProps) {
  return (
    <section
      id="contacto"
      className={styles.section}
      aria-labelledby="contact-title"
    >
      <Reveal>
        <div className={styles.header}>
          <h2 id="contact-title" className={styles.title}>
            {title}
          </h2>
          <MicroViz variant="network" className={styles.viz} />
        </div>
        <p className={styles.message}>{contact.message}</p>
        {contact.availability && (
          <p className={styles.availability}>{contact.availability}</p>
        )}
      </Reveal>

      <EditorialDivider variant="line" className={styles.divider} />

      <Reveal>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                className={styles.link}
                {...(link.type !== "email"
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
