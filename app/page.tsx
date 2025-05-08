"use client";
import { useRef, useEffect } from "react";
import webgl_stuff from "./graphics";

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      webgl_stuff(containerRef);
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
