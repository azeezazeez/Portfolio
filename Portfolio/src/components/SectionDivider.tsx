import { motion } from "motion/react";

export default function SectionDivider() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-4">
      <div className="relative flex items-center justify-center">
        {/* Main horizontal line */}
        <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-page-text/10 to-transparent" />
        
        {/* Animated accent line */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent origin-center"
        />

        {/* Center glowing dot with pulse */}
        <div className="relative">
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent/20 blur-md"
          />
          <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(0,255,136,0.8)] z-10" />
        </div>

        {/* Dynamic side markers */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-gradient-to-r from-accent/0 to-accent/20 rounded-full blur-[1px]" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-gradient-to-l from-accent/0 to-accent/20 rounded-full blur-[1px]" />
      </div>
    </div>
  );
}
