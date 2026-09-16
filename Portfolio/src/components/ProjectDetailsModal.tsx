import React, { useEffect, useMemo } from 'react';
import {
  X,
  Github,
  ExternalLink,
  CheckCircle2,
  Layers3,
  ArrowUpRight,
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailsModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

/**
 * Converts a normal Google Drive sharing URL into
 * a Google Drive thumbnail URL that can be displayed
 * inside an <img>.
 *
 * Example:
 *
 * https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 *
 * becomes:
 *
 * https://drive.google.com/thumbnail?id=FILE_ID&sz=w1600
 */
const getGoogleDriveImageUrl = (url: string): string => {
  if (!url) {
    return '';
  }

  // Already converted
  if (url.includes('drive.google.com/thumbnail')) {
    return url;
  }

  // Standard Drive URL
  const fileIdMatch = url.match(
    /drive\.google\.com\/file\/d\/([^/?#]+)/
  );

  if (fileIdMatch?.[1]) {
    return `https://drive.google.com/thumbnail?id=${fileIdMatch[1]}&sz=w1600`;
  }

  // Drive URL containing ?id=
  try {
    const parsedUrl = new URL(url);
    const fileId = parsedUrl.searchParams.get('id');

    if (fileId) {
      return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`;
    }
  } catch {
    // Invalid URL - handled by image fallback
  }

  return url;
};

export const ProjectDetailsModal: React.FC<
  ProjectDetailsModalProps
> = ({ project, onClose }) => {
  /*
   * ============================================================
   * LOCK BACKGROUND SCROLL
   * ============================================================
   *
   * When the modal is open:
   *
   * - The portfolio behind the modal cannot scroll.
   * - The modal itself can scroll.
   * - The previous scroll position is restored after closing.
   */

  useEffect(() => {
    if (!project) {
      return;
    }

    const scrollY = window.scrollY;

    const body = document.body;
    const html = document.documentElement;

    const originalBodyOverflow = body.style.overflow;
    const originalBodyPosition = body.style.position;
    const originalBodyTop = body.style.top;
    const originalBodyWidth = body.style.width;

    const originalHtmlOverflow = html.style.overflow;

    // Lock the page completely
    html.style.overflow = 'hidden';

    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';

    return () => {
      // Restore original styles
      html.style.overflow = originalHtmlOverflow;

      body.style.overflow = originalBodyOverflow;
      body.style.position = originalBodyPosition;
      body.style.top = originalBodyTop;
      body.style.width = originalBodyWidth;

      // Restore exact page position
      window.scrollTo(0, scrollY);
    };
  }, [project]);

  /*
   * ============================================================
   * ESC KEY
   * ============================================================
   */

  useEffect(() => {
    if (!project) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  const imageUrl = useMemo(() => {
    if (!project) {
      return '';
    }

    return getGoogleDriveImageUrl(project.imageUrl);
  }, [project]);

  if (!project) {
    return null;
  }

  const themeStyles = {
    rose: {
      accent: 'text-[#E88AA8] dark:text-[#F49DB7]',
      badge:
        'border-[#F9DCE7] bg-[#FFF1F5] text-[#E88AA8] dark:border-[#422838] dark:bg-[#201520] dark:text-[#F49DB7]',
      box:
        'border-[#F9DCE7] bg-[#FFF9FB] dark:border-[#382332] dark:bg-[#18131A]',
      check: 'text-emerald-500',
      imageBorder:
        'border-[#F9DCE7] dark:border-[#422838]',
    },

    blue: {
      accent: 'text-[#6EA8E8] dark:text-[#82BAF6]',
      badge:
        'border-[#CFE3FF] bg-[#EAF3FF] text-[#6EA8E8] dark:border-[#223652] dark:bg-[#121E2E] dark:text-[#82BAF6]',
      box:
        'border-[#CFE3FF] bg-[#F7FBFF] dark:border-[#1E3048] dark:bg-[#121A25]',
      check: 'text-emerald-500',
      imageBorder:
        'border-[#CFE3FF] dark:border-[#223652]',
    },

    white: {
      accent: 'text-[#667085] dark:text-[#94A3B8]',
      badge:
        'border-[#E2E8F0] bg-[#F8FAFC] text-[#667085] dark:border-[#243048] dark:bg-[#0E141F] dark:text-[#94A3B8]',
      box:
        'border-[#E2E8F0] bg-[#FAFBFC] dark:border-[#243048] dark:bg-[#111824]',
      check: 'text-emerald-500',
      imageBorder:
        'border-[#E2E8F0] dark:border-[#243048]',
    },
  };

  const currentTheme = themeStyles[project.theme];

  /*
   * These are the engineering highlights currently
   * displayed by your portfolio modal.
   */
  const engineeringHighlights = [
    'Resilient concurrency models ensuring seamless load handling under burst queries.',
    'Sub-second token streaming and memory-safe buffer management.',
    'Type-safe API contracts verified with automated end-to-end continuous integration.',
  ];

  /*
   * ============================================================
   * BACKDROP CLICK
   * ============================================================
   *
   * Clicking outside the modal closes it.
   * Clicking inside the modal does NOT close it.
   */

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        h-[100dvh]
        w-full
        overflow-hidden
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* ========================================================
          BACKDROP
          ======================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-black/45
          backdrop-blur-[6px]
        "
        onClick={handleBackdropClick}
      />

      {/* ========================================================
          MODAL SCROLL CONTAINER
          ======================================================== */}

      <div
        className="
          relative
          z-10
          flex
          h-full
          w-full
          items-center
          justify-center
          overflow-y-auto
          overscroll-contain
          p-4
          sm:p-6
        "
        onClick={handleBackdropClick}
      >
        {/* ======================================================
            MODAL
            ====================================================== */}

        <div
          className="
            relative
            flex
            max-h-[calc(100dvh-32px)]
            w-full
            max-w-[900px]
            flex-col
            overflow-hidden
            rounded-2xl
            bg-white
            shadow-[0_25px_80px_rgba(0,0,0,0.25)]
            dark:bg-[#131A26]
            sm:max-h-[calc(100dvh-48px)]
          "
          onClick={(event) => event.stopPropagation()}
        >
          {/* ====================================================
              HEADER
              ==================================================== */}

          <div
            className="
              relative
              z-20
              shrink-0
              border-b
              border-[#E2E8F0]
              bg-white
              dark:border-[#243048]
              dark:bg-[#131A26]
            "
          >
            <div className="flex items-start justify-between gap-5 px-5 py-5 sm:px-7">
              <div className="min-w-0">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span
                    className="
                      font-mono
                      text-[10px]
                      font-bold
                      tracking-wider
                      text-[#667085]
                      dark:text-[#94A3B8]
                    "
                  >
                    {project.number}
                  </span>

                  <span className="text-[#CBD5E1]">
                    •
                  </span>

                  <span
                    className={`
                      text-xs
                      font-medium
                      ${currentTheme.accent}
                    `}
                  >
                    {project.tagline}
                  </span>
                </div>

                <h2
                  id="project-modal-title"
                  className="
                    text-xl
                    font-bold
                    tracking-tight
                    text-[#172033]
                    dark:text-[#F1F5F9]
                    sm:text-2xl
                  "
                >
                  {project.title}
                </h2>
              </div>

              {/* Close button */}

              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  text-[#667085]
                  transition-all
                  duration-200
                  hover:bg-[#F1F5F9]
                  hover:text-[#172033]
                  dark:text-[#94A3B8]
                  dark:hover:bg-[#1C2738]
                  dark:hover:text-white
                "
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* ====================================================
              SCROLLABLE CONTENT
              ==================================================== */}

          <div
            className="
              min-h-0
              flex-1
              overflow-y-auto
              overscroll-contain
              scroll-smooth
              bg-white
              dark:bg-[#131A26]
            "
          >
            <div className="space-y-7 p-5 sm:p-7">
              {/* ==================================================
                  PROJECT IMAGE
                  ================================================== */}

              <section>
                <div
                  className={`
                    relative
                    overflow-hidden
                    rounded-xl
                    border
                    ${currentTheme.imageBorder}
                    bg-[#F8FAFC]
                    dark:bg-[#0E141F]
                  `}
                >
                  {/* Browser top bar */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-9
                      items-center
                      gap-2
                      border-b
                      border-black/5
                      bg-white/90
                      px-3
                      backdrop-blur-md
                      dark:border-white/5
                      dark:bg-[#111824]/90
                    "
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-300" />

                    <div
                      className="
                        ml-2
                        flex
                        h-5
                        min-w-0
                        flex-1
                        items-center
                        rounded
                        bg-black/[0.035]
                        px-2.5
                        dark:bg-white/[0.04]
                      "
                    >
                      <span
                        className="
                          truncate
                          text-[8px]
                          font-medium
                          text-slate-400
                        "
                      >
                        {project.liveUrl}
                      </span>
                    </div>
                  </div>

                  {/* Actual Google Drive screenshot */}

                  <div className="relative bg-white dark:bg-[#0E141F]">
                    <img
                      src={imageUrl}
                      alt={`${project.title} project preview`}
                      referrerPolicy="no-referrer"
                      className="
                        block
                        max-h-[520px]
                        w-full
                        object-contain
                        object-top
                      "
                    />
                  </div>

                  {/* Preview label */}

                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      z-20
                    "
                  >
                    <span
                      className={`
                        inline-flex
                        items-center
                        rounded-full
                        border
                        px-3
                        py-1.5
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-wider
                        shadow-sm
                        backdrop-blur-md
                        ${currentTheme.badge}
                      `}
                    >
                      {project.preview.badge}
                    </span>
                  </div>
                </div>
              </section>

              {/* ==================================================
                  OVERVIEW
                  ================================================== */}

              <section>
                <h3
                  className="
                    mb-3
                    font-mono
                    text-xs
                    font-bold
                    tracking-wider
                    text-[#172033]
                    dark:text-[#F1F5F9]
                  "
                >
                  OVERVIEW
                </h3>

                <p
                  className="
                    text-sm
                    leading-6
                    text-[#667085]
                    dark:text-[#94A3B8]
                    sm:text-[15px]
                    sm:leading-7
                  "
                >
                  {project.extendedDescription ||
                    project.description}
                </p>
              </section>

              {/* ==================================================
                  ENGINEERING HIGHLIGHTS
                  ================================================== */}

              <section
                className={`
                  rounded-xl
                  border
                  p-5
                  ${currentTheme.box}
                `}
              >
                <div className="mb-4 flex items-center gap-2">
                  <Layers3
                    className={`h-4 w-4 ${currentTheme.accent}`}
                  />

                  <h3
                    className="
                      font-mono
                      text-xs
                      font-bold
                      tracking-wider
                      text-[#172033]
                      dark:text-[#F1F5F9]
                    "
                  >
                    KEY ENGINEERING HIGHLIGHTS
                  </h3>
                </div>

                <div className="space-y-3">
                  {engineeringHighlights.map(
                    (highlight, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2.5"
                      >
                        <CheckCircle2
                          className={`
                            mt-0.5
                            h-4
                            w-4
                            shrink-0
                            ${currentTheme.check}
                          `}
                        />

                        <p
                          className="
                            text-sm
                            leading-5
                            text-[#667085]
                            dark:text-[#94A3B8]
                          "
                        >
                          {highlight}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </section>

              {/* ==================================================
                  TECH STACK
                  ================================================== */}

              <section>
                <h3
                  className="
                    mb-3
                    font-mono
                    text-xs
                    font-bold
                    tracking-wider
                    text-[#172033]
                    dark:text-[#F1F5F9]
                  "
                >
                  TECH STACK & LIBRARIES
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className={`
                        rounded-md
                        border
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        ${currentTheme.badge}
                      `}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </section>

              {/* ==================================================
                  METRICS
                  ================================================== */}

              {project.metrics && (
                <section
                  className="
                    rounded-xl
                    border
                    border-[#E2E8F0]
                    bg-[#F8FAFC]
                    p-4
                    dark:border-[#243048]
                    dark:bg-[#0E141F]
                  "
                >
                  <p
                    className="
                      text-xs
                      font-semibold
                      text-[#667085]
                      dark:text-[#94A3B8]
                    "
                  >
                    {project.metrics}
                  </p>
                </section>
              )}
            </div>
          </div>

          {/* ====================================================
              FOOTER
              ==================================================== */}

          <div
            className="
              relative
              z-20
              flex
              shrink-0
              items-center
              justify-between
              gap-3
              border-t
              border-[#E2E8F0]
              bg-[#F8FAFC]
              px-5
              py-4
              dark:border-[#243048]
              dark:bg-[#0E141F]
              sm:px-7
            "
          >
            {/* GitHub */}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-[#E2E8F0]
                bg-white
                px-4
                py-2.5
                text-xs
                font-semibold
                text-[#172033]
                transition-all
                duration-200
                hover:border-[#CBD5E1]
                hover:bg-[#F8FAFC]
                dark:border-[#243048]
                dark:bg-[#131A26]
                dark:text-[#F1F5F9]
                dark:hover:border-[#384966]
                dark:hover:bg-[#182232]
              "
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">
                View Source Repository
              </span>
              <span className="sm:hidden">GitHub</span>
            </a>

            {/* Live Demo */}

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-[#172033]
                px-4
                py-2.5
                text-xs
                font-semibold
                text-white
                shadow-sm
                transition-all
                duration-200
                hover:bg-[#1E2B45]
                dark:bg-[#F1F5F9]
                dark:text-[#0B0F17]
                dark:hover:bg-white
              "
            >
              <ExternalLink className="h-4 w-4" />
              <span className="hidden sm:inline">
                Live Deployment
              </span>
              <span className="sm:hidden">Live</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
