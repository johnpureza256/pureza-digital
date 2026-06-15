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

export const metadata: Metadata = {
  title: "Pureza Digital — Premium Web Design & AI Automation",
  description:
    "Boutique web design studio based in Ashburton, New Zealand. Custom websites, AI automations, and intelligent digital solutions for ambitious businesses worldwide.",
  keywords: [
    "web design New Zealand",
    "web design Ashburton",
    "AI automation",
    "premium website design",
    "digital agency NZ",
  ],
  openGraph: {
    title: "Pureza Digital — Premium Web Design & AI Automation",
    description:
      "Boutique web design studio. Custom websites, AI automations, and intelligent digital solutions.",
    type: "website",
  },
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
