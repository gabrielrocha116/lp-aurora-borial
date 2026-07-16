"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { globeCaptions, globeStats } from "@/data/mock";
import AnimatedStat from "@/components/ui/AnimatedStat";
import MagneticButton from "@/components/ui/MagneticButton";
import NewsletterCard from "@/components/sections/Newsletter";

export default function LiveGlobeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCaption, setActiveCaption] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const idx = Math.min(
            globeCaptions.length - 1,
            Math.floor(self.progress * globeCaptions.length),
          );
          setActiveCaption(idx);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const caption = globeCaptions[activeCaption];

  return (
    <section
      id="globe"
      ref={sectionRef}
      className="relative overflow-hidden bg-abyss px-4 py-28 sm:px-6"
    >
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="glass-panel relative min-h-110 overflow-hidden rounded-3xl">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/aurora-alien-planet-poster.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/videos/aurora-alien-planet.mp4" type="video/mp4" />
          </video>
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, rgba(5,8,22,0.9) 0%, rgba(5,8,22,0.72) 38%, rgba(5,8,22,0.3) 68%, rgba(5,8,22,0.12) 100%)",
            }}
          />

          <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
            <div>
              <p className="text-xs font-medium tracking-wide text-aurora-violet uppercase">
                Live Aurora Map
              </p>

              <div className="mt-3 min-h-28 max-w-sm">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCaption}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight text-text-primary">
                      {caption.title}
                    </h2>
                    <p className="mt-3 text-sm text-text-secondary">{caption.body}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div>
              <dl className="grid grid-cols-2 gap-6">
                {globeStats.map((stat) => (
                  <div key={stat.id}>
                    <dd className="font-display text-3xl font-semibold text-text-primary">
                      <AnimatedStat
                        value={stat.value}
                        suffix={stat.suffix}
                        decimals={stat.id === "kp" ? 1 : undefined}
                      />
                    </dd>
                    <dt className="mt-1 text-sm text-text-secondary">{stat.label}</dt>
                  </div>
                ))}
              </dl>

              <MagneticButton
                type="button"
                data-cursor="link"
                data-cursor-label="Map"
                className="focus-ring mt-8 rounded-full bg-gradient-aurora px-6 py-3 text-sm font-semibold text-void"
              >
                Explore the Map
              </MagneticButton>
            </div>
          </div>
        </div>

        <NewsletterCard />
      </div>
    </section>
  );
}
