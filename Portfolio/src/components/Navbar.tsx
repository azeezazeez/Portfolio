import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const navLinks = [
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl"
    >
      <div className="bg-page-bg/60 backdrop-blur-xl border border-page-text/5 rounded-2xl px-6 py-3 flex items-center justify-between shadow-xl">
        <a href="#" className="font-bold text-lg tracking-tighter transition-all duration-300 transform hover:scale-105">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-cyan-300 to-green-300 [text-shadow:_0_0_15px_rgba(255,255,255,0.4)] contrast-125">
            Abdul Azeez
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-widest text-page-text/30 hover:text-page-text transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-page-text/5 hover:bg-page-text/10 transition-colors interactive text-page-text"
            title="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="#contact"
            className="px-5 py-2 bg-page-text text-page-bg text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-accent hover:text-page-bg transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
