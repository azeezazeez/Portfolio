import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    title: "B.Tech (ECE)",
    institution: "Vaagdevi Institute of Technology & Science",
    status: "Graduated",
    icon: GraduationCap,
    desc: "CGPA: 7.7/10"
  },

  {
    title: "Diploma (ECE)",
    institution: "Government Polytechnic College",
    status: "Graduated",
    icon: GraduationCap,
    desc: "CGPA: 6.9/10"
  },

  {
    title: "Matriculation",
    institution: "Scholar's High School",
    status: "Graduated",
    icon: GraduationCap,
    desc: "CGPA: 9.5/10"
  },
];

export default function Education() {
  return (
    <section id="education" className="py-8 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-accent mb-4">
            <BookOpen size={12} />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold uppercase"><span className="text-gradient">ACADEMICS</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="luminous-card group interactive"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-page-text/5 text-accent group-hover:bg-accent/10 transition-colors shrink-0">
                  <item.icon size={24} />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold uppercase">{item.title}</h3>
                    <span className="px-2 py-0.5 bg-page-text/5 rounded text-[8px] font-mono text-accent/60 border border-accent/10 uppercase tracking-widest">{item.status}</span>
                  </div>
                  <p className="text-page-text/40 text-[10px] font-bold uppercase tracking-widest mb-4">{item.institution}</p>
                  <p className="text-page-text/30 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
