"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-4 left-50 right-50  rounded-4xl z-50  transition-all duration-500 hover:rounded-3xl hover:shadow-3xl hover:border-white/30 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-xl"
          : "bg-transparent backdrop-blur-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white drop-shadow-lg hover:text-blue-300 transition-all duration-300">
              Franze.
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white/80 transition-all duration-300 group-hover:w-8 rounded-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button className="text-white border border-white/30 hover:border-white/50 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
              <Download size={16} />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white/90 hover:text-white focus:outline-none transition-all duration-300 rounded-full p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        } overflow-hidden`}
      >
        <div
          className={`px-4 pt-4 pb-4 space-y-2  rounded-b-2xl transition-all duration-300 ${
            isScrolled
              ? "bg-white/10 backdrop-blur-xl"
              : "bg-transparent backdrop-blur-none"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white/90 hover:text-white block px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="px-2 py-3">
            <button className="w-full text-white border border-white/30 hover:border-white/50 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
              <Download size={16} />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
