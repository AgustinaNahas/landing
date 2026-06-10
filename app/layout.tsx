import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@/components/analytics/Analytics";
import { getSiteContent } from "@/content/index";
import { createSiteMetadata } from "@/lib/seo";
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

export const metadata: Metadata = createSiteMetadata(getSiteContent("es"), "es");

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
    <html
      lang={getSiteContent("es").meta.language}
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
