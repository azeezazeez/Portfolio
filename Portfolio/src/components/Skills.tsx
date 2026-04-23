import { motion } from "motion/react";
import { Cpu, Database, Wrench, Code } from "lucide-react";

const mainSkills = [
  {
    category: "Languages & Frameworks",
    items: ["Java", "JavaScript", "Spring", "Spring Boot", "React"],
    icon: Cpu,
  },
  {
    category: "Data Bases",
    items: ["PostgreSQL", "MySQL", "Oracle"],
    icon: Database,
  },
  {
    category: "System Tools",
    items: ["Docker", "Render", "Vercel", "Git", "GitHub"],
    icon: Wrench,
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-8 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-accent mb-4">
              <Code size={12} />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold uppercase leading-[0.9]">
              TECH <br />
              <span className="text-gradient">STACK</span>
            </h2>
          </motion.div>
          <div className="max-w-xs text-xs font-medium uppercase tracking-widest leading-loose text-page-text/30">
            Low-latency architectures engineered for resilience.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mainSkills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="luminous-card group interactive"
            >
              <div className="p-4 rounded-xl bg-page-text/5 text-accent w-fit mb-8 group-hover:bg-accent/10 transition-colors">
                <skill.icon size={28} />
              </div>

              <h3 className="text-xl font-bold uppercase mb-8 group-hover:text-page-text transition-colors">{skill.category}</h3>

              <div className="space-y-4">
                {skill.items.map(item => (
                  <div key={item} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-widest text-page-text/40 group-hover:text-page-text/70 transition-colors">
                      <span>{item}</span>
                      <span className="text-accent/60">80%</span>
                    </div>
                    <div className="h-[2px] bg-page-text/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "95%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
