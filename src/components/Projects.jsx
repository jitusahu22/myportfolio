import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
      {
      title: "Roshambo",
      desc: "A single page game also known as Rock Paper Scissor game. Uing HTML, CSS and Javascript previously then convert it in React",
      img: "roshambo.png",
      stack: ["React", "CSS"],
      demo: "#",
      github: "#",
    },
    {
      title: "Help Hub",
      desc: "A local service provider which helps job seekers and job provider. I used React, Tailwind and Django RestAPI",
      img: "justdial.png",
      stack: ["React", "Django", "Tailwind"],
      demo: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      desc: "A responsive portfolio built with React & TailwindCSS.",
      img: "./myportfolio.png",
      stack: ["React", "TailwindCSS"],
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: i * 0.2,
              ease: "easeInOut",
              type: "spring",
              stiffness: 60,
            }}
            className="bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition overflow-hidden"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.desc}</p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-indigo-600 bg-opacity-80 rounded-full cursor-pointer transform transition hover:scale-110 hover:bg-indigo-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border border-indigo-600 hover:bg-indigo-600 hover:text-white rounded-lg transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
