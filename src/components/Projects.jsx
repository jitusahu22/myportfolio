// // import { useState, useEffect } from "react";

// // export default function Projects() {
// //   const [projects, setProjects] = useState(Array.from({ length: 6 }));
// //   const [page, setPage] = useState(1);

// //   const loadMore = () => {
// //     setProjects(prev => [...prev, ...Array.from({ length: 6 })]);
// //     setPage(page + 1);
// //   };

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (window.innerHeight + document.documentElement.scrollTop + 50 >= document.documentElement.scrollHeight) {
// //         loadMore();
// //       }
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, [page]);

// //   return (
// //     <section id="projects" className="py-20 bg-gray-900 text-white">
// //       <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
// //         {projects.map((_, i) => (
// //           <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
// //             <h3 className="text-xl font-semibold">Project {i + 1}</h3>
// //             <p className="text-gray-400 mt-2">Short description about the project.</p>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// export default function Projects() {
//   const projects = [
//     {
//       title: "E-Commerce Website",
//       desc: "An online shopping platform built with React & Django.",
//       img: "https://via.placeholder.com/400x250?text=E-Commerce+Website",
//       stack: ["React", "Django", "Tailwind"],
//       demo: "#",
//       github: "#",
//     },
//     {
//       title: "Portfolio Website",
//       desc: "A responsive portfolio built with React & TailwindCSS.",
//       img: "https://via.placeholder.com/400x250?text=Portfolio+Website",
//       stack: ["React", "TailwindCSS"],
//       demo: "#",
//       github: "#",
//     },
//     {
//       title: "Chat Application",
//       desc: "A real-time chat app using Socket.IO and Node.js.",
//       img: "https://via.placeholder.com/400x250?text=Chat+Application",
//       stack: ["Node.js", "Socket.IO", "React"],
//       demo: "#",
//       github: "#",
//     },
//     {
//       title: "Blog Platform",
//       desc: "A blogging platform with authentication built in Django.",
//       img: "https://via.placeholder.com/400x250?text=Blog+Platform",
//       stack: ["Django", "SQLite", "Bootstrap"],
//       demo: "#",
//       github: "#",
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 bg-gray-900 text-white">
//       <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
//         {projects.map((project, i) => (
//           <div
//             key={i}
//             className="bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition overflow-hidden"
//           >
//             <img
//               src={project.img}
//               alt={project.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold">{project.title}</h3>
//               <p className="text-gray-400 mt-2">{project.desc}</p>

//               {/* Tech Stack Badges */}
//               <div className="flex flex-wrap gap-2 mt-4">
//                 {project.stack.map((tech, idx) => (
//                   <span
//                     key={idx}
//                     className="px-3 py-1 text-sm bg-indigo-600 bg-opacity-80 rounded-full cursor-pointer transform transition hover:scale-110 hover:bg-indigo-300"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* Buttons */}
//               <div className="mt-6 flex gap-3">
//                 <a
//                   href={project.demo}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white transition"
//                 >
//                   Live Demo
//                 </a>
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="px-4 py-2 border border-indigo-600 hover:bg-indigo-600 hover:text-white rounded-lg transition"
//                 >
//                   GitHub
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";

// export default function Projects() {
//   const projects = [
//     {
//       title: "E-Commerce Website",
//       desc: "An online shopping platform built with React & Django.",
//       img: "https://via.placeholder.com/400x250?text=E-Commerce+Website",
//       stack: ["React", "Django", "Tailwind"],
//       demo: "#",
//       github: "#",
//     },
//     {
//       title: "Portfolio Website",
//       desc: "A responsive portfolio built with React & TailwindCSS.",
//       img: "https://via.placeholder.com/400x250?text=Portfolio+Website",
//       stack: ["React", "TailwindCSS"],
//       demo: "#",
//       github: "#",
//     },
//     {
//       title: "Chat Application",
//       desc: "A real-time chat app using Socket.IO and Node.js.",
//       img: "https://via.placeholder.com/400x250?text=Chat+Application",
//       stack: ["Node.js", "Socket.IO", "React"],
//       demo: "#",
//       github: "#",
//     },
//     {
//       title: "Blog Platform",
//       desc: "A blogging platform with authentication built in Django.",
//       img: "https://via.placeholder.com/400x250?text=Blog+Platform",
//       stack: ["Django", "SQLite", "Bootstrap"],
//       demo: "#",
//       github: "#",
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 bg-gray-900 text-white">
//       <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
//         {projects.map((project, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 60 }} // pehle hidden
//             whileInView={{ opacity: 1, y: 0 }} // scroll par visible
//             transition={{ duration: 0.6, delay: i * 0.2 }} // ek ek delay ke sath
//             viewport={{ once: true }} // ek hi bar animate hoga
//             className="bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition overflow-hidden"
//           >
//             <img
//               src={project.img}
//               alt={project.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold">{project.title}</h3>
//               <p className="text-gray-400 mt-2">{project.desc}</p>

//               {/* Tech Stack Badges */}
//               <div className="flex flex-wrap gap-2 mt-4">
//                 {project.stack.map((tech, idx) => (
//                   <motion.span
//                     key={idx}
//                     whileHover={{ scale: 1.15, backgroundColor: "#6366f1" }}
//                     className="px-3 py-1 text-sm bg-indigo-600 bg-opacity-80 rounded-full cursor-pointer transition"
//                   >
//                     {tech}
//                   </motion.span>
//                 ))}
//               </div>

//               {/* Buttons */}
//               <div className="mt-6 flex gap-3">
//                 <motion.a
//                   whileHover={{ scale: 1.05 }}
//                   href={project.demo}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white transition"
//                 >
//                   Live Demo
//                 </motion.a>
//                 <motion.a
//                   whileHover={{ scale: 1.05 }}
//                   href={project.github}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="px-4 py-2 border border-indigo-600 hover:bg-indigo-600 hover:text-white rounded-lg transition"
//                 >
//                   GitHub
//                 </motion.a>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      desc: "An online shopping platform built with React & Django.",
      img: "https://via.placeholder.com/400x250?text=E-Commerce+Website",
      stack: ["React", "Django", "Tailwind"],
      demo: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      desc: "A responsive portfolio built with React & TailwindCSS.",
      img: "https://via.placeholder.com/400x250?text=Portfolio+Website",
      stack: ["React", "TailwindCSS"],
      demo: "#",
      github: "#",
    },
    {
      title: "Chat Application",
      desc: "A real-time chat app using Socket.IO and Node.js.",
      img: "https://via.placeholder.com/400x250?text=Chat+Application",
      stack: ["Node.js", "Socket.IO", "React"],
      demo: "#",
      github: "#",
    },
    {
      title: "Blog Platform",
      desc: "A blogging platform with authentication built in Django.",
      img: "https://via.placeholder.com/400x250?text=Blog+Platform",
      stack: ["Django", "SQLite", "Bootstrap"],
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
