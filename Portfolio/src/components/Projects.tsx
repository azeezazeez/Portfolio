import React from 'react';
import { projectList } from '../data/projects';
import { ProjectItem } from '../types';
import { ProjectCard } from './ProjectCard';

interface ProjectsProps {
  onOpenProjectModal: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenProjectModal }) => {
  return (
    <section
      id="projects"
      aria-label="Selected Projects"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#E2E8F0]/60 dark:border-[#243048]/60 relative bg-gradient-to-b from-[#F8FAFC]/50 to-white dark:from-[#0B0F17]/80 dark:to-[#0E141F] transition-colors duration-200"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#6EA8E8] dark:bg-[#82BAF6]" />
          <h2 className="font-mono text-xs font-bold tracking-widest text-[#667085] dark:text-[#94A3B8] uppercase">
            SELECTED PROJECTS
          </h2>
          <div className="h-[1px] flex-1 bg-[#E2E8F0] dark:bg-[#243048]" />
        </div>

        <div className="max-w-2xl mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#172033] dark:text-[#F1F5F9]">
            Featured Engineering Work
          </h3>
          <p className="mt-2 text-sm text-[#667085] dark:text-[#94A3B8]">
            Highlighted systems, applications, and developer tools combining robust backend logic, high performance, and refined UI craftsmanship.
          </p>
        </div>

        {/* List of Large, Elegant Project Cards */}
        <div className="space-y-8">
          {projectList.map((project: ProjectItem, index: number) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenModal={onOpenProjectModal}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
