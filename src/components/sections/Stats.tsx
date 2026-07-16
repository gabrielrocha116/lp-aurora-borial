import { statBar, testimonials } from "@/data/mock";
import { statIcons, StarIcon } from "@/components/icons";
import AnimatedStat from "@/components/ui/AnimatedStat";
import Avatar from "@/components/ui/Avatar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";

export default function Stats() {
  const featured = testimonials[0];

  return (
    <section id="testimonials" className="relative bg-abyss px-4 py-20 sm:px-6">
      <ScrollReveal className="mx-auto grid max-w-6xl grid-cols-2 gap-5 lg:grid-cols-6">
        <GlassCard hover className="col-span-2 flex flex-col justify-center p-7 lg:col-span-2">
          <div className="flex gap-1 text-aurora-green">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-4 w-4" />
            ))}
          </div>
          <blockquote className="mt-4 text-sm leading-relaxed text-text-secondary">
            “{featured.quote}”
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <Avatar name={featured.name} size={40} ringed={false} />
            <div>
              <p className="text-sm font-medium text-text-primary">{featured.name}</p>
              <p className="text-xs text-text-secondary">{featured.role}</p>
            </div>
          </div>
        </GlassCard>

        {statBar.map((stat) => {
          const Icon = statIcons[stat.icon];
          return (
            <GlassCard key={stat.id} hover className="p-6 text-center">
              <span
                className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{ backgroundColor: stat.color }}
              >
                <Icon className="h-5 w-5 text-void" />
              </span>
              <p className="mt-4 font-display text-3xl font-semibold text-text-primary sm:text-4xl">
                <AnimatedStat
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.id === "rating" ? 1 : undefined}
                />
              </p>
              <p className="mt-1 text-sm text-text-secondary">{stat.label}</p>
            </GlassCard>
          );
        })}
      </ScrollReveal>
    </section>
  );
}
