import type { KnowledgeTag } from "@/lib/types";
import styles from "./KnowledgeTags.module.css";

interface KnowledgeTagsProps {
  tags: KnowledgeTag[];
  className?: string;
}

export function KnowledgeTags({ tags, className = "" }: KnowledgeTagsProps) {
  return (
    <ul className={`${styles.list} ${className}`} aria-label="Etiquetas de conocimiento">
      {tags.map((tag) => (
        <li key={tag.label} className={styles.item}>
          <span className={styles.label}>{tag.label}</span>
          {tag.category && (
            <span className={styles.category}>{tag.category}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
