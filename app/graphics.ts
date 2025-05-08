import { RefObject } from "react";
import * as three from "three";

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

function graphics(
  scene: three.Scene,
  renderer: three.WebGLRenderer,
  camera: three.PerspectiveCamera
) {
  const geometry = new three.SphereGeometry(1.5, 32, 32);
  const material = new three.MeshBasicMaterial({ color: 0x00ff00 });
  const sphere_1 = new three.Mesh(geometry, material);
  scene.add(sphere_1);

  const renderScene = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(renderScene);
  };

  renderScene();
}

export default function webgl_stuff(containerRef: RefObject<HTMLDivElement>) {
  const { scene, camera, renderer } = init(containerRef);
  camera.position.set(0, 0, 1.3);

  graphics(scene, renderer, camera);

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
