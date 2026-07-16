"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Globe from "./Globe";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function GlobeCanvas() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(46,230,166,0.5), rgba(139,92,246,0.35) 45%, rgba(5,7,13,0.9) 75%)",
          boxShadow: "0 0 120px rgba(139,92,246,0.35), inset -20px -20px 80px rgba(0,0,0,0.6)",
        }}
      />
    );
  }

  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 4], fov: 45 }}
    >
      <Suspense fallback={null}>
        <Globe />
      </Suspense>
    </Canvas>
  );
}
