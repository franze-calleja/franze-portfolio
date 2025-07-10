import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";

const TechStack = () => {
  const cards = [
    {
      title: "NextJS",
      src: "/techstack/nextjs.png",
    },
    {
      title: "NodeJS",
      src: "/techstack/node.png",
    },
    {
      title: "React",
      src: "/techstack/react.png",
    },
    {
      title: "VueJS",
      src: "/techstack/vuejs.png",
    },

    {
      title: "Angular",
      src: "/techstack/angular.png",
    },
    {
      title: "ASP.Net",
      src: "/techstack/net.png",
    },
    {
      title: "TypeScript",
      src: "/techstack/typescript.png",
    },
    {
      title: "JavaScript",
      src: "/techstack/javascript.png",
    },
    {
      title: "PHP",
      src: "/techstack/php.png",
    },
    {
      title: "C#",
      src: "/techstack/csharp.png",
    },
    {
      title: "C++",
      src: "/techstack/cpp.png",
    },
    {
      title: "Java",
      src: "/techstack/java.png",
    },
    {
      title: "Python",
      src: "/techstack/python.png",
    },
    {
      title: "PostgreSQL",
      src: "/techstack/postgres.png",
    },
    {
      title: "MySQL",
      src: "/techstack/mysql.png",
    },
    {
      title: "Supabase",
      src: "/techstack/supabase.png",
    },
    {
      title: "Docker",
      src: "/techstack/docker.png",
    },
    {
      title: "Git",
      src: "/techstack/git.png",
    },
  ];

  return (
    <section
      id="techstack"
      className="min-h-screen flex items-center justify-center px-4 py-8"
    >
      <div className="text-center text-white max-w-full w-full">
        <div className="relative overflow-hidden w-full h-full py-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
            Tools, Languages & Frameworks I Work With
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here&apos;s a look at the technologies I use to build scalable,
            modern, and impactful software solutions.
          </p>
        </div>
        <div>
          <FocusCards cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
