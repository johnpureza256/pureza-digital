import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = "https://purezadigital.com";
const TITLE = "Pureza Digital | Web Design & Development in Ashburton NZ";
const DESCRIPTION =
  "Pureza Digital helps local businesses in Ashburton, New Zealand build modern websites, landing pages, hosting, maintenance, and digital solutions that create trust and attract customers.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Pureza Digital",
  },
  description: DESCRIPTION,
  keywords: [
    "Pureza Digital",
    "website design",
    "website development",
    "web design Ashburton",
    "web development Ashburton",
    "web design Canterbury",
    "web design New Zealand",
    "landing pages",
    "website hosting",
    "website maintenance",
    "websites for local businesses",
    "digital solutions Ashburton",
  ],
  authors: [{ name: "Pureza Digital", url: SITE_URL }],
  creator: "Pureza Digital",
  publisher: "Pureza Digital",
  alternates: {
    canonical: SITE_URL,
  },
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
  category: "Web Design & Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="grain-overlay antialiased">{children}</body>
    </html>
  );
}
