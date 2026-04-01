import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import portrait1 from "@/assets/portrait-1.jpg";
import portrait2 from "@/assets/portrait-2.jpg";
import fineart1 from "@/assets/fineart-1.jpg";
import street1 from "@/assets/street-1.jpg";
import street2 from "@/assets/street-2.jpg";
import conceptual1 from "@/assets/conceptual-1.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

type Category = "All" | "Portrait" | "Fine Art" | "Street" | "Conceptual";

interface GalleryImage {
  src: string;
  alt: string;
  category: Category;
  aspect: string;
}

const galleryImages: GalleryImage[] = [
  { src: portrait1, alt: "Portrait study in light", category: "Portrait", aspect: "aspect-[3/4]" },
  { src: hero1, alt: "Mountain solitude", category: "Fine Art", aspect: "aspect-[16/9]" },
  { src: street1, alt: "Rainy night city", category: "Street", aspect: "aspect-square" },
  { src: conceptual1, alt: "Double exposure forest", category: "Conceptual", aspect: "aspect-square" },
  { src: hero2, alt: "Desert tree at sunset", category: "Fine Art", aspect: "aspect-[16/9]" },
  { src: portrait2, alt: "Character study", category: "Portrait", aspect: "aspect-[3/4]" },
  { src: street2, alt: "Urban fog", category: "Street", aspect: "aspect-[3/2]" },
  { src: hero3, alt: "Ocean waves", category: "Fine Art", aspect: "aspect-[16/9]" },
  { src: fineart1, alt: "Light abstract", category: "Fine Art", aspect: "aspect-square" },
];

const categories: Category[] = ["All", "Portrait", "Fine Art", "Street", "Conceptual"];

const PortfolioSection = () => {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const filtered = active === "All" ? galleryImages : galleryImages.filter((img) => img.category === active);

  return (
    <>
      <section id="portfolio" ref={ref} className="py-32 px-8 md:px-16">
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
            {categories.map((cat) => (
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

          {/* Masonry grid */}
          <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
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
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="text-xs tracking-[0.2em] uppercase text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    >
                      {img.alt}
                    </motion.span>
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

            {/* Nav buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground text-3xl transition-colors"
              data-cursor-hover
            >
              ‹
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % galleryImages.length); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground text-3xl transition-colors"
              data-cursor-hover
            >
              ›
            </button>

            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-foreground/60 hover:text-foreground text-xl tracking-widest transition-colors"
              data-cursor-hover
            >
              ✕
            </button>

            <div className="absolute bottom-8 text-center">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {galleryImages[lightbox].alt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioSection;
