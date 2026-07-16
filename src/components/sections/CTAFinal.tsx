import Image from "next/image";
import AnimatedButton from "@/components/ui/AnimatedButton";
import AuroraBackground from "@/components/ui/AuroraBackground";

export default function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-abyss px-4 py-32 text-center sm:px-6">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/aurora-snowy-mountains-poster.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30 blur-[2px] saturate-125"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,15,36,0.75) 0%, rgba(10,15,36,0.4) 40%, rgba(10,15,36,0.85) 100%)",
          }}
        />
      </div>
      <AuroraBackground />

      <div className="relative mx-auto max-w-2xl">
        <h2 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-tight tracking-tight text-text-primary">
          Your next clear night is closer than you think
        </h2>
        <p className="mt-5 text-lg text-text-secondary">
          Join 25,000+ chasers who never miss the sky again. Free to start, no card required.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <AnimatedButton data-cursor="link" data-cursor-label="Go" variant="primary">
            Start Tracking Free
          </AnimatedButton>
          <AnimatedButton data-cursor="link" data-cursor-label="View" variant="outline">
            View Pricing
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
