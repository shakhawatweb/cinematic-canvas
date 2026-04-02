import PageTransition from "@/components/PageTransition";
import HeroSection from "@/components/HeroSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { categories, galleryImages, projects } from "@/data/portfolio";

const HomePreviewGallery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const preview = galleryImages.slice(0, 4);

  return (
    <section ref={ref} className="py-32 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block text-center"
        >
          Portfolio
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-4xl md:text-7xl text-foreground text-center mb-16"
        >
          Selected <span className="italic text-gradient-gold">Works</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {preview.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="overflow-hidden group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/portfolio"
            data-cursor-hover
            className="text-xs tracking-[0.3em] uppercase text-primary border-b border-primary pb-1 hover:text-foreground hover:border-foreground transition-colors duration-500"
          >
            View All Works
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const HomeProjectsPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-32 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block text-center"
        >
          Featured
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-4xl md:text-7xl text-foreground text-center mb-16"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
            >
              <Link to={`/projects/${project.slug}`} className="group block" data-cursor-hover>
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                  />
                </div>
                <span className="text-xs tracking-[0.3em] text-primary">{project.year}</span>
                <h3 className="font-heading text-2xl text-foreground mt-1 group-hover:text-primary transition-colors duration-500">
                  {project.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/projects"
            data-cursor-hover
            className="text-xs tracking-[0.3em] uppercase text-primary border-b border-primary pb-1 hover:text-foreground hover:border-foreground transition-colors duration-500"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const Index = () => (
  <PageTransition>
    <HeroSection />
    <HomePreviewGallery />
    <HomeProjectsPreview />
  </PageTransition>
);

export default Index;
