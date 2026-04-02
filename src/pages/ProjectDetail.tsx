import { useParams, Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { projects } from "@/data/portfolio";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  if (!project) {
    return (
      <PageTransition>
        <div className="pt-40 pb-32 text-center">
          <h1 className="font-heading text-4xl text-foreground mb-4">Project not found</h1>
          <Link to="/projects" className="text-primary text-sm tracking-[0.2em] uppercase">← Back to Projects</Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] md:h-screen overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/50" />
        </motion.div>
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 h-full flex flex-col items-center justify-center px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs tracking-[0.3em] uppercase text-primary mb-4"
          >
            {project.year}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-5xl md:text-8xl text-foreground"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-muted-foreground text-sm md:text-base mt-4 max-w-lg"
          >
            {project.subtitle}
          </motion.p>
        </motion.div>
      </section>

      {/* Description */}
      <section className="py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/projects"
            data-cursor-hover
            className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500 mb-12 inline-block"
          >
            ← All Projects
          </Link>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-muted-foreground leading-relaxed text-base md:text-lg"
          >
            {project.description}
          </motion.p>
        </div>
      </section>

      {/* Image series */}
      <section className="pb-32 px-8 md:px-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {project.images.map((img, i) => {
            const StoryImage = () => {
              const imgRef = useRef(null);
              const imgInView = useInView(imgRef, { once: true, margin: "-100px" });
              return (
                <motion.div
                  ref={imgRef}
                  initial={{ opacity: 0, y: 60 }}
                  animate={imgInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className={`overflow-hidden ${i % 2 === 0 ? "md:w-4/5" : "md:w-3/5 md:ml-auto"}`}
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={img}
                      alt={`${project.title} - ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                    />
                  </div>
                </motion.div>
              );
            };
            return <StoryImage key={i} />;
          })}
        </div>
      </section>
    </PageTransition>
  );
};

export default ProjectDetail;
