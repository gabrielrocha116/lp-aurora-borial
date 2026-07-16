"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

type AnimatedStatProps = {
  value: number;
  suffix?: string;
  decimals?: number;
};

function format(value: number, decimals?: number) {
  return decimals !== undefined
    ? value.toFixed(decimals)
    : Number.isInteger(value)
      ? Math.round(value).toLocaleString("en-US")
      : value.toString();
}

export default function AnimatedStat({ value, suffix = "", decimals }: AnimatedStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reducedMotion) {
      el.textContent = `${format(value, decimals)}${suffix}`;
      return;
    }

    const counter = { val: 0 };
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          val: value,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${format(counter.val, decimals)}${suffix}`;
          },
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [value, suffix, decimals, reducedMotion]);

  return (
    <span ref={ref}>
      {format(0, decimals)}
      {suffix}
    </span>
  );
}
