import { ImageResponse } from "next/og";

export const alt =
  "Pureza Digital — Web Design & Development in Ashburton, NZ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0A0A",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              border: "2px solid #C9A96E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#C9A96E",
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "2px",
            }}
          >
            PD
          </div>
          <div
            style={{
              color: "#FFFFFF",
              fontSize: "26px",
              letterSpacing: "6px",
              textTransform: "uppercase",
            }}
          >
            Pureza Digital
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#FFFFFF",
              fontSize: "68px",
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            <span>Web Design &amp; Development</span>
            <span style={{ color: "#C9A96E" }}>in Ashburton, NZ</span>
          </div>
          <div style={{ color: "#A0A0A0", fontSize: "30px", maxWidth: "900px" }}>
            Modern websites, landing pages, hosting & maintenance for local
            businesses across Canterbury, New Zealand.
          </div>
        </div>

        <div
          style={{
            color: "#6B6B6B",
            fontSize: "24px",
            letterSpacing: "2px",
          }}
        >
          purezadigital.com
        </div>
      </div>
    ),
    { ...size }
  );
}
