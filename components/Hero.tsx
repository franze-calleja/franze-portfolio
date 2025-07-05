"use client";

import React from "react";
import { GlareCard } from "@/components/ui/glare-card";

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
          <h1 className="text-7xl font-bold mb-4">Franze William Calleja</h1>
          <h2 className="text-4xl font-bold mb-4">A Full Stack Developer</h2>
          <p className="text-xl text-gray-300 max-w-2xl">
            A dedicated full stack developer with a background in computer
            science and a strong interest in crafting reliable, scalable web
            applications. Enthusiastic about technology and continuous learning.
          </p>
        </div>

        {/* Bigger GlareCard */}
        <GlareCard className="flex-1 relative max-w-4xl min-h-[500px]">
          <img
            className="h-full w-full absolute inset-0 object-cover rounded-xl"
            src="/images/ako.jpg"
            alt="Hero image"
          />
        </GlareCard>
      </div>
    </section>
  );
};

export default Hero;
