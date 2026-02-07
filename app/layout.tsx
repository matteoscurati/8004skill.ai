import type { Metadata } from "next";
import { Space_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import VaporwaveScene from "@/components/VaporwaveScene";

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "8004skill — AI Agent Skill for the On-Chain Agent Economy",
  description:
    "Register, discover, and rate AI agents on Ethereum, Polygon & Sepolia. The conversational skill for ERC-8004. Powered by agent0 SDK. No CLI flags — just talk.",
  keywords: [
    "ERC-8004",
    "AI agent",
    "on-chain",
    "WalletConnect",
    "agent skill",
    "Claude Code",
    "EVM",
    "agent economy",
  ],
  openGraph: {
    title: "8004skill — AI Agent Skill for the On-Chain Agent Economy",
    description:
      "Register, discover, and rate AI agents on Ethereum, Polygon & Sepolia. Powered by agent0 SDK. No CLI flags. Just talk.",
    type: "website",
    url: "https://8004skill.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "8004skill",
    description: "The AI Agent Skill for the On-Chain Agent Economy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} ${outfit.variable} antialiased`}>
        <VaporwaveScene />
        <Navbar />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
