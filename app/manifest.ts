import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.person.name,
    short_name: site.person.name,
    description: site.meta.description,
    start_url: "/",
    display: "browser",
    background_color: "#F7F4EE",
    theme_color: "#F7F4EE",
    lang: site.meta.language,
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
