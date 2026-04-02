import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import aboutPortrait from "@/assets/about-portrait.jpg";

const milestones = [
  { year: "2015", title: "First Solo Exhibition", description: "Opened 'Luminance' at Galerie du Nord, Paris." },
  { year: "2017", title: "National Geographic Feature", description: "Selected for their annual photography issue." },
  { year: "2019", title: "Tokyo Art Fair", description: "Showcased 'Duality' series at Tokyo International Art Fair." },
  { year: "2021", title: "Aperture Award", description: "Received the Aperture Foundation Portfolio Prize." },
  { year: "2023", title: "New York Retrospective", description: "Retrospective at The Met Breuer, featuring 10 years of work." },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-50px" });

  return (
    <PageTransition>
      {/* Hero */}
      <section ref={ref} className="pt-32 pb-24 md:pt-40 md:pb-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
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

          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block"
            >
              The Artist
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-heading text-4xl md:text-6xl text-foreground mb-8 leading-tight"
            >
              Capturing the
              <span className="text-gradient-gold block italic">unseen beauty</span>
            </motion.h1>
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

      {/* Timeline */}
      <section ref={timelineRef} className="py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-heading text-3xl md:text-5xl text-foreground text-center mb-20"
          >
            Milestones
          </motion.h2>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 40 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className={`relative pl-12 md:pl-0 mb-16 last:mb-0 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"
                }`}
              >
                <div className={`absolute top-1 w-2 h-2 rounded-full bg-primary left-3 md:left-auto ${
                  i % 2 === 0 ? "md:right-[-5px]" : "md:left-[-5px]"
                }`} />
                <span className="text-xs tracking-[0.3em] text-primary">{m.year}</span>
                <h3 className="font-heading text-xl text-foreground mt-1 mb-2">{m.title}</h3>
                <p className="text-muted-foreground text-sm">{m.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
