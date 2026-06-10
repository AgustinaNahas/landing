import type { SiteContent } from "@/lib/types";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ProjectsSection } from "@/components/sections/ProjectCaseStudy";
import { KnowledgeSection } from "@/components/sections/KnowledgeSection";
import { ContactSection } from "@/components/sections/ContactSection";

interface HomeSectionsProps {
  site: SiteContent;
}

function getNote(site: SiteContent, attachTo: string) {
  return site.editorialNotes.find((note) => note.attachTo === attachTo);
}

export function HomeSections({ site }: HomeSectionsProps) {
  const { accessibility } = site;

  return (
    <main id="contenido" className="readContainer">
      <AboutSection
        person={site.person}
        contactCta={site.labels.contactCta}
        about={site.about}
        blockLabels={site.labels.aboutBlocks}
        editorialNote={getNote(site, "about")}
        editorialNoteAriaLabel={accessibility.editorialNote}
        images={site.images.filter((image) => image.placement === "personal")}
      />
      <ExperienceTimeline
        title={site.labels.experience}
        experience={site.experience}
        editorialNote={getNote(site, "experience")}
        timelineAriaLabel={accessibility.professionalTimeline}
        editorialNoteAriaLabel={accessibility.editorialNote}
      />
      <ProjectsSection
        title={site.labels.projects}
        intro={site.labels.projectsIntro}
        sectionLabels={site.labels.projectSections}
        visitProjectLabel={site.labels.visitProject}
        viewAllLabel={site.labels.viewAllInCollection}
        collections={site.projectCollections}
        editorialNote={getNote(site, "projects")}
        technologiesAriaLabel={accessibility.knowledgeTags}
      />
      <KnowledgeSection
        title={site.labels.knowledge}
        intro={site.labels.knowledgeIntro}
        interestsLabel={site.labels.interests}
        tags={site.knowledgeTags}
        interests={site.interests}
        tagsAriaLabel={accessibility.knowledgeTags}
      />
      <ContactSection
        title={site.labels.contact}
        contact={site.contact}
        links={site.links}
      />
    </main>
  );
}
