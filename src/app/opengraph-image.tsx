import { ImageResponse } from "next/og";

// The preview card shown when the link is shared on LinkedIn, Slack or in email.
export const alt = "Vivek Pandhare · Software Engineer";
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
          background: "#0b0b0b",
          color: "#f5efe0",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 22, color: "#a39a84", letterSpacing: 3 }}>
          <span style={{ width: 16, height: 16, background: "#d4af37", marginRight: 18 }} />
          COMPUTER SCIENCE · MICHIGAN STATE UNIVERSITY
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 150, fontWeight: 900, lineHeight: 0.88, letterSpacing: -4 }}>
          <span>VIVEK</span>
          <span>PANDHARE</span>
        </div>
        <div style={{ display: "flex", borderTop: "1px solid #2a261d", paddingTop: 22, fontSize: 24, color: "#a39a84" }}>
          Backend development · Systems programming · Applied AI
        </div>
      </div>
    ),
    size,
  );
}
