import React from 'react';
import { motion } from 'motion/react';
import { experienceList } from '../data/experience';
import { ExperienceItem } from '../types';
import { MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#E2E8F0]/60 dark:border-[#243048]/60 relative transition-colors duration-200"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#E88AA8] dark:bg-[#F49DB7]" />
          <h2 className="font-mono text-xs font-bold tracking-widest text-[#667085] dark:text-[#94A3B8] uppercase">
            EXPERIENCE
          </h2>
          <div className="h-[1px] flex-1 bg-[#E2E8F0] dark:bg-[#243048]" />
        </div>

        <div className="max-w-2xl mb-14">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#172033] dark:text-[#F1F5F9]">
            Career & Trajectory
          </h3>
          <p className="mt-2 text-sm text-[#667085] dark:text-[#94A3B8]">
            Engineering experience focused on scalable backend architectures, high-impact APIs, and thoughtful user interfaces.
          </p>
        </div>

        {/* Editorial-style timeline layout with thin separators and generous whitespace */}
        <div className="space-y-12">
          {experienceList.map((exp: ExperienceItem, index: number) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative pb-10 border-b border-[#E2E8F0] dark:border-[#243048] last:border-b-0 last:pb-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                {/* Left meta information */}
                <div className="md:col-span-4 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        exp.isCurrent
                          ? 'bg-emerald-500 ring-4 ring-emerald-100 dark:ring-emerald-950/40'
                          : 'bg-[#CBD5E1] dark:bg-[#33435C]'
                      }`}
                    />
                    <span className="font-mono text-xs font-semibold text-[#667085] dark:text-[#94A3B8] tracking-wider">
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-[#172033] dark:text-[#F1F5F9] tracking-tight">
                    {exp.company}
                  </h4>

                  <div className="flex items-center gap-1.5 text-xs text-[#667085] dark:text-[#94A3B8]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Right content */}
                <div className="md:col-span-8 space-y-3">
                  <div className="flex items-center gap-2">
                    <h5 className="font-mono text-xs sm:text-sm font-bold tracking-wider text-[#172033] dark:text-[#F1F5F9] uppercase">
                      {exp.role}
                    </h5>
                    {exp.isCurrent && (
                      <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 px-2 py-0.5 rounded-full">
                        CURRENT ROLE
                      </span>
                    )}
                  </div>

                  <p className="text-sm sm:text-base text-[#172033] dark:text-[#F1F5F9] font-medium leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Bullet responsibilities */}
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm text-[#667085] dark:text-[#94A3B8]">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#CFE3FF] dark:bg-[#2A4365] mt-2 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies utilized */}
                  <div className="pt-3 flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F8FAFC] dark:bg-[#131A26] border border-[#E2E8F0] dark:border-[#243048] text-[#667085] dark:text-[#94A3B8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
