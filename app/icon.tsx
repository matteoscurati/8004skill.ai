import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0D0221, #2D1B69)",
          borderRadius: "12px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 800,
            color: "#FF71CE",
            letterSpacing: "-1px",
            display: "flex",
          }}
        >
          8004
        </div>
      </div>
    ),
    { ...size },
  );
}
