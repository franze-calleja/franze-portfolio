"use client";

import React from "react";
import { GlareCard } from "@/components/ui/glare-card";
import { Github, Linkedin, Facebook } from "lucide-react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { FlipWords } from "@/components/ui/flip-words";

const name = [
  {
    text: "Franze",
    className: "text-[#FFA586] text-7xl font-bold",
  },
  {
    text: "William",
    className: "text-[#FFA586] text-7xl font-bold",
  },
  {
    text: "Calleja",
    className: "text-[#FFA586] text-7xl font-bold",
  },
  // {
  //   text: "Aceternity.",
  //   className: "text-blue-500 dark:text-blue-500",
  // },
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
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="flex flex-col lg:flex-row items-center gap-20 text-white">
        {/* Text info */}
        <div className="text-start flex-1">
          <p className="text-xl">Hi, I'm</p>
          <h1 className="text-7xl font-bold mb-1">
            <TypewriterEffectSmooth words={name} />
          </h1>
          <h2 className="text-4xl font-bold mb-1">
            <FlipWords words={profession} />
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mb-6">
            A dedicated full stack developer with a background in computer
            science and a strong interest in crafting reliable, scalable web
            applications. Enthusiastic about technology and continuous learning.
          </p>
          {/* Minimalistic social buttons */}
          <div className="flex gap-4">
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

        {/* Bigger GlareCard */}
        <GlareCard className="flex-1 relative max-w-5xl min-h-[600px]">
          <img
            className="h-full w-full absolute inset-0 object-cover rounded-xl"
            src="/images/ako.jpg"
            alt="Hero image"
            height={600}
            width={600}
          />
        </GlareCard>
      </div>
    </section>
  );
};

export default Hero;
