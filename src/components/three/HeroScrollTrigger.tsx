"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { scrollState } from "@/lib/scrollState";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function HeroScrollTrigger() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const headline = document.querySelector<HTMLElement>("#hero h1");

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          scrollState.heroProgress = self.progress;
        },
      });

      if (headline) {
        const weight = { value: 380 };
        gsap.to(weight, {
          value: 640,
          ease: "none",
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          onUpdate: () => {
            headline.style.fontVariationSettings = `"wght" ${weight.value}`;
          },
        });
      }
    });

    return () => {
      scrollState.heroProgress = 0;
      if (headline) headline.style.fontVariationSettings = "";
      ctx.revert();
    };
  }, [reducedMotion]);

  return null;
}
