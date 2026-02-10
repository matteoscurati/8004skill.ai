export default function Features() {
  const features = [
    {
      emoji: "⚙️",
      title: "Configure",
      desc: "Set up chain, RPC, and WalletConnect session. IPFS credentials prompted on demand",
    },
    {
      emoji: "📝",
      title: "Register",
      desc: "Create and register a new on-chain agent identity as an ERC-721 NFT",
    },
    {
      emoji: "🔍",
      title: "Search",
      desc: "Discover agents using semantic search or structured filters across chains",
    },
    {
      emoji: "📦",
      title: "Load",
      desc: "Retrieve and display detailed information about any registered agent",
    },
    {
      emoji: "⭐",
      title: "Feedback",
      desc: "Submit on-chain reputation feedback with ratings, tags, and text",
    },
    {
      emoji: "🔎",
      title: "Inspect",
      desc: "View agent reputation, trust labels, endpoints, and connection details",
    },
    {
      emoji: "💰",
      title: "Wallet",
      desc: "Set, get, or unset an agent's on-chain wallet. Signing via WalletConnect.",
    },
    {
      emoji: "✅",
      title: "Verify",
      desc: "Prove or verify agent identity using cryptographic signatures",
    },
    {
      emoji: "✏️",
      title: "Update Agent",
      desc: "Modify agent metadata, endpoints, OASF skills, status, and trust models",
    },
    {
      emoji: "💬",
      title: "Respond to Feedback",
      desc: "Agent owners can reply to on-chain feedback with text responses",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4 text-vw-pink" style={{ textShadow: "0 0 10px #FF71CE" }}>
        10 Core Operations
      </h2>
      <p className="text-center text-foreground/60 mb-12 max-w-xl mx-auto text-sm">
        Everything you need to manage AI agents on-chain, through natural conversation.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="gradient-border p-5 hover:translate-y-[-2px] transition-transform"
          >
            <div className="text-2xl mb-2">{f.emoji}</div>
            <h3 className="font-heading font-bold text-vw-cyan text-sm mb-1">{f.title}</h3>
            <p className="text-xs text-foreground/60 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
