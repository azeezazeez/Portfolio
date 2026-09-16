import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Briefcase, Heart, BookOpen, Compass, Layers } from 'lucide-react';
import { personalData } from '../data/personal';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Azeez"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#E2E8F0]/60 dark:border-[#243048]/60 relative transition-colors duration-200"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-2 mb-10">
          <span className="w-2 h-2 rounded-full bg-[#E88AA8] dark:bg-[#F49DB7]" />
          <h2 className="font-mono text-xs font-bold tracking-widest text-[#667085] dark:text-[#94A3B8] uppercase">
            ABOUT
          </h2>
          <div className="h-[1px] flex-1 bg-[#E2E8F0] dark:bg-[#243048]" />
        </div>

        {/* Clean Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Clean Visual / Personal Meta Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#172033] dark:text-[#F1F5F9]">
                ABOUT ME
              </h3>
              <p className="mt-2 text-sm text-[#667085] dark:text-[#94A3B8]">
                Engineering high-throughput systems with modern design sensibilities.
              </p>
            </div>

            {/* Personal Information Quick Facts Card */}
            <div className="rounded-xl border border-[#E2E8F0] dark:border-[#243048] bg-white dark:bg-[#131A26] p-5 sm:p-6 shadow-[0_2px_12px_rgba(23,32,51,0.02)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.3)] space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EAF3FF] dark:bg-[#152336] text-[#6EA8E8] dark:text-[#82BAF6] flex items-center justify-center shrink-0 border border-[#CFE3FF]/70 dark:border-[#203654]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#667085] dark:text-[#94A3B8] block">Location</span>
                  <span className="text-xs sm:text-sm font-semibold text-[#172033] dark:text-[#F1F5F9]">{personalData.location}</span>
                </div>
              </div>

              <div className="h-[1px] bg-[#F1F5F9] dark:bg-[#1E293B]" />

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FFF1F5] dark:bg-[#251A22] text-[#E88AA8] dark:text-[#F49DB7] flex items-center justify-center shrink-0 border border-[#F9DCE7]/70 dark:border-[#422533]">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#667085] dark:text-[#94A3B8] block">Role</span>
                  <span className="text-xs sm:text-sm font-semibold text-[#172033] dark:text-[#F1F5F9]">{personalData.role}</span>
                </div>
              </div>

              <div className="h-[1px] bg-[#F1F5F9] dark:bg-[#1E293B]" />

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F8FAFC] dark:bg-[#1A2332] text-[#172033] dark:text-[#F1F5F9] flex items-center justify-center shrink-0 border border-[#E2E8F0] dark:border-[#243048]">
                  <Heart className="w-4 h-4 text-[#E88AA8] dark:text-[#F49DB7]" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#667085] dark:text-[#94A3B8] block">Interests</span>
                  <span className="text-xs sm:text-sm font-semibold text-[#172033] dark:text-[#F1F5F9]">{personalData.interests}</span>
                </div>
              </div>

              <div className="h-[1px] bg-[#F1F5F9] dark:bg-[#1E293B]" />

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EAF3FF] dark:bg-[#152336] text-[#6EA8E8] dark:text-[#82BAF6] flex items-center justify-center shrink-0 border border-[#CFE3FF]/70 dark:border-[#203654]">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#667085] dark:text-[#94A3B8] block">Currently Learning</span>
                  <span className="text-xs sm:text-sm font-semibold text-[#172033] dark:text-[#F1F5F9]">{personalData.currentlyLearning}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-7 space-y-5"
          >
            {/* Primary Quote / Bio Intro */}
            <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-r from-[#FFF1F5]/70 via-white to-[#EAF3FF]/40 dark:from-[#251A22]/50 dark:via-[#131A26] dark:to-[#152336]/40 border border-[#F9DCE7]/70 dark:border-[#382635]">
              <p className="text-base sm:text-lg font-medium text-[#172033] dark:text-[#F1F5F9] leading-relaxed">
                "{personalData.bioDetailed[0]}"
              </p>
            </div>

            {/* Secondary Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#667085] dark:text-[#94A3B8] leading-relaxed font-normal">
              {personalData.bioDetailed.slice(1).map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Architectural Principles Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-lg bg-white dark:bg-[#131A26] border border-[#E2E8F0] dark:border-[#243048] shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-[#172033] dark:text-[#F1F5F9] mb-1">
                  <Layers className="w-3.5 h-3.5 text-[#6EA8E8] dark:text-[#82BAF6]" />
                  Resilient Backend First
                </div>
                <p className="text-xs text-[#667085] dark:text-[#94A3B8] leading-normal">
                  Stateless APIs, strictly modeled database transactions, and deterministic error boundaries.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white dark:bg-[#131A26] border border-[#E2E8F0] dark:border-[#243048] shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-[#172033] dark:text-[#F1F5F9] mb-1">
                  <Compass className="w-3.5 h-3.5 text-[#E88AA8] dark:text-[#F49DB7]" />
                  Thoughtful Frontend Craft
                </div>
                <p className="text-xs text-[#667085] dark:text-[#94A3B8] leading-normal">
                  Typography-driven, responsive layouts with restrained motion and zero layout thrashing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
