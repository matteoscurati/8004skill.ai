export default function Chains() {
  const sdkDefaults = [
    { name: "Ethereum Mainnet", id: 1 },
    { name: "Ethereum Sepolia", id: 11155111 },
    { name: "Polygon Mainnet", id: 137 },
  ];

  const comingSoon = [
    { name: "Base", id: 8453 },
    { name: "BSC", id: 56 },
    { name: "Monad", id: 143 },
    { name: "Scroll", id: 534352 },
    { name: "Gnosis", id: 100 },
    { name: "Arbitrum", id: 42161 },
    { name: "Celo", id: 42220 },
    { name: "Taiko", id: 167000 },
  ];

  return (
    <section id="chains" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4 text-vw-purple" style={{ textShadow: "0 0 10px #B967FF" }}>
        Supported Chains
      </h2>
      <p className="text-center text-foreground/60 mb-12 text-sm">
        Powered by <a href="https://agent0.dev" target="_blank" rel="noopener noreferrer" className="text-vw-cyan hover:underline">agent0 SDK</a>. Three chains with built-in defaults &mdash; more coming soon.
      </p>

      <div className="space-y-8">
        {/* SDK Defaults */}
        <div>
          <h3 className="text-sm font-bold text-vw-green mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-vw-green animate-pulse" />
            SDK Defaults (Ready to Use)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {sdkDefaults.map((chain) => (
              <div
                key={chain.id}
                className="gradient-border p-4 text-center hover:translate-y-[-2px] transition-transform"
              >
                <div className="font-heading font-bold text-sm text-foreground/90">{chain.name}</div>
                <div className="text-xs text-vw-green/70 mt-1">Chain ID: {chain.id}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div>
          <h3 className="text-sm font-bold text-foreground/40 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-foreground/30" />
            Contracts Deployed (SDK Support Coming Soon)
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {comingSoon.map((chain) => (
              <div
                key={chain.id}
                className="gradient-border p-3 text-center opacity-50"
              >
                <div className="font-heading font-bold text-sm text-foreground/60">{chain.name}</div>
                <div className="text-xs text-vw-purple/40 mt-1">ID: {chain.id}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
