import { motion } from "motion/react";
import { Sparkles, ArrowDown } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-8 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-accent">
                <Sparkles size={12} />
              </div>

              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                TECHNICAL <br />
                <span className="text-gradient">SUMMARY</span>
              </h2>

              <p className="text-lg md:text-xl text-page-text/50 font-medium leading-relaxed max-w-2xl">
                Java backend developer Java backend developer with hands-on experience building applications using Java and Spring Boot.<span className="text-page-text">Skilled in developing RESTful APIs</span>.
                applying OOP principles, and working with PostgreSQL databases.
                Familiar with microservices basics, Docker, and JWT-based authentication eager to learn and contribute.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-page-text/5">
                <div className="space-y-2">
                  <h4 className="font-bold uppercase text-[10px] tracking-widest text-page-text/60">Ethics</h4>
                  <p className="text-page-text/40 text-xs font-medium leading-relaxed uppercase">
                    Security is priority. Scalability is expected.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold uppercase text-[10px] tracking-widest text-page-text/60">Toolkit</h4>
                  <p className="text-page-text/40 text-xs font-medium leading-relaxed uppercase">
                    Spring Boot, PostgreSQL, Docker.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="luminous-card !p-1.5 rounded-2xl overflow-hidden group"
            >
              <div className="aspect-[4/5] rounded-[0.8rem] overflow-hidden transition-all duration-1000">
                <img
                  src="https://lh3.googleusercontent.com/d/1Jy80FnV5GTjnUqvbTnz_jhlociI50UhO"
                  alt="Abdul Azeez - Profile"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
