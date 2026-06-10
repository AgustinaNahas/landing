import type { Metadata } from "next";
import type { SiteContent } from "@/lib/types";

export function createSiteMetadata(site: SiteContent): Metadata {
  const { meta, person, links } = site;
  const siteUrl = meta.siteUrl;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: meta.title,
      template: `%s · ${person.name}`,
    },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: meta.author, url: siteUrl }],
    creator: meta.author,
    publisher: meta.author,
    category: "technology",
    alternates: {
      canonical: siteUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: meta.og.type,
      locale: meta.locale,
      url: siteUrl,
      siteName: meta.og.siteName,
      title: meta.og.title,
      description: meta.og.description,
      images: [
        {
          url: meta.og.image,
          width: meta.og.imageWidth,
          height: meta.og.imageHeight,
          alt: meta.og.imageAlt,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: meta.twitter.card,
      title: meta.twitter.title,
      description: meta.twitter.description,
      images: {
        url: meta.twitter.image,
        alt: meta.twitter.imageAlt,
      },
      creator: meta.twitter.creator,
    },
    other: {
      "og:locale:alternate": "en_US",
    },
    icons: {
      icon: "/favicon.ico",
    },
    manifest: "/manifest.webmanifest",
  };
}

export function createPersonJsonLd(site: SiteContent) {
  const { meta, person, links } = site;

  const sameAs = links
    .filter((link) => link.type !== "email")
    .map((link) => link.url);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${meta.siteUrl}/#website`,
        url: meta.siteUrl,
        name: meta.og.siteName,
        description: meta.description,
        inLanguage: meta.language,
        publisher: { "@id": `${meta.siteUrl}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${meta.siteUrl}/#person`,
        name: person.name,
        url: meta.siteUrl,
        image: `${meta.siteUrl}${meta.og.image}`,
        description: person.role,
        jobTitle: "Desarrolladora frontend",
        knowsAbout: meta.keywords,
        sameAs,
      },
      {
        "@type": "ProfilePage",
        "@id": `${meta.siteUrl}/#profile`,
        url: meta.siteUrl,
        name: meta.title,
        description: meta.description,
        inLanguage: meta.language,
        isPartOf: { "@id": `${meta.siteUrl}/#website` },
        about: { "@id": `${meta.siteUrl}/#person` },
        mainEntity: { "@id": `${meta.siteUrl}/#person` },
      },
    ],
  };
}
