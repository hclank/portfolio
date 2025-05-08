"use client";
import { useRef, useEffect } from "react";
import Graphics from "./graphics";

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      Graphics(containerRef);
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
