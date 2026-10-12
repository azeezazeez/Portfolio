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

              <a
                id="contact-instagram"
                href="https://www.instagram.com/__azeez__azeez/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile @__azeez__azeez"
                className="flex items-center gap-2.5 p-4 rounded-xl border border-[#E2E8F0] dark:border-[#243048] bg-white dark:bg-[#131A26] hover:border-[#CBD5E1] dark:hover:border-[#384966] hover:bg-[#F8FAFC] dark:hover:bg-[#192231] transition-all duration-200 group shadow-2xs"
              >
                <div className="w-8 h-8 rounded-lg bg-[#F8FAFC] dark:bg-[#0E141F] group-hover:bg-[#FFF1F5] dark:group-hover:bg-[#251A22] flex items-center justify-center text-[#172033] dark:text-[#F1F5F9] transition-colors">
                  <Instagram className="w-4 h-4 text-[#E88AA8] dark:text-[#F49DB7]" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-[#667085] dark:text-[#94A3B8] block">Social</span>
                  <span className="text-xs font-semibold text-[#172033] dark:text-[#F1F5F9] break-all">@__azeez__azeez</span>
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
                    placeholder="Abdul Azeez"
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
                    placeholder="azeez@example.com"
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
