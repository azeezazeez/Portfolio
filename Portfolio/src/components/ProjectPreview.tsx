import React from 'react';
import { ProjectItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectPreviewProps {
  project: ProjectItem;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  project,
}) => {
  const { imageUrl, theme } = project;

  const bgClasses = {
    rose:
      'bg-gradient-to-br from-[#FFF1F5] via-[#FFFFFF] to-[#F9DCE7]/40 dark:from-[#201520] dark:via-[#131A26] dark:to-[#221624] border-[#F9DCE7]/80 dark:border-[#3E2535]',

    blue:
      'bg-gradient-to-br from-[#EAF3FF] via-[#FFFFFF] to-[#CFE3FF]/40 dark:from-[#101C2B] dark:via-[#131A26] dark:to-[#122236] border-[#CFE3FF]/80 dark:border-[#203654]',

    white:
      'bg-gradient-to-br from-[#F8FAFC] via-[#FFFFFF] to-[#E2E8F0]/40 dark:from-[#111722] dark:via-[#131A26] dark:to-[#0F1622] border-[#E2E8F0] dark:border-[#243048]',
  }[theme];

  return (
    <div
      className={`
        relative
        w-full
        h-64
        md:h-72
        rounded-t-xl
        md:rounded-l-xl
        md:rounded-tr-none
        border-b
        md:border-b-0
        md:border-r
        ${bgClasses}
        p-4
        sm:p-5
        overflow-hidden
        select-none
        transition-all
        duration-300
      `}
    >
      {/* ====================================================== */}
      {/* BROWSER HEADER                                         */}
      {/* ====================================================== */}

      <div className="relative z-20 flex items-center gap-2">
        {/* Browser dots */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span
            className="
              w-2.5
              h-2.5
              rounded-full
              bg-[#E2E8F0]
              dark:bg-[#253347]
            "
          />

          <span
            className="
              w-2.5
              h-2.5
              rounded-full
              bg-[#E2E8F0]
              dark:bg-[#253347]
            "
          />

          <span
            className="
              w-2.5
              h-2.5
              rounded-full
              bg-[#E2E8F0]
              dark:bg-[#253347]
            "
          />
        </div>

        {/* Browser URL */}
        <div
          className="
            min-w-0
            flex-1
            rounded-md
            border
            border-[#E2E8F0]/70
            dark:border-[#243048]
            bg-white/80
            dark:bg-[#111722]/90
            px-2.5
            py-1
            backdrop-blur-sm
          "
        >
          <span
            className="
              block
              truncate
              font-mono
              text-[10px]
              tracking-tight
              text-[#667085]
              dark:text-[#94A3B8]
            "
          >
            {project.title
              .toLowerCase()
              .replace(/\s+/g, '-')}.azeez.dev
          </span>
        </div>
      </div>

      {/* ====================================================== */}
      {/* ACTUAL PROJECT IMAGE                                   */}
      {/* ====================================================== */}

      <div
        className="
          absolute
          left-4
          right-4
          top-[58px]
          bottom-4
          sm:left-5
          sm:right-5
          sm:top-[60px]
          sm:bottom-5
          overflow-hidden
          rounded-lg
          border
          border-[#E2E8F0]
          dark:border-[#243048]
          bg-white
          dark:bg-[#0E141F]
          shadow-[0_8px_25px_rgba(23,32,51,0.08)]
          dark:shadow-[0_8px_25px_rgba(0,0,0,0.35)]
        "
      >
        <img
          src={imageUrl}
          alt={`${project.title} project screenshot`}
          loading="lazy"
          draggable={false}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-top
            transition-transform
            duration-500
            ease-out
            group-hover:scale-[1.015]
          "
        />

        {/* Subtle overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/[0.08]
            via-transparent
            to-white/[0.04]
          "
        />

        {/* Hover View indicator */}
        <div
          className="
            absolute
            bottom-3
            right-3
            flex
            items-center
            gap-1
            rounded-md
            border
            border-white/60
            bg-white/90
            px-2
            py-1
            text-[10px]
            font-medium
            text-[#172033]
            shadow-sm
            backdrop-blur-md
            opacity-0
            translate-y-1
            transition-all
            duration-300
            group-hover:opacity-100
            group-hover:translate-y-0
            dark:border-[#34445D]
            dark:bg-[#111722]/90
            dark:text-[#F1F5F9]
          "
        >
          View
          <ArrowUpRight className="w-3 h-3" />
        </div>
      </div>

      {/* ====================================================== */}
      {/* BOTTOM INFORMATION BAR                                 */}
      {/* ====================================================== */}

      <div
        className="
          absolute
          left-4
          right-4
          bottom-2
          sm:left-5
          sm:right-5
          z-20
          flex
          items-center
          justify-between
          pointer-events-none
        "
      >
        {/* Project Badge */}
        <span
          className="
            rounded-full
            border
            border-[#E2E8F0]/80
            dark:border-[#243048]
            bg-white/90
            dark:bg-[#111722]/90
            px-2.5
            py-0.5
            text-[9px]
            font-medium
            text-[#667085]
            dark:text-[#94A3B8]
            backdrop-blur-sm
          "
        >
          {project.preview.badge}
        </span>

        {/* Live indicator */}
        <span
          className="
            flex
            items-center
            gap-0.5
            rounded-full
            border
            border-[#E2E8F0]/80
            dark:border-[#243048]
            bg-white/90
            dark:bg-[#111722]/90
            px-2.5
            py-0.5
            text-[9px]
            font-medium
            text-[#172033]
            dark:text-[#F1F5F9]
            backdrop-blur-sm
          "
        >
          Live Preview

          <span
            className="
              ml-1
              w-1.5
              h-1.5
              rounded-full
              bg-emerald-500
              animate-pulse
            "
          />
        </span>
      </div>

      {/* ====================================================== */}
      {/* ATMOSPHERIC DECORATION                                 */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-8
          -bottom-8
          w-32
          h-32
          rounded-full
          bg-white/40
          dark:bg-[#202E42]/20
          blur-2xl
        "
      />
    </div>
  );
};
