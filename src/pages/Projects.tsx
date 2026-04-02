import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import { projects } from "@/data/portfolio";

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <PageTransition>
      <section ref={ref} className="pt-32 pb-32 px-8 md:px-16 lg:px-24">
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
            className="font-heading text-4xl md:text-7xl text-foreground text-center mb-24"
          >
            Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
              >
                <Link to={`/projects/${project.slug}`} className="group block" data-cursor-hover>
                  <div className="aspect-[4/3] overflow-hidden mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                    />
                  </div>
                  <span className="text-xs tracking-[0.3em] text-primary">{project.year}</span>
                  <h3 className="font-heading text-3xl md:text-4xl text-foreground mt-2 mb-3 group-hover:text-primary transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.subtitle}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;
