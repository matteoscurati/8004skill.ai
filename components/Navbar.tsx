"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-vw-purple/20 bg-vw-deep/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold font-heading text-vw-pink" style={{ textShadow: "0 0 10px #FF71CE" }}>
            8004skill
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/#features" className="text-foreground/80 hover:text-vw-cyan transition-colors">
            Features
          </Link>
          <Link href="/#chains" className="text-foreground/80 hover:text-vw-cyan transition-colors">
            Chains
          </Link>
          <Link href="/#security" className="text-foreground/80 hover:text-vw-cyan transition-colors">
            Security
          </Link>
          <Link href="/docs" className="text-foreground/80 hover:text-vw-cyan transition-colors">
            Docs
          </Link>
          <a
            href="https://github.com/matteoscurati/8004skill"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-vw-cyan transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/package/8004skill"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full border border-vw-pink/50 text-vw-pink hover:bg-vw-pink/10 transition-colors"
          >
            npm
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground/80"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-vw-purple/20 bg-vw-deep/95 backdrop-blur-md">
          <div className="px-4 py-4 flex flex-col gap-3 text-sm">
            <Link href="/#features" onClick={() => setOpen(false)} className="text-foreground/80 hover:text-vw-cyan py-1">
              Features
            </Link>
            <Link href="/#chains" onClick={() => setOpen(false)} className="text-foreground/80 hover:text-vw-cyan py-1">
              Chains
            </Link>
            <Link href="/#security" onClick={() => setOpen(false)} className="text-foreground/80 hover:text-vw-cyan py-1">
              Security
            </Link>
            <Link href="/docs" onClick={() => setOpen(false)} className="text-foreground/80 hover:text-vw-cyan py-1">
              Docs
            </Link>
            <a href="https://github.com/matteoscurati/8004skill" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-vw-cyan py-1">
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
