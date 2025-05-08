"use client";
import { useRef, useEffect } from "react";
import * as three from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
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

      const loader = new GLTFLoader();
      loader.load(
        "models/scene.gltf",
        (gltf) => {
          scene.add(gltf.scene);
        },
        undefined,
        (error) => {
          console.error(error);
        }
      );
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
  }, []);
  return (
    <div ref={containerRef}>
      <h1 className="absolute w-full top-10 text-center z-100 block">
        hclanka
      </h1>
    </div>
  );
};

export default Home;
