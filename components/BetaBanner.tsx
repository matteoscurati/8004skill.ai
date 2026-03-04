"use client";

import { useState } from "react";

export default function BetaBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="sticky top-16 z-40 bg-vw-purple/10 border-b border-vw-purple/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2.5 text-center text-xs text-foreground/70 flex items-center justify-center gap-2">
        <span className="inline-block bg-vw-purple/20 text-vw-purple font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
          Beta
        </span>
        <span className="flex-1 sm:flex-none">
          8004skill is in active development. APIs, config format, and supported chains may change.
        </span>
        <button
          onClick={() => setDismissed(true)}
          className="ml-2 text-foreground/40 hover:text-foreground/70 transition-colors shrink-0"
          aria-label="Dismiss banner"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 3l8 8M3 11l8-8" />
          </svg>
        </button>
      </div>
    </div>
  );
}
