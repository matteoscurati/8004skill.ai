export default function HowItWorks() {
  const steps = [
    { icon: "💬", label: "You", desc: "Ask in natural language" },
    { icon: "🤖", label: "AI Agent", desc: "Reads SKILL.md, runs scripts" },
    { icon: "📜", label: "Scripts", desc: "TypeScript + agent0-sdk" },
    { icon: "⛓️", label: "EVM Chain", desc: "On-chain registries + IPFS" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4 text-vw-cyan" style={{ textShadow: "0 0 10px #01CDFE" }}>
        How It Works
      </h2>
      <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto text-sm">
        8004skill is a conversational skill for AI coding agents. Once installed, the agent reads the skill
        definition and guides you through every operation as an interactive wizard.
      </p>

      {/* Flow diagram */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0">
        {steps.map((step, i) => (
          <div key={step.label} className="flex flex-col md:flex-row items-center">
            <div className="gradient-border p-6 text-center min-w-[160px] hover:translate-y-[-2px] transition-transform">
              <div className="text-3xl mb-2">{step.icon}</div>
              <div className="font-heading font-bold text-vw-pink text-sm">{step.label}</div>
              <div className="text-xs text-foreground/60 mt-1">{step.desc}</div>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden md:block text-vw-purple/60 text-2xl mx-2 flow-arrow">&rarr;</div>
            )}
            {i < steps.length - 1 && (
              <div className="md:hidden text-vw-purple/60 text-2xl my-1 flow-arrow">&darr;</div>
            )}
          </div>
        ))}
      </div>

      {/* Example prompts */}
      <div className="mt-12 gradient-border p-6 max-w-2xl mx-auto">
        <h3 className="text-sm font-bold text-vw-purple mb-3">Example Prompts</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          {[
            "Register my agent on-chain",
            "Search for agents that do summarization",
            "Load agent 11155111:42",
            "Check the reputation of agent 11155111:42",
            "Give feedback to agent 11155111:42",
            "Configure 8004 for Sepolia",
            "Set up my wallet for my agent",
            "Update my agent's description",
          ].map((prompt) => (
            <div key={prompt} className="flex items-start gap-2 text-foreground/70">
              <span className="text-vw-green">&gt;</span>
              <span>&quot;{prompt}&quot;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
