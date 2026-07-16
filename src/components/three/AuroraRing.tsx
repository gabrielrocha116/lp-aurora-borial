"use client";

import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { auroraRingFragmentShader, auroraRingVertexShader } from "./auroraRingShader";
import { GLOBE_RADIUS } from "./GlobeMarkers";

export default function AuroraRing() {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: auroraRingVertexShader,
        fragmentShader: auroraRingFragmentShader,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        uniforms: {
          uTime: { value: 0 },
          uColorA: { value: new THREE.Color("#4ade80") },
          uColorB: { value: new THREE.Color("#a855f7") },
          uColorC: { value: new THREE.Color("#ec4899") },
        },
      }),
    [],
  );

  /* eslint-disable react-hooks/immutability --
     react-three-fiber's render loop is an imperative escape hatch outside React's
     render cycle; mutating the material here each frame is the documented,
     required pattern (see https://r3f.docs.pmnd.rs/api/hooks#useframe). */
  useFrame((_, delta) => {
    material.uniforms.uTime.value += delta;
  });
  /* eslint-enable react-hooks/immutability */

  return (
    <mesh rotation={[1.0, 0, 0.25]} material={material} renderOrder={2}>
      <torusGeometry args={[GLOBE_RADIUS * 1.32, 0.1, 16, 128]} />
    </mesh>
  );
}
