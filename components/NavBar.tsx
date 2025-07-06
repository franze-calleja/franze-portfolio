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
      className={`fixed top-2 sm:top-4 left-2 right-2 sm:left-4 sm:right-4 lg:left-8 lg:right-8 xl:left-16 xl:right-16 rounded-2xl sm:rounded-3xl z-50 transition-all duration-500 hover:shadow-lg hover:border-white/30 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-xl border border-white/20"
          : "bg-transparent backdrop-blur-none border border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white drop-shadow-lg hover:text-blue-300 transition-all duration-300">
              Franze.
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-baseline space-x-4 xl:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-white px-3 xl:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white/80 transition-all duration-300 group-hover:w-8 rounded-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <button className="text-white border border-white/30 hover:border-white/50 px-4 xl:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
              <Download size={16} />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white/90 hover:text-white focus:outline-none transition-all duration-300 rounded-full p-2"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        } overflow-hidden`}
      >
        <div
          className={`px-3 sm:px-4 pt-2 pb-4 space-y-1 rounded-b-2xl transition-all duration-300 ${
            isScrolled
              ? "bg-white/10 backdrop-blur-xl border-t border-white/10"
              : "bg-white/5 backdrop-blur-sm border-t border-white/5"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white/90 hover:text-white hover:bg-white/10 block px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium transition-all duration-300 rounded-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="px-1 sm:px-2 pt-2">
            <button className="w-full text-white border border-white/30 hover:border-white/50 hover:bg-white/10 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
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
