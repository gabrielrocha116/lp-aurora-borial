"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

type Ripple = { id: number; x: number; y: number };

type AnimatedButtonProps = Omit<
  React.ComponentPropsWithoutRef<"button">,
  "onAnimationStart" | "onAnimationEnd" | "onDrag" | "onDragStart" | "onDragEnd"
> & {
  variant?: "primary" | "outline";
};

export default function AnimatedButton({
  children,
  className = "",
  variant = "primary",
  onClick,
  ...props
}: AnimatedButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [...r, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    window.setTimeout(() => setRipples((r) => r.filter((ripple) => ripple.id !== id)), 650);
    onClick?.(e);
  }

  const variantClass =
    variant === "primary"
      ? "bg-gradient-aurora text-void"
      : "border border-glass-border text-text-primary hover:border-white/25";

  return (
    <MagneticButton
      onClick={handleClick}
      className={`focus-ring relative overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold ${variantClass} ${className}`}
      {...props}
    >
      {children}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ opacity: 0.45, scale: 0 }}
            animate={{ opacity: 0, scale: 4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="pointer-events-none absolute h-4 w-4 rounded-full bg-white"
            style={{ left: ripple.x - 8, top: ripple.y - 8 }}
          />
        ))}
      </AnimatePresence>
    </MagneticButton>
  );
}
