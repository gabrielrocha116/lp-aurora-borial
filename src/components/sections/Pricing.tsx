import { pricingPlans } from "@/data/mock";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedButton from "@/components/ui/AnimatedButton";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 13l4 4 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-abyss px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Pricing"
          title="Pick your forecast"
          description="Start free. Upgrade when you're chasing every clear night, not just the big ones."
          align="center"
          className="mx-auto"
        />

        <ScrollReveal className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <GlassCard
              key={plan.id}
              hover
              className={`relative flex flex-col p-8 ${plan.highlighted ? "lg:-translate-y-4 lg:scale-105" : ""}`}
              style={
                plan.highlighted
                  ? { boxShadow: "0 0 0 1px rgba(168,85,247,0.4), 0 30px 80px -30px rgba(168,85,247,0.5)" }
                  : undefined
              }
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-aurora px-4 py-1 text-xs font-semibold text-void">
                  Most Popular
                </span>
              )}

              <h3 className="font-display text-xl font-semibold text-text-primary">{plan.name}</h3>
              <p className="mt-2 text-sm text-text-secondary">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-semibold text-text-primary">
                  ${plan.price}
                </span>
                <span className="text-sm text-text-secondary">/{plan.period}</span>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-aurora-green" />
                    {feature}
                  </li>
                ))}
              </ul>

              <AnimatedButton
                type="button"
                data-cursor="link"
                data-cursor-label="Go"
                variant={plan.highlighted ? "primary" : "outline"}
                className="mt-8 w-full"
              >
                {plan.cta}
              </AnimatedButton>
            </GlassCard>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
