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

export default function Graphics(containerRef: RefObject<HTMLDivElement>) {
  const vertexShader = ``;
  const fragmentShader = ``;

  const { scene, camera, renderer } = init(containerRef);

  const geometry = new three.BoxGeometry(
    window.innerWidth,
    window.innerHeight,
    1
  );
  const material = new three.ShaderMaterial({
    uniforms: {},
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  });
  const cube = new three.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

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
