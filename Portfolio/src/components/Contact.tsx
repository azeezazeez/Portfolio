import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Copy, Check, ArrowRight } from 'lucide-react';
import { personalData } from '../data/personal';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Azeez"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white via-[#FFF1F5]/40 to-[#EAF3FF]/40 dark:from-[#0B0F17] dark:via-[#16131C] dark:to-[#0C1524] border-t border-[#E2E8F0]/60 dark:border-[#243048]/60 transition-colors duration-200"
    >
      {/* Soft atmospheric gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#F9DCE7]/40 via-transparent to-[#CFE3FF]/30 dark:from-[#241A28]/30 dark:to-[#122038]/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          {/* Section Heading Tag */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E88AA8] dark:bg-[#F49DB7]" />
            <span className="font-mono text-xs font-bold tracking-widest text-[#667085] dark:text-[#94A3B8] uppercase">
              CONTACT
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#172033] dark:text-[#F1F5F9]"
          >
            LET'S BUILD SOMETHING.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-[#667085] dark:text-[#94A3B8] leading-relaxed"
          >
            Have an idea, project, or opportunity? I'd love to hear from you.
          </motion.p>
        </div>

        {/* Two-part layout: Quick contacts on left, message box on right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Direct channels */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="md:col-span-5 space-y-4"
          >
            {/* Email Card with Copy button */}
            <div className="bg-white/90 dark:bg-[#131A26]/95 backdrop-blur-xs rounded-xl border border-[#E2E8F0] dark:border-[#243048] p-5 shadow-[0_2px_12px_rgba(23,32,51,0.02)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#667085] dark:text-[#94A3B8]">Email</span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-xs text-[#667085] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F1F5F9] transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${personalData.email}`}
                className="mt-2 block text-sm sm:text-base font-semibold text-[#172033] dark:text-[#F1F5F9] hover:text-[#6EA8E8] dark:hover:text-[#82BAF6] transition-colors break-all"
              >
                {personalData.email}
              </a>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-3">
              <a
                id="contact-github"
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-4 rounded-xl border border-[#E2E8F0] dark:border-[#243048] bg-white dark:bg-[#131A26] hover:border-[#CBD5E1] dark:hover:border-[#384966] hover:bg-[#F8FAFC] dark:hover:bg-[#192231] transition-all duration-200 group shadow-2xs"
              >
                <div className="w-8 h-8 rounded-lg bg-[#F8FAFC] dark:bg-[#0E141F] group-hover:bg-[#EAF3FF] dark:group-hover:bg-[#16253B] flex items-center justify-center text-[#172033] dark:text-[#F1F5F9] transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#667085] dark:text-[#94A3B8] block">Code</span>
                  <span className="text-xs font-semibold text-[#172033] dark:text-[#F1F5F9]">GitHub</span>
                </div>
              </a>

              <a
                id="contact-linkedin"
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-4 rounded-xl border border-[#E2E8F0] dark:border-[#243048] bg-white dark:bg-[#131A26] hover:border-[#CBD5E1] dark:hover:border-[#384966] hover:bg-[#F8FAFC] dark:hover:bg-[#192231] transition-all duration-200 group shadow-2xs"
              >
                <div className="w-8 h-8 rounded-lg bg-[#F8FAFC] dark:bg-[#0E141F] group-hover:bg-[#FFF1F5] dark:group-hover:bg-[#251A22] flex items-center justify-center text-[#172033] dark:text-[#F1F5F9] transition-colors">
                  <Linkedin className="w-4 h-4 text-[#6EA8E8] dark:text-[#82BAF6]" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#667085] dark:text-[#94A3B8] block">Network</span>
                  <span className="text-xs font-semibold text-[#172033] dark:text-[#F1F5F9]">LinkedIn</span>
                </div>
              </a>
            </div>

            {/* Availability Note */}
            <div className="p-4 rounded-xl border border-[#CFE3FF] dark:border-[#1E3048] bg-[#EAF3FF]/40 dark:bg-[#121E2E]/60 text-xs text-[#172033] dark:text-[#F1F5F9] flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1 shrink-0" />
              <p className="leading-relaxed">
                Currently open for full-time software engineering roles, backend contracts, and select advisory opportunities.
              </p>
            </div>
          </motion.div>

          {/* Clean Message Box */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="md:col-span-7 bg-white dark:bg-[#131A26] rounded-xl border border-[#E2E8F0] dark:border-[#243048] p-6 sm:p-7 shadow-[0_4px_20px_rgba(23,32,51,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-[#667085] dark:text-[#94A3B8] mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] dark:border-[#243048] bg-[#F8FAFC] dark:bg-[#0E141F] text-[#172033] dark:text-[#F1F5F9] placeholder:text-[#94A3B8] dark:placeholder:text-[#64748B] focus:bg-white dark:focus:bg-[#131A26] focus:outline-none focus:border-[#6EA8E8] dark:focus:border-[#82BAF6] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-[#667085] dark:text-[#94A3B8] mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] dark:border-[#243048] bg-[#F8FAFC] dark:bg-[#0E141F] text-[#172033] dark:text-[#F1F5F9] placeholder:text-[#94A3B8] dark:placeholder:text-[#64748B] focus:bg-white dark:focus:bg-[#131A26] focus:outline-none focus:border-[#6EA8E8] dark:focus:border-[#82BAF6] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-[#667085] dark:text-[#94A3B8] mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, team, or opportunity..."
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] dark:border-[#243048] bg-[#F8FAFC] dark:bg-[#0E141F] text-[#172033] dark:text-[#F1F5F9] placeholder:text-[#94A3B8] dark:placeholder:text-[#64748B] focus:bg-white dark:focus:bg-[#131A26] focus:outline-none focus:border-[#6EA8E8] dark:focus:border-[#82BAF6] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  id="contact-submit"
                  type="submit"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#172033] dark:bg-[#F1F5F9] text-white dark:text-[#0B0F17] text-xs sm:text-sm font-semibold tracking-wide hover:bg-[#22304d] dark:hover:bg-white hover:-translate-y-0.5 transition-all duration-200 shadow-xs cursor-pointer"
                >
                  <span>GET IN TOUCH</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>

                {formSubmitted && (
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    Opening your mail client...
                  </span>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};