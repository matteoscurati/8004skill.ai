export default function Chains() {
  const sdkFull = [
    { name: "Ethereum Mainnet", id: 1 },
    { name: "Polygon Mainnet", id: 137 },
    { name: "Base Mainnet", id: 8453 },
    { name: "Ethereum Sepolia", id: 11155111 },
    { name: "Base Sepolia", id: 84532 },
  ];


  return (
    <section id="chains" className="scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4 text-vw-purple" style={{ textShadow: "0 0 10px #B967FF" }}>
        Supported Chains
      </h2>
      <p className="text-center text-foreground/60 mb-12 text-sm">
        Powered by <a href="https://www.ag0.xyz/" target="_blank" rel="noopener noreferrer" className="text-vw-cyan hover:underline">agent0 SDK</a>. Five chains with built-in defaults.
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
      </div>
    </section>
  );
}
