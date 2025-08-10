import Link from "next/link";
import Image from "next/image";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import hclanka from "./hclanka.jpg";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <header className="w-1/2 h-screen py-16 px-12 flex flex-col">
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

        <h1 className="text-5xl font-semibold my-8">hi i'm hclanka.</h1>

        <div className="pr-8">
          <p className="text-gray-500 text-xl mb-4">
            i'm just a guy who loves to build and tinker with stuff.
          </p>

          <p className="text-gray-500 text-xl mb-4 text-justify">
            interested in topics such as{" "}
            <span className="font-semibold">machine learning</span>,{" "}
            <span className="font-semibold">deep learning</span>,{" "}
            <span className="font-semibold">reinforcement learning</span>,{" "}
            <span className="font-semibold">nlp</span> and basically everything
            related to ai.
          </p>

          <p className="text-gray-500 text-xl mb-4 text-justify">
            currently venturing in the space of surveys, building a tool called
            <Link
              href="https://github.com/backspaceco/traf"
              target="_blank"
              className="text-blue-400 font-semibold"
            >
              {" "}
              traf
            </Link>{" "}
            which is a smart survey tool that plugs directly to hubspot to help
            companies figure out where their best customers actually come from.
          </p>

          <p className="text-gray-500 text-xl mb-6 text-justify">
            also trying to build a holding company called{" "}
            <Link
              href="https://github.com/backspaceco"
              className="font-semibold text-blue-400"
            >
              backspace
            </Link>{" "}
            which is like a suite of ai tools and other products i make in the
            future.
          </p>

          <p className="text-gray-500 text-xl mb-6 text-justify">
            i'm interested in hackathons and plan on joining as many as i can,
            i'm also interested in events like GSoC and competitive programming.
          </p>

          <Image src={hclanka} alt="me" />
        </div>
      </header>
    </div>
  );
};

export default Home;
