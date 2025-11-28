import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import Particles from "@tsparticles/react";
import { useCallback } from "react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/pro_background1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for better visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-70 -z-10"></div>

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
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
      />

      {/* Floating Social Icons */}
      <div className="fixed right-4 sm:right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-20">
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
          <motion.div key={i} whileHover={{ scale: 1.2 }} className="group relative flex items-center">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 hover:bg-indigo-600 text-white p-3 rounded-full shadow-lg transition"
            >
              <Icon className="text-xl sm:text-2xl" />
            </a>
            <span className="absolute right-full mr-3 px-2 py-1 text-sm bg-black text-white rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
              {label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full flex flex-col items-center">
        {/* Profile Image */}
        <motion.img
          src="myimage.jpg"
          alt="Profile"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full border-4 border-indigo-600 shadow-lg object-cover"
        />

        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl md:text-7xl font-bold mt-6"
        >
          Hi, I'm Jitendra
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-3 sm:mt-4 text-md sm:text-xl md:text-2xl text-gray-300"
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

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-4 sm:mt-6"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/JitendraResume1.pdf"
            download
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-lg transition w-full sm:w-auto text-center"
          >
            Download Resume
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#projects"
            className="px-6 py-3 border border-indigo-600 hover:bg-indigo-600 rounded-lg transition w-full sm:w-auto text-center"
          >
            View My Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
