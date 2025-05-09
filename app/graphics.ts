import { RefObject } from "react";
import * as three from "three";
import shaders from "./shaders";

let time = 0;

export default function Graphics(containerRef: RefObject<HTMLDivElement>) {
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

  const bg_geometry = new three.SphereGeometry(1.5, 32, 32);
  const bg_material = new three.ShaderMaterial({
    side: three.DoubleSide,
    uniforms: {
      time: { value: 0 },
      resolution: { value: new three.Vector4() },
    },
    vertexShader: shaders.bg_vertex,
    fragmentShader: shaders.bg_fragment,
  });
  const bg_sphere = new three.Mesh(bg_geometry, bg_material);
  scene.add(bg_sphere);

  let geo = new three.SphereGeometry(0.4, 32, 32);
  let mat = new three.ShaderMaterial({
    side: three.DoubleSide,
    uniforms: {
      time: { value: 0 },
      resolution: { value: new three.Vector4() },
    },
    vertexShader: shaders.main_vertex,
    fragmentShader: shaders.main_fragment,
  });
  const main_sphere = new three.Mesh(geo, mat);
  //   scene.add(main_sphere);

  camera.position.set(0, 0, 1.3);

  const renderScene = () => {
    time += 0.001;
    bg_material.uniforms.time.value = time;
    renderer.setPixelRatio(0.2);
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
