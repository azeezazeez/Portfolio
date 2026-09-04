import { motion } from "motion/react";
import { Sparkles, Terminal } from "lucide-react";

const experiences = [
  {
    role: "Java Backend Developer",
    company: "V Cube Software Solutions",
    period: "2025—2026",
    summary: [
      "Built scalable backend services using Java 8 and Spring Boot following layered architecture",
      "Developed RESTful APIs for authentication, product, and order management modules",
      "Implemented role-based access control using JWT for secure API communication",
      "Optimized database queries and improved performance using collections and caching concepts",
      "Gained exposure to microservices and Docker in development workflows"
    ],
    nodes: ["Java", "Spring Boot", "SQL"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-8 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-accent mb-4">
            <Terminal size={12} />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold uppercase leading-[0.9]">
            <span className="text-gradient">Experience</span> <br />
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="luminous-card flex flex-col md:flex-row gap-10 group interactive"
            >
              <div className="md:w-1/4">
                <div className="text-[15px] font-bold uppercase tracking-widest text-accent mb-2">{exp.period}</div>
                <div className="text-[8px] font-mono text-page-text/200 uppercase tracking-widest">{exp.company}</div>
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-bold uppercase mb-4 group-hover:text-accent transition-colors">
                  {exp.role}
                </h3>
                <ul className="text-sm text-page-text/40 font-medium leading-relaxed mb-6 space-y-2">
                  {exp.summary.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 text-accent">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {exp.nodes.map(node => (
                    <div key={node} className="p-4 bg-page-text/5 rounded-xl border border-page-text/10 flex items-center justify-between group-hover:border-accent/40 transition-all hover:bg-page-text/10 shadow-sm">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-page-text/90 group-hover:text-page-text transition-colors">{node}</span>
                      <Sparkles size={10} className="text-page-text/20 group-hover:text-accent transform group-hover:scale-125 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
