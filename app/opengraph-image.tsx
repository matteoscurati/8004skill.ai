import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "8004skill — AI Agent Skill for the On-Chain Agent Economy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "linear-gradient(135deg, #0D0221 0%, #1A0533 30%, #2D1B69 60%, #0D0221 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Vaporwave accent lines */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #FF71CE, #B967FF, #01CDFE, #05FFA1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #05FFA1, #01CDFE, #B967FF, #FF71CE)",
          }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            color: "#FF71CE",
            letterSpacing: "-2px",
            display: "flex",
          }}
        >
          8004skill
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: "#B967FF",
            marginTop: 16,
            display: "flex",
          }}
        >
          AI Agent Skill for the On-Chain Agent Economy
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.5)",
            marginTop: 24,
            display: "flex",
          }}
        >
          ERC-8004 &middot; Ethereum &middot; Polygon &middot; Sepolia
        </div>
      </div>
    ),
    { ...size },
  );
}
