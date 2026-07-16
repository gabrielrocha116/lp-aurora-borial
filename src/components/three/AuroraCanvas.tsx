"use client";

import { Canvas } from "@react-three/fiber";
import AuroraLayers from "./AuroraLayers";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function AuroraCanvas() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 20%, rgba(139,92,246,0.28), transparent 70%), radial-gradient(45% 40% at 75% 10%, rgba(46,230,166,0.22), transparent 70%), radial-gradient(45% 40% at 20% 15%, rgba(244,114,182,0.18), transparent 70%)",
        }}
      />
    );
  }

  return (
    <Canvas
      aria-hidden="true"
      className="absolute inset-0"
      dpr={[1, 1.75]}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <AuroraLayers />
    </Canvas>
  );
}
