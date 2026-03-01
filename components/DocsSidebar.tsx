"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "quick-start", label: "Quick Start" },
  { id: "installation", label: "Installation" },
  { id: "agent-setup", label: "Agent Setup" },
  { id: "configuration", label: "Configuration" },
  { id: "operations", label: "Operations Reference" },
  { id: "supported-chains", label: "Supported Chains" },
  { id: "environment-variables", label: "Environment Variables" },
  { id: "security-model", label: "Security Model" },
  { id: "x402-integration", label: "X402 Payments" },
  { id: "architecture", label: "Architecture" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "cli-management", label: "CLI Management" },
];

function SidebarNav({ active, onLinkClick }: { active: string; onLinkClick?: () => void }) {
  return (
    <>
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          onClick={onLinkClick}
          className={`block text-xs py-1.5 pl-3 border-l-2 transition-colors ${
            active === s.id
              ? "text-vw-pink border-vw-pink"
              : "text-foreground/50 border-vw-purple/20 hover:text-foreground/80 hover:border-vw-purple/40"
          }`}
        >
          {s.label}
        </a>
      ))}
    </>
  );
}

export default function DocsSidebar() {
  const [active, setActive] = useState("quick-start");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile TOC toggle */}
      <div className="lg:hidden mb-4 w-full">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-between w-full px-4 py-3 rounded-lg border border-vw-purple/30 bg-vw-deep/80 text-xs font-bold text-vw-purple uppercase tracking-wider"
        >
          <span>Documentation</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`transition-transform ${mobileOpen ? "rotate-180" : ""}`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        {mobileOpen && (
          <nav className="mt-2 px-2 py-3 rounded-lg border border-vw-purple/20 bg-vw-deep/90 space-y-1">
            <SidebarNav active={active} onLinkClick={() => setMobileOpen(false)} />
          </nav>
        )}
      </div>

      {/* Desktop sidebar */}
      <aside className="docs-sidebar hidden lg:block w-56 shrink-0">
        <nav className="sticky top-20 space-y-1">
          <div className="text-xs font-bold text-vw-purple mb-3 uppercase tracking-wider">
            Documentation
          </div>
          <SidebarNav active={active} />
        </nav>
      </aside>
    </>
  );
}
