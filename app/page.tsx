"use client";
import { useState } from "react";
import Confetti from "@/components/confetti";
import Link from "next/link";
import Image from "next/image";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import hclanka from "./hclanka.jpg";
import { toast } from "sonner";

const Home = () => {
  const [isVisible, setIsVisisble] = useState(false);
  return (
    <div className="w-full h-full flex flex-col">
      <header className="w-full h-full py-16 px-12 flex flex-col sm:w-1/2">
        <div className="flex">
          <Link
            href="https://www.youtube.com/@hclanka_films"
            className="text-2xl text-blue-400 underline hover:text-blue-500"
            target="_blank"
          >
            <FaYoutube />
          </Link>
          <Link
            href="https://linkedin.com/in/hclanka"
            className="text-2xl mx-1 text-blue-400 underline hover:text-blue-500"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/hclank"
            className="text-2xl text-blue-400 underline hover:text-blue-500"
            target="_blank"
          >
            <FaGithub />
          </Link>
        </div>

        <h1 className="text-4xl font-semibold my-8 sm:text-5xl">
          hi i&apos;m hclanka.
        </h1>

        <div className="pr-0 text-wrap sm:pr-44">
          <p className="text-gray-500 text-xl mb-4 text-left">
            i&apos;m just a guy who loves to build and tinker with tech.
          </p>

          <p className="text-gray-500 text-xl mb-4">
            interested in topics such as{" "}
            <span className="font-semibold">machine learning</span>,{" "}
            <span className="font-semibold">deep learning</span>,{" "}
            <span className="font-semibold">reinforcement learning</span>,{" "}
            <span className="font-semibold">nlp</span> and basically everything
            related to ai.
          </p>

          <p className="text-gray-500 text-xl mb-4 text-left">
            building a tool called
            <Link
              href="https://github.com/backspaceco/traf"
              target="_blank"
              className="text-blue-400 font-semibold mx-2"
            >
              traf
            </Link>
            which is a smart survey tool that plugs directly to hubspot to help
            companies figure out where their best customers actually come from.
          </p>

          <p className="text-gray-500 text-xl mb-6 text-left">
            also trying to build a holding company called
            <Link
              href="https://github.com/backspaceco"
              className="font-semibold text-blue-400 mx-1 sm:mx-2"
            >
              backspace
            </Link>
            which is like a suite of ai tools and other products i make in the
            future.
          </p>

          <p className="text-gray-500 text-xl mb-6 text-left">
            i&apos;m interested in hackathons and plan on joining as many as i
            can, i&apos;m also interested in events like google summer of code
            and competitive programming.
          </p>
          <Button
            className="w-full mb-8"
            onClick={() => {
              setIsVisisble(true);

              navigator.clipboard
                .writeText("chandu.lanka13@gmail.com")
                .then(() => {
                  console.log("copied");
                });

              toast("chandu.lanka13@gmail.com", {
                description: "Copied my email to clipboard",
                action: {
                  label: "Close",
                  onClick: () => console.log("closed"),
                },
              });
            }}
          >
            click me :O
          </Button>
        </div>

        <Image src={hclanka} alt="me" />
      </header>
      {isVisible && <Confetti />}
    </div>
  );
};

export default Home;
