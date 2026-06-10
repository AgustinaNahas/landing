import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { site } from "@/content/site";
import { createSiteMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createSiteMetadata(site);

export const viewport: Viewport = {
  themeColor: "#F7F4EE",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={site.meta.language} className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <JsonLd />
        <a href="#contenido" className="skipLink">
          Saltar al contenido
        </a>
        <SiteHeader name={site.person.name} navigation={site.navigation} />
        {children}
        <SiteFooter name={site.person.name} tagline={site.footer.tagline} />
      </body>
    </html>
  );
}
