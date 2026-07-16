import { auroraGallery } from "@/data/mock";
import TiltCard from "@/components/ui/TiltCard";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-abyss px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Sky Previews"
          title="See tonight's sky before you go"
          description="What strong geomagnetic activity looks like on the ground — from fjord reflections to ridge-line curtains."
          align="center"
          className="mx-auto"
        />

        <ScrollReveal className="mt-14 grid gap-5 md:grid-cols-3">
          {auroraGallery.map((item) => (
            <TiltCard key={item.id}>
              <GlassCard
                hover
                className="group relative flex h-72 flex-col justify-end overflow-hidden p-0 sm:h-80"
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={item.poster}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                >
                  <source src={item.video} type="video/mp4" />
                </video>
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(5,8,22,0) 35%, rgba(5,8,22,0.92) 100%)",
                  }}
                />
                <div className="relative p-6">
                  <p className="font-display text-lg font-medium text-text-primary">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">{item.description}</p>
                </div>
              </GlassCard>
            </TiltCard>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
