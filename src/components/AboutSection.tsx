import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutPortrait from "@/assets/about-portrait.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-32 md:py-48 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -80, scale: 0.95 }}
          animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden"
        >
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={aboutPortrait}
              alt="Photographer portrait"
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
            />
          </div>
          <motion.div
            initial={{ scaleX: 1 }}
            animate={inView ? { scaleX: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-background origin-right"
          />
        </motion.div>

        {/* Text */}
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block"
          >
            The Artist
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl md:text-6xl text-foreground mb-8 leading-tight"
          >
            Capturing the
            <span className="text-gradient-gold block italic">unseen beauty</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base"
          >
            With over a decade behind the lens, I seek the extraordinary within the ordinary.
            My work explores the interplay of light and shadow, finding poetry in fleeting moments
            that most overlook.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-muted-foreground leading-relaxed text-sm md:text-base"
          >
            Exhibited in galleries across Paris, Tokyo, and New York. Featured in Vogue, National Geographic,
            and Aperture. My philosophy is simple: every frame is a conversation between light and emotion.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 60 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
            className="h-px bg-primary mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
