export default function Security() {
  const features = [
    {
      icon: "🔐",
      title: "WalletConnect Secure Signing",
      desc: "Primary signing uses WalletConnect v2 — signing happens in your wallet app. PRIVATE_KEY in ~/.8004skill/.env is available as an optional headless alternative for x402 payments and automated workflows.",
    },
    {
      icon: "📱",
      title: "Per-Transaction Approval",
      desc: "Every on-chain transaction requires explicit approval in your wallet app. Nothing is auto-signed.",
    },
    {
      icon: "🛡️",
      title: "Session File Security",
      desc: "WalletConnect session files contain no key material. Protected with chmod 600, symlink attack prevention, and cloud-sync detection.",
    },
    {
      icon: "🚫",
      title: "Minimal Secret Exposure",
      desc: "Config stores chain, RPC, IPFS provider, WalletConnect ID, and registration metadata — no secrets. ~/.8004skill/.env optionally holds PRIVATE_KEY for headless signing, protected with chmod 600.",
    },
    {
      icon: "⚠️",
      title: "Untrusted Data Protection",
      desc: "On-chain agent data is treated as untrusted external content. Prompt-injection payloads in names, descriptions, or metadata are flagged and rendered safely — never executed.",
    },
  ];

  return (
    <section id="security" className="scroll-mt-24 pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4 text-vw-green" style={{ textShadow: "0 0 10px #05FFA1" }}>
        Secure by Design
      </h2>
      <p className="text-center text-foreground/60 mb-12 max-w-xl mx-auto text-sm">
        WalletConnect v2 signing model. Your keys never leave your device.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="gradient-border p-5 hover:translate-y-[-2px] transition-transform">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="font-heading font-bold text-sm text-vw-pink mb-2">{f.title}</h3>
            <p className="text-xs text-foreground/60 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
