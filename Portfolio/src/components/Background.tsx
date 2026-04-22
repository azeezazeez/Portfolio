import { motion } from "motion/react";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-page-bg overflow-hidden transition-colors duration-500">
      {/* Subtle Aurora Depth */}
      <div className="absolute inset-0 bg-radial-[at_center] from-page-text/[0.02] to-transparent opacity-30" />
      
      {/* Simplified Aurora Trails */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-accent/5 blur-[120px] rounded-full animate-aurora-subtle" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-500/5 blur-[100px] rounded-full animate-aurora-subtle [animation-delay:-7s]" />
      </div>

      {/* Very Light Grain */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
