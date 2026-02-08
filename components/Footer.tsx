export default function Footer() {
  return (
    <footer className="border-t border-vw-purple/20 bg-vw-deep">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-heading font-bold text-vw-pink mb-3" style={{ textShadow: "0 0 10px #FF71CE" }}>
              8004skill
            </h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              The AI Agent Skill for the On-Chain Agent Economy. Built on ERC-8004.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-vw-purple mb-3">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/matteoscurati/8004skill" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-vw-cyan transition-colors">
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="https://www.npmjs.com/package/8004skill" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-vw-cyan transition-colors">
                  npm Package
                </a>
              </li>
              <li>
                <a href="/docs" className="text-foreground/60 hover:text-vw-cyan transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-vw-purple mb-3">Protocol</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://eips.ethereum.org/EIPS/eip-8004" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-vw-cyan transition-colors">
                  ERC-8004 Specification
                </a>
              </li>
              <li>
                <a href="https://www.ag0.xyz/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-vw-cyan transition-colors">
                  agent0 SDK
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-vw-purple/10 text-center text-xs text-foreground/40">
          <p>GPL-3.0 License &middot; Built by Matteo Scurati</p>
        </div>
      </div>
    </footer>
  );
}
