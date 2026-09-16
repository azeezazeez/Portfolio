import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Download,
  FileText,
  CheckCircle2,
  Github,
  ExternalLink,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [feedback, setFeedback] = useState<{
    message: string;
    type: 'success' | 'info';
  } | null>(null);

  if (!isOpen) return null;

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
   * Resume data
   *
   * This content follows the existing resume content.
   * The only intentional project-name change is:
   *
   * Cartify → Zyphora
   */

  const resumeData = {
    name: 'ACHUKATLA ABDUL AZEEZ',
    role: 'Java Developer — Java Backend Developer',

    github: 'https://github.com/azeezazeez',
    linkedin: 'https://linkedin.com/in/azeezazeez',
    portfolio: 'https://abdul-azeez.vercel.app',

    email: 'itsazeezwork@gmail.com',
    phone: '+91 7989284581',

    summary:
      'Entry-level Java Developer with hands-on experience building backend applications using Java, Spring Boot, Spring Security, REST APIs, PostgreSQL, Redis, and microservices. Experienced in API development, testing, debugging, performance optimization, Docker, and CI/CD. Built and deployed full-stack applications integrating Java backends with React frontends, with a strong foundation in object-oriented programming and Agile development.',

    technicalSkills: [
      {
        category: 'Languages',
        skills: 'Java, JavaScript, HTML, CSS',
      },
      {
        category: 'Core Java',
        skills:
          'Object-Oriented Programming (OOP), Collections, Exception Handling, Streams, Multithreading',
      },
      {
        category: 'Backend',
        skills:
          'Spring Boot, Spring MVC, Spring Security, Hibernate/JPA, REST APIs, JWT',
      },
      {
        category: 'Databases',
        skills: 'PostgreSQL, MySQL, Redis',
      },
      {
        category: 'Architecture',
        skills: 'Microservices, API Integration',
      },
      {
        category: 'Tools',
        skills:
          'Git, GitHub, Docker, GitHub Actions, Postman, Swagger, CI/CD',
      },
      {
        category: 'Practices',
        skills:
          'Agile, Software Development, Testing, Debugging, Troubleshooting',
      },
    ],

    experience: {
      role: 'Java Developer Intern',
      period: 'Aug 2025 – Feb 2026',
      company: 'V Cube Software Solutions',
      location: 'Hyderabad, Telangana',
      responsibilities: [
        'Developed and tested 10+ REST APIs using Spring Boot, Spring Security, and JWT, implementing role-based access control for secure backend services.',
        'Troubleshot and debugged backend issues, tested APIs using Postman, and resolved API integration problems to improve application reliability.',
        'Optimized PostgreSQL queries and implemented Redis caching, reducing API response time by 30%.',
        'Developed backend services using microservices architecture and supported application deployment using Docker and GitHub Actions CI/CD.',
        'Created Swagger API documentation and collaborated with the development team following Agile software development practices.',
      ],
    },

    projects: [
      {
        title: 'Zyphora – E-Commerce Full Stack Web Application',
        technologies:
          'Java, Spring Boot, Spring Security, JWT, PostgreSQL, React, Swagger',
        github:
          'https://github.com/azeezazeez/Cartify-Web-Application',
        live: 'https://cartify-cart.vercel.app/',
        description: [
          'Developed a full-stack E-commerce application using Spring Boot and React, implementing JWT authentication and role-based access control for secure user and admin operations.',
          'Designed and tested 10+ REST APIs, optimized PostgreSQL database queries, and documented APIs using Swagger for efficient frontend-backend integration.',
        ],
      },
      {
        title: 'Nexus – AI Chatbot Full Stack Web Application',
        technologies:
          'Java, Spring Boot, PostgreSQL, Redis, Groq AI API, React',
        github:
          'https://github.com/azeezazeez/Nexus-AI-Chatbot',
        live: 'https://nexus-smart-ai.vercel.app/',
        description: [
          'Developed a Java-based AI chatbot using Spring Boot and Groq AI API, implementing session management, chat history, and REST API integration with a React frontend.',
          'Implemented Redis caching to improve application performance, optimized response latency to below 2 seconds, and deployed the application using an automated CI/CD pipeline.',
        ],
      },
    ],

    education: {
      period: '2022 – 2025',
      degree: 'B.Tech (ECE)',
      institution: 'Vaagdegi Institute of Technology and Science',
      cgpa: '7.7/10',
    },

    certification: {
      name: 'Java Full Stack Development',
      organization: 'V Cube Software Solutions',
      period: '2025 – 2026',
    },
  };

  /*
   * Download the actual PDF from the public folder.
   *
   * File location:
   * public/AZEEZ_RESUME.pdf
   *
   * In Vite/React, files inside public are available from "/".
   */
  const handleDownloadFile = () => {
    try {
      const link = document.createElement('a');

      link.href = '/AZEEZ_RESUME.pdf';
      link.download = 'AZEEZ_RESUME.pdf';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      showFeedback(
        'Resume downloaded successfully!',
        'success'
      );
    } catch (err) {
      console.error('Resume download failed:', err);

      showFeedback(
        'Unable to download the resume. Please try again.',
        'info'
      );
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto resume-modal-overlay">

        {/* =========================================================
            BACKDROP
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity resume-modal-backdrop"
        />

        {/* =========================================================
            MODAL WINDOW
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative bg-white dark:bg-[#131A26] rounded-2xl border border-[#E2E8F0] dark:border-[#243048] shadow-[0_20px_60px_rgba(23,32,51,0.12)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)] max-w-3xl w-full max-h-[88vh] flex flex-col z-10 overflow-hidden resume-modal-content"
        >

          {/* =========================================================
              HEADER
          ========================================================== */}
          <div className="p-4 sm:p-5 border-b border-[#E2E8F0] dark:border-[#243048] flex items-center justify-between bg-[#F8FAFC] dark:bg-[#0E141F] resume-modal-header no-print">

            <div className="flex items-center gap-2.5">

              <div className="w-8 h-8 rounded-lg bg-white dark:bg-[#131A26] border border-[#E2E8F0] dark:border-[#243048] flex items-center justify-center text-[#6EA8E8] dark:text-[#82BAF6] shadow-2xs">
                <FileText className="w-4 h-4" />
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#172033] dark:text-[#F1F5F9]">
                  Curriculum Vitae — {resumeData.name}
                </h3>

                <p className="text-[11px] sm:text-xs text-[#667085] dark:text-[#94A3B8]">
                  {resumeData.role} • 2026 Edition
                </p>
              </div>

            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2">

              <button
                id="resume-save-print-btn"
                onClick={handleDownloadFile}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#E2E8F0] dark:border-[#243048] bg-white dark:bg-[#131A26] text-[#172033] dark:text-[#F1F5F9] hover:bg-[#F8FAFC] dark:hover:bg-[#1A2536] hover:border-[#CBD5E1] dark:hover:border-[#384966] transition-all duration-200 shadow-2xs cursor-pointer"
                title="Download Resume"
              >
                <Download className="w-3.5 h-3.5 text-[#6EA8E8] dark:text-[#82BAF6]" />
                <span>Save / Print</span>
              </button>

              <button
                id="resume-modal-close-btn"
                onClick={onClose}
                className="p-1.5 rounded-lg text-[#667085] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F1F5F9] hover:bg-[#E2E8F0]/60 dark:hover:bg-[#243048] transition-colors cursor-pointer"
                aria-label="Close resume modal"
              >
                <X className="w-4 h-4" />
              </button>

            </div>
          </div>

          {/* =========================================================
              FEEDBACK
          ========================================================== */}
          {feedback && (
            <div className="px-5 py-2.5 bg-[#EAF3FF] dark:bg-[#121F30] border-b border-[#CFE3FF] dark:border-[#1E3048] text-[#172033] dark:text-[#F1F5F9] text-xs flex items-center justify-between no-print animate-fade-in">

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
              RESUME CONTENT
          ========================================================== */}
          <div className="p-6 sm:p-8 overflow-y-auto text-xs sm:text-sm resume-modal-scrollable">

            {/* =======================================================
                PERSONAL HEADER
            ======================================================== */}
            <div className="text-center border-b border-[#E2E8F0] dark:border-[#243048] pb-5">

              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#172033] dark:text-[#F1F5F9]">
                {resumeData.name}
              </h1>

              <p className="mt-1 text-sm sm:text-base font-semibold text-[#667085] dark:text-[#94A3B8]">
                {resumeData.role}
              </p>

              <div className="mt-2 flex flex-wrap justify-center gap-x-3 gap-y-1 text-[11px] sm:text-xs text-[#667085] dark:text-[#94A3B8] font-mono">

                <a
                  href={resumeData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#172033] dark:hover:text-[#F1F5F9] hover:underline"
                >
                  {resumeData.github}
                </a>

                <span>•</span>

                <a
                  href={resumeData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#172033] dark:hover:text-[#F1F5F9] hover:underline"
                >
                  {resumeData.linkedin}
                </a>

                <span>•</span>

                <a
                  href={resumeData.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#172033] dark:hover:text-[#F1F5F9] hover:underline"
                >
                  {resumeData.portfolio}
                </a>

                <span>•</span>

                <a
                  href={`mailto:${resumeData.email}`}
                  className="hover:text-[#172033] dark:hover:text-[#F1F5F9] hover:underline"
                >
                  {resumeData.email}
                </a>

                <span>•</span>

                <span>{resumeData.phone}</span>

              </div>
            </div>

            {/* =======================================================
                SUMMARY
            ======================================================== */}
            <section className="mt-6">

              <h2 className="font-serif text-base sm:text-lg font-semibold tracking-wide text-[#172033] dark:text-[#F1F5F9] border-b border-[#CBD5E1] dark:border-[#384966] pb-1">
                Summary
              </h2>

              <p className="mt-2 text-[#667085] dark:text-[#94A3B8] leading-relaxed text-sm">
                {resumeData.summary}
              </p>

            </section>

            {/* =======================================================
                TECHNICAL SKILLS
            ======================================================== */}
            <section className="mt-6">

              <h2 className="font-serif text-base sm:text-lg font-semibold tracking-wide text-[#172033] dark:text-[#F1F5F9] border-b border-[#CBD5E1] dark:border-[#384966] pb-1">
                Technical Skills
              </h2>

              <div className="mt-3 space-y-2">

                {resumeData.technicalSkills.map((skill) => (
                  <div
                    key={skill.category}
                    className="text-sm leading-relaxed"
                  >
                    <span className="font-bold text-[#172033] dark:text-[#F1F5F9]">
                      {skill.category}:
                    </span>{' '}

                    <span className="text-[#667085] dark:text-[#94A3B8]">
                      {skill.skills}
                    </span>
                  </div>
                ))}

              </div>
            </section>

            {/* =======================================================
                WORK EXPERIENCE
            ======================================================== */}
            <section className="mt-6">

              <h2 className="font-serif text-base sm:text-lg font-semibold tracking-wide text-[#172033] dark:text-[#F1F5F9] border-b border-[#CBD5E1] dark:border-[#384966] pb-1">
                Work Experience
              </h2>

              <div className="mt-4">

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">

                  <div>
                    <h3 className="font-bold text-[#172033] dark:text-[#F1F5F9]">
                      {resumeData.experience.role}
                    </h3>

                    <p className="font-medium text-[#667085] dark:text-[#94A3B8]">
                      {resumeData.experience.company} –{' '}
                      {resumeData.experience.location}
                    </p>
                  </div>

                  <span className="font-mono text-[11px] text-[#667085] dark:text-[#94A3B8] whitespace-nowrap">
                    {resumeData.experience.period}
                  </span>

                </div>

                <ul className="mt-3 list-disc list-outside ml-4 space-y-1.5 text-[#667085] dark:text-[#94A3B8] leading-relaxed">

                  {resumeData.experience.responsibilities.map(
                    (responsibility, index) => (
                      <li key={index}>
                        {responsibility}
                      </li>
                    )
                  )}

                </ul>

              </div>
            </section>

            {/* =======================================================
                PROJECTS
            ======================================================== */}
            <section className="mt-6">

              <h2 className="font-serif text-base sm:text-lg font-semibold tracking-wide text-[#172033] dark:text-[#F1F5F9] border-b border-[#CBD5E1] dark:border-[#384966] pb-1">
                Projects
              </h2>

              <div className="mt-4 space-y-6">

                {resumeData.projects.map((project, index) => (
                  <article key={project.title}>

                    {/* Project title */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">

                      <h3 className="font-bold text-[#172033] dark:text-[#F1F5F9]">
                        {project.title}
                      </h3>

                      <span className="font-mono text-[10px] text-[#667085] dark:text-[#94A3B8]">
                        PROJECT {String(index + 1).padStart(2, '0')}
                      </span>

                    </div>

                    {/* Technologies */}
                    <p className="mt-1 text-[11px] sm:text-xs text-[#667085] dark:text-[#94A3B8]">

                      <span className="font-semibold text-[#172033] dark:text-[#F1F5F9]">
                        Technologies:
                      </span>{' '}

                      {project.technologies}

                    </p>

                    {/* Project links */}
                    <div className="mt-1 flex flex-wrap gap-3 text-[11px]">

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#667085] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F1F5F9] hover:underline"
                      >
                        <Github className="w-3 h-3" />
                        Github
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#667085] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F1F5F9] hover:underline"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live Link
                      </a>

                    </div>

                    {/* Project bullets */}
                    <ul className="mt-2 list-disc list-outside ml-4 space-y-1.5 text-[#667085] dark:text-[#94A3B8] leading-relaxed">

                      {project.description.map((description, index) => (
                        <li key={index}>
                          {description}
                        </li>
                      ))}

                    </ul>

                  </article>
                ))}

              </div>
            </section>

            {/* =======================================================
                EDUCATION
            ======================================================== */}
            <section className="mt-6">

              <h2 className="font-serif text-base sm:text-lg font-semibold tracking-wide text-[#172033] dark:text-[#F1F5F9] border-b border-[#CBD5E1] dark:border-[#384966] pb-1">
                Education
              </h2>

              <div className="mt-3">

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">

                  <div>
                    <h3 className="font-bold text-[#172033] dark:text-[#F1F5F9]">
                      {resumeData.education.degree}
                    </h3>

                    <p className="text-[#667085] dark:text-[#94A3B8] font-medium">
                      {resumeData.education.institution}
                    </p>
                  </div>

                  <span className="font-mono text-[11px] text-[#667085] dark:text-[#94A3B8]">
                    {resumeData.education.period}
                  </span>

                </div>

                <p className="mt-1 text-[#667085] dark:text-[#94A3B8]">
                  CGPA: {resumeData.education.cgpa}
                </p>

              </div>
            </section>

            {/* =======================================================
                CERTIFICATION
            ======================================================== */}
            <section className="mt-6">

              <h2 className="font-serif text-base sm:text-lg font-semibold tracking-wide text-[#172033] dark:text-[#F1F5F9] border-b border-[#CBD5E1] dark:border-[#384966] pb-1">
                Certification
              </h2>

              <div className="mt-3">

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">

                  <div>
                    <h3 className="font-bold text-[#172033] dark:text-[#F1F5F9]">
                      {resumeData.certification.name}
                    </h3>

                    <p className="text-[#667085] dark:text-[#94A3B8]">
                      {resumeData.certification.organization}
                    </p>
                  </div>

                  <span className="font-mono text-[11px] text-[#667085] dark:text-[#94A3B8]">
                    {resumeData.certification.period}
                  </span>

                </div>

              </div>
            </section>

          </div>

          {/* =========================================================
              FOOTER
          ========================================================== */}
          <div className="p-4 bg-[#F8FAFC] dark:bg-[#0E141F] border-t border-[#E2E8F0] dark:border-[#243048] flex items-center justify-between gap-3 resume-modal-footer no-print">

            <span className="text-xs text-[#667085] dark:text-[#94A3B8] font-mono truncate">
              {resumeData.email}
            </span>

            <button
              id="resume-modal-footer-close-btn"
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg border border-[#E2E8F0] dark:border-[#243048] text-[#667085] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F1F5F9] text-xs font-medium hover:bg-white dark:hover:bg-[#131A26] transition-colors cursor-pointer"
            >
              Close
            </button>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};