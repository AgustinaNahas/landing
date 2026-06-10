import { getSiteContent } from "@/content/index";
import { SiteShell } from "@/components/layout/SiteShell";
import { HomeSections } from "@/components/sections/HomeSections";

export default function EnHome() {
  const site = getSiteContent("en");

  return (
    <SiteShell site={site} locale="en">
      <HomeSections site={site} />
    </SiteShell>
  );
}
