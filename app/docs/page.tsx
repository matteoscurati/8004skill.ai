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
        <div className="flex flex-wrap lg:flex-nowrap gap-10 py-10">
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
                  <CodeBlock code="npx skills add matteoscurati/8004skill -g" language="bash" />
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

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">Skills CLI (Recommended)</h3>
              <p className="text-sm text-foreground/70 mb-3 leading-relaxed">
                Universal install via the <a href="https://github.com/vercel-labs/skills" target="_blank" rel="noopener noreferrer" className="text-vw-cyan hover:underline">Vercel Skills CLI</a>.
                Supports Claude Code, Cursor, Codex, and 35+ more agents. Symlinks by default.
              </p>
              <CodeBlock code="npx skills add matteoscurati/8004skill -g" language="bash" />

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3 mt-8">npx</h3>
              <p className="text-sm text-foreground/70 mb-3 leading-relaxed">
                Original installer with richer features (doctor checks, auto-dependency install). Supports Claude Code and OpenClaw.
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
                The <a href="https://github.com/vercel-labs/skills" target="_blank" rel="noopener noreferrer" className="text-vw-cyan hover:underline">Skills CLI</a> auto-detects
                installed agents (Cursor, Codex, Windsurf, Cline, Continue, and more). For unsupported agents,
                clone the repo, run <code>npm install</code>, then point your agent to the <code>SKILL.md</code> file
                via skills directory symlink, config path, or inline context.
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
                The agent0 SDK ships with full built-in defaults for 5 chains including <strong>Ethereum Mainnet</strong> (1), <strong>Polygon Mainnet</strong> (137), and <strong>Ethereum Sepolia</strong> (11155111).
                13 additional mainnet chains are deployed and available with manual configuration.
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
                <div className="table-wrapper"><table>
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
                </table></div>
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
                    <div><strong className="text-vw-purple">Requirements:</strong> <span className="text-foreground/60">Chain ID + RPC URL</span></div>
                  </div>
                </div>
                <p className="text-sm text-foreground/70 mb-3">
                  Unified search via <code>sdk.searchAgents()</code>. Use <strong>--keyword</strong> for semantic (natural language) search,
                  structured filters for name, endpoints, OASF skills, capabilities, reputation, and more &mdash; or combine both.
                  Output is always <code>AgentSummary[]</code>. Multi-chain support with sorting and ranking.
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
                  <li><strong>Respond to Feedback</strong> &mdash; Agent owners can reply to on-chain feedback with a text response stored on IPFS and linked on-chain. Only the agent owner can respond.</li>
                </ul>
              </div>

              {/* Whoami */}
              <div className="mb-10">
                <h3 className="text-lg font-heading font-bold text-vw-cyan mb-2">Whoami</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  Resolve your agent from config or wallet and display a full identity card.
                </p>
                <div className="gradient-border p-4 mb-3">
                  <div className="text-xs space-y-2">
                    <div><strong className="text-vw-purple">Triggers:</strong> <span className="text-foreground/60">&quot;whoami&quot;, &quot;my agents&quot;, &quot;who am I&quot;</span></div>
                    <div><strong className="text-vw-purple">Requirements:</strong> <span className="text-foreground/60">Config with registrations, or WalletConnect session</span></div>
                  </div>
                </div>
                <p className="text-sm text-foreground/70 mb-3">
                  Resolves agent ID from config registrations, user-provided ID, or wallet address search.
                  Runs load-agent, reputation, and wallet scripts sequentially. If a WalletConnect session is active,
                  also signs an identity proof.
                </p>
                <h4 className="text-sm font-bold text-vw-green mb-2">Result Card</h4>
                <ul className="list-disc list-inside text-sm text-foreground/70 space-y-1">
                  <li><strong>Agent</strong> &mdash; name + ID</li>
                  <li><strong>Status</strong> &mdash; active/inactive</li>
                  <li><strong>Trust</strong> &mdash; trust label</li>
                  <li><strong>Wallet</strong> &mdash; on-chain wallet address</li>
                  <li><strong>Owners</strong> &mdash; current owner(s)</li>
                  <li><strong>Endpoints</strong> &mdash; MCP, A2A, Web</li>
                  <li><strong>Identity Proof</strong> &mdash; verified or &quot;connect wallet via wc-pair.ts&quot;</li>
                </ul>
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
                  <div className="table-wrapper"><table>
                    <thead>
                      <tr>
                        <th>Label</th>
                        <th>Condition</th>
                        <th>Indicator</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Untrusted</td><td>count &ge; 5, avg &lt; -50</td><td>Red</td></tr>
                      <tr><td>Caution</td><td>avg &lt; 0</td><td>Orange</td></tr>
                      <tr><td>Highly Trusted</td><td>count &ge; 20, avg &ge; 80</td><td>Star</td></tr>
                      <tr><td>Trusted</td><td>count &ge; 10, avg &ge; 70</td><td>Green</td></tr>
                      <tr><td>Established</td><td>count &ge; 5, avg &ge; 50</td><td>Green</td></tr>
                      <tr><td>Emerging</td><td>count &gt; 0, count &lt; 5</td><td>Blue</td></tr>
                      <tr><td>No Data</td><td>count = 0</td><td>White</td></tr>
                    </tbody>
                  </table></div>
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
                  Setting a wallet requires signing via WalletConnect for security.
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

              {/* Update Agent (sub-flow) */}
              <div className="mb-10">
                <h3 className="text-lg font-heading font-bold text-vw-cyan mb-2">Update Agent <span className="text-xs font-mono text-foreground/40 ml-2">(sub-flow)</span></h3>
                <p className="text-sm text-foreground/70 mb-3">
                  Modify existing agent metadata and configuration.
                </p>
                <div className="gradient-border p-4 mb-3">
                  <div className="text-xs space-y-2">
                    <div><strong className="text-vw-purple">Triggers:</strong> <span className="text-foreground/60">&quot;update agent&quot;, &quot;edit agent&quot;, &quot;add MCP endpoint&quot;</span></div>
                    <div><strong className="text-vw-purple">Requirements:</strong> <span className="text-foreground/60">WalletConnect session, agent ownership, IPFS provider</span></div>
                  </div>
                </div>
                <p className="text-sm text-foreground/70">
                  Update name, description, image. Add/change/remove endpoints (MCP, A2A, ENS).
                  Modify OASF skills/domains. Set active status. Configure trust models. Manage metadata.
                </p>
              </div>

              {/* Transfer Agent */}
              <div className="mb-10">
                <h3 className="text-lg font-heading font-bold text-vw-cyan mb-2">Transfer Agent</h3>
                <p className="text-sm text-foreground/70 mb-3">
                  Transfer agent ownership to a new address. This is irreversible.
                </p>
                <div className="gradient-border p-4 mb-3">
                  <div className="text-xs space-y-2">
                    <div><strong className="text-vw-purple">Triggers:</strong> <span className="text-foreground/60">&quot;transfer agent&quot;, &quot;change agent owner&quot;, &quot;give agent to&quot;</span></div>
                    <div><strong className="text-vw-purple">Requirements:</strong> <span className="text-foreground/60">WalletConnect session, agent ownership</span></div>
                  </div>
                </div>
                <p className="text-sm text-foreground/70 mb-3">
                  Takes an agent ID and new owner address (0x). Shows current owner vs new owner and requires explicit confirmation.
                </p>
                <div className="gradient-border p-4 border-red-400/30">
                  <p className="text-xs text-red-400">
                    <strong>Warning:</strong> This is irreversible. You will lose control of the agent after transfer.
                    Only the current owner can initiate a transfer.
                  </p>
                </div>
              </div>
            </section>

            {/* Supported Chains */}
            <section id="supported-chains" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-vw-pink mb-6" style={{ textShadow: "0 0 10px rgba(255,113,206,0.5)" }}>
                Supported Chains
              </h2>

              <div className="gradient-border p-4 mb-6">
                <p className="text-xs text-foreground/60">
                  <strong className="text-vw-purple">Powered by <a href="https://www.ag0.xyz/" target="_blank" rel="noopener noreferrer" className="text-vw-cyan hover:underline">agent0 SDK</a> v1.5.3.</strong>{" "}
                  5 chains with built-in defaults, 13+ additional mainnet chains deployed with manual config.
                </p>
              </div>

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">Full SDK Support</h3>
              <p className="text-sm text-foreground/70 mb-3">
                These chains work out of the box &mdash; built-in registry addresses and subgraph URLs, no overrides needed.
              </p>
              <div className="overflow-x-auto mb-6">
                <div className="table-wrapper"><table>
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
                    <tr>
                      <td>Base Mainnet</td>
                      <td>8453</td>
                      <td><code className="text-xs break-all">Built-in (agent0 SDK default)</code></td>
                    </tr>
                    <tr>
                      <td>Base Sepolia</td>
                      <td>84532</td>
                      <td><code className="text-xs break-all">Built-in (agent0 SDK default)</code></td>
                    </tr>
                  </tbody>
                </table></div>
              </div>

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">Deployed Chains (Manual Config)</h3>
              <p className="text-sm text-foreground/70 mb-3">
                These chains have ERC-8004 contracts deployed at deterministic CREATE2 addresses but are not yet indexed by the SDK subgraph.
                To use them, set the <code>SUBGRAPH_URL</code> environment variable pointing to a subgraph instance for that chain.
              </p>
              <div className="overflow-x-auto mb-6">
                <div className="table-wrapper"><table>
                  <thead>
                    <tr>
                      <th>Chain</th>
                      <th>Chain ID</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Arbitrum One</td><td>42161</td><td>Mainnet</td></tr>
                    <tr><td>Optimism</td><td>10</td><td>Mainnet</td></tr>
                    <tr><td>Avalanche C-Chain</td><td>43114</td><td>Mainnet</td></tr>
                    <tr><td>BSC (BNB Chain)</td><td>56</td><td>Mainnet</td></tr>
                    <tr><td>Gnosis</td><td>100</td><td>Mainnet</td></tr>
                    <tr><td>Scroll</td><td>534352</td><td>Mainnet</td></tr>
                    <tr><td>Celo</td><td>42220</td><td>Mainnet</td></tr>
                    <tr><td>Taiko</td><td>167000</td><td>Mainnet</td></tr>
                    <tr><td>Linea</td><td>59144</td><td>Mainnet</td></tr>
                    <tr><td>Mantle</td><td>5000</td><td>Mainnet</td></tr>
                    <tr><td>Monad</td><td>10143</td><td>Mainnet</td></tr>
                    <tr><td>MegaETH</td><td>40</td><td>Mainnet</td></tr>
                    <tr><td>Abstract</td><td>2741</td><td>Mainnet</td></tr>
                  </tbody>
                </table></div>
              </div>
              <div className="gradient-border p-4 mb-6">
                <p className="text-xs text-foreground/60">
                  <strong className="text-vw-purple">Testnets available too.</strong>{" "}
                  Most deployed chains also have testnet deployments (Arbitrum Sepolia, Optimism Sepolia, Avalanche Fuji, etc.).
                  All use the same deterministic contract addresses. See the skill reference for full details.
                </p>
              </div>

            </section>

            {/* Environment Variables */}
            <section id="environment-variables" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-vw-pink mb-6" style={{ textShadow: "0 0 10px rgba(255,113,206,0.5)" }}>
                Environment Variables
              </h2>

              <div className="overflow-x-auto mb-6">
                <div className="table-wrapper"><table>
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
                    <tr>
                      <td><code>SUBGRAPH_URL</code></td>
                      <td>Non-default chains</td>
                      <td>Subgraph URL override for deployed chains</td>
                    </tr>
                    <tr>
                      <td><code>REGISTRY_ADDRESS_IDENTITY</code></td>
                      <td>Non-default chains</td>
                      <td>Identity registry address override</td>
                    </tr>
                    <tr>
                      <td><code>REGISTRY_ADDRESS_REPUTATION</code></td>
                      <td>Non-default chains</td>
                      <td>Reputation registry address override</td>
                    </tr>
                  </tbody>
                </table></div>
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
                <div className="table-wrapper"><table>
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
                </table></div>
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
                <div className="table-wrapper"><table>
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
                </table></div>
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

            {/* X402 Payment Integration */}
            <section id="x402-integration" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-vw-pink mb-6" style={{ textShadow: "0 0 10px rgba(255,113,206,0.5)" }}>
                X402 Payment Integration
              </h2>

              <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                X402 is an HTTP-based payment protocol (HTTP 402 Payment Required) enabling pay-per-request access to agent endpoints.
                8004skill handles <strong className="text-vw-purple">identity and signing</strong>; the Coinbase <code>awal</code> CLI handles <strong className="text-vw-purple">payments and monetization</strong>.
              </p>

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">How It Works</h3>
              <div className="overflow-x-auto mb-6">
                <div className="table-wrapper"><table>
                  <thead>
                    <tr><th>Concern</th><th>Tool</th><th>Wallet Model</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Identity, registration, metadata, signing</td><td><strong>8004skill</strong></td><td>WalletConnect v2 (non-custodial)</td></tr>
                    <tr><td>Payments, discovery, monetization</td><td><strong>awal</strong></td><td>Coinbase custodial wallet</td></tr>
                  </tbody>
                </table></div>
              </div>

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">Enabling X402</h3>
              <p className="text-sm text-foreground/70 leading-relaxed mb-3">
                Pass <code>--x402 true</code> when registering or updating an agent to flag it as x402-capable.
              </p>
              <CodeBlock code="npx tsx scripts/update-agent.ts --agent-id 8453:42 --chain-id 8453 --rpc-url https://mainnet.base.org --ipfs pinata --x402 true" language="bash" />

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3 mt-6">Payment Readiness</h3>
              <p className="text-sm text-foreground/70 leading-relaxed mb-3">
                An agent is &ldquo;payment-ready&rdquo; when all four conditions are met:
              </p>
              <div className="gradient-border p-4 mb-4">
                <ol className="list-decimal list-inside text-sm text-foreground/70 space-y-1">
                  <li><code>x402support: true</code> &mdash; enabled via <code>--x402 true</code></li>
                  <li><strong className="text-vw-green">Active</strong> status &mdash; <code>--active true</code> (default)</li>
                  <li><strong className="text-vw-green">Wallet</strong> address set &mdash; Operation 7 (wallet set)</li>
                  <li>At least one <strong className="text-vw-green">endpoint</strong> &mdash; MCP, A2A, or web</li>
                </ol>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed mb-3">
                Check readiness with the x402-status script:
              </p>
              <CodeBlock code="npx tsx scripts/x402-status.ts --agent-id 8453:42 --chain-id 8453 --rpc-url https://mainnet.base.org" language="bash" />

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3 mt-6">awal CLI Companion</h3>
              <div className="gradient-border p-4 mb-4">
                <p className="text-xs text-vw-pink font-bold mb-2">
                  Note: <code>awal</code> is a separate Coinbase tool &mdash; not bundled with or required by 8004skill.
                </p>
              </div>
              <div className="overflow-x-auto mb-6">
                <div className="table-wrapper"><table>
                  <thead>
                    <tr><th>Command</th><th>Purpose</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><code>npx awal x402 details &lt;url&gt;</code></td><td>Inspect x402 pricing on an endpoint</td></tr>
                    <tr><td><code>npx awal x402 pay &lt;url&gt;</code></td><td>Pay and call an x402 endpoint</td></tr>
                    <tr><td><code>npx awal x402 bazaar search &quot;&lt;query&gt;&quot;</code></td><td>Discover monetized agents</td></tr>
                    <tr><td><code>npm install express x402-express</code></td><td>Add x402 paywall to your own endpoint</td></tr>
                  </tbody>
                </table></div>
              </div>

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">Workflow</h3>
              <div className="gradient-border p-4 mb-6">
                <ol className="list-decimal list-inside text-sm text-foreground/70 space-y-1">
                  <li><strong className="text-vw-purple">Register</strong> agent with 8004skill (identity, endpoints, OASF)</li>
                  <li><strong className="text-vw-purple">Enable x402</strong>: <code>--x402 true</code> on register or update</li>
                  <li><strong className="text-vw-purple">Set wallet</strong>: Operation 7 (receives USDC payments)</li>
                  <li><strong className="text-vw-purple">Monetize</strong>: use <code>x402-express</code> middleware on your server</li>
                  <li><strong className="text-vw-purple">Discover + pay</strong>: clients use <code>awal</code> to find and pay your agent</li>
                </ol>
              </div>
            </section>

            {/* Architecture */}
            <section id="architecture" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-vw-pink mb-6" style={{ textShadow: "0 0 10px rgba(255,113,206,0.5)" }}>
                Architecture
              </h2>

              <div className="gradient-border p-4 mb-6">
                <p className="text-xs text-foreground/60">
                  <strong className="text-vw-purple">As of agent0-sdk v1.5.3, March 2026.</strong>
                </p>
              </div>

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">Tech Stack</h3>
              <ul className="list-disc list-inside text-sm text-foreground/70 space-y-1 mb-6">
                <li><strong className="text-vw-purple">Runtime:</strong> Node.js &ge; 22.0.0</li>
                <li><strong className="text-vw-purple">Language:</strong> TypeScript (ESM-only)</li>
                <li><strong className="text-vw-purple">Execution:</strong> npx tsx (no build step at runtime)</li>
                <li><strong className="text-vw-purple">Dependencies:</strong> agent0-sdk ^1.5.3, @walletconnect/ethereum-provider, qrcode-terminal, tsx</li>
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
                All 15 scripts follow the same I/O protocol:
              </p>
              <div className="overflow-x-auto mb-6">
                <div className="table-wrapper"><table>
                  <thead>
                    <tr><th>Channel</th><th>Format</th><th>Content</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>stdout</td><td>JSON</td><td>Final result (parsed by the agent)</td></tr>
                    <tr><td>stderr</td><td>JSON</td><td>Progress updates and errors</td></tr>
                    <tr><td>exit 0</td><td>&mdash;</td><td>Success</td></tr>
                    <tr><td>exit 1</td><td>&mdash;</td><td>Failure (error on stderr)</td></tr>
                  </tbody>
                </table></div>
              </div>

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">Key Properties</h3>
              <ul className="list-disc list-inside text-sm text-foreground/70 space-y-1 mb-6">
                <li>ESM-only TypeScript project</li>
                <li>No build step at runtime (tsx compiles on-the-fly)</li>
                <li>Stateless scripts (each invocation is standalone)</li>
                <li>15 TypeScript scripts + 3 shared library files</li>
                <li>State lives in <code>~/.8004skill/config.json</code> and environment variables</li>
                <li>Distributed via <code>npx skills add</code> (Skills CLI) or <code>npx 8004skill install</code></li>
                <li>CLI entry point (<code>bin/cli.mjs</code>) is vanilla ESM JS &mdash; runs via npx without tsx</li>
              </ul>

              <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">ERC-8004 Protocol</h3>
              <p className="text-sm text-foreground/70 mb-3 leading-relaxed">
                ERC-8004 defines a standard for registering, discovering, and evaluating AI agents on EVM chains.
                Three lightweight registries accessed via <a href="https://www.ag0.xyz/" target="_blank" rel="noopener noreferrer" className="text-vw-cyan hover:underline">agent0 SDK</a>:
              </p>
              <ol className="list-decimal list-inside text-sm text-foreground/70 space-y-2 mb-4">
                <li><strong className="text-vw-purple">Identity Registry (ERC-721):</strong> Agent IDs as NFTs. Each token references a registration file (IPFS/HTTP) with name, description, endpoints, and capabilities. Supports MCP, A2A, ENS, OASF endpoint types.</li>
                <li><strong className="text-vw-purple">Reputation Registry:</strong> On-chain feedback with ratings (-100 to 100), tags, and optional IPFS-stored text. Feedback is immutable once submitted (can only be revoked, not edited). Agent owners can append responses.</li>
                <li><strong className="text-vw-purple">Validation Registry:</strong> Third-party validator attestations for trust models (reputation, crypto-economic, TEE attestation).</li>
              </ol>
              <p className="text-sm text-foreground/70 mb-3">
                All contracts use deterministic CREATE2 deployment &mdash; same addresses on every chain. Currently deployed on 18+ chains.
              </p>
              <p className="text-sm text-foreground/70 mb-3">
                <strong>Global Agent ID Format:</strong> <code>eip155:&#123;chainId&#125;:&#123;identityRegistryAddress&#125;:&#123;tokenId&#125;</code>
                <br />
                <strong>Short Form:</strong> <code>&#123;chainId&#125;:&#123;tokenId&#125;</code>
              </p>
              <p className="text-sm text-foreground/70">
                <strong>Agent Lifecycle:</strong> Register &rarr; Configure endpoints &rarr; Discover via search &rarr; Interact via MCP/A2A &rarr; Rate via feedback &rarr; Update as needed &rarr; Transfer ownership (irreversible).
              </p>
            </section>

            {/* Troubleshooting */}
            <section id="troubleshooting" className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-vw-pink mb-6" style={{ textShadow: "0 0 10px rgba(255,113,206,0.5)" }}>
                Troubleshooting
              </h2>

              <p className="text-sm text-foreground/70 mb-6 leading-relaxed">
                Common issues and their solutions. Run <code>npx 8004skill doctor</code> for automated diagnostics.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">WalletConnect Issues</h3>
                  <div className="overflow-x-auto">
                    <div className="table-wrapper"><table>
                      <thead>
                        <tr><th>Error</th><th>Cause</th><th>Fix</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>&quot;No connected account&quot;</td><td>Session expired or missing</td><td>Run <code>wc-pair.ts</code> to re-pair</td></tr>
                        <tr><td>&quot;User rejected&quot;</td><td>Transaction declined in wallet</td><td>Re-run operation, approve in wallet</td></tr>
                        <tr><td>&quot;Project not found&quot;</td><td>Invalid WC project ID</td><td>Verify at cloud.walletconnect.com</td></tr>
                        <tr><td>Session corruption</td><td>Corrupted storage file</td><td>Delete <code>~/.8004skill/wc-storage.json</code>, re-pair</td></tr>
                      </tbody>
                    </table></div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">Transaction Errors</h3>
                  <div className="overflow-x-auto">
                    <div className="table-wrapper"><table>
                      <thead>
                        <tr><th>Error</th><th>Cause</th><th>Fix</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>&quot;insufficient funds&quot;</td><td>Not enough gas token</td><td>Fund wallet (use faucets for testnets)</td></tr>
                        <tr><td>Timeout (120s)</td><td>Slow mining / congestion</td><td>Check txHash on explorer; may still confirm</td></tr>
                        <tr><td>&quot;execution reverted&quot;</td><td>Contract rejected tx</td><td>Check ownership, agent ID, parameter validity</td></tr>
                      </tbody>
                    </table></div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">IPFS &amp; Search</h3>
                  <div className="overflow-x-auto">
                    <div className="table-wrapper"><table>
                      <thead>
                        <tr><th>Error</th><th>Cause</th><th>Fix</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>IPFS upload failed</td><td>Invalid/expired credentials</td><td>Verify PINATA_JWT or equivalent</td></tr>
                        <tr><td>Stale data after write</td><td>Subgraph indexing delay</td><td>Wait 30&ndash;60s and retry the read</td></tr>
                        <tr><td>Semantic search unavailable</td><td>API unreachable</td><td>SDK handles fallback internally; retry or use structured filters only</td></tr>
                        <tr><td>No search results</td><td>Query too specific</td><td>Broaden query or use <code>--chains all</code></td></tr>
                      </tbody>
                    </table></div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-heading font-bold text-vw-cyan mb-3">Environment &amp; Setup</h3>
                  <div className="overflow-x-auto">
                    <div className="table-wrapper"><table>
                      <thead>
                        <tr><th>Error</th><th>Cause</th><th>Fix</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>Node.js version error</td><td>Requires &ge; 22.0.0</td><td><code>brew install node</code> or download from nodejs.org</td></tr>
                        <tr><td>ERR_REQUIRE_ESM</td><td>Wrong module system</td><td>Use <code>npx tsx</code>, ensure Node &ge; 22</td></tr>
                        <tr><td>Cannot find module</td><td>Missing dependencies</td><td><code>npm install</code> in skill directory</td></tr>
                        <tr><td>Config permissions</td><td>Wrong file permissions</td><td><code>chmod 600 ~/.8004skill/config.json</code></td></tr>
                      </tbody>
                    </table></div>
                  </div>
                </div>
              </div>
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
