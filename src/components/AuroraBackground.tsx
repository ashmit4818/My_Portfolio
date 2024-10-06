"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";

export function Aurora_Background() {
    const words = ["Web Developer.", "DevOps Enthusiast."];
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
        
        <div className="mr-15" >
            <div className="md:text-5xl lg:text-7xl sm:text-3xl font-bold dark:text-white text-3xl mb-4">
            Hey, I&apos;m Ashmit, <br />a <FlipWords duration={2500} words={words} />
            </div>
            <div className="font-extralight text-base md:text-xl dark:text-neutral-200 py-4">
            Software Developer with a focus on web development based in India. Seeking new opportunities to collaborate on innovative and challenging projects.
            </div>
            <button className="mt-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Resume
        </button>
        </div>
        <div>
            <Image src="https://i.ibb.co/jDfy8wn/logo.png" width={800} height={500} alt="aurora" className="max-sm:hidden"/>


        </div>

    </div>

      
    
        
      </motion.div>
    </AuroraBackground>
  );
}
