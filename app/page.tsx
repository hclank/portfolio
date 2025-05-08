"use client";
import { useRef, useEffect } from "react";
import graphics from "./graphics";

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cleanup = graphics(containerRef);
      return cleanup;
    }
  }, []);
  return <div ref={containerRef}></div>;
};

export default Home;
