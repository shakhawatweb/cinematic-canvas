import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import { galleryImages, categories, type Category } from "@/data/portfolio";

const Portfolio = () => {
  const [active, setActive] = useState<"All" | Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const filtered = active === "All" ? galleryImages : galleryImages.filter((img) => img.category === active);

  return (
    <PageTransition>
      <section ref={ref} className="pt-32 pb-32 px-8 md:px-16">
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

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 md:gap-10 mb-16 flex-wrap"
          >
            {(["All", ...categories] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                data-cursor-hover
                className={`text-xs tracking-[0.2em] uppercase transition-colors duration-500 relative pb-1 ${
                  active === cat ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
                {active === cat && (
                  <motion.span layoutId="activeFilter" className="absolute bottom-0 left-0 right-0 h-px bg-primary" />
                )}
              </button>
            ))}
          </motion.div>

          {/* Category quick links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-4 mb-12 flex-wrap"
          >
            {categories.map((cat) => (
              <Link
                key={cat}
                to={`/portfolio/${cat.toLowerCase().replace(" ", "-")}`}
                data-cursor-hover
                className="text-[10px] tracking-[0.15em] uppercase px-4 py-2 border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors duration-500"
              >
                View {cat} →
              </Link>
            ))}
          </motion.div>

          {/* Masonry grid */}
          <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="break-inside-avoid overflow-hidden cursor-pointer group relative"
                  onClick={() => setLightbox(galleryImages.indexOf(img))}
                  data-cursor-hover
                >
                  <div className={`${img.aspect} overflow-hidden`}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                    />
                  </div>
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-700 flex items-end p-6">
                    <span className="text-xs tracking-[0.2em] uppercase text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {img.alt}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4 md:p-16"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              key={lightbox}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground text-3xl transition-colors"
              data-cursor-hover
            >‹</button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % galleryImages.length); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground text-3xl transition-colors"
              data-cursor-hover
            >›</button>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-foreground/60 hover:text-foreground text-xl tracking-widest transition-colors"
              data-cursor-hover
            >✕</button>
            <div className="absolute bottom-8 text-center">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {galleryImages[lightbox].alt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Portfolio;
