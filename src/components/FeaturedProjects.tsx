import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import conceptual1 from "@/assets/conceptual-1.jpg";

const projects = [
  {
    image: hero1,
    title: "Solitude",
    subtitle: "A meditation on isolation and the grandeur of untouched landscapes",
    year: "2024",
  },
  {
    image: conceptual1,
    title: "Duality",
    subtitle: "Exploring the boundary between human consciousness and nature",
    year: "2023",
  },
  {
    image: hero2,
    title: "Remnants",
    subtitle: "Finding beauty in the stark resilience of the natural world",
    year: "2023",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <motion.div
      ref={ref}
      className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${index % 2 === 1 ? "md:direction-rtl" : ""}`}
    >
      <motion.div
        style={{ y }}
        initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`overflow-hidden ${index % 2 === 1 ? "md:order-2" : ""}`}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`${index % 2 === 1 ? "md:order-1 md:text-right" : ""}`}
      >
        <span className="text-xs tracking-[0.3em] text-primary">{project.year}</span>
        <h3 className="font-heading text-4xl md:text-6xl text-foreground mt-3 mb-4">{project.title}</h3>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md">
          {project.subtitle}
        </p>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: 40 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`h-px bg-primary mt-8 ${index % 2 === 1 ? "md:ml-auto" : ""}`}
        />
      </motion.div>
    </motion.div>
  );
};

const FeaturedProjects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" ref={ref} className="py-32 px-8 md:px-16 lg:px-24">
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

        <div className="space-y-32 md:space-y-48">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
