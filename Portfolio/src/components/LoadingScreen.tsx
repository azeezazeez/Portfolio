import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-[100] bg-page-bg flex items-center justify-center p-6"
        >
          <div className="max-w-md w-full space-y-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-block text-4xl md:text-6xl font-display font-bold tracking-tighter mb-4 uppercase">
                ABDUL AZEEZ<span className="text-accent"></span>
              </div>
              <div className="h-1 w-full bg-page-text/5 rounded-full overflow-hidden relative border border-page-text/10">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  className="absolute inset-y-0 left-0 bg-accent"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-mono text-xs text-page-text/30 space-y-1 h-32 overflow-hidden"
            >
              <div className="flex gap-2"><span>[INTRO]</span> <span className="text-accent">Loading...</span></div>
              <div className="flex gap-2"><span>[SUMMARY]</span> <span className="text-blue-400">Loading...</span></div>
              <div className="flex gap-2"><span>[PROJECTS]</span> <span className="text-page-text/50">Loading...</span></div>
              <div className="flex gap-2"><span>[TECHNICAL SKILLS]</span> <span className="text-accent">Loading... OK</span></div>
              <div className="flex gap-2"><span>[ABOUT]</span> <span className="text-page-text/50">Ready.</span></div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
