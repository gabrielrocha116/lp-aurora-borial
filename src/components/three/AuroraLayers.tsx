"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { auroraFragmentShader, auroraVertexShader } from "./auroraShader";
import { scrollState } from "@/lib/scrollState";

type LayerConfig = {
  z: number;
  scale: number;
  seed: number;
  intensity: number;
  parallax: number;
  scrollParallax: number;
  colorA: string;
  colorB: string;
  colorC: string;
};

const LAYERS: LayerConfig[] = [
  {
    z: -6,
    scale: 1.6,
    seed: 1.3,
    intensity: 0.42,
    parallax: 0.35,
    scrollParallax: 0.6,
    colorA: "#22c58e",
    colorB: "#6d4fc4",
    colorC: "#9c4fb0",
  },
  {
    z: -3.5,
    scale: 1.1,
    seed: 8.7,
    intensity: 0.62,
    parallax: 0.65,
    scrollParallax: 1.4,
    colorA: "#4ade80",
    colorB: "#a855f7",
    colorC: "#ec4899",
  },
  {
    z: -1.5,
    scale: 0.75,
    seed: 15.2,
    intensity: 0.7,
    parallax: 1,
    scrollParallax: 2.6,
    colorA: "#4ade80",
    colorB: "#a855f7",
    colorC: "#ec4899",
  },
];

function AuroraPlane({ config, mouse }: { config: LayerConfig; mouse: React.RefObject<[number, number]> }) {
  const { viewport } = useThree();
  const meshRef = useRef<THREE.Mesh>(null);

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: auroraVertexShader,
      fragmentShader: auroraFragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uIntensity: { value: config.intensity },
        uSeed: { value: config.seed },
        uScale: { value: config.scale },
        uColorA: { value: new THREE.Color(config.colorA) },
        uColorB: { value: new THREE.Color(config.colorB) },
        uColorC: { value: new THREE.Color(config.colorC) },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* eslint-disable react-hooks/immutability --
     react-three-fiber's render loop is an imperative escape hatch outside React's
     render cycle; mutating the material/mesh here each frame is the documented,
     required pattern (see https://r3f.docs.pmnd.rs/api/hooks#useframe) for performance. */
  useFrame((_, delta) => {
    material.uniforms.uTime.value += delta;
    const [mx, my] = mouse.current;
    const current = material.uniforms.uMouse.value as THREE.Vector2;
    current.x += (mx * config.parallax - current.x) * 0.04;
    current.y += (my * config.parallax - current.y) * 0.04;

    const fade = 1 - scrollState.heroProgress;
    material.uniforms.uIntensity.value = config.intensity * Math.max(fade, 0);

    if (meshRef.current) {
      meshRef.current.position.y = scrollState.heroProgress * config.scrollParallax * -3;
    }
  });
  /* eslint-enable react-hooks/immutability */

  const depthScale = 1 + Math.abs(config.z) * 0.18;
  const width = Math.max((viewport.width || 20) * 1.4 * depthScale, 5);
  const height = Math.max((viewport.height || 12) * 1.5 * depthScale, 5);

  return (
    <mesh ref={meshRef} position={[0, 0, config.z]} material={material} renderOrder={config.z}>
      <planeGeometry args={[width, height, 1, 1]} />
    </mesh>
  );
}

export default function AuroraLayers() {
  const mouse = useRef<[number, number]>([0, 0]);

  useFrame(({ pointer }) => {
    mouse.current[0] = pointer.x;
    mouse.current[1] = pointer.y;
  });

  return (
    <group>
      {LAYERS.map((layer) => (
        <AuroraPlane key={layer.z} config={layer} mouse={mouse} />
      ))}
    </group>
  );
}
