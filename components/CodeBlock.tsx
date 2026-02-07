"use client";

import { useState } from "react";

export default function CodeBlock({
  code,
  language = "bash",
  filename,
}: {
  code: string;
  language?: string;
  filename?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block relative group">
      {filename && (
        <div className="px-4 py-2 text-xs text-vw-purple border-b border-vw-purple/20">
          {filename}
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto">
          <code className={`language-${language}`}>{code}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 px-2 py-1 text-xs rounded border border-vw-purple/30 hover:border-vw-pink/60 transition-all opacity-0 group-hover:opacity-100 text-vw-purple hover:text-vw-pink bg-vw-deep/80"
          aria-label="Copy code"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
