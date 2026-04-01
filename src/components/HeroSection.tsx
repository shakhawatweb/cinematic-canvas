import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const images = [hero1, hero2, hero3];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background slideshow */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={images[current]}
            alt="Photography showcase"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-background/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-primary mb-8"
        />

        <motion.h1
          initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-5xl md:text-8xl lg:text-9xl text-foreground text-center tracking-tight"
        >
          Aurelia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mt-6"
        >
          Visual Storyteller
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 1.2, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-primary mt-8"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-primary/50"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
