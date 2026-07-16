"use client";

import { useMemo, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import GlobeMarkers, { GLOBE_RADIUS } from "./GlobeMarkers";
import { atmosphereFragmentShader, atmosphereVertexShader } from "./globeAtmosphereShader";
import AuroraRing from "./AuroraRing";

function Atmosphere() {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmosphereFragmentShader,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        depthWrite: false,
        uniforms: {
          uColorA: { value: new THREE.Color("#4ade80") },
          uColorB: { value: new THREE.Color("#a855f7") },
        },
      }),
    [],
  );

  return (
    <mesh material={material} scale={1.18}>
      <sphereGeometry args={[GLOBE_RADIUS, 48, 48]} />
    </mesh>
  );
}

function GlobeBody() {
  const groupRef = useRef<THREE.Group>(null);
  const nightTexture = useLoader(THREE.TextureLoader, "/images/earth-night.jpg");
  // Configuring a loaded THREE.Texture's colorSpace in place is the documented
  // three.js pattern; useLoader caches this instance, so it's a one-time setup.
  // eslint-disable-next-line react-hooks/immutability
  nightTexture.colorSpace = THREE.SRGBColorSpace;

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS, 64, 64]} />
        <meshStandardMaterial
          map={nightTexture}
          emissiveMap={nightTexture}
          emissive="#ffddaa"
          emissiveIntensity={1.4}
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS * 1.002, 24, 16]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.06} />
      </mesh>
      <Atmosphere />
      <AuroraRing />
      <GlobeMarkers />
    </group>
  );
}

export default function Globe() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 3, 5]} intensity={1.1} color="#ffffff" />
      <pointLight position={[-4, -2, -3]} intensity={0.4} color="#a855f7" />
      <GlobeBody />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        enableDamping
        dampingFactor={0.08}
        minPolarAngle={Math.PI * 0.18}
        maxPolarAngle={Math.PI * 0.82}
        rotateSpeed={0.5}
      />
    </>
  );
}
