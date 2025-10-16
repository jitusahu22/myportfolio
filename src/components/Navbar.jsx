import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
        scrolled
          ? "bg-gray-200 dark:bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          Jitendra Sahu<span className="text-gray-800 dark:text-white">.</span>
        </h1>

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

        <button
          onClick={toggleTheme}
          className="ml-6 p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-yellow-300"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

