"use client";

import { Reveal } from "@/components/visuals/Reveal";
import { EditorialDivider } from "@/components/editorial/EditorialDivider";
import { KnowledgeTags } from "@/components/editorial/KnowledgeTags";
import { EditorialMedia } from "@/components/editorial/EditorialMedia";
import type {
  Project,
  ProjectCollection,
  SectionLabels,
  EditorialNoteItem,
} from "@/lib/types";
import styles from "./ProjectCaseStudy.module.css";

interface ProjectCaseStudyProps {
  project: Project;
  index: number;
  globalIndex: number;
  sectionLabels: SectionLabels["projectSections"];
  visitProjectLabel: string;
}

const sectionKeys = [
  "context",
  "problem",
  "approach",
  "outcome",
  "learnings",
] as const;

function ProjectTitle({ project }: { project: Project }) {
  if (!project.url) {
    return (
      <h4 id={`project-title-${project.slug}`} className={styles.title}>
        {project.title}
      </h4>
    );
  }

  return (
    <h4 id={`project-title-${project.slug}`} className={styles.title}>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.titleLink}
      >
        {project.title}
      </a>
    </h4>
  );
}

export function ProjectCaseStudy({
  project,
  index,
  globalIndex,
  sectionLabels,
  visitProjectLabel,
}: ProjectCaseStudyProps) {
  const mediaOnRight = globalIndex % 2 === 0;
  const hasSplit = Boolean(project.media);

  const bodySections = (
    <>
      {sectionKeys.map(
        (key) =>
          project[key] && (
            <Reveal key={key}>
              <div className={styles.section}>
                <h5 className={styles.sectionLabel}>{sectionLabels[key]}</h5>
                <p className={styles.sectionText}>{project[key]}</p>
              </div>
            </Reveal>
          ),
      )}

      {project.technologies && project.technologies.length > 0 && (
        <Reveal>
          <div className={styles.techSection}>
            <h5 className={styles.sectionLabel}>
              {sectionLabels.technologies}
            </h5>
            <KnowledgeTags
              tags={project.technologies.map((label) => ({ label }))}
            />
          </div>
        </Reveal>
      )}
    </>
  );

  return (
    <article
      id={project.slug}
      className={styles.article}
      aria-labelledby={`project-title-${project.slug}`}
    >
      <Reveal>
        <p className={styles.index}>
          {String(index + 1).padStart(2, "0")}
        </p>
        <ProjectTitle project={project} />
        <p className={styles.subtitle}>{project.subtitle}</p>
        {project.url && (
          <p className={styles.projectLink}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.linkLabel ?? visitProjectLabel} →
            </a>
          </p>
        )}
        {project.editorialNote && (
          <p className={styles.note}>{project.editorialNote}</p>
        )}
      </Reveal>

      {hasSplit ? (
        <div
          className={`${styles.splitLayout} ${mediaOnRight ? styles.splitMediaRight : styles.splitMediaLeft}`}
        >
          <div className={styles.splitMedia}>
            <Reveal>
              <EditorialMedia
                media={project.media!}
                className={styles.splitFigure}
                showCaption={false}
              />
              {project.media!.caption && (
                <p className={styles.splitCaption}>{project.media!.caption}</p>
              )}
            </Reveal>
          </div>
          <div className={styles.splitContent}>
            <div className={styles.body}>{bodySections}</div>
          </div>
        </div>
      ) : (
        <div className={styles.body}>{bodySections}</div>
      )}
    </article>
  );
}

interface ProjectCollectionBlockProps {
  collection: ProjectCollection;
  sectionLabels: SectionLabels["projectSections"];
  visitProjectLabel: string;
  viewAllLabel: string;
  globalIndexOffset: number;
}

function ProjectCollectionBlock({
  collection,
  sectionLabels,
  visitProjectLabel,
  viewAllLabel,
  globalIndexOffset,
}: ProjectCollectionBlockProps) {
  return (
    <div id={collection.slug} className={styles.collection}>
      <Reveal>
        <header className={styles.collectionHeader}>
          <h3 className={styles.collectionTitle}>{collection.title}</h3>
          <p className={styles.collectionSubtitle}>{collection.subtitle}</p>
          {collection.intro && (
            <p className={styles.collectionIntro}>{collection.intro}</p>
          )}
          {collection.externalUrl && (
            <p className={styles.collectionLink}>
              <a
                href={collection.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {viewAllLabel} →
              </a>
            </p>
          )}
        </header>
      </Reveal>

      {collection.projects.map((project, index) => (
        <div key={project.slug}>
          <ProjectCaseStudy
            project={project}
            index={index}
            globalIndex={globalIndexOffset + index}
            sectionLabels={sectionLabels}
            visitProjectLabel={visitProjectLabel}
          />
          {index < collection.projects.length - 1 && (
            <EditorialDivider variant="line" className={styles.projectDivider} />
          )}
        </div>
      ))}
    </div>
  );
}

interface ProjectsSectionProps {
  title: string;
  intro: string;
  sectionLabels: SectionLabels["projectSections"];
  visitProjectLabel: string;
  viewAllLabel: string;
  collections: ProjectCollection[];
  editorialNote?: EditorialNoteItem;
}

export function ProjectsSection({
  title,
  intro,
  sectionLabels,
  visitProjectLabel,
  viewAllLabel,
  collections,
  editorialNote,
}: ProjectsSectionProps) {
  const collectionOffsets = collections.map((_, index) =>
    collections
      .slice(0, index)
      .reduce((sum, item) => sum + item.projects.length, 0),
  );

  return (
    <section
      id="proyectos"
      className={styles.wrapper}
      aria-labelledby="projects-title"
    >
      <Reveal>
        <div className={styles.headingRow}>
          <div>
            <h2 id="projects-title" className={styles.heading}>
              {title}
            </h2>
            <p className={styles.headingIntro}>{intro}</p>
          </div>
          {editorialNote && (
            <aside className={styles.headingNote}>
              <p>{editorialNote.text}</p>
            </aside>
          )}
        </div>
      </Reveal>

      {collections.map((collection, index) => (
        <div key={collection.slug}>
          <ProjectCollectionBlock
            collection={collection}
            sectionLabels={sectionLabels}
            visitProjectLabel={visitProjectLabel}
            viewAllLabel={viewAllLabel}
            globalIndexOffset={collectionOffsets[index]}
          />
          {index < collections.length - 1 && (
            <EditorialDivider variant="dots" />
          )}
        </div>
      ))}
    </section>
  );
}
