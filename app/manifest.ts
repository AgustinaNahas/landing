import type { MetadataRoute } from "next";
import { siteEs } from "@/content/index";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteEs.person.name,
    short_name: siteEs.person.name,
    description: siteEs.meta.description,
    start_url: "/",
    display: "browser",
    background_color: "#F7F4EE",
    theme_color: "#F7F4EE",
    lang: siteEs.meta.language,
    icons: [
      {
        src: "/image.png",
        sizes: "534x534",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
