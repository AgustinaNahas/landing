import type { MediaItem, SiteContent } from "@/lib/types";

function projectVideo(src: string, alt: string): MediaItem {
  return {
    type: "video",
    src,
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
      image: "/perfil.jpg",
      imageAlt: "Agustina Nahas — desarrolladora frontend",
      imageWidth: 2231,
      imageHeight: 2231,
      siteName: "Agustina Nahas",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Agustina Nahas — Desarrolladora frontend",
      description:
        "Visualización de datos, mapas, scrollytellings y proyectos con impacto social.",
      image: "/perfil.jpg",
      imageAlt: "Agustina Nahas — desarrolladora frontend",
    },
  },

  person: {
    name: "Agustina Nahas",
    role:
      "Desarrolladora desde 2016. Trabajo con Node, Next y React, y me adapto a lo que haga falta.",
    tagline:
      "De chiquita quería ser escritora. Como no se me daba la ficción, resolví empezar a escribir código.",
    intention:
      "Siempre hay una historia buscando ser contada.",
    avatar: {
      src: "/perfil.jpg",
      alt: "Agustina Nahas sonriendo, retrato en un balcón",
      width: 2231,
      height: 2231,
    },
  },

  manifesto: {
    quote:
      "Las historias que más me gusta contar son aquellas que siento que pueden tener un impacto social.",
    body:
      "Me interesan la desigualdad (género, clase, capacidad), el acceso a la información, la sustentabilidad, la planificación urbana y la movilidad, entre otros. Creo que contar una historia implica, a veces, construir todo el sistema que nos permita contarla.",
  },

  editorialNotes: [
    {
      id: "degree",
      text: "Ingeniería en Sistemas de Información · FRBA UTN · casi recibida",
      attachTo: "about",
    },
    {
      id: "galileo",
      text: "Galileo · 8 años · se autopercibe gatito bebé",
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
    viewAllInCollection: "Ver todos en Notion",
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

  ui: {
    imagePlaceholder: "Fotografía editorial",
    videoPlaceholderHint: "Video animado · autoplay al entrar en pantalla",
  },

  about: {
    greeting:
      "De chiquita quería ser escritora. Como no se me daba la ficción, resolví empezar a escribir código.",
    code:
      "Soy desarrolladora desde el 2016. Trabajo sobre todo con Node, Next y React pero me adapto a lo que sea necesario. Uso mucho D3, Mapbox, Scrollama y cualquier librería que nos deje contar una historia de manera vistosa y divertida. Los proyectos que más disfruto son los que me permiten hacer animaciones, visualizaciones interactivas de datos, mapas y scrollytellings.\n\nFrontend o backend? Yo los quiero a los dos. Tengo experiencia con PHP (Symfony, Laravel y CakePHP) y una pizca de Python. Si tenemos que hacer queries en una base de datos (MySQL, MariaDB, PostgreSQL, MSSQL)… las hacemos!\n\nCreo que contar una historia implica a veces construir todo el sistema que nos permita contarla. Por eso también tengo experiencia en manejo de servidores, procesos de deploy (CI/CD) y Docker.",
    stories:
      "Siempre hay una historia buscando ser contada. Las historias que más me gusta contar a mí son aquellas que siento que pueden tener un impacto social. Los temas que más me interesa son la desigualdad (género, clase, capacidad), el acceso a la información, la sustentabilidad, la planificación urbana y la movilidad, entre otros.",
    people:
      "Una buena historia está construida por personas.\n\nMis primeros pasos como dev fueron en el equipo de Desarrollo de Soluciones Informáticas de la FRBA UTN. Aprendí muchísimo y pudimos construir muchos sistemas internos para la facultad: un sistema de becas, un sistema de empadronamiento estudiantil, el sistema de toma de asistencia, entre otros.\n\nPude participar en cuatro años increíbles como desarrolladora del equipo de El Gato y La Caja, donde hicimos proyectos de muchísimo impacto. Algo muy mágico de El Gato y La Caja fue poder participar de iniciativas que me conmovieron y me movilizaron, y tienen —tienen— que ver con la persona que soy ahora.\n\nEn la actualidad trabajo como desarrolladora en Sociopúblico, una agencia de comunicación que busca mejorar la vida pública.",
    personal:
      "Soy una persona muy inquieta. Me gusta mucho ir al cine, andar en bicicleta, leo muchísimo y tejo crochet. Tengo una playlist de Spotify para todo lugar y ocasión. Estudio Ingeniería en Sistemas de Información y estoy muy cerca de recibirme. Tengo una mascota que se llama Galileo y se autopercibe gatito bebé pero tiene 8 años y es gigante.",
  },

  experience: [
    {
      period: "Actualidad",
      role: "Desarrolladora",
      organization: "Sociopúblico",
      description:
        "Trabajo en una agencia de comunicación que busca mejorar la vida pública. Desarrollo proyectos digitales donde la información, la narrativa y el impacto social se cruzan.",
    },
    {
      period: "4 años",
      role: "Desarrolladora",
      organization: "El Gato y La Caja",
      description:
        "Participé de proyectos de muchísimo impacto en un equipo que me marcó. Pude construir iniciativas que me conmovieron y me movilizaron — y que tienen que ver con la persona que soy ahora.",
    },
    {
      period: "Primeros pasos",
      role: "Desarrolladora",
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
      projects: [
        {
          slug: "child-atlas",
          title: "Child Atlas",
          url: "https://www.childatlas.org/",
          subtitle: "Portal de datos sobre la situación mundial de niños y niñas para Save The Children.",
          context:
            "Child Atlas es un portal de datos sobre la situación mundial de niños y niñas para Save The Children. Es un proyecto que busca informar a la sociedad sobre la situación de los niños y niñas en el mundo y promover la protección de sus derechos.",
          approach:
            "Portal construido con React, Next.js y D3.js. El portal es una herramienta que permite a los usuarios explorar los datos de la situación mundial de niños y niñas para Save The Children.",
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
          subtitle: "Mapa interactivo de accesibilidad escolar en Argentina.  ",
          context: "Escuelas es un mapa interactivo de accesibilidad escolar en Argentina. Es un proyecto que busca informar a la sociedad sobre la accesibilidad de las escuelas en el país y promover la mejora de la accesibilidad.",
          approach: "Mapa construido con React, Next.js y Mapbox. El mapa es una herramienta que permite a los usuarios explorar los datos de la accesibilidad de las escuelas en el país.",
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
          context: "Scrollytelling interactivo sobre el rol de las mujeres en organizacione multilaterales para la organización GWL. Es un proyecto que busca informar a la sociedad sobre el rol de las mujeres en las organizaciones multilaterales y promover la igualdad de género.",
          approach: "Scrollytelling construido con React, Next.js y D3.js. El scrollytelling es una herramienta que permite a los usuarios explorar la historia de las mujeres en las organizaciones multilaterales.",
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
          context: "Nido es un scrollytelling interactivo sobre el índice NIDO. Es un proyecto que busca informar a la sociedad sobre el índice NIDO y promover la mejora de la educación en el país.",
          approach: "Enfoque y tu aporte al proyecto.",
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
      projects: [
        {
          slug: "cet",
          title: "CET",
          url: "https://chicasentecnologia.org/futuro-programado/",
          subtitle: "Scrollytelling interactivo sobre mujeres en el mundo de la tecnología.",
          context:
            "Una de las piezas que más disfrutaste en El Gato y La Caja — qué historia contaba y por qué te marcó.",
          approach:
            "Cómo la construiste: scrollytelling, mapa, visualización interactiva, etc.",
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
          subtitle: "Completar en content/site.ts",
          context: "Contexto del proyecto CLACAI.",
          approach: "Tu enfoque técnico y narrativo.",
          technologies: ["Mapbox", "React", "Storytelling"],
          media: projectVideo(
            "/videos/eglc/clacai.webm",
            "Demo del proyecto CLACAI en El Gato y La Caja",
          ),
        },
        {
          slug: "fundar",
          title: "Fundar",
          url: "https://complejidadeconomicaverde.fund.ar/",
          subtitle: "Completar en content/site.ts",
          context: "Contexto del proyecto Fundar.",
          approach: "Qué construiste y qué aprendiste.",
          technologies: ["D3", "Node", "Visualización"],
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
          context: "Contexto del proyecto La Poderosa.",
          approach: "Tu enfoque técnico y narrativo.",
          technologies: ["React", "Scrollama", "Storytelling"],
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
        "Trabajos que no entran en las otras categorías pero que igual disfruté mucho hacer.",
      projects: [
        {
          slug: "ldc",
          title: "LDC",
          url: "https://desupernova.github.io/ldc-graduates/",
          subtitle: "Completar en content/site.ts",
          context: "Contexto del proyecto.",
          approach: "Tu enfoque y aporte.",
          technologies: ["React", "Node"],
          media: projectVideo(
            "/videos/otros/ldc.webm",
            "Demo del proyecto LDC",
          ),
        },
        {
          slug: "unmanned",
          title: "Unmanned",
          url: "https://unmannedunited.com/",
          subtitle: "Completar en content/site.ts",
          context: "Contexto del proyecto Unmanned.",
          approach: "Tu enfoque y aporte.",
          technologies: ["React", "Visualización"],
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
          subtitle: "Completar en content/site.ts",
          context: "Contexto del proyecto Spotify.",
          approach: "Enfoque y aprendizajes.",
          technologies: ["Visualización", "D3"],
          media: projectVideo(
            "/videos/otros/spotify.webm",
            "Demo del proyecto Spotify",
          ),
        },
        {
          slug: "mundial",
          title: "¿Cuánto cuesta ser campeón del mundo?",
          url: "https://mundial.agustinanahas.com/",
          subtitle: "Visualización interactiva sobre el costo de ser campeón del mundo.",
          context: "¿Cuánto cuesta ser campeón del mundo? es una visualización interactiva sobre el costo de ser campeón del mundo. Es un proyecto que busca informar a la sociedad sobre el costo de ser campeón del mundo y promover la igualdad de género.",
          approach: "Enfoque y aprendizajes.",
          technologies: ["Visualización", "D3"],
        },
      ],
    },
  ],

  knowledgeTags: [
    { label: "React", category: "Frontend" },
    { label: "Next.js", category: "Frontend" },
    { label: "Node", category: "Backend" },
    { label: "D3", category: "Visualización" },
    { label: "Mapbox", category: "Visualización" },
    { label: "Scrollama", category: "Narrativa" },
    { label: "PHP", category: "Backend" },
    { label: "Symfony", category: "Backend" },
    { label: "Laravel", category: "Backend" },
    { label: "Python", category: "Backend" },
    { label: "Docker", category: "Infra" },
    { label: "CI/CD", category: "Infra" },
    { label: "PostgreSQL", category: "Datos" },
    { label: "MySQL", category: "Datos" },
  ],

  interests: [
    {
      title: "Cine y lectura",
      description: "Voy mucho al cine y leo muchísimo — las historias no se quedan solo en la pantalla del código.",
    },
    {
      title: "Bicicleta y ciudad",
      description: "Me muevo en bici y me interesan la planificación urbana y la movilidad.",
    },
    {
      title: "Crochet y playlists",
      description: "Tejo crochet y tengo una playlist de Spotify para todo lugar y ocasión.",
    },
    {
      title: "Galileo",
      description:
        "Mi mascota se llama Galileo, se autopercibe gatito bebé, tiene 8 años y es gigante.",
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
      url: "https://drive.google.com/file/d/1c21TBxq5jyBUAujEoeafKvnjkdJTlMo-/view?usp=sharing",
      type: "external",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/agustina-nahas/",
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
        "Galileo — se autopercibe gatito bebé, tiene 8 años y es gigante.",
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
