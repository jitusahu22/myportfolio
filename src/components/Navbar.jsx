import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // install react-icons if not installed

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
        scrolled
          ? "bg-gray-200 dark:bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {" "}
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}{" "}
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          Jitendra Sahu <span className="text-gray-800 dark:text-white">.</span>{" "}
        </h1>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-800 dark:text-white">
          <li className="hover:text-indigo-500 dark:hover:text-indigo-400 transition">
            <a href="#hero">Home</a>
          </li>
          <li className="hover:text-indigo-500 dark:hover:text-indigo-400 transition">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-indigo-500 dark:hover:text-indigo-400 transition">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 dark:text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-200 dark:bg-gray-900 bg-opacity-95 backdrop-blur-md transition-all duration-300 ${
          menuOpen ? "max-h-60 py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 font-medium text-gray-800 dark:text-white">
          <li className="hover:text-indigo-500 dark:hover:text-indigo-400 transition">
            <a href="#hero" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li className="hover:text-indigo-500 dark:hover:text-indigo-400 transition">
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li className="hover:text-indigo-500 dark:hover:text-indigo-400 transition">
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
