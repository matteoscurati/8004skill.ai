import type { Metadata } from "next";
import DocsSidebar from "@/components/DocsSidebar";
import CodeBlock from "@/components/CodeBlock";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Documentation — 8004skill",
  description:
    "Complete documentation for the 8004skill AI agent skill. Installation, configuration, operations reference, and more.",
  alternates: { canonical: "/docs" },
  openGraph: {
    title: "Documentation — 8004skill",
    description:
      "Complete documentation for the 8004skill AI agent skill. Installation, configuration, operations reference, and more.",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Documentation — 8004skill",
    description:
      "Complete documentation for the 8004skill AI agent skill. Installation, configuration, operations reference, and more.",
  },
  keywords: [
    "ERC-8004",
    "documentation",
    "AI agent",
    "agent skill",
    "Claude Code",
  ],
};

export default function DocsPage() {
  return (
    <div className="relative bg-[#0D0221] min-h-screen">
      <div className="pt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-10 py-10">
          <DocsSidebar />

          <article className="docs-content min-w-0 flex-1">
            {/* Quick Start */}
            <section id="quick-start" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-vw-pink mb-6" style={{ textShadow: "0 0 10px rgba(255,113,206,0.5)" }}>
                Quick Start
              </h2>
              <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                Get up and running in under a minute. 8004skill is a conversational skill for AI coding agents &mdash;
                once installed, just talk to your agent in natural language.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-vw-cyan mb-2">1. Install</h3>
                  <CodeBlock code="npx 8004skill install" language="bash" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-vw-cyan mb-2">2. Configure</h3>
                  <p className="text-xs text-foreground/60 mb-2">Tell your agent:</p>
                  <CodeBlock code={`> "Configure 8004 for Sepolia"`} language="text" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-vw-cyan mb-2">3. Use</h3>
                  <p className="text-xs text-foreground/60 mb-2">Then ask for any operation:</p>
                  <CodeBlock code={`> "Register my agent on-chain"\n> "Search for agents that do summarization"\n> "Give feedback to agent 11155111:42"`} language="text" />
                </div>
              </div>
              <div className="mt-4 gradient-border p-4">
                <p className="text-xs text-foreground/60">
                  <strong className="text-vw-purple">Prerequisites:</strong> Node.js &ge; 22.0.0, macOS or Linux (Windows not supported), an AI agent compatible
                  with SKILL.md (Claude Code, OpenClaw, or similar).
                </p>
              </div>
            </section>

            {/* Installation */}
            <section id="installation" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-vw-pink mb-6" style={{ textShadow: "0 0 10px rgba(255,113,206,0.5)" }}>
                Installation
              </h2>

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">npx (Recommended)</h3>
              <p className="text-sm text-foreground/70 mb-3 leading-relaxed">
                The fastest way to install. This command copies the skill files into your agent&apos;s skill directory.
              </p>
              <CodeBlock code="npx 8004skill install" language="bash" />

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3 mt-8">From Source</h3>
              <CodeBlock
                code={`git clone https://github.com/matteoscurati/8004skill.git\ncd 8004skill\n./install.sh`}
                language="bash"
              />

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3 mt-8">Manual Installation</h3>
              <p className="text-sm text-foreground/70 mb-3 leading-relaxed">
                Clone the repo, install dependencies, and symlink into your agent&apos;s skill directory:
              </p>
              <CodeBlock
                code={`git clone https://github.com/matteoscurati/8004skill.git\ncd 8004skill\nnpm install\n\n# Claude Code\nmkdir -p ~/.claude/skills\nln -s "$(pwd)" ~/.claude/skills/8004skill\n\n# OpenClaw\nmkdir -p ~/.openclaw/skills\nln -s "$(pwd)" ~/.openclaw/skills/8004skill`}
                language="bash"
              />
            </section>

            {/* Agent Setup */}
            <section id="agent-setup" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-vw-pink mb-6" style={{ textShadow: "0 0 10px rgba(255,113,206,0.5)" }}>
                Agent Setup
              </h2>

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">Claude Code</h3>
              <p className="text-sm text-foreground/70 mb-3 leading-relaxed">
                <a href="https://docs.anthropic.com/en/docs/claude-code" target="_blank" rel="noopener noreferrer" className="text-vw-cyan hover:underline">Claude Code</a> is
                Anthropic&apos;s CLI agent. It discovers skills from <code>~/.claude/skills/</code> automatically.
                After installing, the skill is available via the <code>/8004skill</code> slash command or natural language.
              </p>
              <p className="text-sm text-foreground/70 mb-3 leading-relaxed">
                Claude Code inherits your shell environment. IPFS credentials are prompted inline when needed,
                but you can optionally pre-configure them via env vars or <code>~/.8004skill/.env</code>:
              </p>
              <CodeBlock
                code={`# Optional: pre-configure env vars (prompted inline if not set)\nexport PINATA_JWT=your_pinata_jwt\nclaude\n\n# Or use a .env file (loaded automatically)\ncp .env.example ~/.8004skill/.env\nchmod 600 ~/.8004skill/.env`}
                language="bash"
              />

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3 mt-8">OpenClaw</h3>
              <p className="text-sm text-foreground/70 mb-3 leading-relaxed">
                <a href="https://openclaw.org" target="_blank" rel="noopener noreferrer" className="text-vw-cyan hover:underline">OpenClaw</a> is
                a macOS skill runner that discovers skills from <code>~/.openclaw/skills/</code>. It reads the
                SKILL.md frontmatter for UI integration (emoji, platform requirements, dependency management).
              </p>
              <p className="text-sm text-foreground/70 mb-3 leading-relaxed">
                OpenClaw declares <code>node</code> and <code>npx</code> as required binaries. If missing, it offers to install
                Node.js via Homebrew automatically. Set env vars in your shell profile or in <code>~/.8004skill/.env</code>.
              </p>

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3 mt-8">Other Agents</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                8004skill follows the <a href="https://agentskills.io" target="_blank" rel="noopener noreferrer" className="text-vw-cyan hover:underline">Agent Skills</a> convention.
                Any agent that reads SKILL.md files can use it. Clone the repo, run <code>npm install</code>, then point
                your agent to the <code>SKILL.md</code> file via skills directory symlink, config path, or inline context.
              </p>
            </section>

            {/* Configuration */}
            <section id="configuration" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-vw-pink mb-6" style={{ textShadow: "0 0 10px rgba(255,113,206,0.5)" }}>
                Configuration
              </h2>

              <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                Configuration is stored at <code>~/.8004skill/config.json</code> (permissions: chmod 600). The configure
                operation walks you through setting everything up interactively. Environment variables can be
                exported in the shell or defined in <code>~/.8004skill/.env</code> (shell values take precedence).
              </p>

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">Chain Selection</h3>
              <p className="text-sm text-foreground/70 mb-3 leading-relaxed">
                The agent0 SDK ships with full built-in defaults for <strong>Ethereum Mainnet</strong> (1), <strong>Polygon Mainnet</strong> (137), and <strong>Ethereum Sepolia</strong> (11155111).
                The recommended testnet for development is <strong>Ethereum Sepolia</strong>.
              </p>

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3 mt-6">IPFS Providers</h3>
              <p className="text-sm text-foreground/70 mb-3 leading-relaxed">
                Agent metadata is stored on IPFS. Three provider options are supported.
                Credentials are requested inline during operations that need them &mdash; no pre-configuration required.
              </p>
              <ul className="list-disc list-inside text-sm text-foreground/70 space-y-1 mb-4">
                <li><strong className="text-vw-purple">Pinata</strong> &mdash; <code>PINATA_JWT</code> (env var or prompted inline)</li>
                <li><strong className="text-vw-purple">Filecoin</strong> &mdash; <code>FILECOIN_PRIVATE_KEY</code> (env var or prompted inline)</li>
                <li><strong className="text-vw-purple">Local Node</strong> &mdash; <code>IPFS_NODE_URL</code> (env var or prompted inline)</li>
              </ul>

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3 mt-6">WalletConnect</h3>
              <p className="text-sm text-foreground/70 mb-3 leading-relaxed">
                A WalletConnect v2 project ID is needed for signing operations. A default ID is provided, but you can
                use your own from <code>cloud.walletconnect.com</code> via the <code>WC_PROJECT_ID</code> env var.
              </p>

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3 mt-6">Config File Format</h3>
              <p className="text-sm text-foreground/70 mb-3 leading-relaxed">
                Only two user-facing fields. Chain, RPC, and registrations are managed automatically by the agent.
              </p>
              <CodeBlock
                code={`{
  "ipfs": "pinata",
  "wcProjectId": "optional-walletconnect-project-id"
}`}
                language="json"
                filename="~/.8004skill/config.json"
              />

              <div className="overflow-x-auto mt-4">
                <table>
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><code>ipfs</code></td><td>IPFS provider (<code>pinata</code>, <code>filecoinPin</code>, <code>node</code>, or <code>null</code>). Credential prompted inline if not in env</td></tr>
                    <tr><td><code>wcProjectId</code></td><td>WalletConnect project ID (a default is provided)</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Operations Reference */}
            <section id="operations" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-vw-pink mb-6" style={{ textShadow: "0 0 10px rgba(255,113,206,0.5)" }}>
                Operations Reference
              </h2>

              {/* Configure */}
              <div className="mb-10">
                <h3 className="text-lg font-heading font-bold text-vw-cyan mb-2">Configure</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  Set up chain, RPC URL, and WalletConnect session.
                </p>
                <div className="gradient-border p-4 mb-3">
                  <div className="text-xs space-y-2">
                    <div><strong className="text-vw-purple">Triggers:</strong> <span className="text-foreground/60">&quot;configure 8004&quot;, &quot;set up chain&quot;, &quot;change RPC&quot;, first-time use</span></div>
                    <div><strong className="text-vw-purple">Requirements:</strong> <span className="text-foreground/60">None (setup operation)</span></div>
                  </div>
                </div>
                <p className="text-sm text-foreground/70">
                  The wizard guides you through: choosing a supported EVM chain, configuring the RPC endpoint,
                  configuring WalletConnect project ID, pairing your wallet via QR code,
                  and running preflight checks. IPFS credentials are prompted inline when needed.
                </p>
              </div>

              {/* Register */}
              <div className="mb-10">
                <h3 className="text-lg font-heading font-bold text-vw-cyan mb-2">Register Agent</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  Create and register a new on-chain agent identity.
                </p>
                <div className="gradient-border p-4 mb-3">
                  <div className="text-xs space-y-2">
                    <div><strong className="text-vw-purple">Triggers:</strong> <span className="text-foreground/60">&quot;register agent&quot;, &quot;create agent&quot;, &quot;mint agent NFT&quot;</span></div>
                    <div><strong className="text-vw-purple">Requirements:</strong> <span className="text-foreground/60">WalletConnect session, gas tokens</span></div>
                  </div>
                </div>
                <p className="text-sm text-foreground/70 mb-3">
                  Collects agent name, description, and image. Adds MCP and/or A2A endpoints.
                  Assigns OASF skills and domains. Uploads metadata to IPFS. Mints ERC-721 agent identity NFT on-chain.
                </p>
                <h4 className="text-sm font-bold text-vw-green mb-2">Four Golden Rules</h4>
                <ol className="list-decimal list-inside text-sm text-foreground/70 space-y-1">
                  <li>Write a clear name, include an image, write a detailed description</li>
                  <li>Include at least one endpoint (MCP or A2A)</li>
                  <li>Strongly recommend OASF skills/domains</li>
                  <li>Include ERC-8004 registration details in metadata</li>
                </ol>
              </div>

              {/* Search */}
              <div className="mb-10">
                <h3 className="text-lg font-heading font-bold text-vw-cyan mb-2">Search Agents</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  Discover agents using semantic search or structured filters.
                </p>
                <div className="gradient-border p-4 mb-3">
                  <div className="text-xs space-y-2">
                    <div><strong className="text-vw-purple">Triggers:</strong> <span className="text-foreground/60">&quot;search agents&quot;, &quot;find agents&quot;, &quot;agents that do X&quot;</span></div>
                    <div><strong className="text-vw-purple">Requirements:</strong> <span className="text-foreground/60">None for semantic search; RPC required for subgraph search</span></div>
                  </div>
                </div>
                <p className="text-sm text-foreground/70 mb-3">
                  Two search modes: <strong>semantic search</strong> using natural language queries, and <strong>structured search</strong> with
                  filters for name, endpoints, OASF skills, capabilities, reputation, and more. Multi-chain support
                  with sorting and ranking.
                </p>
                <h4 className="text-sm font-bold text-vw-green mb-2">Advanced Filters (50+)</h4>
                <ul className="list-disc list-inside text-sm text-foreground/70 space-y-1">
                  <li><strong>OASF:</strong> skills, domains, has-oasf</li>
                  <li><strong>Endpoints:</strong> MCP, A2A, Web, Email, ENS, DID, has-endpoints</li>
                  <li><strong>Capabilities:</strong> MCP tools/prompts/resources, A2A skills, supported trust models</li>
                  <li><strong>Identity:</strong> owners, operators, wallet address, agent IDs</li>
                  <li><strong>Feedback:</strong> count ranges, value ranges, reviewers, tags, endpoint-specific, responses</li>
                  <li><strong>Temporal:</strong> registered-from/to, updated-from/to</li>
                  <li><strong>Metadata:</strong> key existence, key-value matching</li>
                  <li><strong>Sorting:</strong> any field ascending/descending, semantic scoring</li>
                </ul>
              </div>

              {/* Load */}
              <div className="mb-10">
                <h3 className="text-lg font-heading font-bold text-vw-cyan mb-2">Load Agent</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  Retrieve and display detailed information about a specific agent.
                </p>
                <div className="gradient-border p-4 mb-3">
                  <div className="text-xs space-y-2">
                    <div><strong className="text-vw-purple">Triggers:</strong> <span className="text-foreground/60">&quot;load agent&quot;, &quot;show agent&quot;, &quot;agent info&quot;</span></div>
                    <div><strong className="text-vw-purple">Requirements:</strong> <span className="text-foreground/60">Agent ID in format chainId:tokenId</span></div>
                  </div>
                </div>
                <p className="text-sm text-foreground/70">
                  Fetches agent data from blockchain and IPFS. Shows name, description, endpoints, capabilities, owners,
                  wallet address, and status.
                </p>
              </div>

              {/* Feedback */}
              <div className="mb-10">
                <h3 className="text-lg font-heading font-bold text-vw-cyan mb-2">Give Feedback</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  Submit on-chain reputation feedback for an agent.
                </p>
                <div className="gradient-border p-4 mb-3">
                  <div className="text-xs space-y-2">
                    <div><strong className="text-vw-purple">Triggers:</strong> <span className="text-foreground/60">&quot;give feedback&quot;, &quot;rate agent&quot;, &quot;review agent&quot;</span></div>
                    <div><strong className="text-vw-purple">Requirements:</strong> <span className="text-foreground/60">WalletConnect session, gas tokens</span></div>
                  </div>
                </div>
                <p className="text-sm text-foreground/70 mb-3">
                  Rate agents on -100 to 100 scale (decimals supported). Add up to 2 tags from standard set:
                  starred, reachable, uptime, successRate, responseTime, revenues, tradingYield. Include optional
                  text feedback (stored on IPFS). Target specific endpoints.
                </p>
                <h4 className="text-sm font-bold text-vw-green mb-2">Sub-operations</h4>
                <ul className="list-disc list-inside text-sm text-foreground/70 space-y-1">
                  <li><strong>Revoke Feedback</strong> &mdash; Remove previously given feedback</li>
                </ul>
              </div>

              {/* Respond to Feedback */}
              <div className="mb-10">
                <h3 className="text-lg font-heading font-bold text-vw-cyan mb-2">Respond to Feedback</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  Agent owners can reply to on-chain feedback with text responses.
                </p>
                <div className="gradient-border p-4 mb-3">
                  <div className="text-xs space-y-2">
                    <div><strong className="text-vw-purple">Triggers:</strong> <span className="text-foreground/60">&quot;respond to feedback&quot;, &quot;reply to review&quot;, &quot;answer feedback&quot;</span></div>
                    <div><strong className="text-vw-purple">Requirements:</strong> <span className="text-foreground/60">WalletConnect session, agent ownership</span></div>
                  </div>
                </div>
                <p className="text-sm text-foreground/70">
                  Compose a text response to a specific feedback entry. The response is stored on IPFS and linked
                  on-chain to the original feedback. Only the agent owner can respond.
                </p>
              </div>

              {/* Inspect */}
              <div className="mb-10">
                <h3 className="text-lg font-heading font-bold text-vw-cyan mb-2">Inspect Agent</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  View agent reputation, trust level, and connection details.
                </p>
                <div className="gradient-border p-4 mb-3">
                  <div className="text-xs space-y-2">
                    <div><strong className="text-vw-purple">Triggers:</strong> <span className="text-foreground/60">&quot;check reputation&quot;, &quot;inspect agent&quot;, &quot;connect to agent&quot;</span></div>
                    <div><strong className="text-vw-purple">Requirements:</strong> <span className="text-foreground/60">Agent ID, chain selection</span></div>
                  </div>
                </div>

                <h4 className="text-sm font-bold text-vw-green mb-2 mt-4">Trust Labels</h4>
                <div className="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                        <th>Label</th>
                        <th>Condition</th>
                        <th>Indicator</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Highly Trusted</td><td>count &ge; 20, avg &ge; 80</td><td>Star</td></tr>
                      <tr><td>Trusted</td><td>count &ge; 10, avg &ge; 70</td><td>Green</td></tr>
                      <tr><td>Established</td><td>count &ge; 5, avg &ge; 50</td><td>Green</td></tr>
                      <tr><td>Emerging</td><td>count &gt; 0, count &lt; 5</td><td>Blue</td></tr>
                      <tr><td>No Data</td><td>count = 0</td><td>White</td></tr>
                      <tr><td>Caution</td><td>avg &lt; 0</td><td>Orange</td></tr>
                      <tr><td>Untrusted</td><td>count &ge; 5, avg &lt; -50</td><td>Red</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Wallet */}
              <div className="mb-10">
                <h3 className="text-lg font-heading font-bold text-vw-cyan mb-2">Wallet Management</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  Set, get, or unset an agent&apos;s on-chain wallet address.
                </p>
                <div className="gradient-border p-4 mb-3">
                  <div className="text-xs space-y-2">
                    <div><strong className="text-vw-purple">Triggers:</strong> <span className="text-foreground/60">&quot;set wallet&quot;, &quot;get wallet&quot;, &quot;unset wallet&quot;</span></div>
                    <div><strong className="text-vw-purple">Requirements:</strong> <span className="text-foreground/60">Get: read-only. Set/Unset: WalletConnect session, agent ownership</span></div>
                  </div>
                </div>
                <p className="text-sm text-foreground/70">
                  Enable agents to receive payments, prove agent identity, and submit feedback from the agent&apos;s wallet.
                  Setting a wallet requires an EIP-712 signature for security.
                </p>
              </div>

              {/* Verify */}
              <div className="mb-10">
                <h3 className="text-lg font-heading font-bold text-vw-cyan mb-2">Verify Identity</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  Prove or verify agent identity using cryptographic signatures.
                </p>
                <div className="gradient-border p-4 mb-3">
                  <div className="text-xs space-y-2">
                    <div><strong className="text-vw-purple">Triggers:</strong> <span className="text-foreground/60">&quot;verify agent&quot;, &quot;prove identity&quot;, &quot;sign challenge&quot;</span></div>
                    <div><strong className="text-vw-purple">Requirements:</strong> <span className="text-foreground/60">Sign: WalletConnect. Verify: Signature + message</span></div>
                  </div>
                </div>
                <p className="text-sm text-foreground/70 mb-3">
                  Verification pattern: look up agent&apos;s on-chain wallet, sign or verify message against it, confirm wallet match.
                </p>
                <p className="text-sm text-foreground/70">
                  Message format: <code>erc8004:verify:&#123;agentId&#125;:&#123;nonce&#125;:&#123;timestamp&#125;</code>
                </p>
              </div>

              {/* Update Agent */}
              <div className="mb-10">
                <h3 className="text-lg font-heading font-bold text-vw-cyan mb-2">Update Agent</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  Modify existing agent metadata and configuration.
                </p>
                <div className="gradient-border p-4 mb-3">
                  <div className="text-xs space-y-2">
                    <div><strong className="text-vw-purple">Triggers:</strong> <span className="text-foreground/60">&quot;update agent&quot;, &quot;edit agent&quot;, &quot;add MCP endpoint&quot;</span></div>
                    <div><strong className="text-vw-purple">Requirements:</strong> <span className="text-foreground/60">WalletConnect session, agent ownership</span></div>
                  </div>
                </div>
                <p className="text-sm text-foreground/70">
                  Update name, description, image. Add/change/remove endpoints (MCP, A2A, ENS).
                  Modify OASF skills/domains. Set active status. Configure trust models. Manage metadata.
                </p>
              </div>
            </section>

            {/* Supported Chains */}
            <section id="supported-chains" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-vw-pink mb-6" style={{ textShadow: "0 0 10px rgba(255,113,206,0.5)" }}>
                Supported Chains
              </h2>

              <div className="gradient-border p-4 mb-6">
                <p className="text-xs text-foreground/60">
                  <strong className="text-vw-purple">Powered by <a href="https://www.ag0.xyz/" target="_blank" rel="noopener noreferrer" className="text-vw-cyan hover:underline">agent0 SDK</a>.</strong>{" "}
                  The SDK ships with built-in defaults (registry addresses + subgraph URLs) for 3 chains.
                </p>
              </div>

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">Full SDK Support</h3>
              <p className="text-sm text-foreground/70 mb-3">
                These chains work out of the box &mdash; built-in registry addresses and subgraph URLs, no overrides needed.
              </p>
              <div className="overflow-x-auto mb-6">
                <table>
                  <thead>
                    <tr>
                      <th>Chain</th>
                      <th>Chain ID</th>
                      <th>Subgraph URL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ethereum Mainnet</td>
                      <td>1</td>
                      <td><code className="text-xs break-all">gateway.thegraph.com/api/.../FV6RR6y13rsnCxBAicKuQEwDp8ioEGiNaWaZUmvr1F8k</code></td>
                    </tr>
                    <tr>
                      <td>Polygon Mainnet</td>
                      <td>137</td>
                      <td><code className="text-xs break-all">gateway.thegraph.com/api/.../9q16PZv1JudvtnCAf44cBoxg82yK9SSsFvrjCY9xnneF</code></td>
                    </tr>
                    <tr>
                      <td>Ethereum Sepolia</td>
                      <td>11155111</td>
                      <td><code className="text-xs break-all">gateway.thegraph.com/api/.../6wQRC7geo9XYAhckfmfo8kbMRLeWU8KQd3XsJqFKmZLT</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </section>

            {/* Environment Variables */}
            <section id="environment-variables" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-vw-pink mb-6" style={{ textShadow: "0 0 10px rgba(255,113,206,0.5)" }}>
                Environment Variables
              </h2>

              <div className="overflow-x-auto mb-6">
                <table>
                  <thead>
                    <tr>
                      <th>Variable</th>
                      <th>Required For</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>WC_PROJECT_ID</code></td>
                      <td>All WC operations (optional)</td>
                      <td>WalletConnect project ID. Default provided.</td>
                    </tr>
                    <tr>
                      <td><code>PINATA_JWT</code></td>
                      <td>IPFS via Pinata</td>
                      <td>JWT token for Pinata IPFS pinning</td>
                    </tr>
                    <tr>
                      <td><code>FILECOIN_PRIVATE_KEY</code></td>
                      <td>IPFS via Filecoin</td>
                      <td>Private key for Filecoin pinning</td>
                    </tr>
                    <tr>
                      <td><code>IPFS_NODE_URL</code></td>
                      <td>IPFS via local node</td>
                      <td>URL of IPFS node API</td>
                    </tr>
                    <tr>
                      <td><code>DEBUG</code></td>
                      <td>Debugging (optional)</td>
                      <td>Set to 1 for verbose logging</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="gradient-border p-4 mb-4">
                <p className="text-xs text-foreground/60">
                  <strong className="text-vw-purple">Note:</strong> The three IPFS variables (<code>PINATA_JWT</code>, <code>FILECOIN_PRIVATE_KEY</code>, <code>IPFS_NODE_URL</code>) are
                  mutually exclusive &mdash; you only need the one that matches your provider.
                  IPFS is only required for write operations that store metadata (agent registration, feedback with text).
                  Setting env vars is optional &mdash; if not set, the agent will prompt for credentials inline during the operation.
                  If a credential is not set when needed, the agent will prompt for it inline (not persisted).
                </p>
              </div>

              <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                Variables can be exported in the shell or defined in <code>~/.8004skill/.env</code> (shell values take precedence).
                Copy the included <code>.env.example</code> to get started:
              </p>
              <CodeBlock
                code={`cp .env.example ~/.8004skill/.env\nchmod 600 ~/.8004skill/.env`}
                language="bash"
              />

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3 mt-6">Secret Management Recommendations</h3>
              <p className="text-sm text-foreground/70 mb-3 leading-relaxed">
                How credentials are resolved: IPFS credentials (<code>PINATA_JWT</code>, <code>FILECOIN_PRIVATE_KEY</code>, <code>IPFS_NODE_URL</code>) are
                read from environment variables. You can set them in <code>~/.8004skill/.env</code> (loaded automatically),
                export them in your shell, or let the agent prompt you inline when needed. Any tool that injects
                env vars (1Password CLI, direnv, etc.) also works.
              </p>
              <p className="text-sm text-foreground/70">
                Never hardcode secrets in shell profiles or commit them to source control.
              </p>
            </section>

            {/* Security Model */}
            <section id="security-model" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-vw-pink mb-6" style={{ textShadow: "0 0 10px rgba(255,113,206,0.5)" }}>
                Security Model
              </h2>

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">WalletConnect Signing</h3>
              <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                All signing operations use WalletConnect v2. The agent <strong>never holds private keys</strong> &mdash; signing
                happens entirely on your device in your wallet app.
              </p>

              <div className="overflow-x-auto mb-6">
                <table>
                  <thead>
                    <tr>
                      <th>State</th>
                      <th>Location</th>
                      <th>Duration</th>
                      <th>Access</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>WC session file</td>
                      <td><code>~/.8004skill/wc-storage.json</code></td>
                      <td>~7 days</td>
                      <td>Session metadata (NO private keys)</td>
                    </tr>
                    <tr>
                      <td>Config</td>
                      <td><code>~/.8004skill/config.json</code></td>
                      <td>Persistent</td>
                      <td>Chain/RPC/WC project ID (NO secrets)</td>
                    </tr>
                    <tr>
                      <td>TX signing</td>
                      <td>User&apos;s wallet app</td>
                      <td>Per-transaction</td>
                      <td>User reviews each TX on device</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">Protections</h3>
              <ul className="list-disc list-inside text-sm text-foreground/70 space-y-1 mb-6">
                <li>Private keys never leave wallet device</li>
                <li>Each transaction requires explicit approval in the wallet app</li>
                <li>Session file contains no key material &mdash; only WalletConnect relay metadata</li>
                <li>Symlink attack prevention (pre-write symlink checks)</li>
                <li>Config integrity checks (non-HTTPS RPC warnings, wrong permissions)</li>
                <li>Cloud-sync detection (warns if <code>~/.8004skill/</code> is in a cloud-synced directory)</li>
                <li>On-chain agent data treated as untrusted external content</li>
              </ul>

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">Threat Surface</h3>
              <div className="overflow-x-auto mb-6">
                <table>
                  <thead>
                    <tr><th>Layer</th><th>Threat</th><th>Mitigation</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>WC session file</td><td>Session hijacking</td><td>chmod 600, symlink checks, user approves each tx</td></tr>
                    <tr><td>Config file</td><td>Unauthorized read</td><td>chmod 600</td></tr>
                    <tr><td>Cloud-synced dirs</td><td>Session file replicated</td><td>Preflight warning</td></tr>
                    <tr><td>On-chain writes</td><td>Unintended transactions</td><td>Preflight + user confirmation + wallet approval</td></tr>
                    <tr><td>RPC endpoint</td><td>Man-in-the-middle</td><td>HTTPS endpoints enforced</td></tr>
                    <tr><td>EIP-712 wallet set</td><td>Replay / expired signature</td><td>300-second deadline</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">Secret Handling Rules</h3>
              <div className="gradient-border p-4 mb-6">
                <ul className="list-disc list-inside text-sm text-foreground/70 space-y-1">
                  <li><strong className="text-red-400">NEVER</strong> accept, request, or prompt user to share private keys, mnemonics, or passwords in chat</li>
                  <li><strong className="text-red-400">NEVER</strong> display or echo secrets</li>
                  <li><strong className="text-red-400">NEVER</strong> include secrets in command arguments</li>
                  <li>Secrets must be set in environment or <code>~/.8004skill/.env</code> BEFORE skill invocation</li>
                  <li>If user accidentally pastes a secret, warn immediately and advise key rotation</li>
                </ul>
              </div>

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">OpenClaw-Specific</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                When running inside OpenClaw: IPFS secrets must be configured via the OpenClaw skill config <code>env</code> field.
                Command strings appear in exec approval UIs and session event logs &mdash; any secret in a command string
                is permanently recorded. Session logs persist after the session ends.
              </p>
            </section>

            {/* Architecture */}
            <section id="architecture" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-vw-pink mb-6" style={{ textShadow: "0 0 10px rgba(255,113,206,0.5)" }}>
                Architecture
              </h2>

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">Tech Stack</h3>
              <ul className="list-disc list-inside text-sm text-foreground/70 space-y-1 mb-6">
                <li><strong className="text-vw-purple">Runtime:</strong> Node.js &ge; 22.0.0</li>
                <li><strong className="text-vw-purple">Language:</strong> TypeScript (ESM-only)</li>
                <li><strong className="text-vw-purple">Execution:</strong> npx tsx (no build step at runtime)</li>
                <li><strong className="text-vw-purple">Dependencies:</strong> agent0-sdk ^1.5.2, @walletconnect/ethereum-provider, qrcode-terminal, tsx</li>
              </ul>

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">Data Flow</h3>
              <CodeBlock
                code={`User <---> AI Agent <---> TypeScript Scripts <---> agent0-sdk <---> EVM Chain / IPFS
              |                                                       |
          SKILL.md                                            ERC-8004 Registries
       (wizard defs)                                   (Identity, Reputation, Validation)`}
                language="text"
              />

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3 mt-6">I/O Contract</h3>
              <p className="text-sm text-foreground/70 mb-3">
                All 13 scripts follow the same I/O protocol:
              </p>
              <div className="overflow-x-auto mb-6">
                <table>
                  <thead>
                    <tr><th>Channel</th><th>Format</th><th>Content</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>stdout</td><td>JSON</td><td>Final result (parsed by the agent)</td></tr>
                    <tr><td>stderr</td><td>JSON</td><td>Progress updates and errors</td></tr>
                    <tr><td>exit 0</td><td>&mdash;</td><td>Success</td></tr>
                    <tr><td>exit 1</td><td>&mdash;</td><td>Failure (error on stderr)</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">Key Properties</h3>
              <ul className="list-disc list-inside text-sm text-foreground/70 space-y-1 mb-6">
                <li>ESM-only TypeScript project</li>
                <li>No build step at runtime (tsx compiles on-the-fly)</li>
                <li>Stateless scripts (each invocation is standalone)</li>
                <li>13 TypeScript scripts + 2 shared library files</li>
                <li>State lives in <code>~/.8004skill/config.json</code> and environment variables</li>
                <li>npm-distributed via <code>npx 8004skill install</code></li>
                <li>CLI entry point (<code>bin/cli.mjs</code>) is vanilla ESM JS &mdash; runs via npx without tsx</li>
              </ul>

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">ERC-8004 Protocol</h3>
              <p className="text-sm text-foreground/70 mb-3 leading-relaxed">
                Three lightweight registries accessed via <a href="https://www.ag0.xyz/" target="_blank" rel="noopener noreferrer" className="text-vw-cyan hover:underline">agent0 SDK</a>:
              </p>
              <ol className="list-decimal list-inside text-sm text-foreground/70 space-y-1 mb-4">
                <li><strong className="text-vw-purple">Identity Registry (ERC-721):</strong> Agent IDs as NFTs with IPFS/HTTP metadata</li>
                <li><strong className="text-vw-purple">Reputation Registry:</strong> On-chain feedback signals with off-chain enrichment</li>
                <li><strong className="text-vw-purple">Validation Registry:</strong> Third-party validator attestations</li>
              </ol>
              <p className="text-sm text-foreground/70">
                <strong>Global Agent ID Format:</strong> <code>eip155:&#123;chainId&#125;:&#123;identityRegistryAddress&#125;:&#123;tokenId&#125;</code>
                <br />
                <strong>Short Form:</strong> <code>&#123;chainId&#125;:&#123;tokenId&#125;</code>
              </p>
            </section>

            {/* CLI Management */}
            <section id="cli-management" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-vw-pink mb-6" style={{ textShadow: "0 0 10px rgba(255,113,206,0.5)" }}>
                CLI Management
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-heading font-bold text-vw-cyan mb-2">Install</h3>
                  <CodeBlock code="npx 8004skill install" language="bash" />
                  <p className="text-sm text-foreground/70 mt-2">
                    Copies skill files to your agent&apos;s skill directory.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-heading font-bold text-vw-cyan mb-2">Uninstall</h3>
                  <CodeBlock code="npx 8004skill uninstall" language="bash" />
                  <p className="text-sm text-foreground/70 mt-2">
                    Removes symlinks, installed skill files (npx mode), and optionally user data (<code>~/.8004skill/</code>).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-heading font-bold text-vw-cyan mb-2">Update</h3>
                  <CodeBlock code="npx 8004skill update" language="bash" />
                  <p className="text-sm text-foreground/70 mt-2">
                    In git clone mode, pulls latest changes and refreshes dependencies. In npx mode, re-copies
                    skill files from the latest npm package and reinstalls dependencies.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-heading font-bold text-vw-cyan mb-2">Doctor</h3>
                  <CodeBlock code="npx 8004skill doctor" language="bash" />
                  <p className="text-sm text-foreground/70 mt-2">
                    Checks Node.js version, symlinks, skill files, scripts, dependencies, config, and WalletConnect session status.
                  </p>
                </div>
              </div>
            </section>

          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
}
