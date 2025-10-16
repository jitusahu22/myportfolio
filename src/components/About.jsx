import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        
        {/* Profile Image */}
        <motion.img
          src="https://via.placeholder.com/300"
          alt="Profile"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="rounded-2xl shadow-xl border-4 border-indigo-500"
        />

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed mb-6">
            I'm a passionate <span className="text-indigo-600 font-semibold">Full Stack Developer</span> specializing in 
            <span className="font-semibold"> React</span>, 
            <span className="font-semibold"> TailwindCSS</span>, and 
            <span className="font-semibold"> Django</span>. 
            I love building scalable web applications with beautiful, modern UI/UX designs that focus on both functionality and aesthetics.
          </p>
          <a
            href="/Jitendraa CV Resume.pdf"
            download
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-lg text-white transition"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
