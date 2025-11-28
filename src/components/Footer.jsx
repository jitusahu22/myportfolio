import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const EMAIL = import.meta.env.VITE_EMAIL;
const LINKEDIN = import.meta.env.VITE_LINKEDIN;
const GITHUB = import.meta.env.VITE_GITHUB;

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      {" "}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {/* Copyright */}{" "}
        <p className="text-sm sm:text-base text-center md:text-left">
          © {new Date().getFullYear()} Jitendra Sahu | Full Stack Developer{" "}
        </p>
        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 text-gray-400 hover:text-white transition transform hover:scale-110"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 text-gray-400 hover:text-white transition transform hover:scale-110"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 text-gray-400 hover:text-white transition transform hover:scale-110"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
      {/* Optional bottom note */}
      <div className="mt-4 text-center text-xs text-gray-500">
        Made with ❤️
      </div>
    </footer>
  );
}
