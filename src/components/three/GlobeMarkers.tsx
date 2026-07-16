"use client";

import { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { latLonToVector3 } from "@/lib/latLonToVector3";
import { globePoints } from "@/data/mock";

const GLOBE_RADIUS = 1.5;

function kpColor(kp: number) {
  const t = Math.min(Math.max(kp / 9, 0), 1);
  const low = new THREE.Color("#4ade80");
  const mid = new THREE.Color("#a855f7");
  const high = new THREE.Color("#ec4899");
  return t < 0.5 ? low.clone().lerp(mid, t * 2) : mid.clone().lerp(high, (t - 0.5) * 2);
}

function GlobeMarker({
  point,
  onHover,
  hovered,
}: {
  point: (typeof globePoints)[number];
  onHover: (id: string | null) => void;
  hovered: boolean;
}) {
  const position = useMemo(
    () => latLonToVector3(point.lat, point.lon, GLOBE_RADIUS + 0.01),
    [point.lat, point.lon],
  );
  const glowRef = useRef<THREE.Mesh>(null);
  const color = useMemo(() => kpColor(point.kp), [point.kp]);
  // useState's lazy initializer is the sanctioned escape hatch for one-time impure values.
  const [phase] = useState(() => Math.random() * Math.PI * 2);

  useFrame(({ clock }) => {
    if (!glowRef.current) return;
    const pulse = 1 + Math.sin(clock.elapsedTime * 1.6 + phase) * 0.35;
    glowRef.current.scale.setScalar(pulse * (hovered ? 1.6 : 1));
  });

  return (
    <group position={position}>
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover(point.id);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          onHover(null);
        }}
      >
        <sphereGeometry args={[0.045, 12, 12]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.022, 12, 12]} />
        <meshBasicMaterial color={color} transparent opacity={0.55} depthWrite={false} blending={THREE.AdditiveBlending} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.01, 8, 8]} />
        <meshBasicMaterial color={color} />
      </mesh>
      {hovered && (
        <Html distanceFactor={4} occlude center zIndexRange={[10, 0]}>
          <div className="glass-panel pointer-events-none w-40 -translate-y-14 rounded-xl px-3 py-2 text-center">
            <p className="text-xs font-medium text-text-primary">{point.name}</p>
            <p className="mt-0.5 text-[11px] text-text-secondary">Kp index {point.kp.toFixed(1)}</p>
          </div>
        </Html>
      )}
    </group>
  );
}

export default function GlobeMarkers() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <group>
      {globePoints.map((point) => (
        <GlobeMarker
          key={point.id}
          point={point}
          hovered={hoveredId === point.id}
          onHover={setHoveredId}
        />
      ))}
    </group>
  );
}

export { GLOBE_RADIUS };
