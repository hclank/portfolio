import Link from "next/link";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import hclanka from "./hclanka.jpg";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <header className="w-full h-[80px] p-8 flex items-center justify-around">
        <Link href="/" className="mr-2 text-xl text-black" target="_blank">
          hclanka.xyz
        </Link>
        <div className="flex">
          <Link
            href="https://www.youtube.com/@hclanka_films"
            className="mr-2 text-xl text-blue-400 underline hover:text-blue-500"
            target="_blank"
          >
            <FaYoutube />
          </Link>
          <Link
            href="https://linkedin.com/in/hclanka"
            className="mr-2 text-xl text-blue-400 underline hover:text-blue-500"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/hclank"
            className="text-xl text-blue-400 underline hover:text-blue-500"
            target="_blank"
          >
            <FaGithub />
          </Link>
        </div>
      </header>
      <div></div>
    </div>
  );
};

export default Home;
