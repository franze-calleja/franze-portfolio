"use client";

import React from "react";
import Carousel from "@/components/ui/carousel";
import { desc } from "motion/react-client";

const Projects = () => {
  const slideData = [
    {
      title: "Ellipsense Web Profile",
      description:
        "A sleek and modern web profile of my founded freelance group.",

      src: "/projects/ellipsense-web.png",
    },
    {
      title: "IMS Payroll Management System",
      description: "A comprehensive payroll management system for businesses.",

      src: "/projects/payroll-management.png",
    },
    {
      title: "NFC Attendance System",
      description: "A modern NFC-based attendance tracking system.",

      src: "/projects/nfc-attendance.png",
    },
    {
      title: "Sikatna Trading Systems Company Website and LMS",
      description:
        "A comprehensive website and learning management system for Sikatna Trading Systems.",

      src: "/projects/sikatna.png",
    },
    {
      title: "Nocturnes Studio",
      description: "A photobooth studio website, you should try it out!",

      src: "/projects/nocturnes-studio.png",
    },
    {
      title: "OPD Management System",
      description: "A comprehensive outpatient department management system.",

      src: "/projects/opd-management.png",
    },
  ];
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 py-8"
    >
      <div className="text-center text-white max-w-full w-full">
        <div className="relative overflow-hidden w-full h-full py-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
            Crafted with Code: My Project Highlights
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore a collection of projects I've passionately crafted — from
            business-grade systems to creative studio websites. Each one
            showcases my ability to design, build, and deliver modern software
            solutions tailored to real-world needs.
          </p>

          <Carousel slides={slideData} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
