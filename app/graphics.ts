import { RefObject } from "react";
import * as three from "three";

const vertex = `
uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
uniform vec2 pixels;
float pi = 3.14;

void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragment = `
uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;
uniform vec2 vUv;
varying vec3 vPosition;
float pi = 3.14;

// noise function
float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

float noise(vec3 p){
    vec3 a = floor(p);
    vec3 d = p - a;
    d = d * d * (3.0 - 2.0 * d);

    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
    vec4 k1 = perm(b.xyxy);
    vec4 k2 = perm(k1.xyxy + b.zzww);

    vec4 c = k2 + a.zzzz;
    vec4 k3 = perm(c);
    vec4 k4 = perm(c + 1.0);

    vec4 o1 = fract(k3 * (1.0 / 41.0));
    vec4 o2 = fract(k4 * (1.0 / 41.0));

    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

    return o4.y * d.y + o4.x * (1.0 - d.y);
}

void main() {
    float n = noise(vPosition+time);
    gl_FragColor = vec4(n,0., 0.0, 1.);
}
`;

const is_playing = false;

function init(containerRef: RefObject<HTMLDivElement>) {
  const scene = new three.Scene();
  const camera = new three.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new three.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  containerRef.current?.appendChild(renderer.domElement);

  return { scene, camera, renderer };
}

export default function Graphics(containerRef: RefObject<HTMLDivElement>) {
  const { scene, camera, renderer } = init(containerRef);

  const geometry = new three.SphereGeometry(1.5, 32, 32);
  const material = new three.ShaderMaterial({
    side: three.DoubleSide,
    uniforms: {
      time: { value: 0 },
      resolution: { value: new three.Vector4() },
    },
    vertexShader: vertex,
    fragmentShader: fragment,
  });
  const sphere_1 = new three.Mesh(geometry, material);
  scene.add(sphere_1);

  camera.position.set(0, 0, 1.3);

  const renderScene = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(renderScene);
  };

  renderScene();

  const handleResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
    containerRef.current?.removeChild(renderer.domElement);
    renderer.dispose();
  };
}
