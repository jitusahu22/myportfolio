import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const EMAIL = import.meta.env.VITE_EMAIL;
const LINKEDIN = import.meta.env.VITE_LINKEDIN;
const GITHUB = import.meta.env.VITE_GITHUB;

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-6">
        <p>© {new Date().getFullYear()} Jitendra. Made with ❤️ in React.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-indigo-500 transition transform hover:scale-125"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-indigo-500 transition transform hover:scale-125"
          >
            <FaGithub size={22} />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="text-gray-400 hover:text-indigo-500 transition transform hover:scale-125"
          >
            <FaEnvelope size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
