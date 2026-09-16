import React, { useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Github,
  ExternalLink,
  CheckCircle2,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

/**
 * Convert a normal Google Drive sharing URL into
 * a Google Drive thumbnail URL that works inside <img>.
 *
 * Example:
 * https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 *
 * becomes:
 * https://drive.google.com/thumbnail?id=FILE_ID&sz=w1600
 */
const getGoogleDriveImageUrl = (url: string): string => {
  if (!url) {
    return '';
  }

  // Already a thumbnail URL
  if (url.includes('drive.google.com/thumbnail')) {
    return url;
  }

  // Standard Google Drive sharing URL
  const fileIdMatch = url.match(
    /drive\.google\.com\/file\/d\/([^/?#]+)/
  );

  if (fileIdMatch?.[1]) {
    return `https://drive.google.com/thumbnail?id=${fileIdMatch[1]}&sz=w1600`;
  }

  // Alternative Google Drive URL:
  // https://drive.google.com/open?id=FILE_ID
  try {
    const parsedUrl = new URL(url);
    const fileId = parsedUrl.searchParams.get('id');

    if (fileId) {
      return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`;
    }
  } catch {
    // Ignore invalid URL.
  }

  return url;
};

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  /*
   * ============================================================
   * LOCK BACKGROUND SCROLL
   * ============================================================
   *
   * When the popup is open:
   * - body cannot scroll
   * - html cannot scroll
   * - current page position is preserved
   * - only the modal body can scroll
   */

  useEffect(() => {
    if (!project) {
      return;
    }

    const scrollY = window.scrollY;

    const body = document.body;
    const html = document.documentElement;

    const previousBodyOverflow = body.style.overflow;
    const previousBodyPosition = body.style.position;
    const previousBodyTop = body.style.top;
    const previousBodyWidth = body.style.width;

    const previousHtmlOverflow = html.style.overflow;

    // Completely lock the background page.
    html.style.overflow = 'hidden';

    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';

    return () => {
      // Restore everything when modal closes.
      html.style.overflow = previousHtmlOverflow;

      body.style.overflow = previousBodyOverflow;
      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.width = previousBodyWidth;

      // Restore exact scroll position.
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

  /*
   * ============================================================
   * GOOGLE DRIVE IMAGE
   * ============================================================
   */

  const imageUrl = useMemo(() => {
    if (!project) {
      return '';
    }

    return getGoogleDriveImageUrl(project.imageUrl);
  }, [project]);

  /*
   * ============================================================
   * BACKDROP CLICK
   * ============================================================
   */

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
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
          {/* ==================================================
              BACKDROP
              ================================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              absolute
              inset-0
              bg-black/50
              backdrop-blur-[5px]
            "
            onClick={onClose}
          />

          {/* ==================================================
              MODAL POSITION CONTAINER
              ==================================================
              
              IMPORTANT:
              This is the only outer container allowed to scroll.
              The body behind it remains locked.
              ================================================== */}

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
            {/* ==================================================
                MODAL
                ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 12,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 12,
              }}
              transition={{
                duration: 0.25,
                ease: 'easeOut',
              }}
              className="
                relative
                flex
                max-h-[calc(100dvh-32px)]
                w-full
                max-w-3xl
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-[#E2E8F0]
                bg-white
                shadow-[0_20px_60px_rgba(23,32,51,0.18)]
                dark:border-[#243048]
                dark:bg-[#131A26]
                dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                sm:max-h-[calc(100dvh-48px)]
              "
              onClick={(event) => event.stopPropagation()}
            >
              {/* =================================================
                  HEADER
                  ================================================= */}

              <div
                className="
                  flex
                  shrink-0
                  items-center
                  justify-between
                  gap-4
                  border-b
                  border-[#E2E8F0]
                  bg-[#F8FAFC]
                  px-5
                  py-5
                  dark:border-[#243048]
                  dark:bg-[#0E141F]
                  sm:px-6
                "
              >
                <div className="min-w-0">
                  <div className="mb-1 flex items-center gap-2">
                    <span
                      className="
                        font-mono
                        text-xs
                        font-semibold
                        text-[#667085]
                        dark:text-[#94A3B8]
                      "
                    >
                      {project.number}
                    </span>

                    <span
                      className="
                        text-xs
                        font-medium
                        text-[#6EA8E8]
                        dark:text-[#82BAF6]
                      "
                    >
                      • {project.tagline}
                    </span>
                  </div>

                  <h3
                    id="project-modal-title"
                    className="
                      text-xl
                      font-bold
                      tracking-tight
                      text-[#172033]
                      dark:text-[#F1F5F9]
                    "
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Close */}

                <button
                  type="button"
                  onClick={onClose}
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-lg
                    text-[#667085]
                    transition-colors
                    hover:bg-[#E2E8F0]/70
                    hover:text-[#172033]
                    dark:text-[#94A3B8]
                    dark:hover:bg-[#243048]
                    dark:hover:text-[#F1F5F9]
                  "
                  aria-label="Close project modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* =================================================
                  SCROLLABLE MODAL CONTENT
                  ================================================= */}

              <div
                className="
                  min-h-0
                  flex-1
                  overflow-y-auto
                  overscroll-contain
                  bg-white
                  dark:bg-[#131A26]
                "
              >
                <div className="space-y-6 p-5 sm:p-7">
                  {/* =============================================
                      PROJECT IMAGE
                      ============================================= */}

                  <div
                    className="
                      overflow-hidden
                      rounded-xl
                      border
                      border-[#E2E8F0]
                      bg-[#F8FAFC]
                      shadow-sm
                      dark:border-[#243048]
                      dark:bg-[#0E141F]
                    "
                  >
                    {/* Mini browser bar */}

                    <div
                      className="
                        flex
                        h-9
                        items-center
                        gap-2
                        border-b
                        border-[#E2E8F0]
                        bg-white
                        px-3
                        dark:border-[#243048]
                        dark:bg-[#111824]
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
                          bg-[#F8FAFC]
                          px-2
                          dark:bg-[#0E141F]
                        "
                      >
                        <span
                          className="
                            truncate
                            text-[8px]
                            text-[#98A2B3]
                          "
                        >
                          {project.liveUrl}
                        </span>
                      </div>
                    </div>

                    {/* ACTUAL GOOGLE DRIVE IMAGE */}

                    <div className="relative bg-white dark:bg-[#0E141F]">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={`${project.title} project screenshot`}
                          referrerPolicy="no-referrer"
                          loading="eager"
                          draggable={false}
                          className="
                            block
                            max-h-[520px]
                            min-h-[220px]
                            w-full
                            object-contain
                            object-top
                            bg-white
                            dark:bg-[#0E141F]
                          "
                        />
                      ) : (
                        <div
                          className="
                            flex
                            min-h-[220px]
                            items-center
                            justify-center
                            text-sm
                            text-[#667085]
                          "
                        >
                          Project screenshot unavailable
                        </div>
                      )}
                    </div>
                  </div>

                  {/* =============================================
                      OVERVIEW
                      ============================================= */}

                  <div>
                    <h4
                      className="
                        mb-2
                        font-mono
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider
                        text-[#172033]
                        dark:text-[#F1F5F9]
                      "
                    >
                      Overview
                    </h4>

                    <p
                      className="
                        text-sm
                        leading-relaxed
                        text-[#667085]
                        dark:text-[#94A3B8]
                      "
                    >
                      {project.extendedDescription ||
                        project.description}
                    </p>
                  </div>

                  {/* =============================================
                      KEY ENGINEERING HIGHLIGHTS
                      ============================================= */}

                  <div
                    className="
                      space-y-3
                      rounded-xl
                      border
                      border-[#E2E8F0]
                      bg-[#F8FAFC]
                      p-4
                      dark:border-[#243048]
                      dark:bg-[#0E141F]
                      sm:p-5
                    "
                  >
                    <h4
                      className="
                        flex
                        items-center
                        gap-2
                        font-mono
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider
                        text-[#172033]
                        dark:text-[#F1F5F9]
                      "
                    >
                      <Layers
                        className="
                          h-4
                          w-4
                          text-[#6EA8E8]
                          dark:text-[#82BAF6]
                        "
                      />

                      Key Engineering Highlights
                    </h4>

                    <ul
                      className="
                        space-y-2
                        text-xs
                        text-[#667085]
                        dark:text-[#94A3B8]
                        sm:text-sm
                      "
                    >
                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          className="
                            mt-0.5
                            h-4
                            w-4
                            shrink-0
                            text-emerald-500
                          "
                        />

                        <span>
                          Resilient concurrency models ensuring
                          seamless load handling under burst
                          queries.
                        </span>
                      </li>

                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          className="
                            mt-0.5
                            h-4
                            w-4
                            shrink-0
                            text-emerald-500
                          "
                        />

                        <span>
                          Sub-second token streaming and
                          memory-safe buffer management.
                        </span>
                      </li>

                      <li className="flex items-start gap-2">
                        <CheckCircle2
                          className="
                            mt-0.5
                            h-4
                            w-4
                            shrink-0
                            text-emerald-500
                          "
                        />

                        <span>
                          Type-safe API contracts verified with
                          automated end-to-end continuous
                          integration.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* =============================================
                      TECHNOLOGIES
                      ============================================= */}

                  <div>
                    <h4
                      className="
                        mb-2.5
                        font-mono
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider
                        text-[#172033]
                        dark:text-[#F1F5F9]
                      "
                    >
                      Tech Stack & Libraries
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-md
                            border
                            border-[#F9DCE7]
                            bg-[#FFF1F5]
                            px-3
                            py-1
                            text-xs
                            font-medium
                            text-[#172033]
                            dark:border-[#382332]
                            dark:bg-[#201520]
                            dark:text-[#F1F5F9]
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* =============================================
                      METRICS
                      ============================================= */}

                  {project.metrics && (
                    <div
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
                          font-medium
                          text-[#667085]
                          dark:text-[#94A3B8]
                        "
                      >
                        {project.metrics}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* =================================================
                  FOOTER
                  ================================================= */}

              <div
                className="
                  flex
                  shrink-0
                  items-center
                  justify-between
                  gap-3
                  border-t
                  border-[#E2E8F0]
                  bg-[#F8FAFC]
                  p-4
                  dark:border-[#243048]
                  dark:bg-[#0E141F]
                  sm:p-5
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
                    gap-1.5
                    rounded-lg
                    border
                    border-[#E2E8F0]
                    bg-white
                    px-4
                    py-2.5
                    text-xs
                    font-semibold
                    text-[#172033]
                    transition-colors
                    hover:bg-[#F8FAFC]
                    dark:border-[#243048]
                    dark:bg-[#131A26]
                    dark:text-[#F1F5F9]
                    dark:hover:bg-[#1A2536]
                  "
                >
                  <Github className="h-4 w-4" />

                  <span className="hidden sm:inline">
                    View Source Repository
                  </span>

                  <span className="sm:hidden">
                    GitHub
                  </span>
                </a>

                {/* Live */}

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-lg
                    bg-[#172033]
                    px-4
                    py-2.5
                    text-xs
                    font-semibold
                    text-white
                    transition-colors
                    hover:bg-[#202C46]
                    dark:bg-[#F1F5F9]
                    dark:text-[#0B0F17]
                    dark:hover:bg-white
                  "
                >
                  <ExternalLink className="h-4 w-4" />

                  <span className="hidden sm:inline">
                    Live Deployment
                  </span>

                  <span className="sm:hidden">
                    Live
                  </span>

                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
