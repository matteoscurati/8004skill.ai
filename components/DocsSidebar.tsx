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
  { id: "architecture", label: "Architecture" },
  { id: "cli-management", label: "CLI Management" },
];

export default function DocsSidebar() {
  const [active, setActive] = useState("quick-start");

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
    <aside className="docs-sidebar hidden lg:block w-56 shrink-0">
      <nav className="sticky top-20 space-y-1">
        <div className="text-xs font-bold text-vw-purple mb-3 uppercase tracking-wider">
          Documentation
        </div>
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`block text-xs py-1.5 pl-3 border-l-2 transition-colors ${
              active === s.id
                ? "text-vw-pink border-vw-pink"
                : "text-foreground/50 border-vw-purple/20 hover:text-foreground/80 hover:border-vw-purple/40"
            }`}
          >
            {s.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
