import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center text-white">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          This is where you can tell your story and showcase your background.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
