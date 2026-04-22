import { motion } from "motion/react";
import { Mail, MessageSquare, Send, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-8 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          <div className="lg:col-span-12 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-accent mb-4">
                <MessageSquare size={12} />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold uppercase">Get In <span className="text-gradient">Touch.</span></h2>
            </motion.div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="luminous-card">
              <h3 className="text-xl font-bold mb-8">Channels</h3>
              <div className="space-y-6">
                <a href="mailto:azeezazeez7989@gmail.com" className="flex items-center gap-4 group interactive">
                  <div className="p-2 bg-page-text/5 rounded-xl group-hover:bg-[#D14836]/10 transition-colors">
                    <img src="https://img.icons8.com/color/48/gmail-new.png" className="w-6 h-6" alt="Gmail" />
                  </div>
                  <div>
                    <div className="text-[8px] font-mono text-page-text/150 uppercase tracking-widest leading-none mb-1">E-Mail</div>
                    <div className="text-sm font-bold group-hover:text-[#D14836] transition-colors">azeezazeez7989@gmail.com</div>
                  </div>
                </a>

                <a href="https://linkedin.com/in/achukatla-abdul-azeez" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group interactive">
                  <div className="p-2 bg-page-text/5 rounded-xl group-hover:bg-[#0A66C2]/10 transition-colors">
                    <img src="https://img.icons8.com/color/48/linkedin.png" className="w-6 h-6" alt="LinkedIn" />
                  </div>
                  <div>
                    <div className="text-[8px] font-mono text-page-text/150 uppercase tracking-widest leading-none mb-1">LinkedIn</div>
                    <div className="text-sm font-bold group-hover:text-[#0A66C2] transition-colors">Abdul Azeez</div>
                  </div>
                </a>

                <a href="https://github.com/azeezazeez" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group interactive">
                  <div className="p-2 bg-page-text/5 rounded-xl group-hover:bg-page-text/10 transition-colors">
                    <img src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000" className="w-6 h-6" alt="GitHub" />
                  </div>
                  <div>
                    <div className="text-[8px] font-mono text-page-text/150 uppercase tracking-widest leading-none mb-1">GitHub</div>
                    <div className="text-sm font-bold group-hover:text-page-text transition-colors">Abdul Azeez</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="luminous-card">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-page-text ml-2">Name</label>
                    <input type="text" className="w-full bg-page-text/5 border border-page-text/5 rounded-xl px-4 py-3 text-sm focus:border-accent outline-none transition-all placeholder:text-page-text/40" placeholder="Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-page-text ml-2">Email</label>
                    <input type="email" className="w-full bg-page-text/5 border border-page-text/5 rounded-xl px-4 py-3 text-sm focus:border-accent outline-none transition-all placeholder:text-page-text/40" placeholder="Email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-page-text ml-2">Message</label>
                  <textarea className="w-full bg-page-text/5 border border-page-text/5 rounded-xl px-4 py-4 text-sm focus:border-accent outline-none transition-all h-32 resize-none placeholder:text-page-text/40" placeholder="Message content" />
                </div>
                <a
                  href="mailto:azeezazeez7989@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-page-text text-page-bg font-bold rounded-xl hover:bg-accent transition-all flex items-center justify-center gap-3 interactive"
                >
                  <span>Send</span>
                  <span>Message</span>
                  <Send size={16} />
                </a>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
