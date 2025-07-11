"use client";

import React from "react";
import { GlareCard } from "@/components/ui/glare-card";
import { Github, Linkedin, Facebook } from "lucide-react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

const name = [
  {
    text: "Franze",
    className:
      "text-[#FFA586] text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold",
  },
  {
    text: "William",
    className:
      "text-[#FFA586] text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold",
  },
  {
    text: "Calleja",
    className:
      "text-[#FFA586] text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold",
  },
];

const profession = [
  "Full Stack Developer",
  "Web Developer",
  "Software Engineer",
];

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 py-8"
    >
      {/* Background Beams - lowest z-index */}
      <BackgroundBeams className="absolute inset-0 z-0" />
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-x-40 text-white max-w-7xl w-full">
        {/* Text info */}
        <div className="text-center lg:text-start flex-1 order-1 lg:order-1">
          <p className="text-lg sm:text-xl">Hi, I&apos;m</p>
          <div className="flex justify-center lg:justify-start mb-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
              <TypewriterEffectSmooth words={name} />
            </h1>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-1">
            <FlipWords words={profession} />
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mb-6 mx-auto lg:mx-0 px-4 lg:px-0">
            A dedicated full stack developer with a background in computer
            science and a strong interest in crafting reliable, scalable web
            applications. Enthusiastic about technology and continuous learning.
          </p>
          {/* Minimalistic social buttons */}
          <div className="flex gap-4 justify-center lg:justify-start mb-8 lg:mb-0">
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-600 rounded-2xl hover:bg-gray-700 transition"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-600 rounded-2xl hover:bg-gray-700 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com/your-facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-600 rounded-2xl hover:bg-gray-700 transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Responsive GlareCard Container */}
        <div className="flex-1 flex justify-center w-full max-w-sm sm:max-w-md lg:max-w-lg order-2 lg:order-2">
          <GlareCard>
            <Image
              className="h-full w-full absolute inset-0 object-cover rounded-xl"
              src="/images/ako.jpg"
              alt="Hero image"
              height={600}
              width={600}
            />
          </GlareCard>
        </div>
      </div>
    </section>
  );
};

export default Hero;
