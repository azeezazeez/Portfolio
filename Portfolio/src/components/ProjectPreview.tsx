import React from 'react';
import { ProjectItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectPreviewProps {
  project: ProjectItem;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ project }) => {
  const { theme, imageUrl } = project;

  const themeStyles = {
    rose: {
      background:
        'bg-gradient-to-br from-rose-50 via-white to-pink-100',
      accent:
        'bg-rose-500',
      accentLight:
        'bg-rose-100 text-rose-600',
      border:
        'border-rose-200',
      glow:
        'bg-rose-300/20',
    },

    blue: {
      background:
        'bg-gradient-to-br from-blue-50 via-white to-sky-100',
      accent:
        'bg-blue-500',
      accentLight:
        'bg-blue-100 text-blue-600',
      border:
        'border-blue-200',
      glow:
        'bg-blue-300/20',
    },

    white: {
      background:
        'bg-gradient-to-br from-slate-50 via-white to-gray-100',
      accent:
        'bg-slate-500',
      accentLight:
        'bg-slate-100 text-slate-600',
      border:
        'border-slate-200',
      glow:
        'bg-slate-300/20',
    },
  };

  const currentTheme = themeStyles[theme];

  return (
    <div
      className={`
        relative
        h-full
        min-h-[320px]
        w-full
        overflow-hidden
        rounded-2xl
        border
        ${currentTheme.border}
        ${currentTheme.background}
        shadow-sm
      `}
    >
      {/* Decorative background glow */}
      <div
        className={`
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-56
          w-56
          rounded-full
          blur-3xl
          ${currentTheme.glow}
        `}
      />

      <div
        className={`
          pointer-events-none
          absolute
          -bottom-24
          -left-20
          h-56
          w-56
          rounded-full
          blur-3xl
          ${currentTheme.glow}
        `}
      />

      {/* Browser Header */}
      <div className="relative z-10 flex h-10 items-center gap-2 border-b border-black/5 bg-white/80 px-4 backdrop-blur-md">
        <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-300" />

        <div className="ml-3 flex h-6 flex-1 items-center rounded-md bg-black/[0.035] px-3">
          <span className="truncate text-[9px] font-medium tracking-wide text-slate-400">
            {project.liveUrl}
          </span>
        </div>
      </div>

      {/* Actual Project Screenshot */}
      <div className="relative h-[calc(100%-40px)] overflow-hidden">
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
            duration-700
            ease-out
            group-hover:scale-[1.025]
          "
          onError={(event) => {
            const target = event.currentTarget;

            target.style.display = 'none';

            const fallback =
              target.parentElement?.querySelector(
                '[data-image-fallback]'
              ) as HTMLElement | null;

            if (fallback) {
              fallback.style.display = 'flex';
            }
          }}
        />

        {/* Fallback */}
        <div
          data-image-fallback
          className="absolute inset-0 hidden items-center justify-center bg-white/80 p-8 text-center backdrop-blur-sm"
        >
          <div>
            <div
              className={`
                mx-auto mb-4 flex h-12 w-12
                items-center justify-center
                rounded-full
                ${currentTheme.accentLight}
              `}
            >
              <ArrowUpRight size={20} />
            </div>

            <p className="text-sm font-semibold text-slate-700">
              {project.title}
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Project preview unavailable
            </p>
          </div>
        </div>

        {/* Bottom Overlay */}
        <div className="absolute inset-x-0 bottom-0 z-20">
          <div className="bg-gradient-to-t from-black/50 via-black/10 to-transparent px-4 pb-4 pt-12">
            <div className="flex items-center justify-between gap-3">
              <div
                className="
                  rounded-full
                  border
                  border-white/20
                  bg-white/90
                  px-3
                  py-1.5
                  shadow-lg
                  backdrop-blur-md
                "
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-700">
                  {project.preview.badge}
                </span>
              </div>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live website`}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-white/90
                  text-slate-700
                  shadow-lg
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:bg-white
                "
              >
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
