import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, ArrowUpRight, FolderGit, X } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Cartify E-Commerce",
    id: "Cartify",
    description: `Developed full-stack e-commerce system using Spring Boot and React with JWT authentication and role-
            based authorization. Designed REST APIs and modular services following microservices principles, and
               improved performance using optimized queries.`,
    tech: ["JAVA", "SPRING BOOT", "POSTGRESQL", "JWT"],
    image: "https://lh3.googleusercontent.com/d/1GUGHfEonkxsCrqjiX9MtoRu0O__QMFNV",
    github: "https://github.com/azeezazeez/Cartify-Web-Application",
    demo: "https://cartify-cart.vercel.app"
  },

   {
  title: "Aura AI Chat bot",
  id: "Aura AI",
  description: `Developed an AI-powered chatbot application using Java and Spring Boot. Integrated Groq AI for natural language processing and intelligent responses. Designed RESTful APIs for seamless communication between backend and AI models, ensuring efficient request handling and scalability.`,
  tech: ["JAVA", "SPRING BOOT", "Groq AI"],
  image: "https://lh3.googleusercontent.com/d/11OXqHFHsHapIuGkDkMyVf8EEsuFNEppf",
  github: "https://github.com/azeezazeez/Aura-AI-Chatbot-application",
  demo: "https://aura-ai-chatbot-app.vercel.app"
},
  
  {
    title: "Edu Exam System",
    id: "Edu Exam",
    description: `Developed a web-based examination system using Java and Spring Boot. Implemented features like au
          thentication, exam creation, question management, and automated result evaluation. Designed RESTful
          APIs for communication between frontend and backend, using PostgreSQL for secure data storage.`,
    tech: ["JAVA", "SPRING BOOT", "POSTGRESQL", "JWT"],
    image: "https://lh3.googleusercontent.com/d/12t7f-clbeUw2NHD7oK8bVj_aJFCixvCf",
    github: "https://github.com/azeez-abdul/online-exam",
    demo: "https://edu-exam.architect.io"
  }
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="py-8 px-6 md:px-12 relative font-sans">
      <div className="max-w-[1200px] mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <div className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-accent mb-4">
          <FolderGit size={12} />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold uppercase leading-[0.9]">
          <span className="text-gradient">Projects</span><br />
        </h2>
      </motion.div>
      <div className="flex flex-col items-end gap-3">
        <a href="https://github.com/azeezazeez?tab=repositories" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest group interactive hover:text-accent transition-colors">
          Archive <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
        </a>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="luminous-card group flex flex-col h-full overflow-hidden interactive transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,182,193,0.4)] hover:bg-gradient-to-br hover:from-pink-400/40 hover:via-cyan-400/40 hover:to-yellow-400/40"
        >
          <div
            className="aspect-video relative rounded-xl overflow-hidden mb-8 border border-page-text/5 bg-page-text/[0.02] cursor-zoom-in group/img"
            onClick={() => setSelectedImage(project.image)}
          >
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
            />
          </div>

          <div className="flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="text-[8px] font-mono text-page-text/20 tracking-widest mb-1">{project.id}</div>
                <h3 className="text-2xl font-bold uppercase">{project.title}</h3>
              </div>
              <div className="flex items-center gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-page-text/40 hover:text-page-text transition-colors interactive" title="GitHub Source">
                  <Github size={20} strokeWidth={3} />
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-page-text/40 hover:text-page-text transition-colors interactive" title="Live Demo">
                    <ExternalLink size={20} strokeWidth={3} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-page-text/40 font-medium leading-relaxed mb-6 flex-grow">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="px-3 py-1 rounded-md border border-page-text/10 text-[9px] font-mono uppercase tracking-widest text-white bg-black shadow-sm transition-all duration-300">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>

  <AnimatePresence>
    {selectedImage && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-page-bg/95 backdrop-blur-xl"
        onClick={() => setSelectedImage(null)}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-6xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute -top-14 right-0 p-2 text-page-text/40 hover:text-page-text transition-colors interactive"
            title="Close"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Expanded view"
            referrerPolicy="no-referrer"
            className="w-full h-auto rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-page-text/10"
          />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</section>
  );
}
