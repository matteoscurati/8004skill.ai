"use client";

import { useState } from "react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("npx skills add matteoscurati/8004skill -g");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden">
      {/* Content - positioned in upper portion to avoid overlapping landscape */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-28 sm:pt-32">
        <h1
          className="text-5xl sm:text-7xl md:text-8xl font-heading font-extrabold mb-6 tracking-tight"
          style={{
            color: "#FF71CE",
            textShadow: "0 0 10px #FF71CE, 0 0 20px #FF71CE, 0 0 40px #FF71CE, 0 0 80px #B967FF",
          }}
        >
          8004skill
        </h1>

        <div className="flex items-center justify-center gap-3 mb-4">
          <p
            className="text-lg sm:text-xl md:text-2xl font-heading font-medium neon-flicker"
            style={{
              color: "#01CDFE",
              textShadow: "0 0 10px #01CDFE, 0 0 20px #01CDFE",
            }}
          >
            The AI Agent Skill for the On-Chain Agent Economy
          </p>
          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border border-vw-green/40 text-vw-green/80 whitespace-nowrap">
            v1.3.0
          </span>
        </div>

        <p className="text-sm sm:text-base text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Register, discover, and rate AI agents on Ethereum, Polygon &amp; Sepolia.
          <br className="hidden sm:block" />
          Conversational. No CLI flags. Just talk.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleCopy}
            className="group flex items-center gap-3 px-6 py-3 rounded-lg bg-vw-deep/80 border border-vw-pink/40 hover:border-vw-pink transition-all hover:shadow-[0_0_20px_rgba(255,113,206,0.3)]"
          >
            <code className="text-sm text-vw-green">
              <span className="text-vw-purple">$</span> npx skills add matteoscurati/8004skill -g
            </code>
            <span className="text-xs text-vw-purple group-hover:text-vw-pink transition-colors">
              {copied ? "Copied!" : "Copy"}
            </span>
          </button>

          <a
            href="/docs"
            className="px-6 py-3 rounded-lg border border-vw-cyan/40 text-vw-cyan hover:bg-vw-cyan/10 transition-all text-sm hover:shadow-[0_0_20px_rgba(1,205,254,0.2)]"
          >
            Read the Docs &rarr;
          </a>
        </div>

      </div>

      {/* Bottom fade - smooth transition from landscape to dark content below */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: "40%",
          background: "linear-gradient(to bottom, transparent 0%, rgba(13,2,33,0.4) 30%, rgba(13,2,33,0.8) 60%, #0D0221 100%)",
        }}
      />
    </section>
  );
}
