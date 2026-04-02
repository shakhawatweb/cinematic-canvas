import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <PageTransition>
      <section ref={ref} className="pt-32 pb-32 md:pt-40 md:pb-48 px-8 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-7xl text-foreground mb-6"
          >
            Let's <span className="italic text-gradient-gold">create</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground mb-16 text-sm"
          >
            Available for commissions, exhibitions, and creative collaborations.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-6 text-left"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-primary transition-colors duration-500 outline-none text-sm"
                />
              </div>
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-primary transition-colors duration-500 outline-none text-sm"
                />
              </div>
            </div>
            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Subject</label>
              <input
                type="text"
                required
                className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-primary transition-colors duration-500 outline-none text-sm"
              />
            </div>
            <div>
              <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Message</label>
              <textarea
                required
                rows={4}
                className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-primary transition-colors duration-500 outline-none resize-none text-sm"
              />
            </div>
            <div className="text-center pt-8">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-cursor-hover
                className="relative px-12 py-4 border border-primary text-primary text-xs tracking-[0.3em] uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-500 overflow-hidden"
              >
                {submitted ? "Sent ✓" : "Send Message"}
              </motion.button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="flex justify-center gap-10 mt-20"
          >
            {["Instagram", "Behance", "Vimeo"].map((social) => (
              <a
                key={social}
                href="#"
                data-cursor-hover
                className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
              >
                {social}
              </a>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
