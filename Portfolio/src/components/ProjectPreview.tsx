import React from 'react';
import { ProjectItem } from '../types';
import { Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface ProjectPreviewProps {
  project: ProjectItem;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ project }) => {
  const { preview, theme } = project;

  // Background style based on theme
  const bgClasses = {
    rose: 'bg-gradient-to-br from-[#FFF1F5] via-[#FFFFFF] to-[#F9DCE7]/40 dark:from-[#201520] dark:via-[#131A26] dark:to-[#221624] border-[#F9DCE7]/80 dark:border-[#3E2535]',
    blue: 'bg-gradient-to-br from-[#EAF3FF] via-[#FFFFFF] to-[#CFE3FF]/40 dark:from-[#101C2B] dark:via-[#131A26] dark:to-[#122236] border-[#CFE3FF]/80 dark:border-[#203654]',
    white: 'bg-gradient-to-br from-[#F8FAFC] via-[#FFFFFF] to-[#E2E8F0]/40 dark:from-[#111722] dark:via-[#131A26] dark:to-[#0F1622] border-[#E2E8F0] dark:border-[#243048]'
  }[theme];

  return (
    <div className={`w-full h-64 md:h-72 rounded-t-xl md:rounded-l-xl md:rounded-tr-none border-b md:border-b-0 md:border-r ${bgClasses} p-4 sm:p-5 flex flex-col justify-between overflow-hidden relative select-none transition-all duration-300`}>
      {/* Top Browser Bar / Status Bar */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0] dark:bg-[#253347]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0] dark:bg-[#253347]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0] dark:bg-[#253347]" />
          <span className="ml-2 text-[11px] font-mono tracking-tight text-[#667085] dark:text-[#94A3B8] bg-white/80 dark:bg-[#111722]/90 px-2 py-0.5 rounded border border-[#E2E8F0]/70 dark:border-[#243048]">
            {project.title.toLowerCase().replace(/\s+/g, '-')}.azeez.dev
          </span>
        </div>
        <span className="text-[11px] font-medium text-[#172033] dark:text-[#F1F5F9] bg-white/90 dark:bg-[#111722]/90 shadow-xs px-2.5 py-0.5 rounded-full border border-[#E2E8F0]/80 dark:border-[#243048] flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {preview.badge}
        </span>
      </div>

      {/* Main Preview Content */}
      <div className="my-auto z-10 pt-2">
        {preview.type === 'ai-chat' && (
          <div className="space-y-2.5 text-xs">
            {/* User message */}
            <div className="flex justify-end">
              <div className="bg-white/95 dark:bg-[#1A2332] text-[#172033] dark:text-[#F1F5F9] border border-[#F9DCE7] dark:border-[#382635] rounded-lg rounded-tr-xs px-3 py-2 max-w-[85%] shadow-xs">
                <p className="font-normal text-[11.5px] leading-relaxed">
                  Analyze thread concurrency in Spring Boot request filters.
                </p>
              </div>
            </div>

            {/* AI Assistant response */}
            <div className="flex items-start gap-2 max-w-[92%]">
              <div className="w-6 h-6 rounded-md bg-[#FFF1F5] dark:bg-[#251A22] border border-[#F9DCE7] dark:border-[#422533] flex items-center justify-center shrink-0 text-[#E88AA8] dark:text-[#F49DB7] mt-0.5">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div className="bg-white/95 dark:bg-[#151D2A] border border-[#E2E8F0] dark:border-[#243048] rounded-lg rounded-tl-xs p-2.5 shadow-xs w-full">
                <div className="flex items-center justify-between pb-1 mb-1 border-b border-[#F8FAFC] dark:border-[#1E293B]">
                  <span className="text-[10px] font-mono text-[#667085] dark:text-[#94A3B8]">Gemini Flash 2.5 • 42ms TTFT</span>
                  <span className="text-[9px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.2 rounded">Stream Active</span>
                </div>
                <p className="text-[11.5px] text-[#172033] dark:text-[#F1F5F9] leading-relaxed">
                  ThreadLocals should be strictly cleared in a <code className="bg-[#FFF1F5] dark:bg-[#281822] text-[#E88AA8] dark:text-[#F49DB7] px-1 rounded text-[10.5px]">finally</code> block or replaced with Virtual Threads to avoid leakages under high pool reuse.
                </p>
              </div>
            </div>
          </div>
        )}

        {preview.type === 'task-engine' && (
          <div className="space-y-2 text-xs">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white/95 dark:bg-[#151D2A] border border-[#CFE3FF] dark:border-[#1E3048] rounded-lg p-2 shadow-xs">
                <span className="text-[10px] text-[#667085] dark:text-[#94A3B8] block">Queue Status</span>
                <span className="text-xs font-semibold text-[#172033] dark:text-[#F1F5F9] flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Healthy
                </span>
              </div>
              <div className="bg-white/95 dark:bg-[#151D2A] border border-[#CFE3FF] dark:border-[#1E3048] rounded-lg p-2 shadow-xs">
                <span className="text-[10px] text-[#667085] dark:text-[#94A3B8] block">Worker Pool</span>
                <span className="text-xs font-semibold text-[#172033] dark:text-[#F1F5F9] mt-0.5 block">8 / 8 Active</span>
              </div>
              <div className="bg-white/95 dark:bg-[#151D2A] border border-[#CFE3FF] dark:border-[#1E3048] rounded-lg p-2 shadow-xs">
                <span className="text-[10px] text-[#667085] dark:text-[#94A3B8] block">Throughput</span>
                <span className="text-xs font-semibold text-[#6EA8E8] dark:text-[#82BAF6] mt-0.5 block">10,420/s</span>
              </div>
            </div>

            <div className="bg-white/95 dark:bg-[#151D2A] border border-[#E2E8F0] dark:border-[#243048] rounded-lg p-2.5 shadow-xs font-mono text-[10.5px] space-y-1">
              <div className="flex items-center justify-between text-[#667085] dark:text-[#94A3B8]">
                <span>JOB_ID: #8492-AC</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">DISPATCHED (0ms)</span>
              </div>
              <div className="flex items-center justify-between text-[#172033] dark:text-[#F1F5F9]">
                <span className="truncate">Pipeline: Ingest → SQL Batch → PubSub</span>
                <span className="text-[#6EA8E8] dark:text-[#82BAF6]">Ack: OK</span>
              </div>
            </div>
          </div>
        )}

        {preview.type === 'dashboard' && (
          <div className="space-y-2 text-xs">
            <div className="bg-white/95 dark:bg-[#151D2A] border border-[#E2E8F0] dark:border-[#243048] rounded-lg p-2.5 shadow-xs">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-medium text-[#667085] dark:text-[#94A3B8]">API Response Latency (P95)</span>
                <span className="text-xs font-bold text-[#172033] dark:text-[#F1F5F9]">32.4 ms</span>
              </div>
              {/* Minimal Clean SVG Chart */}
              <div className="h-14 w-full flex items-end">
                <svg viewBox="0 0 240 50" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6EA8E8" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#6EA8E8" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 35 Q 30 38, 60 25 T 120 20 T 180 12 T 240 16 L 240 50 L 0 50 Z"
                    fill="url(#chartGrad)"
                  />
                  <path
                    d="M 0 35 Q 30 38, 60 25 T 120 20 T 180 12 T 240 16"
                    fill="none"
                    stroke="#6EA8E8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="180" cy="12" r="3.5" fill="#FFFFFF" stroke="#6EA8E8" strokeWidth="2" />
                </svg>
              </div>
              <div className="flex items-center justify-between text-[9.5px] font-mono text-[#667085] dark:text-[#94A3B8] mt-1 pt-1 border-t border-[#F8FAFC] dark:border-[#1E293B]">
                <span>00:00</span>
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
                <span className="text-[#172033] dark:text-[#F1F5F9] font-medium">Now</span>
              </div>
            </div>
          </div>
        )}

        {preview.type === 'api-search' && (
          <div className="bg-white/95 dark:bg-[#151D2A] border border-[#F9DCE7] dark:border-[#382635] rounded-lg p-2.5 shadow-xs font-mono text-[10.5px]">
            <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#F8FAFC] dark:border-[#1E293B]">
              <div className="flex items-center gap-1.5 text-[#172033] dark:text-[#F1F5F9]">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.5 rounded text-[10px]">POST</span>
                <span className="text-[#667085] dark:text-[#94A3B8]">/v1/embeddings/query</span>
              </div>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">200 OK (14ms)</span>
            </div>
            <div className="space-y-0.5 text-[#172033] dark:text-[#F1F5F9]">
              <p className="text-[#667085] dark:text-[#94A3B8] text-[10px]">&#123; "similarity_top_k": 3, "strategy": "hybrid" &#125;</p>
              <div className="bg-[#FFF1F5]/60 dark:bg-[#221622] rounded p-1.5 mt-1 border border-[#F9DCE7]/50 dark:border-[#382332] text-[10px]">
                <p className="text-[#E88AA8] dark:text-[#F49DB7] font-medium">1. doc_spring_concurrency.md (score: 0.948)</p>
                <p className="text-[#667085] dark:text-[#94A3B8] truncate">"Optimizing memory allocation in high-traffic workers..."</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Metric Bar */}
      <div className="flex items-center justify-between z-10 pt-2 border-t border-black/5 dark:border-white/10 text-[11px] text-[#667085] dark:text-[#94A3B8]">
        <span>{project.metrics || 'Production Tested'}</span>
        <span className="text-[#172033] dark:text-[#F1F5F9] font-medium flex items-center gap-0.5 group-hover:text-[#6EA8E8] dark:group-hover:text-[#82BAF6] transition-colors">
          View Details
          <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>

      {/* Subtle Atmospheric Gradient Blobs in corner */}
      <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/40 dark:bg-[#202E42]/20 blur-2xl pointer-events-none" />
    </div>
  );
};
