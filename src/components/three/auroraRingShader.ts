export const auroraRingVertexShader = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const auroraRingFragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;

  varying vec2 vUv;

  void main() {
    float flow = vUv.x * 6.28318 + uTime * 0.5;

    float wobble = sin(flow * 2.0 + uTime * 0.8) * 0.5 + 0.5;
    vec3 color = mix(uColorA, uColorB, sin(flow) * 0.5 + 0.5);
    color = mix(color, uColorC, wobble * 0.6);

    float tubeFade = smoothstep(0.0, 0.35, vUv.y) * smoothstep(1.0, 0.65, vUv.y);
    float shimmer = 0.5 + 0.3 * sin(flow * 3.0 - uTime * 1.4);

    float alpha = tubeFade * shimmer * 0.75;
    gl_FragColor = vec4(color, alpha);
  }
`;
