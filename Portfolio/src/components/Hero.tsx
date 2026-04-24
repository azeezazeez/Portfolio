import { motion } from "motion/react";
import { ArrowRight, Sparkles, Cpu, Shield, FileText, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-8 px-6">
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

        {/* Simplified Main Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-8 luminous-card flex flex-col justify-center relative overflow-hidden group"
        >
          <div className="relative z-10 space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-page-text/5 border border-page-text/10 text-[9px] font-mono uppercase tracking-widest text-accent"
            >
              <Sparkles size={10} />
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-gradient">INTRO</span> <br />
            </h1>

            <p className="text-page-text/40 max-w-xl text-base md:text-lg font-medium leading-relaxed">
              Hi I am Abdul Azeez. I am Skilled in <span className="text-page-text">Building high-performance backend systems</span>. with Java and resilient microservice architectures.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="px-8 py-4 bg-page-text text-page-bg font-bold rounded-xl hover:bg-accent hover:text-page-bg transition-all flex items-center gap-2 interactive">
                See My Work <ArrowRight size={18} />
              </a>

              <div className="flex gap-2">
                <a
                  href="https://drive.google.com/uc?export=download&id=1hqa46j4XE3yuQXihDYZl3fLP73Q6rQJH"
                  target="_blank"
                  className="px-6 py-4 bg-page-text/5 border border-page-text/10 text-page-text font-bold rounded-xl hover:bg-page-text/10 transition-all interactive flex items-center gap-2"
                >
                  <FileText size={18} /> View Resume
                </a>
                <a
                 href="https://drive.google.com/uc?export=download&id=1hqa46j4XE3yuQXihDYZl3fLP73Q6rQJH"
                 download="Abdul Azeez Resume.pdf"
                 className="px-4 py-4 bg-page-text/5 border border-page-text/10 text-page-text font-bold rounded-xl hover:bg-page-text/10 transition-all interactive flex items-center gap-2"
                 title="Download Resume"
                      >
                 <Download size={18} /> Download Resume
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Simplified Side Panes */}
        <div className="lg:col-span-4 grid grid-cols-1 gap-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="luminous-card flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <div className="p-3 bg-accent/10 rounded-xl text-accent">
                <Cpu size={24} />
              </div>
              <div className="text-[10px] font-mono text-page-text/20"></div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Microservices</h3>
              <p className="text-[10px] text-page-text/30 uppercase tracking-wider">High-integrity distributed logic.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="luminous-card flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <div className="p-3 bg-page-text/5 rounded-xl text-page-text/40">
                <Shield size={24} />
              </div>
              <div className="text-[10px] font-mono text-page-text/20"></div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">JWT Security</h3>
              <p className="text-[10px] text-page-text/30 uppercase tracking-wider">Enterprise-grade protection.</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
