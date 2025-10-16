import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import Skills from "./components/Skills";

export default function App() {
  return (
    <ThemeProvider>
      <div className="font-sans scroll-smooth bg-white dark:bg-gray-900 transition-colors">
        <Navbar />
        <Hero />
        <About />
        <Skills/>
        <Projects />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
