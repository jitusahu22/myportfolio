import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  // Particles init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            color: { value: "#6366f1" },
            links: {
              color: "#6366f1",
              distance: 120,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: { enable: true, speed: 2 },
            number: { value: 60 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Sticky Social Icons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-20">
        {[
          {
            Icon: FaLinkedin,
            link: "https://linkedin.com/in/jitendra-sahu-660008366/",
            label: "LinkedIn",
          },
          {
            Icon: FaGithub,
            link: "https://github.com/jitusahu22",
            label: "GitHub",
          },
          {
            Icon: FaEnvelope,
            link: "mailto:jitendrasahu0018@gmail.com",
            label: "Email",
          },
        ].map(({ Icon, link, label }, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2 }}
            className="group relative flex items-center"
          >
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 hover:bg-indigo-600 text-white p-3 rounded-full shadow-lg transition"
            >
              <Icon className="text-xl" />
            </a>
            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-2 py-1 text-sm bg-black text-white rounded opacity-0 group-hover:opacity-100 transition">
              {label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl px-6">
        {/* Profile Image Animation */}
        <motion.img
          src="myimage.jpg"
          alt="Profile"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-44 h-44 md:w-56 md:h-56 rounded-full mx-auto border-4 border-indigo-600 shadow-lg object-cover"
        />

        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold mt-6"
        >
          Hi, I'm Jitendra
        </motion.h1>

        {/* Typing Effect */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-4 text-lg md:text-2xl text-gray-300"
        >
          <ReactTyped
            strings={[
              "Full Stack Developer",
              "React Enthusiast",
              "Django Expert",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </motion.p>

        {/* Buttons Animation */}
        <motion.div
          className="flex justify-center gap-6 mt-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="/Jitendraa CV Resume.pdf"
            download
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-lg transition"
          >
            Download Resume
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#projects"
            className="px-6 py-3 border border-indigo-600 hover:bg-indigo-600 rounded-lg transition"
          >
            View My Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
