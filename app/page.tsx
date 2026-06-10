import { site } from "@/content/site";
import { HeroSection } from "@/components/sections/HeroSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ProjectsSection } from "@/components/sections/ProjectCaseStudy";
import { KnowledgeSection } from "@/components/sections/KnowledgeSection";
import { ContactSection } from "@/components/sections/ContactSection";

function getNote(attachTo: string) {
  return site.editorialNotes.find((note) => note.attachTo === attachTo);
}

export default function Home() {
  return (
    <main id="contenido" className="readContainer">
      <HeroSection
        person={site.person}
        contactCta={site.labels.contactCta}
      />
      <ManifestoSection manifesto={site.manifesto} />
      <AboutSection
        title={site.labels.about}
        about={site.about}
        blockLabels={site.labels.aboutBlocks}
        editorialNote={getNote("about")}
        images={site.images.filter((image) => image.placement === "personal")}
      />
      <ExperienceTimeline
        title={site.labels.experience}
        experience={site.experience}
        editorialNote={getNote("experience")}
      />
      <ProjectsSection
        title={site.labels.projects}
        intro={site.labels.projectsIntro}
        sectionLabels={site.labels.projectSections}
        visitProjectLabel={site.labels.visitProject}
        viewAllLabel={site.labels.viewAllInCollection}
        collections={site.projectCollections}
        editorialNote={getNote("projects")}
      />
      <KnowledgeSection
        title={site.labels.knowledge}
        intro={site.labels.knowledgeIntro}
        interestsLabel={site.labels.interests}
        tags={site.knowledgeTags}
        interests={site.interests}
      />
      <ContactSection
        title={site.labels.contact}
        contact={site.contact}
        links={site.links}
      />
    </main>
  );
}
