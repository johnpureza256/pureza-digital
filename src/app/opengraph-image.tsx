import { ImageResponse } from "next/og";
import { MONO } from "@/components/frame/Logo";

export const alt = "Pureza Digital, an independent design and development studio in Christchurch, New Zealand.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori needs raw font data. Ask Google Fonts for a TTF (an old user agent
// gets truetype rather than woff2); if that fails the card still renders.
async function bodoni(italic: boolean): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@${italic ? 1 : 0},96,400`,
      { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1)" } }
    ).then((r) => r.text());
    const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/)?.[1];
    return url ? await fetch(url).then((r) => r.arrayBuffer()) : null;
  } catch {
    return null;
  }
}

const monogram = `data:image/svg+xml;base64,${Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 437 355"><path fill="#151413" fill-rule="evenodd" d="${MONO}"/></svg>`
).toString("base64")}`;

export default async function OpengraphImage() {
  const [roman, italic] = await Promise.all([bodoni(false), bodoni(true)]);
  const fonts = [
    ...(roman ? [{ name: "Bodoni", data: roman, style: "normal" as const, weight: 400 as const }] : []),
    ...(italic ? [{ name: "Bodoni", data: italic, style: "italic" as const, weight: 400 as const }] : []),
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F3F0EA",
          color: "#151413",
          padding: "64px 72px",
          fontFamily: fonts.length ? "Bodoni" : "serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="Pureza Digital" width={74} height={60} src={monogram} />
        <div style={{ display: "flex", flexDirection: "column", fontSize: 70, lineHeight: 1.04, letterSpacing: "-0.03em" }}>
          <span>An independent design and</span>
          <span>development studio</span>
          <span style={{ fontStyle: "italic" }}>in Christchurch, New Zealand.</span>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined }
  );
}
