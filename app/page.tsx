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

const Home = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="main grid grid-cols-2 gap-4">
        {/* card 1 */}
        <Card>
          <CardHeader>
            <CardTitle>HC Lanka</CardTitle>
            <CardDescription>ml and hardware enthusiast</CardDescription>
          </CardHeader>
          <CardContent className="">
            <a href="https://github.com/hclank" target="_blank">
              <Button variant="ghost">
                <FaGithub />
              </Button>
            </a>
            <a href="https://github.com/hclank" target="_blank">
              <Button variant="ghost">
                <FaLinkedin />
              </Button>
            </a>
            <a href="https://github.com/hclank" target="_blank">
              <Button variant="ghost">
                <FaTwitter />
              </Button>
            </a>
            <a href="https://github.com/chandudagoat" target="_blank">
              <Button variant="ghost">
                <FaInstagram />
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* card 2 */}
        <Card>
          <CardHeader>
            <CardTitle>HC Lanka</CardTitle>
            <CardDescription>ml and hardware enthusiast</CardDescription>
          </CardHeader>
          <CardContent className="">
            <a href="https://github.com/hclank" target="_blank">
              <Button variant="ghost">
                <FaGithub />
              </Button>
            </a>
            <a href="https://github.com/hclank" target="_blank">
              <Button variant="ghost">
                <FaLinkedin />
              </Button>
            </a>
            <a href="https://github.com/hclank" target="_blank">
              <Button variant="ghost">
                <FaTwitter />
              </Button>
            </a>
            <a href="https://github.com/chandudagoat" target="_blank">
              <Button variant="ghost">
                <FaInstagram />
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* card 3 */}
        <Card>
          <CardHeader>
            <CardTitle>HC Lanka</CardTitle>
            <CardDescription>ml and hardware enthusiast</CardDescription>
          </CardHeader>
          <CardContent className="">
            <a href="https://github.com/hclank" target="_blank">
              <Button variant="ghost">
                <FaGithub />
              </Button>
            </a>
            <a href="https://github.com/hclank" target="_blank">
              <Button variant="ghost">
                <FaLinkedin />
              </Button>
            </a>
            <a href="https://github.com/hclank" target="_blank">
              <Button variant="ghost">
                <FaTwitter />
              </Button>
            </a>
            <a href="https://github.com/chandudagoat" target="_blank">
              <Button variant="ghost">
                <FaInstagram />
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* card 4 */}
        <Card>
          <CardHeader>
            <CardTitle>HC Lanka</CardTitle>
            <CardDescription>ml and hardware enthusiast</CardDescription>
          </CardHeader>
          <CardContent className="">
            <a href="https://github.com/hclank" target="_blank">
              <Button variant="ghost">
                <FaGithub />
              </Button>
            </a>
            <a href="https://github.com/hclank" target="_blank">
              <Button variant="ghost">
                <FaLinkedin />
              </Button>
            </a>
            <a href="https://github.com/hclank" target="_blank">
              <Button variant="ghost">
                <FaTwitter />
              </Button>
            </a>
            <a href="https://github.com/chandudagoat" target="_blank">
              <Button variant="ghost">
                <FaInstagram />
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
