import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <h1
          className="text-8xl font-bold font-[family-name:var(--font-heading)] glitch-text neon-pink mb-4"
          data-text="404"
        >
          404
        </h1>
        <p className="text-2xl font-[family-name:var(--font-heading)] text-vw-cyan mb-2">
          Agent not found
        </p>
        <p className="text-sm text-gray-400 mb-8 font-[family-name:var(--font-mono)]">
          This endpoint returned no response. The agent you&apos;re looking for
          may have been transferred or doesn&apos;t exist on this chain.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-vw-pink/20 border border-vw-pink/40 rounded-lg text-vw-pink hover:bg-vw-pink/30 transition-colors font-[family-name:var(--font-mono)] text-sm"
          >
            Back to home
          </Link>
          <Link
            href="/docs"
            className="px-6 py-3 bg-vw-purple/20 border border-vw-purple/40 rounded-lg text-vw-purple hover:bg-vw-purple/30 transition-colors font-[family-name:var(--font-mono)] text-sm"
          >
            Read the docs
          </Link>
        </div>
      </div>
    </main>
  );
}
