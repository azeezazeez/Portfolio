import React from 'react';
import { motion } from 'motion/react';
import { ProjectItem } from '../types';
import { ProjectPreview } from './ProjectPreview';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  onOpenModal?: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpenModal }) => {
  // Border and accent styling based on theme
  const cardThemeStyles = {
    rose: {
      cardBg: 'bg-white dark:bg-[#131A26] hover:border-[#F9DCE7] dark:hover:border-[#422838]',
      tagBg: 'bg-[#FFF1F5] dark:bg-[#201520] text-[#172033] dark:text-[#F1F5F9] border-[#F9DCE7]/80 dark:border-[#382332]',
      accentBadge: 'text-[#E88AA8] dark:text-[#F49DB7]',
    },
    blue: {
      cardBg: 'bg-white dark:bg-[#131A26] hover:border-[#CFE3FF] dark:hover:border-[#223652]',
      tagBg: 'bg-[#EAF3FF] dark:bg-[#121E2E] text-[#172033] dark:text-[#F1F5F9] border-[#CFE3FF]/80 dark:border-[#1E3048]',
      accentBadge: 'text-[#6EA8E8] dark:text-[#82BAF6]',
    },
    white: {
      cardBg: 'bg-white dark:bg-[#131A26] hover:border-[#CBD5E1] dark:hover:border-[#33435C]',
      tagBg: 'bg-[#F8FAFC] dark:bg-[#0E141F] text-[#172033] dark:text-[#F1F5F9] border-[#E2E8F0] dark:border-[#243048]',
      accentBadge: 'text-[#667085] dark:text-[#94A3B8]',
    }
  }[project.theme];

  return (
    <motion.article
      id={`project-card-${project.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -4 }}
      className={`group relative rounded-xl border border-[#E2E8F0] dark:border-[#243048] ${cardThemeStyles.cardBg} transition-all duration-300 shadow-[0_2px_12px_rgba(23,32,51,0.03)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_24px_rgba(23,32,51,0.06)] dark:hover:shadow-[0_12px_24px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row`}
    >
      {/* Visual Preview Left / Top Area */}
      <div
        className="w-full md:w-[48%] shrink-0 cursor-pointer overflow-hidden"
        onClick={() => onOpenModal && onOpenModal(project)}
      >
        <motion.div
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="h-full group-hover:scale-[1.01]"
        >
          <ProjectPreview project={project} />
        </motion.div>
      </div>

      {/* Information Area */}
      <div className="p-6 sm:p-7 md:p-8 flex flex-col justify-between flex-1">
        <div>
          {/* Project Number and Tagline */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="font-mono text-xs font-semibold tracking-wider text-[#667085] dark:text-[#94A3B8]">
              {project.number}
            </span>
            <span className={`text-xs font-medium ${cardThemeStyles.accentBadge}`}>
              {project.tagline}
            </span>
          </div>

          {/* Project Title */}
          <h3
            className="text-xl sm:text-2xl font-bold tracking-tight text-[#172033] dark:text-[#F1F5F9] transition-colors cursor-pointer flex items-center gap-1.5"
            onClick={() => onOpenModal && onOpenModal(project)}
          >
            {project.title}
            <ArrowUpRight className="w-4 h-4 text-[#667085] dark:text-[#94A3B8] opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm sm:text-base text-[#667085] dark:text-[#94A3B8] leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Technology tags */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={`text-xs px-2.5 py-1 rounded-md border font-medium ${cardThemeStyles.tagBg} transition-colors`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-7 pt-5 border-t border-[#E2E8F0]/70 dark:border-[#243048]/70 flex items-center gap-3">
          <a
            id={`project-github-${project.id}`}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg border border-[#E2E8F0] dark:border-[#243048] bg-white dark:bg-[#0E141F] text-[#172033] dark:text-[#F1F5F9] hover:bg-[#F8FAFC] dark:hover:bg-[#182232] hover:border-[#CBD5E1] dark:hover:border-[#384966] transition-all duration-200"
          >
            <Github className="w-3.5 h-3.5" />
            GITHUB
          </a>

          <a
            id={`project-live-${project.id}`}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-[#172033] dark:bg-[#F1F5F9] text-white dark:text-[#0B0F17] hover:bg-[#1e2b45] dark:hover:bg-white transition-all duration-200 shadow-xs"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            LIVE DEMO
          </a>

          {onOpenModal && (
            <button
              id={`project-details-${project.id}`}
              onClick={() => onOpenModal(project)}
              className="ml-auto text-xs font-medium text-[#667085] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Overview & Architecture
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
};
