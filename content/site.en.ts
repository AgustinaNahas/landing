import type { MediaItem, SiteContent } from "@/lib/types";

function projectVideo(src: string, alt: string): MediaItem {
  return {
    type: "video",
    src,
    poster: src.replace(/\.webm$/, ".poster.webp"),
    alt,
    caption: "",
    placeholderLabel: alt,
    placeholderHint: "Animated video · autoplay on scroll into view",
  };
}

export const site: SiteContent = {
  meta: {
    title: "Agustina Nahas — Frontend developer",
    description:
      "Frontend developer since 2016. Data visualization, maps, scrollytellings, and digital experiences with social impact. Node, React, Next.js, D3.",
    siteUrl: "https://agustinanahas.com",
    locale: "en_US",
    language: "en",
    jobTitle: "Frontend developer",
    author: "Agustina Nahas",
    keywords: [
      "Agustina Nahas",
      "frontend developer",
      "data visualization",
      "scrollytelling",
      "React",
      "Next.js",
      "D3",
      "Mapbox",
      "digital storytelling",
      "information design",
      "web development Argentina",
    ],
    og: {
      title: "Agustina Nahas — Frontend developer",
      description:
        "I build digital experiences that help people understand complex information. Visualizations, interactive maps, and narratives with code.",
      image: "/og.jpg",
      imageAlt: "Agustina Nahas — frontend developer",
      imageWidth: 1200,
      imageHeight: 630,
      siteName: "Agustina Nahas",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Agustina Nahas — Frontend developer",
      description:
        "Data visualization, maps, scrollytellings, and projects with social impact.",
      image: "/og.jpg",
      imageAlt: "Agustina Nahas — frontend developer",
      site: "@AgustinaNahas",
      creator: "@AgustinaNahas",
    },
  },

  person: {
    name: "Agustina Nahas",
    role:
      "Developer since 2016. I work with Node, Next, and React, and adapt to whatever the project needs.",
    tagline: "",
    intention: "There's always a story hidden in the data.",
    avatar: {
      src: "/perfil.jpg",
      alt: "Agustina Nahas smiling, portrait on a balcony",
      width: 2231,
      height: 2231,
    },
  },

  editorialNotes: [
    {
      id: "degree",
      text: "Frontend developer. A fan of data visualizations and scrollytellings.",
      attachTo: "about",
    },
    {
      id: "experience",
      text: "Some of the places I've been that shaped my professional experience.",
      attachTo: "experience",
    },
  ],

  labels: {
    about: "About me",
    aboutBlocks: {
      greeting: "Hi, I'm Agus",
      code: "About code",
      stories: "About stories",
      people: "About people",
      personal: "About me",
    },
    experience: "Experience",
    projects: "Projects",
    projectsIntro: "Some of the projects I really enjoyed building.",
    knowledge: "Knowledge",
    knowledgeIntro:
      "Tools and technical areas I usually work in — not meant to be an exhaustive list.",
    interests: "I also care about",
    contact: "Contact",
    contactCta: "Get in touch →",
    visitProject: "Visit project",
    viewAllInCollection: "Learn more",
    projectSections: {
      context: "Context",
      problem: "Problem",
      approach: "Approach",
      outcome: "Outcome",
      learnings: "Learnings",
      technologies: "Technologies",
    },
  },

  footer: {
    tagline: "There's always a story waiting to be told.",
  },

  accessibility: {
    skipToContent: "Skip to content",
    mainNav: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mobileMenu: "Navigation menu",
    knowledgeTags: "Knowledge tags",
    professionalTimeline: "Professional timeline",
    editorialNote: "Editorial note",
  },

  ui: {
    imagePlaceholder: "Editorial photograph",
    videoPlaceholderHint: "Animated video · autoplay on scroll into view",
  },

  about: {
    greeting:
      "As a kid I wanted to be a writer. Since fiction wasn't my thing, I decided to start writing code instead.",
    code:
      "I've been a developer since 2016. I mostly work with Node, Next, and React but I adapt to whatever is needed. I use D3, Mapbox, Scrollama, and any library that lets us tell a story in a vivid, engaging way. The projects I enjoy most are the ones that let me build animations, interactive data visualizations, maps, and scrollytellings.\n\nFrontend or backend? I want both. I have experience with PHP (Symfony, Laravel, and CakePHP) and a bit of Python. If we need to write queries against a database (MySQL, MariaDB, PostgreSQL, MSSQL)… we write them!\n\nI believe telling a story sometimes means building the whole system that makes it possible. That's why I also have experience with server management, deployment processes (CI/CD), and Docker.",
    stories:
      "There's always a story waiting to be told. The ones I like telling most are those I feel can have social impact. The topics I'm most interested in are inequality (gender, class, ability), access to information, sustainability, urban planning, and mobility, among others.",
    people:
      "A good story is built by people.\n\nMy first steps as a dev were on the IT Solutions Development team at FRBA UTN. I learned a lot and we built many internal systems for the faculty: a scholarship system, a student enrollment system, an attendance system, and more.\n\nI spent four incredible years as a developer on the El Gato y La Caja team, where we worked on projects with huge impact. Something truly special about El Gato y La Caja was being part of initiatives that moved me and mobilized me — and that still shape who I am today.\n\nI currently work as a developer at Sociopúblico, a communications agency focused on improving public life.",
    personal:
      "I'm a restless person. I love going to the movies, riding my bike, I read a lot, and I crochet. I have a Spotify playlist for every place and occasion. I'm studying Information Systems Engineering and I'm very close to graduating. I have a pet named Galileo who thinks he's a baby kitten but he's 8 years old and huge.",
  },

  experience: [
    {
      period: "2022 - present",
      role: "Developer",
      organization: "Sociopúblico",
      description:
        "I work at a communications agency focused on improving public life. I build digital projects where information, narrative, and social impact intersect.",
    },
    {
      period: "2019 - 2023",
      role: "Developer",
      organization: "El Gato y La Caja",
      description:
        "I took part in high-impact projects on a team that left a mark on me. I got to build initiatives that moved and mobilized me — and that still shape who I am today.",
    },
    {
      period: "2017 - 2020",
      role: "Fullstack developer",
      organization: "Desarrollo de Soluciones Informáticas · FRBA UTN",
      description:
        "I learned a lot building internal systems for the faculty: scholarships, student enrollment, attendance tracking, and more. That's where I started to understand that code is also a way to tell — and to serve.",
      note: "Developer since 2016",
    },
  ],

  projectCollections: [
    {
      slug: "sociopublico",
      title: "Sociopúblico",
      subtitle: "Communications agency · current role",
      intro:
        "Digital projects where information, narrative, and public life intersect.",
      externalUrl: "https://www.sociopublico.com/",
      projects: [
        {
          slug: "child-atlas",
          title: "Child Atlas",
          url: "https://www.childatlas.org/",
          subtitle:
            "Data portal on the global situation of children for Save The Children.",
          context:
            "Save The Children asked us to build a data portal on the global situation of children to inform society about children's conditions worldwide and promote the protection of their rights. We built a home page, an interactive atlas, and country profiles to explore 100+ indicators on children's situations around the world.",
          technologies: ["React", "Next.js", "D3"],
          media: projectVideo(
            "/videos/sociopublico/child-atlas.webm",
            "Child Atlas demo at Sociopúblico",
          ),
        },
        {
          slug: "escuelas",
          title: "Escuelas",
          url: "https://fractalargentina.org/herramienta/mapa-de-accesibilidad-a-las-escuelas-argentinas/",
          subtitle:
            "Interactive map of accessibility to educational institutions in Argentina.",
          context:
            "Fractal (a division of Fundación B&B) wanted to inform society about travel time for children to reach schools across the country and promote better accessibility to educational facilities.",
          technologies: ["React", "Next.js", "Mapbox"],
          media: projectVideo(
            "/videos/sociopublico/escuelas.webm",
            "Escuelas project demo at Sociopúblico",
          ),
        },
        {
          slug: "gwl",
          title: "GWL",
          url: "https://gwlvoices.org/",
          subtitle:
            "Interactive scrollytelling on the role of women in multilateral organizations.",
          context:
            "GWL asked us to build an interactive scrollytelling to tell the story of women in multilateral organizations in a visual, dynamic way.",
          technologies: ["React", "Next.js", "D3"],
          media: projectVideo(
            "/videos/sociopublico/gwl.webm",
            "GWL project demo at Sociopúblico",
          ),
        },
        {
          slug: "nido",
          title: "Nido",
          subtitle: "Interactive scrollytelling about the NIDO index.",
          context:
            "Fractal (a division of Fundación B&B) asked us to build an interactive scrollytelling to tell the story of the NIDO index in a visual, dynamic way. The NIDO index measures four dimensions: access to education, health, access to green spaces, and context. Through this scrollytelling, we told the story of each dimension and how the index relates to children's daily lives in the country.",
          technologies: ["React", "Next.js", "D3"],
          media: projectVideo(
            "/videos/sociopublico/nido.webm",
            "Nido project demo at Sociopúblico",
          ),
        },
      ],
    },
    {
      slug: "el-gato-y-la-caja",
      title: "El Gato y La Caja",
      subtitle: "Four years of impactful projects",
      intro:
        "Animations, visualizations, maps, and scrollytellings — stories with social meaning.",
      externalUrl: "https://elgatoylacaja.com/",
      projects: [
        {
          slug: "cet",
          title: "CET",
          url: "https://chicasentecnologia.org/futuro-programado/",
          subtitle:
            "Interactive scrollytelling on women in the technology world.",
          context:
            "CET asked us to build an interactive scrollytelling to analyze the situation of women in technology and understand where the gender gap in STEM comes from. I really enjoyed this project because, as a woman in tech, I think it's important to keep encouraging more women to pursue this career.",
          technologies: ["D3", "Scrollama", "React"],
          media: projectVideo(
            "/videos/eglc/cet.webm",
            "CET project demo at El Gato y La Caja",
          ),
        },
        {
          slug: "clacai",
          title: "CLACAI",
          url: "https://leyes-y-sombras.clacai.org/",
          subtitle:
            "Interactive scrollytelling on access to abortion rights in Latin America.",
          context:
            "CLACAI asked us to build an interactive scrollytelling to analyze access to abortion rights across Latin America. The project explores the nuances of abortion access in each country in the region.",
          technologies: ["Mapbox", "React", "Storytelling"],
          media: projectVideo(
            "/videos/eglc/clacai.webm",
            "CLACAI project demo at El Gato y La Caja",
          ),
        },
        {
          slug: "fundar",
          title: "Complejidad Económica Verde",
          url: "https://complejidadeconomicaverde.fund.ar/",
          subtitle:
            "Interactive scrollytelling on a green economic proposal for Argentina.",
          context:
            "Fundar wanted an interactive scrollytelling to tell the story of a green economic proposal for Argentina — a path for the country to develop industrially in sustainable products with complexity suited to its current industrial capacity.",
          technologies: ["D3", "Node", "React"],
          media: projectVideo(
            "/videos/eglc/fundar.webm",
            "Fundar project demo at El Gato y La Caja",
          ),
        },
        {
          slug: "lapoderosa",
          title: "La Poderosa",
          url: "https://lapoderosa.elgatoylacaja.com/",
          subtitle:
            "Interactive scrollytelling on access to services in vulnerable neighborhoods.",
          context:
            "La Poderosa analyzed access to basic services in vulnerable neighborhoods across the country and asked us to build an interactive scrollytelling to tell that story in a visual, dynamic way.",
          technologies: ["React", "Scrollama", "D3"],
          media: projectVideo(
            "/videos/eglc/lapoderosa.webm",
            "La Poderosa project demo at El Gato y La Caja",
          ),
        },
      ],
    },
    {
      slug: "otros",
      title: "Other",
      subtitle: "Projects with other teams and clients",
      intro:
        "Projects that don't fit the other categories but I still really enjoyed building.",
      projects: [
        {
          slug: "ldc",
          title: "LDC",
          url: "https://desupernova.github.io/ldc-graduates/",
          subtitle: "Interactive visualization to learn about the Cynefin framework.",
          context:
            "Together with De Supernova, we built an interactive visualization to learn about the Cynefin framework — a project aimed at informing society about the framework and promoting better project management.",
          technologies: ["React", "Next.js", "D3"],
          media: projectVideo(
            "/videos/otros/ldc.webm",
            "LDC project demo",
          ),
        },
        {
          slug: "unmanned",
          title: "Unmanned",
          url: "https://unmannedunited.com/",
          subtitle: "Landing page for Unmanned United.",
          context:
            "Unmanned United is a drone engineering company. I built their landing page to present their work and services.",
          technologies: ["React", "Next.js", "Tailwind CSS", "Docker"],
          media: projectVideo(
            "/videos/otros/unmanned.webm",
            "Unmanned project demo",
          ),
        },
      ],
    },
    {
      slug: "personales",
      title: "Personal",
      subtitle: "Experiments, curiosities, and things I do for fun",
      intro:
        "Projects with no brief or deadline — space to try ideas and play with data.",
      projects: [
        {
          slug: "spotify",
          title: "Spotify",
          url: "https://agustinanahas.github.io/spotify-wrapped/",
          subtitle: "Interactive visualization of the music I listen to.",
          context:
            "I didn't fully trust Spotify Wrapped, so I made my own visualizations. I downloaded my Spotify data and built views on my listening habits that Spotify wouldn't have offered otherwise.",
          technologies: ["Visualization", "D3"],
          media: projectVideo(
            "/videos/personales/spotify.webm",
            "Spotify project demo",
          ),
        },
        {
          slug: "mundial",
          title: "How much does it cost to be world champion?",
          url: "https://mundial.agustinanahas.com/",
          subtitle:
            "Interactive visualization on the cost of being world champion.",
          context:
            "How much does it cost to be world champion? is an interactive visualization comparing the cost of living when Argentina won the World Cup vs. this tournament (2026).",
          technologies: ["Visualization", "D3"],
          media: projectVideo(
            "/videos/personales/mundial.webm",
            "How much does it cost to be world champion? project demo",
          ),
        },
        {
          slug: "alquilista",
          title: "Alquilista",
          url: "https://agustinanahas.github.io/el-alquilista/",
          subtitle: "Interactive visualization on rent in Argentina.",
          context:
            "Alquilista is an interactive visualization on rent in Argentina in 2024. It analyzes the ability to rent an apartment in Buenos Aires based on salaries in Argentina.",
          technologies: ["Visualization", "D3"],
          media: projectVideo(
            "/videos/personales/alquilista.webm",
            "Alquilista project demo",
          ),
        },
      ],
    },
  ],

  knowledgeTags: [
    { label: "React", category: "Frontend" },
    { label: "Next.js", category: "Frontend" },
    { label: "TypeScript", category: "Frontend" },
    { label: "Tailwind CSS", category: "Frontend" },
    { label: "Git", category: "Version control" },
    { label: "Node", category: "Backend" },
    { label: "D3", category: "Visualization" },
    { label: "Mapbox", category: "Visualization" },
    { label: "Scrollama", category: "Narrative" },
    { label: "PHP", category: "Backend" },
    { label: "Symfony", category: "Backend" },
    { label: "Strapi", category: "Backend" },
    { label: "Python", category: "Backend" },
    { label: "Docker", category: "Infra" },
    { label: "N8N", category: "Infra" },
    { label: "CI/CD", category: "Infra" },
    { label: "PostgreSQL", category: "Data" },
    { label: "MySQL", category: "Data" },
  ],

  interests: [
    {
      title: "Film and reading",
      description: "I go to the movies a lot and read constantly. Stories are everywhere.",
    },
    {
      title: "Bikes and the city",
      description: "I get around by bike and I'm interested in urban planning and mobility.",
    },
    {
      title: "Crochet and playlists",
      description: "I crochet and have a Spotify playlist for every place and occasion.",
    },
  ],

  links: [
    {
      label: "m.agustina.nahas@gmail.com",
      url: "mailto:m.agustina.nahas@gmail.com",
      type: "email",
    },
    {
      label: "WhatsApp",
      url: "https://wa.me/541161846429",
      type: "external",
    },
    {
      label: "CV",
      url: "https://drive.google.com/file/d/1vdoQsdETEsShNxslPxht46Ak2NT-7iQl/view?usp=sharing",
      type: "external",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/agustina-nahas/",
      type: "social",
    },
    {
      label: "Twitter",
      url: "https://x.com/AgusNahas_",
      type: "social",
    },
  ],

  contact: {
    email: "m.agustina.nahas@gmail.com",
    message:
      "If you want to talk about a project, a story that needs telling, or just say hi — reach out by email or WhatsApp.",
  },

  images: [
    {
      id: "galileo-photo",
      type: "image",
      src: "/galileo.jpg",
      alt: "Galileo, a large 8-year-old cat",
      caption: "Galileo — the one who approves all my PRs.",
      placeholderLabel: "Editorial photograph",
      placement: "personal",
      width: 3024,
      height: 4032,
    },
  ],

  navigation: [
    { label: "About", href: "#sobre" },
    { label: "Work", href: "#experiencia" },
    { label: "Projects", href: "#proyectos" },
    { label: "Contact", href: "#contacto" },
  ],
};
