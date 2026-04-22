import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import LoadingScreen from "./components/LoadingScreen";
import SectionDivider from "./components/SectionDivider";
import { motion, useScroll, useSpring } from "motion/react";
import { ChevronUp, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative selection:bg-accent/30 selection:text-accent">
      <LoadingScreen />
      <Background />
      <Navbar />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[60]"
        style={{ scaleX }}
      />

      <main className="relative z-10 font-sans">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Contact />
      </main>

      <footer className="py-16 px-6 md:px-12 border-t border-page-text/5 relative bg-page-bg overflow-hidden transition-colors duration-500">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <div className="text-[10vw] md:text-[5vw] font-bold leading-none mb-8 uppercase tracking-tighter">
                SAY <br /><span className="text-gradient">HELLO.</span>
              </div>
              <a
                href="mailto:azeezazeez7989@gmail.com"
                className="text-xl md:text-2xl font-bold flex items-center gap-3 hover:text-accent transition-colors interactive"
              >
                azeezazeez7989@gmail.com <ArrowUpRight size={24} />
              </a>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <div className="text-[9px] font-bold uppercase tracking-widest text-page-text">NAV</div>
              <div className="flex flex-col gap-2 font-bold uppercase text-[10px] tracking-widest text-page-text/40">
                <a href="#about" className="hover:text-accent transition-colors interactive">About Me</a>
                <a href="#projects" className="hover:text-accent transition-colors interactive">Projects</a>
                <a href="#skills" className="hover:text-accent transition-colors interactive">Technical Skills</a>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <div className="text-[9px] font-bold uppercase tracking-widest text-page-text">CONNECT</div>
              <div className="flex flex-col gap-2 font-bold uppercase text-[10px] tracking-widest text-page-text/40">
                <a href="https://github.com/azeezazeez" className="hover:text-accent transition-colors interactive">GitHub</a>
                <a href="https://www.linkedin.com/in/achukatla-abdul-azeez/" className="hover:text-accent interactive">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="mt-24 pt-8 border-t border-page-text/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[9px] font-bold uppercase tracking-widest text-page-text/40">© Abdul Azeez</div>
            <div className="text-[9px] font-bold uppercase tracking-widest text-page-text/40 text-right">
              @ Abdul Azeez<br />
              SYSTEM: ONLINE
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0.5 }}
        onClick={scrollToTop}
        className="fixed bottom-12 right-12 p-5 bg-page-text/5 backdrop-blur-3xl border border-page-text/10 text-page-text rounded-full z-[90] transition-all hover:bg-page-text hover:text-page-bg interactive"
      >
        <ChevronUp size={28} />
      </motion.button>
    </div>
  );
}
