export const atmosphereVertexShader = /* glsl */ `
  varying vec3 vNormal;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const atmosphereFragmentShader = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;

  varying vec3 vNormal;

  void main() {
    float fresnel = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.2);
    vec3 color = mix(uColorA, uColorB, fresnel);
    gl_FragColor = vec4(color, fresnel * 0.85);
  }
`;
