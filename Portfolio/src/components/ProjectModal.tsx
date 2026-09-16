import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative bg-white dark:bg-[#131A26] rounded-2xl border border-[#E2E8F0] dark:border-[#243048] shadow-[0_20px_60px_rgba(23,32,51,0.14)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)] max-w-2xl w-full max-h-[88vh] flex flex-col z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#E2E8F0] dark:border-[#243048] flex items-center justify-between bg-[#F8FAFC] dark:bg-[#0E141F]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs font-semibold text-[#667085] dark:text-[#94A3B8]">{project.number}</span>
                <span className="text-xs font-medium text-[#6EA8E8] dark:text-[#82BAF6]">• {project.tagline}</span>
              </div>
              <h3 className="text-xl font-bold text-[#172033] dark:text-[#F1F5F9] tracking-tight">{project.title}</h3>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#667085] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F1F5F9] hover:bg-[#E2E8F0]/60 dark:hover:bg-[#243048] transition-colors cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm">
            <div>
              <h4 className="font-mono text-xs font-bold text-[#172033] dark:text-[#F1F5F9] uppercase tracking-wider mb-2">
                Overview
              </h4>
              <p className="text-[#667085] dark:text-[#94A3B8] leading-relaxed">
                {project.extendedDescription || project.description}
              </p>
            </div>

            {/* Architecture / Key Engineering Highlights */}
            <div className="bg-[#F8FAFC] dark:bg-[#0E141F] border border-[#E2E8F0] dark:border-[#243048] rounded-xl p-4 sm:p-5 space-y-3">
              <h4 className="font-mono text-xs font-bold text-[#172033] dark:text-[#F1F5F9] uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#6EA8E8] dark:text-[#82BAF6]" />
                Key Engineering Highlights
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#667085] dark:text-[#94A3B8]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Resilient concurrency models ensuring seamless load handling under burst queries.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Sub-second token streaming and memory-safe buffer management.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Type-safe API contracts verified with automated end-to-end continuous integration.</span>
                </li>
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-mono text-xs font-bold text-[#172033] dark:text-[#F1F5F9] uppercase tracking-wider mb-2.5">
                Tech Stack & Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-[#FFF1F5] dark:bg-[#201520] text-[#172033] dark:text-[#F1F5F9] border border-[#F9DCE7] dark:border-[#382332] text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action Buttons */}
          <div className="p-4 sm:p-6 bg-[#F8FAFC] dark:bg-[#0E141F] border-t border-[#E2E8F0] dark:border-[#243048] flex items-center justify-between gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg border border-[#E2E8F0] dark:border-[#243048] bg-white dark:bg-[#131A26] text-[#172033] dark:text-[#F1F5F9] hover:bg-[#F8FAFC] dark:hover:bg-[#1A2536] transition-colors shadow-2xs"
            >
              <Github className="w-4 h-4" />
              View Source Repository
            </a>

            <div className="flex items-center gap-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg bg-[#172033] dark:bg-[#F1F5F9] text-white dark:text-[#0B0F17] hover:bg-[#202c46] dark:hover:bg-white transition-colors shadow-2xs"
              >
                <ExternalLink className="w-4 h-4" />
                Live Deployment
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
