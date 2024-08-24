"use client"
import { AccordionDemo } from "@/components/AccordionDemo";
import { Aboutus } from "@/components/component/Aboutus";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { useRouter } from "next/navigation";
import { useState } from "react";
const words = [
  {
    text: "Get started with",
  },
  {
    text: "TaskBidder!",
    className: "text-blue-500 dark:text-blue-500",
  },
];

const slides = [
  "/img1.avif",
  "/img2.jpg",
  "/img3.jpeg",
  // Add more image paths here if needed
];


export default function Home() {
  const router = useRouter()
  return (
    <div>
      <BackgroundBeamsWithCollision>
        <div className="flex flex-col items-center justify-center min-h-full  ">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
          The road to freedom starts from here
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button onClick={()=>{router.push("/signup")}} className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Signup
          </button>
          <button onClick={()=>{router.push("/signin")}} className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Signin
          </button>
        </div>
      </div>
      </BackgroundBeamsWithCollision>
      <Aboutus/>
    </div>
  );
}
