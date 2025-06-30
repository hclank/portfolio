import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import hclanka from "./hclanka.jpg";

const Home = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div>
        <Card className="w-96 h-96 flex flex-col items-center">
          <CardHeader>
            <CardTitle>HC Lanka</CardTitle>
            <CardDescription>ml and hardware enthusiast</CardDescription>
          </CardHeader>
          <Image
            src={hclanka}
            alt="my picture"
            className="w-48 h-48 object-cover"
          />
          <CardContent className="p-4 flex grid grid-cols-4 gap-4">
            <a href="https://github.com/hclank" target="_blank">
              <FaGithub className="w-6 h-6 hover:text-gray-300" />
            </a>
            <a href="https://github.com/hclank" target="_blank">
              <FaLinkedin className="w-6 h-6 hover:text-gray-300" />
            </a>
            <a href="https://github.com/hclank" target="_blank">
              <FaTwitter className="w-6 h-6 hover:text-gray-300" />
            </a>
            <a href="https://github.com/chandudagoat" target="_blank">
              <FaInstagram className="w-6 h-6 hover:text-gray-300" />
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
