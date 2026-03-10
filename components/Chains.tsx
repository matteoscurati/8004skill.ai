export default function Chains() {
  const sdkFull = [
    { name: "Ethereum Mainnet", id: 1 },
    { name: "Polygon Mainnet", id: 137 },
    { name: "Base Mainnet", id: 8453 },
    { name: "Ethereum Sepolia", id: 11155111 },
    { name: "Base Sepolia", id: 84532 },
  ];

  const deployed = [
    { name: "Arbitrum One", id: 42161 },
    { name: "Optimism", id: 10 },
    { name: "Avalanche", id: 43114 },
    { name: "BSC", id: 56 },
    { name: "Monad", id: 143 },
    { name: "Scroll", id: 534352 },
    { name: "Gnosis", id: 100 },
    { name: "Celo", id: 42220 },
    { name: "Taiko", id: 167000 },
    { name: "Linea", id: 59144 },
    { name: "MegaETH", id: 4326 },
    { name: "XLayer", id: 196 },
    { name: "Abstract", id: 2741 },
    { name: "Mantle", id: 5000 },
    { name: "Soneium", id: 1868 },
    { name: "GOAT Network", id: 2345 },
    { name: "Metis", id: 1088 },
    { name: "Hedera", id: 295 },
    { name: "SKALE Base", id: 1187947933 },
    { name: "Shape", id: 360 },
  ];

  return (
    <section id="chains" className="scroll-mt-24 pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4 text-vw-purple" style={{ textShadow: "0 0 10px #B967FF" }}>
        Supported Chains
      </h2>
      <p className="text-center text-foreground/60 mb-12 text-sm">
        Powered by <a href="https://www.ag0.xyz/" target="_blank" rel="noopener noreferrer" className="text-vw-cyan hover:underline">agent0 SDK</a>. Built-in defaults for 5 chains, plus additional deployed mainnets with manual config.
      </p>

      <div className="space-y-8">
        {/* SDK Full Support */}
        <div>
          <h3 className="text-sm font-bold text-vw-green mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-vw-green animate-pulse" />
            Full SDK Support (Ready to Use)
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {sdkFull.map((chain) => (
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

        {/* Deployed Chains */}
        <div>
          <h3 className="text-sm font-bold text-vw-cyan mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-vw-cyan" />
            Deployed Mainnets (Manual Config)
          </h3>
          <p className="text-xs text-foreground/50 mb-4">
            Contracts deployed with the same CREATE2 addresses. Discovery flows require <code className="text-vw-purple/80">SUBGRAPH_URL</code> on non-default chains.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {deployed.map((chain) => (
              <div
                key={chain.id}
                className="gradient-border p-4 text-center hover:translate-y-[-2px] transition-transform opacity-80 w-[calc(50%-6px)] sm:w-[calc(33.333%-8px)] lg:w-[calc(20%-10px)]"
              >
                <div className="font-heading font-bold text-sm text-foreground/70">{chain.name}</div>
                <div className="text-xs text-vw-cyan/50 mt-1">Chain ID: {chain.id}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
