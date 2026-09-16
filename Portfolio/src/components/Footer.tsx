import React from 'react';
import { personalData } from '../data/personal';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-[#E2E8F0] dark:border-[#243048] bg-white dark:bg-[#0E141F] py-14 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Brand and Role */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-[#172033] dark:text-[#F1F5F9]">
                {personalData.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E88AA8] dark:bg-[#F49DB7]" />
            </div>
            <p className="text-sm text-[#667085] dark:text-[#94A3B8] mt-1 font-normal">
              {personalData.role}
            </p>
          </div>

          {/* Navigation links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-5 sm:gap-7">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs sm:text-sm font-medium text-[#667085] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F1F5F9] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#667085] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F1F5F9] transition-colors"
            >
              GitHub
            </a>
            <span className="text-[#CBD5E1] dark:text-[#33435C]">•</span>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#667085] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F1F5F9] transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-[#CBD5E1] dark:text-[#33435C]">•</span>
            <a
              href={`mailto:${personalData.email}`}
              className="text-xs font-semibold text-[#667085] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F1F5F9] transition-colors"
            >
              Email
            </a>
            <span className="text-[#CBD5E1] dark:text-[#33435C]">•</span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top of page"
              className="p-1.5 rounded-lg border border-[#E2E8F0] dark:border-[#243048] text-[#667085] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F1F5F9] hover:border-[#CBD5E1] dark:hover:border-[#384966] transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Copyright and signature */}
        <div className="pt-8 border-t border-[#F1F5F9] dark:border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#667085] dark:text-[#94A3B8]">
          <p>© 2026 {personalData.name}. All rights reserved.</p>
          <p className="font-mono text-[11px] text-[#94A3B8] dark:text-[#64748B]">
            Designed with calm clarity & modern precision.
          </p>
        </div>
      </div>
    </footer>
  );
};
