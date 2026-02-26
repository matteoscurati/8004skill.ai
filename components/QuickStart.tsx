"use client";

import { useState } from "react";

export default function QuickStart() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("npx skills add matteoscurati/8004skill -g");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4 text-vw-cyan" style={{ textShadow: "0 0 10px #01CDFE" }}>
        Quick Start
      </h2>
      <p className="text-center text-foreground/60 mb-8 text-sm">
        Three steps to get started. No CLI flags to memorize.
      </p>

      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-dot bg-[#FF5F56]" />
          <div className="terminal-dot bg-[#FFBD2E]" />
          <div className="terminal-dot bg-[#27C93F]" />
          <span className="text-xs text-foreground/40 ml-2">terminal</span>
          <button
            onClick={handleCopy}
            className="ml-auto text-xs text-vw-purple hover:text-vw-pink transition-colors"
          >
            {copied ? "Copied!" : "Copy install"}
          </button>
        </div>
        <pre className="p-5 text-xs sm:text-sm leading-relaxed overflow-x-auto">
          <code>
            <span className="text-foreground/40"># Step 1: Install the skill</span>
            {"\n"}
            <span className="text-vw-green">$</span>{" "}
            <span className="text-foreground">npx skills add matteoscurati/8004skill -g</span>
            {"\n\n"}
            <span className="text-foreground/40"># Step 2: Configure your chain</span>
            {"\n"}
            <span className="text-vw-purple">&gt;</span>{" "}
            <span className="text-vw-cyan">&quot;Configure 8004 for Sepolia&quot;</span>
            {"\n\n"}
            <span className="text-foreground/40"># Step 3: Start using it</span>
            {"\n"}
            <span className="text-vw-purple">&gt;</span>{" "}
            <span className="text-vw-cyan">&quot;Register my agent on-chain&quot;</span>
            {"\n"}
            <span className="text-vw-purple">&gt;</span>{" "}
            <span className="text-vw-cyan">&quot;Search for agents that do summarization&quot;</span>
            {"\n"}
            <span className="text-vw-purple">&gt;</span>{" "}
            <span className="text-vw-cyan">&quot;Give feedback to agent 11155111:42&quot;</span>
            {"\n"}
            <span
              className="inline-block w-2 h-4 bg-vw-green align-middle"
              style={{ animation: "cursor-blink 1s step-end infinite" }}
            />
          </code>
        </pre>
      </div>

      <div className="mt-6 text-center">
        <p className="text-xs text-foreground/40">
          Requires Node.js &ge; 22.0.0 &middot; Compatible with Claude Code, Cursor, Codex, and 35+ more agents
        </p>
      </div>
    </section>
  );
}
