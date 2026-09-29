import type { Metadata } from "next";
import { Bodoni_Moda, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import {
  SITE_URL,
  TITLE,
  DESCRIPTION,
  organizationSchema,
  websiteSchema,
  graph,
  jsonLd,
} from "@/lib/schema";
import SmoothScroll from "@/components/frame/SmoothScroll";
import GroundController from "@/components/frame/GroundController";
import CursorLabel from "@/components/frame/CursorLabel";
import SiteNav from "@/components/frame/SiteNav";
import { RouteWipeProvider } from "@/components/frame/RouteWipe";

// Display: a Didone with an optical-size axis, so it stays crisp at 13px
// metadata sizes and hair-fine at 110px. Body: a quiet grotesk for everything
// that has to be read rather than looked at.
const bodoni = Bodoni_Moda({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-bodoni",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Pureza Digital",
  },
  description: DESCRIPTION,
  keywords: [
    "Pureza Digital",
    "independent digital studio",
    "design studio Christchurch",
    "web design New Zealand",
    "web development",
    "interactive experiences",
    "digital products",
  ],
  authors: [{ name: "Pureza Digital", url: SITE_URL }],
  creator: "Pureza Digital",
  publisher: "Pureza Digital",
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Pureza Digital",
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Design studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ" className={`${bodoni.variable} ${hanken.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd(graph(organizationSchema, websiteSchema)),
          }}
        />
        <SmoothScroll />
        <GroundController />
        <RouteWipeProvider>
          <SiteNav />
          {children}
        </RouteWipeProvider>
        <CursorLabel />
      </body>
    </html>
  );
}
