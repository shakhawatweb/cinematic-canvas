import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { galleryImages, categories, type Category } from "@/data/portfolio";

const slugToCategory: Record<string, Category> = {
  portrait: "Portrait",
  "fine-art": "Fine Art",
  street: "Street",
  conceptual: "Conceptual",
};

const PortfolioCategory = () => {
  const { category: slug } = useParams();
  const category = slugToCategory[slug || ""];
  const images = galleryImages.filter((img) => img.category === category);
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (!category) {
    return (
      <PageTransition>
        <div className="pt-40 pb-32 text-center">
          <h1 className="font-heading text-4xl text-foreground mb-4">Category not found</h1>
          <Link to="/portfolio" className="text-primary text-sm tracking-[0.2em] uppercase">← Back to Portfolio</Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <section className="pt-32 pb-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <Link
              to="/portfolio"
              data-cursor-hover
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500 mb-6 inline-block"
            >
              ← Back to Portfolio
            </Link>
            <h1 className="font-heading text-5xl md:text-8xl text-foreground">
              <span className="italic text-gradient-gold">{category}</span>
            </h1>
            <p className="text-muted-foreground text-sm mt-4">{images.length} photographs</p>
          </motion.div>

          {/* Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="break-inside-avoid overflow-hidden cursor-pointer group relative"
                onClick={() => setLightbox(i)}
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
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4 md:p-16"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              key={lightbox}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground text-3xl"
              data-cursor-hover
            >‹</button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground text-3xl"
              data-cursor-hover
            >›</button>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-foreground/60 hover:text-foreground text-xl"
              data-cursor-hover
            >✕</button>
            <div className="absolute bottom-8 text-center">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{images[lightbox].alt}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default PortfolioCategory;
