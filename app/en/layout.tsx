import { getSiteContent } from "@/content/index";
import { createSiteMetadata } from "@/lib/seo";
import { LocaleHtml } from "@/components/layout/LocaleHtml";

export const metadata = createSiteMetadata(getSiteContent("en"), "en");

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LocaleHtml locale="en" />
      {children}
    </>
  );
}
