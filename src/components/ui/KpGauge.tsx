"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

const SIZE = 72;
const STROKE = 6;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

type KpGaugeProps = {
  value: number;
  max?: number;
  className?: string;
};

export default function KpGauge({ value, max = 9, className }: KpGaugeProps) {
  const reducedMotion = useReducedMotion();
  const targetProgress = Math.min(Math.max(value / max, 0), 1);
  const [progress, setProgress] = useState(reducedMotion ? targetProgress : 0);

  useEffect(() => {
    if (reducedMotion) {
      // Reduced-motion preference is only known post-mount; jump straight to the final value.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setProgress(targetProgress);
      return;
    }
    const timeout = setTimeout(() => setProgress(targetProgress), 300);
    return () => clearTimeout(timeout);
  }, [targetProgress, reducedMotion]);

  const offset = CIRCUMFERENCE * (1 - progress);

  return (
    <svg
      width={SIZE}
      height={SIZE}
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className={className}
      role="img"
      aria-label={`Kp index ${value} out of ${max}`}
    >
      <circle
        cx={SIZE / 2}
        cy={SIZE / 2}
        r={RADIUS}
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth={STROKE}
      />
      <circle
        cx={SIZE / 2}
        cy={SIZE / 2}
        r={RADIUS}
        fill="none"
        stroke="url(#kp-gauge-gradient)"
        strokeWidth={STROKE}
        strokeLinecap="round"
        strokeDasharray={CIRCUMFERENCE}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
        style={{ transition: "stroke-dashoffset 1.1s ease-out" }}
      />
      <defs>
        <linearGradient id="kp-gauge-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4ADE80" />
          <stop offset="0.5" stopColor="#A855F7" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
      </defs>
    </svg>
  );
}
