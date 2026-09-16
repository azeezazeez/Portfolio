import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, Terminal, Code2 } from 'lucide-react';
import { personalData } from '../data/personal';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative min-h-[90vh] flex flex-col justify-center pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Soft atmospheric gradients - restrained & elegant */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-[#FFF1F5]/80 via-[#F9DCE7]/40 to-[#CFE3FF]/30 dark:from-[#241A28]/40 dark:via-[#1E2338]/35 dark:to-[#10233D]/30 rounded-full blur-3xl -z-10 pointer-events-none opacity-80 transition-colors duration-300" />
      <div className="absolute top-1/3 right-1/4 w-[320px] h-[260px] bg-gradient-to-bl from-[#EAF3FF]/70 to-[#FFF1F5]/40 dark:from-[#13233B]/40 dark:to-[#221626]/30 rounded-full blur-3xl -z-10 pointer-events-none opacity-70 transition-colors duration-300" />

      {/* Subtle geometric dot grid pattern */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.35] dark:opacity-[0.20] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        {/* Availability indicator & Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#131A26]/90 border border-[#E2E8F0] dark:border-[#243048] shadow-[0_2px_8px_rgba(23,32,51,0.03)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] text-xs font-medium text-[#172033] dark:text-[#F1F5F9] mb-6"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-semibold text-[11px] tracking-wide text-[#667085] dark:text-[#94A3B8]">
            {personalData.availability.text}
          </span>
          <span className="w-[1px] h-3 bg-[#E2E8F0] dark:bg-[#243048]" />
          <span className="font-mono text-[11px] text-[#172033] dark:text-[#F1F5F9]">
            {personalData.badge}
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#172033] dark:text-[#F1F5F9] leading-[1.12] sm:leading-[1.1] max-w-3xl"
        >
          <span>{personalData.headlineMain}</span>
          <br />
          <span className="text-[#667085] dark:text-[#94A3B8] font-semibold">{personalData.headlineSub}</span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 text-base sm:text-lg md:text-xl text-[#667085] dark:text-[#94A3B8] max-w-2xl leading-relaxed font-normal"
        >
          {personalData.bioIntro}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <button
            id="hero-view-work"
            onClick={scrollToProjects}
            className="px-6 py-3 rounded-lg bg-[#172033] dark:bg-[#F1F5F9] text-white dark:text-[#0B0F17] text-xs sm:text-sm font-semibold tracking-wide hover:bg-[#202c46] dark:hover:bg-white hover:-translate-y-0.5 transition-all duration-200 shadow-xs flex items-center gap-2 cursor-pointer"
          >
            VIEW MY WORK
            <ArrowDown className="w-4 h-4" />
          </button>

          <button
            id="hero-get-in-touch"
            onClick={scrollToContact}
            className="px-6 py-3 rounded-lg bg-white dark:bg-[#131A26] border border-[#E2E8F0] dark:border-[#243048] text-[#172033] dark:text-[#F1F5F9] text-xs sm:text-sm font-semibold tracking-wide hover:bg-[#FFF1F5] dark:hover:bg-[#1C2638] hover:border-[#F9DCE7] dark:hover:border-[#33435C] hover:-translate-y-0.5 transition-all duration-200 shadow-xs cursor-pointer"
          >
            GET IN TOUCH
          </button>
        </motion.div>

        {/* Subtle decorative architectural visual element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="mt-14 w-full max-w-2xl bg-white/70 dark:bg-[#131A26]/85 backdrop-blur-xs border border-[#E2E8F0]/80 dark:border-[#243048] rounded-xl p-4 shadow-[0_2px_14px_rgba(23,32,51,0.03)] dark:shadow-[0_2px_14px_rgba(0,0,0,0.3)] flex flex-wrap items-center justify-between gap-4 text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#EAF3FF] dark:bg-[#152336] text-[#6EA8E8] dark:text-[#82BAF6] flex items-center justify-center border border-[#CFE3FF] dark:border-[#203654]">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#172033] dark:text-[#F1F5F9]">Core Specialization</p>
              <p className="text-[11px] text-[#667085] dark:text-[#94A3B8]">Java • Spring Boot • React • TypeScript</p>
            </div>
          </div>

          <div className="h-6 w-[1px] bg-[#E2E8F0] dark:bg-[#243048] hidden sm:block" />

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#FFF1F5] dark:bg-[#251A22] text-[#E88AA8] dark:text-[#F49DB7] flex items-center justify-center border border-[#F9DCE7] dark:border-[#422533]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#172033] dark:text-[#F1F5F9]">AI & Systems</p>
              <p className="text-[11px] text-[#667085] dark:text-[#94A3B8]">Gemini & Groq APIs • Microservices</p>
            </div>
          </div>

          <div className="h-6 w-[1px] bg-[#E2E8F0] dark:bg-[#243048] hidden sm:block" />

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#F8FAFC] dark:bg-[#1A2332] text-[#172033] dark:text-[#F1F5F9] flex items-center justify-center border border-[#E2E8F0] dark:border-[#243048]">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#172033] dark:text-[#F1F5F9]">Design Philosophy</p>
              <p className="text-[11px] text-[#667085] dark:text-[#94A3B8]">Reliable • Clean • High Usability</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
