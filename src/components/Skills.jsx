import { motion } from "framer-motion";

export default function Skills() {
   const skills = [
    {
      name: "HTML",
      desc: "Markup language for creating web pages.",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS",
      desc: "Style sheet language for designing web pages.",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "JavaScript",
      desc: "High-level programming language of the web.",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "React",
      desc: "A JavaScript library for building user interfaces.",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      link: "https://react.dev/",
    },
    {
      name: "TailwindCSS",
      desc: "A utility-first CSS framework for rapid UI development.",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Ant Design",
      desc: "A popular React UI library with rich components for web apps.",
      img: "/antd.svg",
      link: "https://ant.design/",
    },

    {
      name: "Material UI",
      desc: "React components for faster and easier web development.",
      img: "https://mui.com/static/logo.png",
      link: "https://mui.com/",
    },
    {
      name: "Django",
      desc: "A high-level Python web framework for rapid development.",
      img: "https://www.fullstackpython.com/img/logos/django.png", // Updated logo
      link: "https://www.djangoproject.com/",
    },
    {
      name: "Python",
      desc: "A versatile programming language for web and data science.",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      link: "https://www.python.org/",
    },
    {
      name: "PostgreSQL",
      desc: "A powerful, open source object-relational database system.",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
      link: "https://www.postgresql.org/",
    },
    {
      name: "Node.js",
      desc: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      link: "https://nodejs.org/",
    },
    {
      name: "GitHub",
      desc: "A platform for hosting and collaborating on code repositories.",
      img: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      link: "https://github.com/",
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
    >
      {" "}
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {" "}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-12">
          My Skills
        </h2>{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {skills.map((skill, i) => (
            <motion.a
              key={i}
              href={skill.link}
              target="*blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
                ease: "easeInOut",
                type: "spring",
                stiffness: 80,
                damping: 15,
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition p-6 flex flex-col items-center text-center
border border-transparent hover:border-indigo-500 hover:shadow-[0_0_20px*#6366f1]"
            >
              {" "}
              <img
                src={skill.img}
                alt={skill.name}
                className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 object-contain"
              />{" "}
              <h3 className="text-lg sm:text-xl font-semibold">{skill.name}</h3>{" "}
              <p className="text-gray-400 mt-1 sm:mt-2 text-xs sm:text-sm">
                {skill.desc}
              </p>
            </motion.a>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
