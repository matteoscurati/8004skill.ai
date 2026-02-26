export default function BetaBanner() {
  return (
    <div className="sticky top-16 z-40 bg-vw-purple/10 border-b border-vw-purple/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2.5 text-center text-xs text-foreground/70">
        <span className="inline-block bg-vw-purple/20 text-vw-purple font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider mr-2">
          Beta
        </span>
        8004skill is in active development. APIs, config format, and supported chains may change.
      </div>
    </div>
  );
}
