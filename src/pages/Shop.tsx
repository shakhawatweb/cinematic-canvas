import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import { shopImages, shopCategories, type ShopCategory } from "@/data/shop";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Check } from "lucide-react";

const Shop = () => {
  const [active, setActive] = useState<ShopCategory>("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const { addItem, isInCart } = useCart();

  const filtered = active === "All" ? shopImages : shopImages.filter((img) => img.category === active);

  return (
    <PageTransition>
      <section ref={ref} className="pt-32 pb-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block text-center"
          >
            Shop
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-7xl text-foreground text-center mb-6"
          >
            Digital <span className="italic text-gradient-gold">Prints</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-center text-sm max-w-xl mx-auto mb-16"
          >
            Purchase high-resolution digital photographs. Each image is delivered as a
            full-resolution file ready for printing or personal use.
          </motion.p>

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-6 md:gap-10 mb-16 flex-wrap"
          >
            {shopCategories.map((cat) => (
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
                  <motion.span layoutId="shopFilter" className="absolute bottom-0 left-0 right-0 h-px bg-primary" />
                )}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => {
                const inCart = isInCart(img.id);
                return (
                  <motion.div
                    key={img.id}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="group"
                  >
                    <Link to={`/shop/${img.slug}`} data-cursor-hover className="block">
                      <div className="aspect-[4/3] overflow-hidden relative protected-image">
                        <img
                          src={img.src}
                          alt={img.title}
                          loading="lazy"
                          draggable={false}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out select-none pointer-events-none"
                        />
                        {/* Watermark overlay */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                          <span className="font-heading text-foreground text-4xl md:text-5xl tracking-widest rotate-[-30deg] select-none">
                            AURELIA
                          </span>
                        </div>
                      </div>
                    </Link>
                    <div className="mt-4 flex items-start justify-between gap-4">
                      <div>
                        <Link to={`/shop/${img.slug}`} data-cursor-hover>
                          <h3 className="font-heading text-lg text-foreground group-hover:text-primary transition-colors duration-500">
                            {img.title}
                          </h3>
                        </Link>
                        <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">{img.category}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-primary font-heading text-lg">${img.price}</span>
                        <button
                          onClick={() => addItem(img)}
                          disabled={inCart}
                          data-cursor-hover
                          className={`p-2 border transition-all duration-500 ${
                            inCart
                              ? "border-primary/40 text-primary bg-primary/10"
                              : "border-border text-muted-foreground hover:text-foreground hover:border-primary"
                          }`}
                        >
                          {inCart ? <Check size={16} /> : <ShoppingCart size={16} />}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Shop;
