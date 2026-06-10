import type { SiteContent } from "@/lib/types";
import type { Locale } from "@/lib/locale";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

interface SiteShellProps {
  site: SiteContent;
  locale: Locale;
  children: React.ReactNode;
}

export function SiteShell({ site, locale, children }: SiteShellProps) {
  return (
    <>
      <JsonLd site={site} />
      <a href="#contenido" className="skipLink">
        {site.accessibility.skipToContent}
      </a>
      <SiteHeader
        name={site.person.name}
        navigation={site.navigation}
        locale={locale}
        accessibility={site.accessibility}
      />
      {children}
      <SiteFooter name={site.person.name} tagline={site.footer.tagline} />
    </>
  );
}
