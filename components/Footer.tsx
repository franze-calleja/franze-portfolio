import React from "react";

const Footer = () => {
  return (
    <footer className="min-h-[10vh] flex items-center justify-center px-4">
      <div className="text-center text-white">
        <p className="text-lg text-gray-300">
          &copy; {new Date().getFullYear()} Franze William M. Calleja. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
