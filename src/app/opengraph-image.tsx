import { ImageResponse } from "next/og";

// The preview card shown when the link is shared on LinkedIn, Slack or in email.
export const alt = "Vivek Pandhare";
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
          alignItems: "center",
          justifyContent: "center",
          background: "#e3eee7",
          color: "#101814",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 110, fontWeight: 700 }}>Vivek Pandhare</div>
        <div style={{ width: 820, height: 2, background: "#7f9188", margin: "28px 0" }} />
        <div style={{ fontSize: 36, color: "#18453b" }}>Computer Science · Michigan State University</div>
      </div>
    ),
    size,
  );
}
