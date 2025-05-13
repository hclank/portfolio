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

  const renderTarget = new three.WebGLRenderTarget(
    window.innerWidth,
    window.innerHeight,
    { minFilter: three.LinearFilter, magFilter: three.LinearFilter }
  );

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
  bg_material.uniforms.resolution.value = new three.Vector2(
    window.innerWidth,
    window.innerHeight
  );
  const bg_sphere = new three.Mesh(bg_geometry, bg_material);
  scene.add(bg_sphere);

  camera.position.set(0, 0, 1.3);

  const fresnel_sphere_geo = new three.SphereGeometry(0.4, 32, 32);
  let fresnel_spherer_mat = new three.ShaderMaterial({
    side: three.DoubleSide,
    uniforms: {
      time: { value: 0 },
      rimPower: { value: 2.5 }, // Try 2.0 to 5.0 for different effects
      rimColor: { value: new three.Color(0xffffff) }, // Rim color (white)
      baseColor: { value: new three.Color(0x222266) }, // Base color
    },
    vertexShader: shaders.fresnel_vertex,
    fragmentShader: shaders.fresnel_fragment,
  });
  const fresnel_sphere = new three.Mesh(
    fresnel_sphere_geo,
    fresnel_spherer_mat
  );
  scene.add(fresnel_sphere);

  const quadGeometry = new three.PlaneGeometry(2, 2);
  const quadMaterial = new three.ShaderMaterial({
    uniforms: {
      tDiffuse: { value: renderTarget.texture },
      time: { value: 0 },
      grainAmount: { value: 0.19 },
    },
    vertexShader: shaders.grain_vertex,
    fragmentShader: shaders.grain_fragment,
    depthTest: false,
    depthWrite: false,
  });
  const quad = new three.Mesh(quadGeometry, quadMaterial);
  const quadScene = new three.Scene();
  const quadCamera = new three.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  quadScene.add(quad);

  const renderScene = () => {
    time += 0.001;
    bg_material.uniforms.time.value = time;
    quadMaterial.uniforms.time.value = time;

    renderer.setRenderTarget(renderTarget);
    renderer.render(scene, camera);

    renderer.setRenderTarget(null);
    renderer.render(quadScene, quadCamera);
    requestAnimationFrame(renderScene);
  };

  renderScene();

  const handleResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    renderTarget.setSize(width, height);
    bg_material.uniforms.resolution.value.set(width, height);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
    containerRef.current?.removeChild(renderer.domElement);
    renderer.dispose();
  };
}
