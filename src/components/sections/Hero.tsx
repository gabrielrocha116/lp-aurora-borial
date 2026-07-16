import { heroWidget, communityAvatars } from "@/data/mock";
import KpGauge from "@/components/ui/KpGauge";
import Avatar from "@/components/ui/Avatar";
import HeroScrollTrigger from "@/components/three/HeroScrollTrigger";
import MagneticButton from "@/components/ui/MagneticButton";
import AnimatedStat from "@/components/ui/AnimatedStat";
import { MapPinIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-void px-4 pt-28 pb-16 sm:px-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: "#050816" }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/aurora-arctic-lake-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover opacity-45 blur-[1px]"
        >
          <source src="/videos/aurora-arctic-lake.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,8,22,0.9) 0%, rgba(5,8,22,0.65) 45%, rgba(5,8,22,0.35) 70%), radial-gradient(120% 80% at 50% 100%, rgba(0,0,0,0.7), transparent 60%)",
        }}
      />
      <HeroScrollTrigger />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-2xl">
          <span className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-text-secondary uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-aurora-green animate-pulse-glow" />
            Live over 312 locations
          </span>

          <h1 className="mt-6 font-display text-[clamp(2.75rem,6vw,5rem)] leading-[1.02] font-semibold tracking-tight text-text-primary">
            Watch the sky
            <br />
            <span className="text-gradient-aurora">before it lights up.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-secondary">
            Nordr tracks geomagnetic activity, cloud cover, and darkness in real
            time — so you know exactly when and where the aurora will show,
            hours before it does.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton
              data-cursor="link"
              data-cursor-label="Go"
              className="focus-ring rounded-full bg-gradient-aurora px-7 py-3.5 text-sm font-semibold text-void"
            >
              Start Tracking Free
            </MagneticButton>
            <button
              data-cursor="link"
              data-cursor-label="Play"
              className="focus-ring flex items-center gap-2 rounded-full border border-glass-border px-6 py-3.5 text-sm font-medium text-text-primary transition-colors hover:border-white/25"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5.5v13l11-6.5-11-6.5Z" />
              </svg>
              Watch Video
            </button>
          </div>

          <div className="mt-12 flex items-center gap-4 text-sm text-text-secondary">
            <div className="flex -space-x-3">
              {communityAvatars.slice(0, 4).map((name) => (
                <Avatar key={name} name={name} size={36} />
              ))}
            </div>
            <span>Joined by 25,000+ aurora chasers worldwide</span>
          </div>
        </div>

        <div className="glass-panel relative ml-auto w-full max-w-sm rounded-3xl p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs tracking-wide text-text-secondary uppercase">
                Current location
              </p>
              <p className="mt-1 font-display text-xl font-medium text-text-primary">
                {heroWidget.location}
              </p>
              <p className="mt-1 text-sm text-aurora-green">{heroWidget.condition}</p>
            </div>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-ember-pink">
              <MapPinIcon className="h-5 w-5 text-void" />
            </span>
          </div>

          <p className="mt-4 font-display text-4xl font-semibold text-text-primary">
            {heroWidget.temperature}°
          </p>

          <div className="mt-6 flex items-center gap-5">
            <div className="relative flex h-[72px] w-[72px] items-center justify-center">
              <KpGauge value={heroWidget.kpIndex} max={heroWidget.kpMax} />
              <span className="absolute font-display text-lg font-semibold text-text-primary">
                {heroWidget.kpIndex}
              </span>
            </div>
            <div>
              <p className="font-display text-2xl font-medium text-text-primary">
                Kp <AnimatedStat value={heroWidget.kpIndex} decimals={1} />
              </p>
              <p className="text-sm text-text-secondary">Strong geomagnetic activity</p>
            </div>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-glass-border pt-6">
            <div>
              <dt className="text-xs text-text-secondary uppercase tracking-wide">Visibility</dt>
              <dd className="mt-1 text-sm font-medium text-text-primary">{heroWidget.visibility}</dd>
            </div>
            <div>
              <dt className="text-xs text-text-secondary uppercase tracking-wide">Next window</dt>
              <dd className="mt-1 text-sm font-medium text-text-primary">{heroWidget.nextWindow}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
