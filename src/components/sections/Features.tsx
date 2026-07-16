import { features } from "@/data/mock";
import { featureIcons, ArrowUpRightIcon } from "@/components/icons";
import TiltCard from "@/components/ui/TiltCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-abyss px-4 py-28 sm:px-6">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/aurora-snowy-mountains-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover opacity-40 blur-[2px]"
        >
          <source src="/videos/aurora-snowy-mountains.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,15,36,0.8) 0%, rgba(10,15,36,0.4) 45%, rgba(10,15,36,0.9) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Why Nordr"
          title="Everything you need to catch the lights"
          description="Four tools built around one job: getting you under a clear, active sky at the right moment."
        />

        <ScrollReveal className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = featureIcons[feature.icon];
            return (
              <TiltCard key={feature.id}>
                <GlassCard
                  as="a"
                  href="#"
                  hover
                  data-cursor="link"
                  data-cursor-label="View"
                  className="group relative flex h-full flex-col p-7"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: feature.color }}
                    >
                      <Icon className="h-6 w-6 text-void" />
                    </span>
                    <ArrowUpRightIcon className="h-5 w-5 text-text-secondary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text-primary" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-medium text-text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {feature.description}
                  </p>
                </GlassCard>
              </TiltCard>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
