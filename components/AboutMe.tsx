"use client";
import React from "react";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="min-h-screen flex items-center justify-center px-4 py-8"
    >
      <div className="text-center text-white max-w-7xl w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          Who am I?
        </h2>
        <div className="flex h-[25rem] sm:h-[30rem] lg:h-[35rem] w-full max-w-[90vw] sm:max-w-[70rem] mx-auto rounded-2xl border-2 border-[#f1bdab] items-center justify-center overflow-hidden">
          <MaskContainer
            revealText={
              <p className="mx-auto max-w-7xl text-center text-lg sm:text-xl lg:text-3xl p-3 font-bold text-white dark:text-white px-4">
                Uh... I'm not sure if I should talk about this... <br />
                Maybe you can look closer?
              </p>
            }
            className="h-[25rem] sm:h-[30rem] lg:h-[40rem] w-full max-w-[90vw] sm:max-w-[80rem] text-black dark:text-black"
          >
            <div className="max-w-8xl px-4 sm:px-6">
              <p className="text-base sm:text-xl lg:text-3xl leading-relaxed">
                I'm a{" "}
                <span className="text-blue-400 font-semibold">
                  full-stack developer
                </span>{" "}
                and computer science graduate passionate about building modern,
                impactful software.
              </p>
              <p className="text-base sm:text-xl lg:text-3xl mt-2 sm:mt-4 leading-relaxed">
                With skills in{" "}
                <span className="text-green-400 font-semibold">Next.js</span>,
                <span className="text-purple-400 font-semibold"> React</span>,
                and
                <span className="text-red-400 font-semibold"> Laravel</span>, I
                focus on creating scalable, user-focused solutions.
              </p>
              <p className="text-base sm:text-xl lg:text-3xl mt-2 sm:mt-4 leading-relaxed">
                Beyond coding, I love exploring new tech and pushing what's
                possible.
              </p>
            </div>
          </MaskContainer>
        </div>

        {/* <div className="max-w-7xl mx-auto">
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            I'm a passionate{" "}
            <span className="text-blue-400 font-semibold">
              Full-Stack Developer
            </span>{" "}
            and recent Computer Science graduate who achieved
            <span className="text-yellow-400 font-semibold">
              {" "}
              Magna Cum Laude
            </span>{" "}
            honors as Class Salutatorian. My journey in technology is driven by
            a love for creating innovative solutions that make a real impact.
          </p>

          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            From leading end-to-end development of comprehensive management
            systems to building scalable web applications using modern
            technologies like{" "}
            <span className="text-green-400 font-semibold">Next.js</span>,
            <span className="text-purple-400 font-semibold"> React</span>, and
            <span className="text-red-400 font-semibold"> Laravel</span>, I
            bring both technical expertise and strong project management skills
            to every challenge.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Currently working as a{" "}
            <span className="text-blue-400 font-semibold">
              Freelance Software Developer
            </span>
            , I specialize in web development, project management, and creating
            user-centric solutions. When I'm not coding, you'll find me
            exploring new technologies, solving complex problems, or working on
            innovative projects that push the boundaries of what's possible.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default AboutMe;
