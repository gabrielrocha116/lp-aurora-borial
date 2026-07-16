"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

type CursorVariant = "default" | "link" | "magnify";

export default function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [label, setLabel] = useState<string | null>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (reducedMotion) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Feature detection (pointer type, reduced motion) can only run client-side post-mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    function handleMove(e: PointerEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as HTMLElement)?.closest?.("[data-cursor]");
      if (target) {
        setVariant((target.getAttribute("data-cursor") as CursorVariant) ?? "default");
        setLabel(target.getAttribute("data-cursor-label"));
      } else {
        setVariant("default");
        setLabel(null);
      }
    }

    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [reducedMotion, x, y]);

  if (!enabled) return null;

  const size = variant === "default" ? 10 : variant === "link" ? 60 : 52;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100]"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={{
          width: size,
          height: size,
          backgroundColor: variant === "default" ? "rgba(46,230,166,0.9)" : "rgba(255,255,255,0.04)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
        className="flex items-center justify-center rounded-full border border-white/10 backdrop-blur-sm"
      >
        {variant === "link" && label && (
          <span className="text-[11px] font-medium whitespace-nowrap text-text-primary">{label}</span>
        )}
        {variant === "magnify" && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" aria-hidden="true">
            <circle cx="10" cy="10" r="6" />
            <path d="M15 15l5 5" strokeLinecap="round" />
          </svg>
        )}
      </motion.div>
    </motion.div>
  );
}
