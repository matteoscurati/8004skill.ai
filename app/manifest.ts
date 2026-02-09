import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "8004skill",
    short_name: "8004skill",
    description: "The AI Agent Skill for the On-Chain Agent Economy",
    start_url: "/",
    display: "standalone",
    background_color: "#0D0221",
    theme_color: "#FF71CE",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
