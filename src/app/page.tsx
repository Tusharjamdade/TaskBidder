"use client"
import { AccordionDemo } from "@/components/AccordionDemo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
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
  return (
    <div>
        <div className="flex flex-col items-center justify-center h-[40rem]  ">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
          The road to freedom starts from here
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Join now
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Signup
          </button>
        </div>
      </div>
      <AccordionDemo/>
    </div>
  );
}
