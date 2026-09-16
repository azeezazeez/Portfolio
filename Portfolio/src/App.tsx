import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { ProjectItem } from './types';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0F17] text-[#172033] dark:text-[#F1F5F9] transition-colors duration-200 flex flex-col selection:bg-[#F9DCE7] dark:selection:bg-[#342435] selection:text-[#172033] dark:selection:text-[#F1F5F9]">
        {/* Navigation */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Content Sections */}
        <main id="main-content" className="flex-1">
          <Hero />
          <About />
          <TechStack />
          <Experience />
          <Projects onOpenProjectModal={(proj) => setSelectedProject(proj)} />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Modals */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </ThemeProvider>
  );
}
