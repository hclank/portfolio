"use client";
import { useRef, useEffect } from "react";
import graphics from "./graphics";

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      graphics(containerRef);
    }
  }, []);
  return <div ref={containerRef} className="h-screen"></div>;
};

export default Home;
