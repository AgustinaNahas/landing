import type { MetadataRoute } from "next";
import { siteEs } from "@/content/index";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = siteEs.meta.siteUrl.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
