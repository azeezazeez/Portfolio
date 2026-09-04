import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-8 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Technical Summary */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Section Icon */}
              <div className="inline-flex items-center text-accent">
                <Sparkles size={12} />
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                TECHNICAL
                <br />
                <span className="text-gradient">SUMMARY</span>
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-page-text/50 font-medium leading-relaxed max-w-2xl">
                Java backend developer with hands-on experience building
                applications using Java and Spring Boot.
                <span className="text-page-text">
                  {" "}
                  Skilled in developing RESTful APIs
                </span>
                , applying OOP principles, and working with PostgreSQL
                databases. Familiar with microservices basics, Docker, and
                JWT-based authentication, eager to learn and contribute.
              </p>

              {/* Ethics & Toolkit */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-page-text/5">

                {/* Ethics */}
                <div className="space-y-2">
                  <h4 className="font-bold uppercase text-[10px] tracking-widest text-page-text/60">
                    Ethics
                  </h4>

                  <p className="text-page-text/40 text-xs font-medium leading-relaxed uppercase">
                    Security is priority. Scalability is expected.
                  </p>
                </div>

                {/* Toolkit */}
                <div className="space-y-2">
                  <h4 className="font-bold uppercase text-[10px] tracking-widest text-page-text/60">
                    Toolkit
                  </h4>

                  <p className="text-page-text/40 text-xs font-medium leading-relaxed uppercase">
                    Spring Boot, PostgreSQL, Docker.
                  </p>
                </div>

              </div>

              {/* Resume Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">

                {/* Download Resume */}
                <a
                  href="https://drive.google.com/uc?export=download&id=1xoBxHhTHM8Tz26tctA27aTHgrr8tqKG_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105 bg-page-text text-page-bg"
                >
                  Download Resume
                </a>

                {/* View Resume */}
                <a
                  href="https://drive.google.com/file/d/1xoBxHhTHM8Tz26tctA27aTHgrr8tqKG_/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105 border border-page-text/20"
                >
                  View Resume
                </a>

              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="luminous-card !p-1.5 rounded-2xl overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=1000&q=80"
                alt="Abdul Azeez - Profile"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
