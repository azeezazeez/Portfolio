import React from 'react';
import { motion } from 'motion/react';
import { ProjectItem } from '../types';
import { ProjectPreview } from './ProjectPreview';
import {
  Github,
  ExternalLink,
  ArrowUpRight,
} from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  onOpenModal?: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onOpenModal,
}) => {
  const cardThemeStyles = {
    rose: {
      cardBg:
        'bg-white dark:bg-[#131A26] hover:border-[#F9DCE7] dark:hover:border-[#422838]',

      tagBg:
        'bg-[#FFF1F5] dark:bg-[#201520] text-[#172033] dark:text-[#F1F5F9] border-[#F9DCE7]/80 dark:border-[#382332]',

      accentBadge:
        'text-[#E88AA8] dark:text-[#F49DB7]',
    },

    blue: {
      cardBg:
        'bg-white dark:bg-[#131A26] hover:border-[#CFE3FF] dark:hover:border-[#223652]',

      tagBg:
        'bg-[#EAF3FF] dark:bg-[#121E2E] text-[#172033] dark:text-[#F1F5F9] border-[#CFE3FF]/80 dark:border-[#1E3048]',

      accentBadge:
        'text-[#6EA8E8] dark:text-[#82BAF6]',
    },

    white: {
      cardBg:
        'bg-white dark:bg-[#131A26] hover:border-[#CBD5E1] dark:hover:border-[#33435C]',

      tagBg:
        'bg-[#F8FAFC] dark:bg-[#0E141F] text-[#172033] dark:text-[#F1F5F9] border-[#E2E8F0] dark:border-[#243048]',

      accentBadge:
        'text-[#667085] dark:text-[#94A3B8]',
    },
  }[project.theme];

  const openProjectModal = () => {
    if (onOpenModal) {
      onOpenModal(project);
    }
  };

  return (
    <motion.article
      id={`project-card-${project.id}`}
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: '-60px',
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{
        y: -4,
      }}
      className={`
        group
        relative
        flex
        flex-col
        overflow-hidden
        rounded-xl
        border
        border-[#E2E8F0]
        dark:border-[#243048]
        ${cardThemeStyles.cardBg}
        shadow-[0_2px_12px_rgba(23,32,51,0.03)]
        dark:shadow-[0_2px_12px_rgba(0,0,0,0.3)]
        hover:shadow-[0_12px_24px_rgba(23,32,51,0.06)]
        dark:hover:shadow-[0_12px_24px_rgba(0,0,0,0.5)]
        transition-all
        duration-300
        md:flex-row
      `}
    >
      {/* =====================================================
          PROJECT IMAGE / PREVIEW
          Clicking anywhere here opens the expanded modal.
          ===================================================== */}

      <button
        type="button"
        onClick={openProjectModal}
        aria-label={`Open ${project.title} overview and architecture`}
        className="
          relative
          block
          w-full
          shrink-0
          cursor-pointer
          overflow-hidden
          border-0
          bg-transparent
          p-0
          text-left
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#94A3B8]
          focus-visible:ring-inset
          md:w-[48%]
        "
      >
        <motion.div
          transition={{
            duration: 0.35,
            ease: 'easeOut',
          }}
          className="
            h-full
            transition-transform
            duration-300
            group-hover:scale-[1.01]
          "
        >
          <ProjectPreview project={project} />
        </motion.div>

        {/* Expand indicator */}

        <div
          className="
            pointer-events-none
            absolute
            right-4
            top-14
            z-30
            flex
            items-center
            gap-1.5
            rounded-full
            border
            border-white/30
            bg-black/40
            px-3
            py-1.5
            text-[10px]
            font-semibold
            uppercase
            tracking-wider
            text-white
            opacity-0
            shadow-lg
            backdrop-blur-md
            transition-all
            duration-300
            group-hover:opacity-100
          "
        >
          <ArrowUpRight className="h-3 w-3" />
          EXPAND
        </div>
      </button>

      {/* =====================================================
          INFORMATION AREA
          ===================================================== */}

      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7 md:p-8">
        <div>
          {/* Project Number / Tagline */}

          <div className="mb-2.5 flex items-center justify-between gap-2">
            <span
              className="
                font-mono
                text-xs
                font-semibold
                tracking-wider
                text-[#667085]
                dark:text-[#94A3B8]
              "
            >
              {project.number}
            </span>

            <span
              className={`
                text-xs
                font-medium
                ${cardThemeStyles.accentBadge}
              `}
            >
              {project.tagline}
            </span>
          </div>

          {/* Project Title */}

          <button
            type="button"
            onClick={openProjectModal}
            aria-label={`Open ${project.title}`}
            className="
              group/title
              flex
              cursor-pointer
              items-center
              gap-1.5
              border-0
              bg-transparent
              p-0
              text-left
              focus:outline-none
            "
          >
            <h3
              className="
                text-xl
                font-bold
                tracking-tight
                text-[#172033]
                transition-colors
                dark:text-[#F1F5F9]
                sm:text-2xl
              "
            >
              {project.title}
            </h3>

            <ArrowUpRight
              className="
                h-4
                w-4
                text-[#667085]
                opacity-0
                transition-all
                duration-200
                group-hover/title:translate-x-0.5
                group-hover/title:-translate-y-0.5
                group-hover/title:opacity-100
                dark:text-[#94A3B8]
              "
            />
          </button>

          {/* Description */}

          <p
            className="
              mt-3
              text-sm
              font-normal
              leading-relaxed
              text-[#667085]
              dark:text-[#94A3B8]
              sm:text-base
            "
          >
            {project.description}
          </p>

          {/* Technologies */}

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={`
                  rounded-md
                  border
                  px-2.5
                  py-1
                  text-xs
                  font-medium
                  ${cardThemeStyles.tagBg}
                  transition-colors
                `}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* =====================================================
            ACTION BUTTONS
            ===================================================== */}

        <div
          className="
            mt-7
            flex
            items-center
            gap-3
            border-t
            border-[#E2E8F0]/70
            pt-5
            dark:border-[#243048]/70
          "
        >
          {/* GitHub */}

          <a
            id={`project-github-${project.id}`}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-lg
              border
              border-[#E2E8F0]
              bg-white
              px-4
              py-2
              text-xs
              font-semibold
              text-[#172033]
              transition-all
              duration-200
              hover:border-[#CBD5E1]
              hover:bg-[#F8FAFC]
              dark:border-[#243048]
              dark:bg-[#0E141F]
              dark:text-[#F1F5F9]
              dark:hover:border-[#384966]
              dark:hover:bg-[#182232]
            "
          >
            <Github className="h-3.5 w-3.5" />
            GITHUB
          </a>

          {/* Live Demo */}

          <a
            id={`project-live-${project.id}`}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-lg
              bg-[#172033]
              px-4
              py-2
              text-xs
              font-semibold
              text-white
              shadow-xs
              transition-all
              duration-200
              hover:bg-[#1e2b45]
              dark:bg-[#F1F5F9]
              dark:text-[#0B0F17]
              dark:hover:bg-white
            "
          >
            <ExternalLink className="h-3.5 w-3.5" />
            LIVE DEMO
          </a>

          {/* Overview / Architecture */}

          {onOpenModal && (
            <button
              id={`project-details-${project.id}`}
              type="button"
              onClick={openProjectModal}
              className="
                ml-auto
                inline-flex
                cursor-pointer
                items-center
                gap-1
                border-0
                bg-transparent
                p-0
                text-xs
                font-medium
                text-[#667085]
                underline-offset-4
                transition-colors
                hover:text-[#172033]
                hover:underline
                dark:text-[#94A3B8]
                dark:hover:text-white
              "
            >
              Overview & Architecture
              <ArrowUpRight className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
};
