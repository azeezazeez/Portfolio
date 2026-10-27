import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Download,
  FileText,
  CheckCircle2,
  Plus,
  Minus,
  Loader2,
} from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';
import type { PDFDocumentProxy, RenderTask } from 'pdfjs-dist';
import {
  RESUME_URL,
  prefetchResume,
  downloadResume,
} from '../utils/resumeDownload';
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

/*
 * ============================================================
 * CONFIG
 * ============================================================
 * The PDF lives in the /public folder, so it is served from the
 * site root: public/AZEEZ_RESUME.pdf  ->  /AZEEZ_RESUME.pdf
 */

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.25;

const NAME = 'ACHUKATLA ABDUL AZEEZ';
const ROLE = 'Software Developer | Java Backend | Spring Boot';
const EMAIL = 'itsazeezwork@gmail.com';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/*
 * ============================================================
 * SINGLE PDF PAGE (rendered on a canvas)
 * ============================================================
 */
interface PdfPageProps {
  pdf: PDFDocumentProxy;
  pageNumber: number;
  baseWidth: number;
  zoom: number;
}

const PdfPage: React.FC<PdfPageProps> = ({
  pdf,
  pageNumber,
  baseWidth,
  zoom,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!baseWidth) return;

    let cancelled = false;
    let renderTask: RenderTask | null = null;

    (async () => {
      try {
        const page = await pdf.getPage(pageNumber);
        if (cancelled) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        // Fit page to the container width, then apply zoom.
        const unscaled = page.getViewport({ scale: 1 });
        const cssScale = (baseWidth / unscaled.width) * zoom;
        const cssViewport = page.getViewport({ scale: cssScale });

        // Render at device pixel ratio for sharp text (capped for memory).
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const viewport = page.getViewport({ scale: cssScale * dpr });

        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        canvas.style.width = `${Math.floor(cssViewport.width)}px`;
        canvas.style.height = `${Math.floor(cssViewport.height)}px`;

        const context = canvas.getContext('2d');
        if (!context) return;

        renderTask = page.render({
          canvasContext: context,
          viewport,
        });

        await renderTask.promise;
      } catch (err: unknown) {
        const name = (err as { name?: string })?.name;
        if (name !== 'RenderingCancelledException') {
          console.error('PDF page render failed:', err);
        }
      }
    })();

    return () => {
      cancelled = true;
      renderTask?.cancel();
    };
  }, [pdf, pageNumber, baseWidth, zoom]);

  return (
    <canvas
      ref={canvasRef}
      className="block bg-white shadow-[0_4px_20px_rgba(23,32,51,0.18)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.6)] rounded-sm"
    />
  );
};

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [feedback, setFeedback] = useState<{
    message: string;
    type: 'success' | 'info';
  } | null>(null);

  const [pdf, setPdf] = useState<PDFDocumentProxy | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [baseWidth, setBaseWidth] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);

  /*
   * ============================================================
   * LOCK BACKGROUND SCROLL + ESCAPE TO CLOSE
   * ============================================================
   */
  useEffect(() => {
    if (!isOpen) return;

    const html = document.documentElement;
    const body = document.body;

    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPaddingRight = body.style.paddingRight;

    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.paddingRight = previousBodyPaddingRight;

      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  /*
   * ============================================================
   * LOAD THE PDF FROM /public
   * ============================================================
   */
  useEffect(() => {
    if (!isOpen) return;

    let cancelled = false;
    let loadedPdf: PDFDocumentProxy | null = null;

    setPdf(null);
    setLoadError(false);
    setZoom(1);
    prefetchResume();

    const loadingTask = pdfjsLib.getDocument(RESUME_URL);

    loadingTask.promise
      .then((doc) => {
        if (cancelled) {
          doc.destroy();
          return;
        }
        loadedPdf = doc;
        setPdf(doc);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('Failed to load resume PDF:', err);
        setLoadError(true);
      });

    return () => {
      cancelled = true;
      loadingTask.destroy();
      loadedPdf?.destroy();
    };
  }, [isOpen]);

  /*
   * ============================================================
   * MEASURE AVAILABLE WIDTH (page fits the block at 100%)
   * ============================================================
   */
  useEffect(() => {
    if (!isOpen) return;

    const el = scrollRef.current;
    if (!el) return;

    const measure = () => {
      const style = window.getComputedStyle(el);
      const padding =
        parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      setBaseWidth(Math.max(el.clientWidth - padding, 0));
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);

    return () => observer.disconnect();
  }, [isOpen]);

  /*
   * ============================================================
   * ZOOM CONTROLS
   * ============================================================
   */
  const zoomIn = useCallback(
    () =>
      setZoom((z) =>
        Math.min(MAX_ZOOM, Math.round((z + ZOOM_STEP) * 100) / 100)
      ),
    []
  );

  const zoomOut = useCallback(
    () =>
      setZoom((z) =>
        Math.max(MIN_ZOOM, Math.round((z - ZOOM_STEP) * 100) / 100)
      ),
    []
  );

  const resetZoom = useCallback(() => setZoom(1), []);

  // Keyboard shortcuts: + / - / 0 while the modal is open.
  useEffect(() => {
    if (!isOpen) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        zoomIn();
      } else if (e.key === '-' || e.key === '_') {
        e.preventDefault();
        zoomOut();
      } else if (e.key === '0') {
        e.preventDefault();
        resetZoom();
      }
    };

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, zoomIn, zoomOut, resetZoom]);

  if (!isOpen) return null;

  /*
   * ============================================================
   * FEEDBACK
   * ============================================================
   */
  const showFeedback = (
    message: string,
    type: 'success' | 'info' = 'success'
  ) => {
    setFeedback({ message, type });

    setTimeout(() => {
      setFeedback(null);
    }, 4500);
  };

  /*
   * ============================================================
   * DOWNLOAD RESUME
   * ============================================================
   */
  const handleDownloadFile = () => {
    try {
      downloadResume();

      showFeedback('Resume downloaded successfully!', 'success');
    } catch (err) {
      console.error('Resume download failed:', err);

      showFeedback(
        'Unable to download the resume. Please try again.',
        'info'
      );
    }
  };

  const zoomBtn =
    'p-1.5 rounded-md text-[#667085] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F1F5F9] hover:bg-[#E2E8F0]/60 dark:hover:bg-[#243048] disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer';

  return (
    <AnimatePresence>
      <div
        className="
          fixed
          inset-0
          z-50
          flex
          items-center
          justify-center
          p-4
          sm:p-6
          overflow-hidden
          resume-modal-overlay
        "
      >
        {/* BACKDROP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="
            fixed
            inset-0
            bg-black/50
            backdrop-blur-xs
            transition-opacity
            resume-modal-backdrop
          "
        />

        {/* MODAL WINDOW */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="
            relative
            bg-white
            dark:bg-[#131A26]
            rounded-2xl
            border
            border-[#E2E8F0]
            dark:border-[#243048]
            shadow-[0_20px_60px_rgba(23,32,51,0.12)]
            dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)]
            max-w-4xl
            w-full
            h-[90vh]
            flex
            flex-col
            z-10
            overflow-hidden
            resume-modal-content
          "
        >
          {/* HEADER */}
          <div
            className="
              p-3
              sm:p-4
              border-b
              border-[#E2E8F0]
              dark:border-[#243048]
              flex
              items-center
              justify-between
              gap-3
              bg-[#F8FAFC]
              dark:bg-[#0E141F]
              resume-modal-header
              no-print
            "
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div
                className="
                  w-8
                  h-8
                  shrink-0
                  rounded-lg
                  bg-white
                  dark:bg-[#131A26]
                  border
                  border-[#E2E8F0]
                  dark:border-[#243048]
                  flex
                  items-center
                  justify-center
                  text-[#6EA8E8]
                  dark:text-[#82BAF6]
                  shadow-2xs
                "
              >
                <FileText className="w-4 h-4" />
              </div>

              <div className="min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-[#172033] dark:text-[#F1F5F9] truncate">
                  Curriculum Vitae — {NAME}
                </h3>

                <p className="text-[11px] sm:text-xs text-[#667085] dark:text-[#94A3B8] truncate">
                  {ROLE}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {/* ZOOM CONTROLS */}
              <div
                className="
                  flex
                  items-center
                  gap-0.5
                  rounded-lg
                  border
                  border-[#E2E8F0]
                  dark:border-[#243048]
                  bg-white
                  dark:bg-[#131A26]
                  p-0.5
                "
                role="group"
                aria-label="Zoom controls"
              >
                <button
                  id="resume-zoom-out-btn"
                  onClick={zoomOut}
                  disabled={zoom <= MIN_ZOOM}
                  className={zoomBtn}
                  title="Zoom out"
                  aria-label="Zoom out"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>

                <button
                  id="resume-zoom-reset-btn"
                  onClick={resetZoom}
                  className="
                    min-w-[3rem]
                    px-1
                    text-xs
                    font-mono
                    font-semibold
                    text-[#172033]
                    dark:text-[#F1F5F9]
                    cursor-pointer
                  "
                  title="Reset zoom"
                  aria-label="Reset zoom"
                >
                  {Math.round(zoom * 100)}%
                </button>

                <button
                  id="resume-zoom-in-btn"
                  onClick={zoomIn}
                  disabled={zoom >= MAX_ZOOM}
                  className={zoomBtn}
                  title="Zoom in"
                  aria-label="Zoom in"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                id="resume-save-print-btn"
                onClick={handleDownloadFile}
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  text-xs
                  font-semibold
                  px-3
                  py-1.5
                  rounded-lg
                  border
                  border-[#E2E8F0]
                  dark:border-[#243048]
                  bg-white
                  dark:bg-[#131A26]
                  text-[#172033]
                  dark:text-[#F1F5F9]
                  hover:bg-[#F8FAFC]
                  dark:hover:bg-[#1A2536]
                  hover:border-[#CBD5E1]
                  dark:hover:border-[#384966]
                  transition-all
                  duration-200
                  shadow-2xs
                  cursor-pointer
                "
                title="Download Resume"
              >
                <Download className="w-3.5 h-3.5 text-[#6EA8E8] dark:text-[#82BAF6]" />
                <span className="hidden sm:inline">Download</span>
              </button>

              <button
                id="resume-modal-close-btn"
                onClick={onClose}
                className="
                  p-1.5
                  rounded-lg
                  text-[#667085]
                  dark:text-[#94A3B8]
                  hover:text-[#172033]
                  dark:hover:text-[#F1F5F9]
                  hover:bg-[#E2E8F0]/60
                  dark:hover:bg-[#243048]
                  transition-colors
                  cursor-pointer
                "
                aria-label="Close resume modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* FEEDBACK */}
          {feedback && (
            <div
              className="
                px-5
                py-2.5
                bg-[#EAF3FF]
                dark:bg-[#121F30]
                border-b
                border-[#CFE3FF]
                dark:border-[#1E3048]
                text-[#172033]
                dark:text-[#F1F5F9]
                text-xs
                flex
                items-center
                justify-between
                no-print
                animate-fade-in
              "
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#6EA8E8] dark:text-[#82BAF6] shrink-0" />
                <span>{feedback.message}</span>
              </div>

              <button
                onClick={() => setFeedback(null)}
                className="text-[#667085] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F1F5F9] ml-3 text-xs cursor-pointer"
              >
                Dismiss
              </button>
            </div>
          )}

          {/* =========================================================
              PDF PREVIEW
              The ONLY scrollable area (vertical + horizontal when zoomed).
          ========================================================== */}
          <div
            ref={scrollRef}
            className="
              flex-1
              min-h-0
              overflow-auto
              overscroll-contain
              p-3
              sm:p-6
              bg-[#E2E8F0]
              dark:bg-[#0B1018]
              resume-modal-scrollable
            "
          >
            {loadError ? (
              <div className="h-full flex flex-col items-center justify-center gap-3 text-center text-sm text-[#667085] dark:text-[#94A3B8]">
                <FileText className="w-8 h-8" />
                <p>Unable to preview the resume.</p>
                <button
                  onClick={handleDownloadFile}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#CBD5E1] dark:border-[#384966] text-[#172033] dark:text-[#F1F5F9] hover:bg-white dark:hover:bg-[#131A26] cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download instead
                </button>
              </div>
            ) : !pdf ? (
              <div className="h-full flex items-center justify-center text-[#667085] dark:text-[#94A3B8]">
                <Loader2 className="w-6 h-6 animate-spin" />
              </div>
            ) : (
              <div className="w-max mx-auto flex flex-col gap-4">
                {Array.from({ length: pdf.numPages }, (_, i) => (
                  <PdfPage
                    key={i + 1}
                    pdf={pdf}
                    pageNumber={i + 1}
                    baseWidth={baseWidth}
                    zoom={zoom}
                  />
                ))}
              </div>
            )}
          </div>

          {/* FOOTER */}
          <div
            className="
              p-3
              bg-[#F8FAFC]
              dark:bg-[#0E141F]
              border-t
              border-[#E2E8F0]
              dark:border-[#243048]
              flex
              items-center
              justify-between
              gap-3
              resume-modal-footer
              no-print
            "
          >
            <span className="text-xs text-[#667085] dark:text-[#94A3B8] font-mono truncate">
              {EMAIL}
            </span>

            <button
              id="resume-modal-footer-close-btn"
              onClick={onClose}
              className="
                px-4
                py-1.5
                rounded-lg
                border
                border-[#E2E8F0]
                dark:border-[#243048]
                text-[#667085]
                dark:text-[#94A3B8]
                hover:text-[#172033]
                dark:hover:text-[#F1F5F9]
                text-xs
                font-medium
                hover:bg-white
                dark:hover:bg-[#131A26]
                transition-colors
                cursor-pointer
              "
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
