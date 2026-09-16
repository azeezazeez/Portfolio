import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText } from 'lucide-react';
import { personalData } from '../data/personal';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['about', 'tech-stack', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3.5 sm:pt-4 transition-all duration-200">
      <nav
        id="main-nav"
        aria-label="Main Navigation"
        className={`max-w-5xl mx-auto rounded-xl border transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
          isScrolled
            ? 'bg-white/90 dark:bg-[#111722]/90 backdrop-blur-md border-[#E2E8F0] dark:border-[#243048] shadow-[0_4px_20px_rgba(23,32,51,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
            : 'bg-white/80 dark:bg-[#111722]/80 backdrop-blur-sm border-[#E2E8F0]/70 dark:border-[#243048]/70 shadow-[0_2px_10px_rgba(23,32,51,0.02)]'
        }`}
      >
        {/* Logo */}
        <a
          id="nav-logo"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2"
        >
          <span className="font-bold tracking-tight text-[#172033] dark:text-[#F1F5F9] text-base sm:text-lg">
            {personalData.name}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E88AA8] dark:bg-[#F49DB7] group-hover:bg-[#6EA8E8] dark:group-hover:bg-[#82BAF6] transition-colors" />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 sm:gap-1.5">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-[#172033] dark:text-[#F1F5F9] bg-[#FFF1F5] dark:bg-[#1E2738]'
                    : 'text-[#667085] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F1F5F9] hover:bg-[#F8FAFC] dark:hover:bg-[#161F2E]'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#E88AA8] dark:bg-[#F49DB7] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Light / Dark Theme Button */}
          <ThemeToggle />

          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#E2E8F0] dark:border-[#243048] bg-white dark:bg-[#131A26] text-[#172033] dark:text-[#F1F5F9] hover:border-[#CFE3FF] dark:hover:border-[#384968] hover:bg-[#EAF3FF]/40 dark:hover:bg-[#182335] transition-all duration-200 shadow-xs cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#6EA8E8] dark:text-[#82BAF6]" />
            RESUME
          </button>
        </div>

        {/* Mobile Hamburger & Theme Button */}
        <div className="flex md:hidden items-center gap-1.5">
          <ThemeToggle />

          <button
            id="nav-resume-btn-mobile"
            onClick={onOpenResume}
            className="text-xs font-semibold px-2.5 py-1 rounded-md border border-[#E2E8F0] dark:border-[#243048] bg-white dark:bg-[#131A26] text-[#172033] dark:text-[#F1F5F9] cursor-pointer"
          >
            RESUME
          </button>

          <button
            id="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg border border-[#E2E8F0] dark:border-[#243048] text-[#172033] dark:text-[#F1F5F9] hover:bg-[#F8FAFC] dark:hover:bg-[#161F2E] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-5xl mx-auto mt-2 bg-white/95 dark:bg-[#111722]/95 backdrop-blur-md rounded-xl border border-[#E2E8F0] dark:border-[#243048] shadow-[0_8px_30px_rgba(23,32,51,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] p-4 space-y-1"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#172033] dark:text-[#F1F5F9] bg-[#FFF1F5] dark:bg-[#1E2738]'
                      : 'text-[#667085] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F1F5F9] hover:bg-[#F8FAFC] dark:hover:bg-[#161F2E]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
