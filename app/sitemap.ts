import type { MetadataRoute } from "next";
import { siteEs } from "@/content/index";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteEs.meta.siteUrl.replace(/\/$/, "");
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/en/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
