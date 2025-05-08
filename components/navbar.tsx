"use client";

import { ModeToggle } from "@/components/theme-toggle";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";

import logo from "@/app/logo.png";

export default function Navbar() {
  return (
    <nav className="w-full h-32 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <a href="/">
          <Image src={logo} alt="logo" className="w-10" />
        </a>
        <span>
          <a
            href="https://youtube.com/@hclanka_films"
            target="_blank"
            className="hover:underline decoration"
          >
            film
          </a>
          {", data/hardware enthusiast."}
        </span>
      </div>
      <div className="">
        <HoverCard>
          <HoverCardTrigger>
            <a href="https://github.com/hclank" target="_blank">
              <Button variant="ghost">
                <FaGithub className="w-[1.2rem] h-[1.2rem]" />
              </Button>
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="text-center">Github</HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger>
            <a href="https://twitter.com/hclanka" target="_blank">
              <Button variant="ghost">
                <FaTwitter className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="text-center">Twitter</HoverCardContent>
        </HoverCard>

        <AlertDialog>
          <AlertDialogTrigger>
            <HoverCard>
              <HoverCardTrigger>
                <Button
                  variant="ghost"
                  onClick={() =>
                    navigator.clipboard.writeText("scoopofbakedbeans")
                  }
                >
                  <FaDiscord className="h-[1.2rem] w-[1.2rem]" />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="text-center">
                Discord
              </HoverCardContent>
            </HoverCard>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Copied to clipboard!</AlertDialogTitle>
              <AlertDialogDescription>
                Copied hclanka&lsquo;s discord username and id. Please do
                inquire him questions via discord if needed.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>Ok</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <ModeToggle />
      </div>
    </nav>
  );
}
