import { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "motion/react";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .trim()
      .match(
        /^[a-zA-Z0-9._%+-]+@gmail\.com$/
      );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Gmail Compose URL
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Contact Name: ${formData.name}\nContact Email: ${formData.email}\n\nMessage:\n${formData.message}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=azeezazeez7989@gmail.com&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
            <div className="luminous-card h-full">
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-page-text ml-2">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-page-text/5 border border-page-text/5 rounded-xl px-4 py-3 text-sm focus:border-accent outline-none transition-all placeholder:text-page-text/40" 
                      placeholder="Name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-page-text ml-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-page-text/5 border border-page-text/5 rounded-xl px-4 py-3 text-sm focus:border-accent outline-none transition-all placeholder:text-page-text/40" 
                      placeholder="Email" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-page-text ml-2">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-page-text/5 border border-page-text/5 rounded-xl px-4 py-4 text-sm focus:border-accent outline-none transition-all h-32 resize-none placeholder:text-page-text/40" 
                    placeholder="Message content" 
                  />
                </div>

                {error && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }}
                    className="text-red-400 text-[10px] font-bold uppercase tracking-widest ml-2"
                  >
                    {error}
                  </motion.div>
                )}

                <button
                  type="submit"
                  className="w-full py-4 bg-page-text text-page-bg font-bold rounded-xl hover:bg-accent transition-all flex items-center justify-center gap-3 interactive disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Send</span>
                  <span>Message</span>
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
