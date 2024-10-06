"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import Link from "next/link";

export function Aurora_Background() {
  // Initial words array without "DevOps Enthusiast"
  const [words, setWords] = useState(["Web Developer", "Tech Explorer"]);

  // useEffect to detect screen size and update words array
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Add "DevOps Enthusiast" for desktop view
        setWords(["Web Developer", "Tech Explorer", "DevOps Enthusiast"]);
      } else {
        // Exclude "DevOps Enthusiast" for smaller screens
        setWords(["Web Developer", "Tech Explorer"]);
      }
    };

    // Call on component mount and on window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="block flex gap-4 items-center justify-center px-4"
      >
        <div className="mx-10 my-10 flex flex-row items-center justify-center max-sm:text-center">
          <div className="mr-15">
            <div className="md:text-5xl lg:text-7xl sm:text-3xl font-bold dark:text-white text-3xl mb-4">
              Hey, I&apos;m Ashmit, <br />
              a <FlipWords duration={2500} words={words} />
            </div>
            <div className="font-extralight text-base md:text-xl dark:text-neutral-200 py-4">
            Crafting dynamic web experiences, exploring cutting-edge tech, and driving innovation-ready to collaborate and elevate ideas to the next level.
            </div>
            <a target="_blank" href="https://drive.google.com/file/d/1bNfsWDvumKjt1usWhuPIAqWQExxZY1nh/view?usp=drive_link">
              <button  className="mt-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Resume
              </button>
            </a>
            
          </div>
          <div>
            <Image
              src="https://i.ibb.co/jDfy8wn/logo.png"
              width={800}
              height={500}
              alt="aurora"
              className="max-sm:hidden"
            />
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
