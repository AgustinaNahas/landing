import { createPersonJsonLd } from "@/lib/seo";
import { site } from "@/content/site";

export function JsonLd() {
  const data = createPersonJsonLd(site);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
