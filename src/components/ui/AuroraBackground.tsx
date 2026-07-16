function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function buildStarField(count: number, spread: number) {
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.round(seededRandom(i * 12.9898) * spread);
    const y = Math.round(seededRandom(i * 78.233) * spread);
    shadows.push(`${x}px ${y}px #fff`);
  }
  return shadows.join(", ");
}

const STAR_LAYER_SMALL = buildStarField(90, 2000);
const STAR_LAYER_LARGE = buildStarField(40, 2000);

export default function AuroraBackground({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 10%, rgba(45,212,191,0.16), transparent 65%), radial-gradient(55% 45% at 85% 15%, rgba(56,189,248,0.12), transparent 65%), radial-gradient(50% 40% at 50% 90%, rgba(74,222,128,0.1), transparent 65%)",
        }}
      />

      <div
        className="animate-drift absolute -top-1/4 left-1/3 h-[60vh] w-[60vh] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(45,212,191,0.35), transparent 70%)" }}
      />
      <div
        className="animate-drift absolute top-1/3 -right-1/4 h-[50vh] w-[50vh] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.3), transparent 70%)", animationDelay: "-6s" }}
      />

      <div
        className="absolute inset-0 opacity-[0.35] mix-blend-screen"
        style={{
          background:
            "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.05) 42%, transparent 54%), linear-gradient(100deg, transparent 55%, rgba(56,189,248,0.06) 65%, transparent 78%)",
        }}
      />

      <div className="absolute inset-0 opacity-70" style={{ boxShadow: STAR_LAYER_SMALL }} />
      <div
        className="animate-pulse-glow absolute inset-0 opacity-50"
        style={{ boxShadow: STAR_LAYER_LARGE }}
      />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "120px 120px",
        }}
      />
    </div>
  );
}
