import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

const Experience = () => {
  const data = [
    {
      title: "2023 – 2024",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-neutral-200">
            During my 3rd and 4th year in college, I worked as a freelance
            software developer. I built several simple websites and medium-scale
            systems, gaining experience in real-world client projects while
            balancing academics.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/projects/nfc-attendance.png"
              alt="NFC Attendance System"
              width={500}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <Image
              src="/projects/opd-management.png"
              alt="OPD Management System"
              width={500}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <Image
              src="/projects/payroll-management.png"
              alt="Payroll Management System"
              width={500}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-neutral-200">
            I graduated as Class Salutatorian and Magna Cum Laude from Manuel S.
            Enverga University Foundation. This milestone reflects both my
            academic dedication and active engagement in software development
            throughout college.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/timeline/graduate.JPG"
              alt="Graduation"
              width={500}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <Image
              src="/timeline/graduate2.JPG"
              alt="Graduation"
              width={500}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <Image
              src="/timeline/graduate3.JPG"
              alt="Graduation"
              width={500}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <Image
              src="/timeline/graduate4.JPG"
              alt="Graduation"
              width={500}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025 - now",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-neutral-200">
            I founded <strong>Ellipsense</strong>, a freelance software
            development group composed of passionate and talented individuals. I
            currently serve as the Team Lead, Project Manager, and Software
            Developer — leading and managing end-to-end system development
            projects.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/timeline/ellipsense.jpg"
              alt="Ellipsense"
              width={500}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <Image
              src="/projects/ellipsense-web.png"
              alt="Ellipsense Web Profile"
              width={500}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <Image
              src="/projects/sikatna.png"
              alt="Sikatna LMS"
              width={500}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <Image
              src="/projects/nocturnes-studio.png"
              alt="Nocturnes Studio"
              width={500}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-4 mt-8"
    >
      <div className="text-center text-white max-w-5xl w-full">
        <div className="relative overflow-hidden w-full h-full py-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
            A glimpse into my professional journey and academic background.
          </p>
          <div className="relative w-full overflow-clip">
            <Timeline data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
