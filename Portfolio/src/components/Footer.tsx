import React from 'react';
import { personalData } from '../data/personal';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      className="
        border-t
        border-[#E2E8F0]
        bg-white
        px-4
        py-14
        transition-colors
        duration-200
        dark:border-[#243048]
        dark:bg-[#0E141F]
        sm:px-6
        sm:py-16
        lg:px-8
      "
    >
      <div className="mx-auto max-w-5xl space-y-10">

        {/* =====================================================
            TOP FOOTER CONTENT
            ===================================================== */}

        <div
          className="
            flex
            flex-col
            justify-between
            gap-8
            md:flex-row
            md:items-center
          "
        >
          {/* Brand and Role */}

          <div>
            <div className="flex items-center gap-2">
              <span
                className="
                  text-xl
                  font-bold
                  tracking-tight
                  text-[#172033]
                  dark:text-[#F1F5F9]
                "
              >
                {personalData.name}
              </span>

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#E88AA8]
                  dark:bg-[#F49DB7]
                "
              />
            </div>

            <p
              className="
                mt-1
                text-sm
                font-normal
                text-[#667085]
                dark:text-[#94A3B8]
              "
            >
              {personalData.role}
            </p>
          </div>

          {/* Navigation links */}

          <nav
            aria-label="Footer Navigation"
            className="
              flex
              flex-wrap
              items-center
              gap-5
              sm:gap-7
            "
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  text-xs
                  font-medium
                  text-[#667085]
                  transition-colors
                  hover:text-[#172033]
                  dark:text-[#94A3B8]
                  dark:hover:text-[#F1F5F9]
                  sm:text-sm
                "
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* ===================================================
              SOCIAL LINKS
              =================================================== */}

          <div className="flex items-center gap-4">

            {/* GitHub */}

            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                text-xs
                font-semibold
                text-[#667085]
                transition-colors
                hover:text-[#172033]
                focus:outline-none
                focus-visible:text-[#172033]
                dark:text-[#94A3B8]
                dark:hover:text-[#F1F5F9]
                dark:focus-visible:text-[#F1F5F9]
              "
            >
              GitHub
            </a>

            {/* GitHub / LinkedIn separator */}

            <span
              aria-hidden="true"
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#CBD5E1]
                transition-all
                duration-200
                dark:bg-[#33435C]
                peer-hover:bg-emerald-500
              "
            />

            {/* LinkedIn */}

            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                text-xs
                font-semibold
                text-[#667085]
                transition-colors
                hover:text-[#172033]
                focus:outline-none
                focus-visible:text-[#172033]
                dark:text-[#94A3B8]
                dark:hover:text-[#F1F5F9]
                dark:focus-visible:text-[#F1F5F9]
              "
            >
              LinkedIn
            </a>

            {/* LinkedIn / Email separator */}

            <span
              aria-hidden="true"
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#CBD5E1]
                transition-all
                duration-200
                dark:bg-[#33435C]
              "
            />

            {/* Email */}

            <a
              href={`mailto:${personalData.email}`}
              className="
                group
                text-xs
                font-semibold
                text-[#667085]
                transition-colors
                hover:text-[#172033]
                focus:outline-none
                focus-visible:text-[#172033]
                dark:text-[#94A3B8]
                dark:hover:text-[#F1F5F9]
                dark:focus-visible:text-[#F1F5F9]
              "
            >
              Email
            </a>

            {/* Email / Back to top separator */}

            <span
              aria-hidden="true"
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#CBD5E1]
                dark:bg-[#33435C]
              "
            />

            {/* Back to top */}

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top of page"
              className="
                cursor-pointer
                rounded-lg
                border
                border-[#E2E8F0]
                p-1.5
                text-[#667085]
                transition-all
                duration-200
                hover:border-[#CBD5E1]
                hover:text-[#172033]
                dark:border-[#243048]
                dark:text-[#94A3B8]
                dark:hover:border-[#384966]
                dark:hover:text-[#F1F5F9]
              "
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* =====================================================
            COPYRIGHT
            ===================================================== */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-[#F1F5F9]
            pt-8
            text-xs
            text-[#667085]
            dark:border-[#1E293B]
            dark:text-[#94A3B8]
            sm:flex-row
          "
        >
          <p>
            © 2026 {personalData.name}. All rights reserved.
          </p>

          <p
            className="
              font-mono
              text-[11px]
              text-[#94A3B8]
              dark:text-[#64748B]
            "
          >
            Designed with calm clarity & modern precision.
          </p>
        </div>
      </div>
    </footer>
  );
};
