"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 dark:from-neutral-900 dark:to-neutral-800 to-neutral-800"></div>
);

const items = [
  {
    title: "Full-stack Development",
    description:
      "Leads end-to-end software development, proficient in both frontend and backend technologies to build comprehensive systems, utilizing frameworks like Next.js, ExpressJS, VueJS, and ASP.NET.",
    src: "/images/fullstack.png",
    header: (
      <div className="relative flex justify-center items-center h-full rounded-xl overflow-hidden">
        <Skeleton />
        <Image
          src="/images/fullstack.png"
          alt="Full-stack Development"
          fill
          className="absolute object-cover grayscale transition duration-500 group-hover/bento:grayscale-0"
        />
      </div>
    ),
  },
  {
    title: "Web Dev (Frontend & Backend)",
    description:
      "Experienced in designing, developing, and maintaining dynamic web applications using frameworks such as Next.js, ExpressJS, VueJS, and ASP.NET, with minimal experience in Laravel.",
    src: "/images/web-dev.png",
    header: (
      <div className="relative flex justify-center items-center h-full rounded-xl overflow-hidden">
        <Skeleton />
        <Image
          src="/images/web-dev.png"
          alt="Web Development"
          fill
          className="absolute object-cover grayscale transition duration-500 group-hover/bento:grayscale-0"
        />
      </div>
    ),
  },
  {
    title: "Database Management",
    description:
      "Skilled in designing, implementing, and managing databases like PostgreSQL, MySQL, and Supabase for efficient data handling.",
    src: "/images/database.png",
    header: (
      <div className="relative flex justify-center items-center h-full rounded-xl overflow-hidden">
        <Skeleton />
        <Image
          src="/images/database.png"
          alt="Database Management"
          fill
          className="absolute object-cover grayscale transition duration-500 group-hover/bento:grayscale-0"
        />
      </div>
    ),
  },
  {
    title: "Project Management",
    description:
      "Manages project timelines, coordinates tasks, and oversees development to ensure successful software solution delivery.",
    src: "/images/project-management.png",
    header: (
      <div className="relative flex justify-center items-center h-full rounded-xl overflow-hidden">
        <Skeleton />
        <Image
          src="/images/project-management.png"
          alt="Project Management"
          fill
          className="absolute object-cover grayscale transition duration-500 group-hover/bento:grayscale-0"
        />
      </div>
    ),
  },
  {
    title: "UI/UX Design",
    description:
      "Contributes minimally to UI/UX design, creating visually appealing interfaces including commercial websites and dashboard visualizations.",
    src: "/images/ui-ux.png",
    header: (
      <div className="relative flex justify-center items-center h-full rounded-xl overflow-hidden">
        <Skeleton />
        <Image
          src="/images/ui-ux.png"
          alt="UI/UX Design"
          fill
          className="absolute object-cover grayscale transition duration-500 group-hover/bento:grayscale-0"
        />
      </div>
    ),
  },
  {
    title: "Quality Assurance & Testing",
    description:
      "Performs manual testing and contributes to minimal automation testing (e.g., Jest) to ensure system reliability and validate functionality based on QA reports.",
    src: "/images/testing.png",
    header: (
      <div className="relative flex justify-center items-center h-full rounded-xl overflow-hidden">
        <Skeleton />
        <Image
          src="/images/testing.png"
          alt="Quality Assurance & Testing"
          fill
          className="absolute object-cover grayscale transition duration-500 group-hover/bento:grayscale-0"
        />
      </div>
    ),
  },
  {
    title: "Version Control (Git/GitHub)",
    description:
      "Proficient in using Git and GitHub for collaborative development and code management, often utilizing VSCode as a primary development tool. Adapting to new tools, frameworks, and technologies.",
    src: "/images/git.png",
    header: (
      <div className="relative flex justify-center items-center h-full rounded-xl overflow-hidden">
        <Skeleton />
        <Image
          src="/images/git.png"
          alt="Version Control"
          fill
          className="absolute object-cover grayscale transition duration-500 group-hover/bento:grayscale-0"
        />
      </div>
    ),
  },
];

const Skills = () => {
  const [selectedItem, setSelectedItem] = useState<null | (typeof items)[0]>(
    null
  );

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 py-8"
    >
      <div className="text-center text-white max-w-7xl w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          What I Can Do
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          I specialize in crafting scalable applications, managing databases,
          leading projects, and maintaining quality through testing and version
          control. My skill set spans both frontend and backend, enabling me to
          deliver end-to-end solutions.
        </p>

        <BentoGrid className="max-w-[70rem] mx-auto mt-10">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              onClick={() => setSelectedItem(item)}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="backdrop-blur-md bg-white/20 p-5 border border-white/30 text-neutral-200 max-w-4xl">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle className="text-4xl">
                  {selectedItem.title}
                </DialogTitle>
              </DialogHeader>
              <div className="w-full rounded-lg overflow-hidden mt-4">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  width={800}
                  height={400}
                  className="object-cover w-full h-auto rounded"
                />
              </div>
              <DialogDescription className="text-neutral-300 text-xl mt-4">
                {selectedItem.description}
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Skills;
