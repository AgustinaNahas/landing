export interface SiteMeta {
  title: string;
  description: string;
  siteUrl: string;
  locale: string;
  language: string;
  keywords: string[];
  author: string;
  og: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
    siteName: string;
    type: "website";
  };
  twitter: {
    card: "summary_large_image";
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    creator?: string;
  };
}

export interface Person {
  name: string;
  role: string;
  tagline: string;
  intention: string;
  avatar?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface EditorialNoteItem {
  id: string;
  text: string;
  attachTo: string;
}

export interface About {
  greeting: string;
  code: string;
  stories: string;
  people: string;
  personal: string;
}

export interface ExperienceEntry {
  period: string;
  role: string;
  organization: string;
  description: string;
  note?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  context: string;
  problem?: string;
  approach?: string;
  technologies?: string[];
  outcome?: string;
  learnings?: string;
  editorialNote?: string;
  url?: string;
  linkLabel?: string;
  media?: MediaItem;
}

export interface ProjectCollection {
  slug: string;
  title: string;
  subtitle: string;
  intro?: string;
  externalUrl?: string;
  projects: Project[];
}

export interface KnowledgeTag {
  label: string;
  category?: string;
}

export interface Interest {
  title: string;
  description: string;
}

export interface SiteLink {
  label: string;
  url: string;
  type: "email" | "social" | "external";
}

export interface Contact {
  email: string;
  message: string;
  availability?: string;
}

export interface MediaItem {
  type: "image" | "video";
  src?: string;
  poster?: string;
  placeholderSrc?: string;
  alt: string;
  caption: string;
  placeholderLabel: string;
  placeholderHint?: string;
  width?: number;
  height?: number;
}

export interface EditorialImageItem extends MediaItem {
  id: string;
  placement: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SectionLabels {
  about: string;
  aboutBlocks: {
    greeting: string;
    code: string;
    stories: string;
    people: string;
    personal: string;
  };
  experience: string;
  projects: string;
  projectsIntro: string;
  knowledge: string;
  knowledgeIntro: string;
  interests: string;
  contact: string;
  contactCta: string;
  visitProject: string;
  viewAllInCollection: string;
  projectSections: {
    context: string;
    problem: string;
    approach: string;
    outcome: string;
    learnings: string;
    technologies: string;
  };
}

export interface SiteContent {
  meta: SiteMeta;
  person: Person;
  labels: SectionLabels;
  footer: { tagline: string };
  ui: { imagePlaceholder: string; videoPlaceholderHint: string };
  editorialNotes: EditorialNoteItem[];
  about: About;
  experience: ExperienceEntry[];
  projectCollections: ProjectCollection[];
  knowledgeTags: KnowledgeTag[];
  interests: Interest[];
  links: SiteLink[];
  contact: Contact;
  images: EditorialImageItem[];
  navigation: NavItem[];
}
