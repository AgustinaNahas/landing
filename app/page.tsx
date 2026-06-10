import { getSiteContent } from "@/content/index";
import { SiteShell } from "@/components/layout/SiteShell";
import { HomeSections } from "@/components/sections/HomeSections";

export default function Home() {
  const site = getSiteContent("es");

  return (
    <SiteShell site={site} locale="es">
      <HomeSections site={site} />
    </SiteShell>
  );
}
