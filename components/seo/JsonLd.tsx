import { createPersonJsonLd } from "@/lib/seo";
import type { SiteContent } from "@/lib/types";

interface JsonLdProps {
  site: SiteContent;
}

export function JsonLd({ site }: JsonLdProps) {
  const data = createPersonJsonLd(site);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
