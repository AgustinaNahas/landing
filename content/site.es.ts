import type { MediaItem, SiteContent } from "@/lib/types";

function projectVideo(src: string, alt: string): MediaItem {
  return {
    type: "video",
    src,
    poster: src.replace(/\.webm$/, ".poster.webp"),
    alt,
    caption: "",
    placeholderLabel: alt,
    placeholderHint: "Video animado · autoplay al entrar en pantalla",
  };
}

export const site: SiteContent = {
  meta: {
    title: "Agustina Nahas — Desarrolladora frontend",
    description:
      "Desarrolladora frontend desde 2016. Visualización de datos, mapas, scrollytellings y experiencias digitales con impacto social. Node, React, Next.js, D3.",
    siteUrl: "https://agustinanahas.com",
    locale: "es_AR",
    language: "es-AR",
    jobTitle: "Desarrolladora frontend",
    author: "Agustina Nahas",
    keywords: [
      "Agustina Nahas",
      "desarrolladora frontend",
      "visualización de datos",
      "data visualization",
      "scrollytelling",
      "React",
      "Next.js",
      "D3",
      "Mapbox",
      "storytelling digital",
      "diseño de información",
      "desarrollo web Argentina",
    ],
    og: {
      title: "Agustina Nahas — Desarrolladora frontend",
      description:
        "Construyo experiencias digitales que ayudan a comprender información compleja. Visualizaciones, mapas interactivos y narrativas con código.",
      image: "/og.jpg",
      imageAlt: "Agustina Nahas — desarrolladora frontend",
      imageWidth: 1200,
      imageHeight: 630,
      siteName: "Agustina Nahas",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Agustina Nahas — Desarrolladora frontend",
      description:
        "Visualización de datos, mapas, scrollytellings y proyectos con impacto social.",
      image: "/og.jpg",
      imageAlt: "Agustina Nahas — desarrolladora frontend",
      site: "@AgustinaNahas",
      creator: "@AgustinaNahas",
    },
  },

  person: {
    name: "Agustina Nahas",
    role:
      "Desarrolladora desde 2016. Trabajo con Node, Next y React, y me adapto a lo que haga falta.",
    tagline: "",
    intention:
      "Siempre hay una historia escondida en los datos.",
    avatar: {
      src: "/perfil.jpg",
      alt: "Agustina Nahas sonriendo, retrato en un balcón",
      width: 2231,
      height: 2231,
    },
  },

  editorialNotes: [
    {
      id: "degree",
      text: "Desarrolladora frontend. Fan de las visualizaciones de datos y los scrollytellings.",
      attachTo: "about",
    },
    {
      id: "experience",
      text: "Algunos lugares por los que pasé y marcaron mi experiencia profesional.",
      attachTo: "experience",
    },
  ],

  labels: {
    about: "Sobre mí",
    aboutBlocks: {
      greeting: "Hola, soy Agus",
      code: "Sobre el código",
      stories: "Sobre las historias",
      people: "Sobre las personas",
      personal: "Sobre mí",
    },
    experience: "Experiencia",
    projects: "Proyectos",
    projectsIntro:
      "Algunos de los proyectos que disfruté mucho hacer.",
    knowledge: "Conocimiento",
    knowledgeIntro:
      "Herramientas y territorios técnicos donde suelo moverme — sin pretender ser una lista exhaustiva.",
    interests: "También me importa",
    contact: "Contacto",
    contactCta: "Escribime →",
    visitProject: "Visitar proyecto",
    viewAllInCollection: "Conocer más",
    projectSections: {
      context: "Contexto",
      problem: "Problema",
      approach: "Enfoque",
      outcome: "Resultado",
      learnings: "Aprendizajes",
      technologies: "Tecnologías",
    },
  },

  footer: {
    tagline: "Siempre hay una historia buscando ser contada.",
  },

  accessibility: {
    skipToContent: "Saltar al contenido",
    mainNav: "Navegación principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    mobileMenu: "Menú de navegación",
    knowledgeTags: "Etiquetas de conocimiento",
    professionalTimeline: "Línea de tiempo profesional",
    editorialNote: "Nota editorial",
  },

  ui: {
    imagePlaceholder: "Fotografía editorial",
    videoPlaceholderHint: "Video animado · autoplay al entrar en pantalla",
  },

  about: {
    greeting:
      "De chiquita quería ser escritora. Como no se me daba la ficción, resolví empezar a escribir código.",
    code:
      "Soy desarrolladora desde el 2016. Trabajo sobre todo con Node, Next y React pero me adapto a lo que sea necesario. Uso mucho D3, Mapbox, Scrollama y cualquier librería que nos deje contar una historia de manera vistosa y divertida. Los proyectos que más disfruto son los que me permiten hacer animaciones, visualizaciones interactivas de datos, mapas y scrollytellings.\n\nFrontend o backend? Yo los quiero a los dos. Tengo experiencia con PHP y Python. Si tenemos que hacer queries en una base de datos (MySQL, MariaDB, PostgreSQL, MSSQL)… las hacemos!\n\nCreo que contar una historia implica a veces construir todo el sistema que nos permita contarla. Por eso también tengo experiencia en manejo de servidores, procesos de deploy (CI/CD) y Docker.",
    stories:
      "Siempre hay una historia buscando ser contada. Las historias que más me gusta contar a mí son aquellas que siento que pueden tener un impacto social. Los temas que más me interesa son la desigualdad (género, clase, capacidad), el acceso a la información, la sustentabilidad, la planificación urbana y la movilidad, entre otros.",
    people:
      "Una buena historia está construida por personas.\n\nMis primeros pasos como dev fueron en el equipo de Desarrollo de Soluciones Informáticas de la FRBA UTN. Aprendí muchísimo y pudimos construir muchos sistemas internos para la facultad: un sistema de becas, un sistema de empadronamiento estudiantil, el sistema de toma de asistencia, entre otros.\n\nPude participar en cuatro años increíbles como desarrolladora del equipo de El Gato y La Caja, donde hicimos proyectos de muchísimo impacto. Algo muy mágico de El Gato y La Caja fue poder participar de iniciativas que me conmovieron y me movilizaron, y tienen —tienen— que ver con la persona que soy ahora.\n\nEn la actualidad trabajo como desarrolladora en Sociopúblico, una agencia de comunicación que busca mejorar la vida pública.",
    personal:
      "Soy una persona muy inquieta. Me gusta mucho ir al cine y andar en bicicleta. Leo muchísimo y tejo crochet. Tengo una playlist de Spotify para todo lugar y ocasión. Soy casi ingeniera en Sistemas de Información. Fan de la Patria, de Güemes (el procer!) y de mi gato Galileo",
  },

  experience: [
    {
      period: "2022 - actualidad",
      role: "Desarrolladora",
      organization: "Sociopúblico",
      description:
        "Trabajo en una agencia de comunicación que busca mejorar la vida pública. Desarrollo proyectos digitales donde la información, la narrativa y el impacto social se cruzan.",
    },
    {
      period: "2019 - 2023",
      role: "Desarrolladora",
      organization: "El Gato y La Caja",
      description:
        "Participé de proyectos de muchísimo impacto en un equipo que me marcó. Pude construir iniciativas que me conmovieron y me movilizaron — y que tienen que ver con la persona que soy ahora.",
    },
    {
      period: "2017 - 2020",
      role: "Desarrolladora fullstack",
      organization: "Desarrollo de Soluciones Informáticas · FRBA UTN",
      description:
        "Aprendí muchísimo construyendo sistemas internos para la facultad: becas, empadronamiento estudiantil, toma de asistencia, entre otros. Ahí empecé a entender que el código también es una forma de contar — y de servir.",
      note: "Desarrolladora desde 2016",
    },
  ],

  projectCollections: [
    {
      slug: "sociopublico",
      title: "Sociopúblico",
      subtitle: "Agencia de comunicación · trabajo actual",
      intro:
        "Proyectos digitales donde la información, la narrativa y la vida pública se cruzan.",
      externalUrl: "https://www.sociopublico.com/",
        projects: [
        {
          slug: "child-atlas",
          title: "Child Atlas",
          url: "https://www.childatlas.org/",
          subtitle: "Portal de datos sobre la situación mundial de niños y niñas para Save The Children.",
          context:
            "Desde Save The Children nos propusieron generar un portal de datos sobre la situación mundial de niños y niñas para informar a la sociedad sobre la situación de los niños y niñas en el mundo y promover la protección de sus derechos. Generamos una home, un atlas interactivo y perfiles de paises para ver más de 100 indicadores sobre la situación de los niños y niñas en el mundo.",
          technologies: ["React", "Next.js", "D3"],
          media: projectVideo(
            "/videos/sociopublico/child-atlas.webm",
            "Demo de Child Atlas en Sociopúblico",
          ),
        },
        {
          slug: "escuelas",
          title: "Escuelas",
          url: "https://fractalargentina.org/herramienta/mapa-de-accesibilidad-a-las-escuelas-argentinas/",
          subtitle: "Mapa interactivo de accesibilidad a instituciones educativas en Argentina.",
          context: "Desde Fractal (una división de la Fundación B&B) buscaban informar a la sociedad sobre el tiempo de viaje que tienen los niños y niñas para llegar a las escuelas en el país y promover la mejora de la accesibilidad hacia los establecimientos educativos.",
          technologies: ["React", "Next.js", "Mapbox"],
          media: projectVideo(
            "/videos/sociopublico/escuelas.webm",
            "Demo del proyecto Escuelas en Sociopúblico",
          ),
        },
        {
          slug: "gwl",
          title: "GWL",
          url: "https://gwlvoices.org/",
          subtitle: "Scrollytelling interactivo sobre el rol de las mujeres en organizacione multilaterales.",
          context: "Desde GWL nos propusieron generar un scrollytelling interactivo que permitiera contar la historia de las mujeres en las organizaciones multilaterales de manera visual y dinámica. ",
          technologies: ["React", "Next.js", "D3"],
          media: projectVideo(
            "/videos/sociopublico/gwl.webm",
            "Demo del proyecto GWL en Sociopúblico",
          ),
        },
        {
          slug: "nido",
          title: "Nido",
          subtitle: "Scrollytelling interactivo sobre el índice NIDO.",
          context: "Desde Fractal (una división de la Fundación B&B) nos propusieron generar un scrollytelling interactivo que permitiera contar la historia del índice NIDO de manera visual y dinámica. El índice NIDO es un índice que mide cuatro dimensiones: acceso a la educación, salud, acceso a espacios verdes y contexto. A través de este scrollytelling, pudimos contar la historia de cada una de estas dimensiones y cómo este índice se relaciona con la vida cotidiana de los niños y niñas en el país.",
          technologies: ["React", "Next.js", "D3"],
          media: projectVideo(
            "/videos/sociopublico/nido.webm",
            "Demo del proyecto Nido en Sociopúblico",
          ),
        },
      ],
    },
    {
      slug: "el-gato-y-la-caja",
      title: "El Gato y La Caja",
      subtitle: "Cuatro años de proyectos con impacto",
      intro:
        "Animaciones, visualizaciones, mapas y scrollytellings — historias con significado social.",
      externalUrl: "https://elgatoylacaja.com/",
      projects: [
        {
          slug: "cet",
          title: "CET",
          url: "https://chicasentecnologia.org/futuro-programado/",
          subtitle: "Scrollytelling interactivo sobre mujeres en el mundo de la tecnología.",
          context:
            "Desde CET nos propusieron generar un scrollytelling interactivo que permitiera analizar la situación de las mujeres en el mundo de la tecnología, y entender de dónde sale la brecha de género de las mujeres en STEM. Disfruté muchísimo este proyecto por lo importante que me parece como mujer en tecnología seguir incentivando a más mujeres a seguir esta carrera.",
          technologies: ["D3", "Scrollama", "React"],
          media: projectVideo(
            "/videos/eglc/cet.webm",
            "Demo del proyecto CET en El Gato y La Caja",
          ),
        },
        {
          slug: "clacai",
          title: "CLACAI",
          url: "https://leyes-y-sombras.clacai.org/",
          subtitle: "Scrollytelling interactivo sobre el acceso al derecho al aborto en Latinoamérica.",
          context: "Desde CLACAI nos propusieron generar un scrollytelling interactivo que permitiera analizar la situación del acceso al derecho al aborto en Latinoamérica. Es un proyecto que busca conocer los matices del acceso al aborto en cada país de la región.",
          technologies: ["Mapbox", "React", "Storytelling"],
          media: projectVideo(
            "/videos/eglc/clacai.webm",
            "Demo del proyecto CLACAI en El Gato y La Caja",
          ),
        },
        {
          slug: "fundar",
          title: "Complejidad Económica Verde",
          url: "https://complejidadeconomicaverde.fund.ar/",
          subtitle: "Scrollytelling interactivo sobre una propuesta económica verde para Argentina.",
          context: "Desde Fundar buscaban generar un scrollytelling interactivo que permitiera contar la historia de una propuesta económica verde para Argentina. Es una propuesta económica para que Argentina pueda desarrollarse industrialmente en productos que sean sustentables pero que aparte tengan una complejidad asequible en función de la capacidad industrial actual.",
          technologies: ["D3", "Node", "React"],
          media: projectVideo(
            "/videos/eglc/fundar.webm",
            "Demo del proyecto Fundar en El Gato y La Caja",
          ),
        },
        {
          slug: "lapoderosa",
          title: "La Poderosa",
          url: "https://lapoderosa.elgatoylacaja.com/",
          subtitle: "Scrollytelling interactivo sobre accesos a servicios en barrios vulnerables.",
          context: "En La Poderosa hicieron un análisis sobre el acceso a servicios básicos en barrios vulnerables del país y nos propusieron generar un scrollytelling interactivo que permitiera contar esta historia de manera visual y dinámica. ",
          technologies: ["React", "Scrollama", "D3"],
          media: projectVideo(
            "/videos/eglc/lapoderosa.webm",
            "Demo del proyecto La Poderosa en El Gato y La Caja",
          ),
        },
      ],
    },
    {
      slug: "otros",
      title: "Otros",
      subtitle: "Proyectos con otros equipos y clientes",
      intro:
        "Proyectos que no entran en las otras categorías pero que igual disfruté mucho hacer.",
      projects: [
        {
          slug: "ldc",
          title: "LDC",
          url: "https://desupernova.github.io/ldc-graduates/",
          subtitle: "Visualización interactiva para aprender sobre el marco Cynefin.",
          context: "Junto con De Supernova, construimos una visualización interactiva para aprender sobre el marco Cynefin. Es un proyecto que busca informar a la sociedad sobre el marco Cynefin y promover la mejora de la gestión de proyectos.",
          technologies: ["React", "Next.js", "D3"],
          media: projectVideo(
            "/videos/otros/ldc.webm",
            "Demo del proyecto LDC",
          ),
        },
        {
          slug: "unmanned",
          title: "Unmanned",
          url: "https://unmannedunited.com/",
          subtitle: "Landing del proyecto Unmanned United.",
          context: "Unmanned United es una empresa de ingeniería de drones. Construí su landing page para presentar su trabajo y servicios.",
          technologies: ["React", "Next.js", "Tailwind CSS", "Docker"],
          media: projectVideo(
            "/videos/otros/unmanned.webm",
            "Demo del proyecto Unmanned",
          ),
        },
      ],
    },
    {
      slug: "personales",
      title: "Personales",
      subtitle: "Experimentos, curiosidades y cosas que hago por placer",
      intro:
        "Proyectos sin brief ni deadline — espacio para probar ideas y jugar con datos.",
      projects: [
        {
          slug: "spotify",
          title: "Spotify",
          url: "https://agustinanahas.github.io/spotify-wrapped/",
          subtitle: "Visualización interactiva sobre la música que escucho.",
          context: "No confiaba mucho en el Spotify Wrapped, y decidí hacer mis propias visualizaciones. Me bajé la data de spotify y generé visualizaciones sobre la música que escucho que Spotify no me hubiese ofrecido de otra manera.",
          technologies: ["Visualización", "D3"],
          media: projectVideo(
            "/videos/personales/spotify.webm",
            "Demo del proyecto Spotify",
          ),
        },
        {
          slug: "mundial",
          title: "¿Cuánto cuesta ser campeón del mundo?",
          url: "https://mundial.agustinanahas.com/",
          subtitle: "Visualización interactiva sobre el costo de ser campeón del mundo.",
          context: "¿Cuánto cuesta ser campeón del mundo? es una visualización interactiva sobre el costo de vida cuando Argentina salió campeón del mundo vs en este mundial (2026).",
          technologies: ["Visualización", "D3"],
          media: projectVideo(
            "/videos/personales/mundial.webm",
            "Demo del proyecto ¿Cuánto cuesta ser campeón del mundo?",
          ),
        },
        {
          slug: "alquilista",
          title: "Alquilista",
          url: "https://agustinanahas.github.io/el-alquilista/",
          subtitle: "Visualización interactiva sobre el alquiler en Argentina.",
          context: "Alquilista es una visualización interactiva sobre el alquiler en Argentina en 2024. Se busca analizar la capacidad de alquilar un depto en CABA en función de los sueldos en Argentina.",
          technologies: ["Visualización", "D3"],
          media: projectVideo(
            "/videos/personales/alquilista.webm",
            "Demo del proyecto Alquilista",
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
    { label: "Git", category: "Versionado" },
    { label: "Node", category: "Backend" },
    { label: "D3", category: "Visualización" },
    { label: "Mapbox", category: "Visualización" },
    { label: "Scrollama", category: "Narrativa" },
    { label: "PHP", category: "Backend" },
    { label: "Symfony", category: "Backend" },
    { label: "Strapi", category: "Backend" },
    { label: "Python", category: "Backend" },
    { label: "Docker", category: "Infra" },
    { label: "N8N", category: "Infra" },
    { label: "CI/CD", category: "Infra" },
    { label: "PostgreSQL", category: "Datos" },
    { label: "MySQL", category: "Datos" },
  ],

  interests: [
    {
      title: "Cine y lectura",
      description: "Voy mucho al cine y leo muchísimo. Las historias están en todas partes.",
    },
    {
      title: "Bicicleta y ciudad",
      description: "Me muevo en bici y me interesan la planificación urbana y la movilidad.",
    },
    {
      title: "Crochet y playlists",
      description: "Tejo crochet y tengo una playlist de Spotify para todo lugar y ocasión.",
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
      "Si querés charlar sobre un proyecto, una historia que haya que contar o simplemente pasar a saludar — escribime por mail o WhatsApp.",
  },

  images: [
    {
      id: "galileo-photo",
      type: "image",
      src: "/galileo.jpg",
      alt: "Galileo, gato grande de 8 años",
      caption:
        "Galileo — el que me aprueba todos los PRs.",
      placeholderLabel: "Fotografía editorial",
      placement: "personal",
      width: 3024,
      height: 4032,
    },
  ],

  navigation: [
    { label: "Sobre", href: "#sobre" },
    { label: "Trabajo", href: "#experiencia" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ],
};
