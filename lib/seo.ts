import type { Metadata } from "next";
import type { SiteContent } from "@/lib/types";
import type { Locale } from "@/lib/locale";
import { getLocalePath } from "@/lib/locale";

export function createSiteMetadata(site: SiteContent, locale: Locale): Metadata {
  const { meta, person } = site;
  const siteUrl = meta.siteUrl.replace(/\/$/, "");
  const canonicalPath = getLocalePath(locale);
  const canonical = canonicalPath === "/" ? siteUrl : `${siteUrl}${canonicalPath}`;
  const alternateLocale = locale === "es" ? "en_US" : "es_AR";
  const shareImage = {
    url: meta.og.image,
    width: meta.og.imageWidth,
    height: meta.og.imageHeight,
    alt: meta.og.imageAlt,
    type: "image/jpeg" as const,
  };

  return {
    metadataBase: new URL(`${siteUrl}/`),
    applicationName: meta.og.siteName,
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
      canonical,
      languages: {
        es: siteUrl,
        en: `${siteUrl}/en/`,
        "x-default": siteUrl,
      },
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
      alternateLocale: [alternateLocale],
      url: canonical,
      siteName: meta.og.siteName,
      title: meta.og.title,
      description: meta.og.description,
      images: [shareImage],
    },
    twitter: {
      card: meta.twitter.card,
      site: meta.twitter.site,
      creator: meta.twitter.creator,
      title: meta.twitter.title,
      description: meta.twitter.description,
      images: shareImage,
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48" },
        { url: "/image.png", type: "image/png", sizes: "534x534" },
      ],
      apple: "/apple-touch-icon.png",
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
        image: `${meta.siteUrl.replace(/\/$/, "")}${meta.og.image}`,
        description: person.role,
        jobTitle: meta.jobTitle,
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
