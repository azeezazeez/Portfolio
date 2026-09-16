import React, { useState } from 'react';
import { motion } from 'motion/react';
import { skillCategories } from '../data/skills';
import { SkillItem } from '../types';
import { Sparkles, Terminal, Code, Cpu, Layers, Wrench } from 'lucide-react';

export const TechStack: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // Category visual accents
  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'languages':
        return <Code className="w-4 h-4 text-[#6EA8E8] dark:text-[#82BAF6]" />;
      case 'backend':
        return <Layers className="w-4 h-4 text-[#E88AA8] dark:text-[#F49DB7]" />;
      case 'frontend':
        return <Cpu className="w-4 h-4 text-[#6EA8E8] dark:text-[#82BAF6]" />;
      case 'tools':
        return <Wrench className="w-4 h-4 text-[#667085] dark:text-[#94A3B8]" />;
      case 'ai':
        return <Sparkles className="w-4 h-4 text-[#E88AA8] dark:text-[#F49DB7]" />;
      default:
        return <Terminal className="w-4 h-4 text-[#172033] dark:text-[#F1F5F9]" />;
    }
  };

  return (
    <section
      id="tech-stack"
      aria-label="Technology Stack"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#E2E8F0]/60 dark:border-[#243048]/60 relative bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] dark:from-[#0B0F17] dark:via-[#0F1420] dark:to-[#0B0F17] transition-colors duration-200"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#6EA8E8] dark:bg-[#82BAF6]" />
          <h2 className="font-mono text-xs font-bold tracking-widest text-[#667085] dark:text-[#94A3B8] uppercase">
            TECH STACK
          </h2>
          <div className="h-[1px] flex-1 bg-[#E2E8F0] dark:bg-[#243048]" />
        </div>

        <div className="max-w-2xl mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#172033] dark:text-[#F1F5F9]">
            Tools & Technologies
          </h3>
          <p className="mt-2 text-sm text-[#667085] dark:text-[#94A3B8]">
            A purposeful toolkit refined through building production backends, modern web applications, and low-latency AI pipelines.
          </p>
        </div>

        {/* Categorized Layout */}
        <div className="space-y-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: catIdx * 0.08 }}
              className="rounded-xl border border-[#E2E8F0] dark:border-[#243048] bg-white dark:bg-[#131A26] p-5 sm:p-6 shadow-[0_2px_8px_rgba(23,32,51,0.02)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-4 pb-3 border-b border-[#F1F5F9] dark:border-[#1E293B]">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-[#F8FAFC] dark:bg-[#0E141F] border border-[#E2E8F0] dark:border-[#243048] flex items-center justify-center">
                    {getCategoryIcon(category.id)}
                  </div>
                  <h4 className="font-mono text-xs sm:text-sm font-bold tracking-wider text-[#172033] dark:text-[#F1F5F9]">
                    {category.title}
                  </h4>
                </div>
                <p className="text-xs text-[#667085] dark:text-[#94A3B8] font-normal">
                  {category.description}
                </p>
              </div>

              {/* Compact, clean items with subtle hover */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                {category.skills.map((skill: SkillItem) => {
                  const isHovered = activeTooltip === skill.name;
                  const isAiOrBackend = category.id === 'ai' || category.id === 'backend';

                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setActiveTooltip(skill.name)}
                      onMouseLeave={() => setActiveTooltip(null)}
                      className={`group relative p-3 rounded-lg border transition-all duration-200 cursor-default flex flex-col justify-between ${
                        isHovered
                          ? isAiOrBackend
                            ? 'bg-[#FFF1F5] dark:bg-[#251A22] border-[#F9DCE7] dark:border-[#422533] -translate-y-0.5 shadow-xs'
                            : 'bg-[#EAF3FF] dark:bg-[#152336] border-[#CFE3FF] dark:border-[#203654] -translate-y-0.5 shadow-xs'
                          : 'bg-[#F8FAFC] dark:bg-[#0E141F] border-[#E2E8F0]/70 dark:border-[#1E293B] hover:bg-white dark:hover:bg-[#162030]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-semibold text-[#172033] dark:text-[#F1F5F9] tracking-tight">
                          {skill.name}
                        </span>
                        <span
                          className={`w-1.5 h-1.5 rounded-full transition-colors ${
                            isHovered
                              ? isAiOrBackend
                                ? 'bg-[#E88AA8] dark:bg-[#F49DB7]'
                                : 'bg-[#6EA8E8] dark:bg-[#82BAF6]'
                              : 'bg-[#CBD5E1] dark:bg-[#33435C]'
                          }`}
                        />
                      </div>

                      <p className="mt-1.5 text-[11px] text-[#667085] dark:text-[#94A3B8] line-clamp-2 leading-tight">
                        {skill.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
