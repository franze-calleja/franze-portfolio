"use client";
import React from "react";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="min-h-screen flex items-center justify-center px-4 py-8"
    >
      <div className="text-center text-white max-w-7xl w-full">
        <div className="w-full flex justify-center  mb-6 sm:mb-8">
          <PointerHighlight>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
              Who am I?
            </h2>
          </PointerHighlight>
        </div>

        <div className="flex h-[25rem] sm:h-[30rem] lg:h-[35rem] w-full max-w-[90vw] sm:max-w-[70rem] mx-auto rounded-2xl border-2 border-[#f1bdab] items-center justify-center overflow-hidden">
          <MaskContainer
            revealText={
              <p className="mx-auto max-w-7xl text-center text-lg sm:text-xl lg:text-3xl p-3 font-bold text-white dark:text-white px-4">
                Uh... I&apos;m not sure if I should talk about this... <br />
                Maybe you can look closer???
              </p>
            }
            className="h-[25rem] sm:h-[30rem] lg:h-[40rem] w-full max-w-[90vw] sm:max-w-[80rem] text-black dark:text-black"
          >
            <div className="max-w-8xl px-2 sm:px-4">
              <p className="text-base sm:text-xl lg:text-2xl leading-relaxed">
                I am a dedicated{" "}
                <span className="text-blue-500 font-semibold">
                  Software Developer
                </span>{" "}
                with a strong foundation in
                <span className="text-blue-500 font-semibold">
                  {" "}
                  full-stack
                </span>{" "}
                and
                <span className="text-blue-500 font-semibold">
                  {" "}
                  web development
                </span>
                .
              </p>
              <p className="text-base sm:text-xl lg:text-2xl mt-2 sm:mt-4 leading-relaxed">
                My expertise includes modern frameworks such as
                <span className="text-green-500 font-semibold"> Next.js</span>,
                <span className="text-purple-500 font-semibold"> React</span>,
                <span className="text-red-500 font-semibold"> Express.js</span>,
                <span className="text-yellow-500 font-semibold"> Angular</span>,
                and
                <span className="text-indigo-500 font-semibold"> ASP.NET</span>.
                I am also proficient in version control using
                <span className="text-pink-500 font-semibold"> Git</span> and
                <span className="text-pink-500 font-semibold"> GitHub</span>,
                and familiar with containerization using
                <span className="text-cyan-500 font-semibold"> Docker</span>.
              </p>
              <p className="text-base sm:text-xl lg:text-2xl mt-2 sm:mt-4 leading-relaxed">
                I am passionate about building
                <span className="text-orange-500 font-semibold">
                  {" "}
                  impactful software solutions
                </span>{" "}
                and continuously strive to deliver
                <span className="text-orange-500 font-semibold">
                  {" "}
                  high-quality
                </span>
                ,
                <span className="text-orange-500 font-semibold">
                  {" "}
                  efficient
                </span>
                , and
                <span className="text-orange-500 font-semibold">
                  {" "}
                  user-focused applications
                </span>
                .
              </p>
            </div>
          </MaskContainer>
        </div>

        {/* <div className="max-w-7xl mx-auto">
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Im a passionate{" "}
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
            user-centric solutions. When Im not coding, youll find me
            exploring new technologies, solving complex problems, or working on
            innovative projects that push the boundaries of whats possible.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default AboutMe;
