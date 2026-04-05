import PageTransition from "@/components/PageTransition";
import HeroSection from "@/components/HeroSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { shopImages } from "@/data/shop";
import { blogPosts } from "@/data/blog";
import { projects } from "@/data/portfolio";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Check } from "lucide-react";

const HomeFeaturedShop = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const { addItem, isInCart } = useCart();
  const featured = shopImages.slice(0, 4);

  return (
    <section ref={ref} className="py-32 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block text-center"
        >
          Shop
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-4xl md:text-7xl text-foreground text-center mb-16"
        >
          Featured <span className="italic text-gradient-gold">Prints</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map((img, i) => {
            const inCart = isInCart(img.id);
            return (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="group"
              >
                <Link to={`/shop/${img.slug}`} data-cursor-hover>
                  <div className="aspect-square overflow-hidden relative protected-image">
                    <img
                      src={img.src}
                      alt={img.title}
                      loading="lazy"
                      draggable={false}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] select-none pointer-events-none"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-15">
                      <span className="font-heading text-foreground text-2xl tracking-widest rotate-[-30deg] select-none">
                        AURELIA
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="mt-3 flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm text-foreground">{img.title}</p>
                    <p className="text-primary text-sm font-heading">${img.price}</p>
                  </div>
                  <button
                    onClick={() => addItem(img)}
                    disabled={inCart}
                    data-cursor-hover
                    className={`p-1.5 border transition-all duration-500 ${
                      inCart
                        ? "border-primary/40 text-primary"
                        : "border-border text-muted-foreground hover:text-foreground hover:border-primary"
                    }`}
                  >
                    {inCart ? <Check size={12} /> : <ShoppingCart size={12} />}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/shop"
            data-cursor-hover
            className="text-xs tracking-[0.3em] uppercase text-primary border-b border-primary pb-1 hover:text-foreground hover:border-foreground transition-colors duration-500"
          >
            View All Prints
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
                  <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
                </div>
                <span className="text-xs tracking-[0.3em] text-primary">{project.year}</span>
                <h3 className="font-heading text-2xl text-foreground mt-1 group-hover:text-primary transition-colors duration-500">{project.title}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomeBlogPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const recent = blogPosts.slice(0, 3);

  return (
    <section ref={ref} className="py-32 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block text-center"
        >
          Journal
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-4xl md:text-7xl text-foreground text-center mb-16"
        >
          Latest <span className="italic text-gradient-gold">Stories</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {recent.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="group block" data-cursor-hover>
                <div className="aspect-[16/9] overflow-hidden mb-4">
                  <img src={post.coverImage} alt={post.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-primary">{post.category}</span>
                <h3 className="font-heading text-xl text-foreground mt-1 group-hover:text-primary transition-colors duration-500">{post.title}</h3>
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
            to="/blog"
            data-cursor-hover
            className="text-xs tracking-[0.3em] uppercase text-primary border-b border-primary pb-1 hover:text-foreground hover:border-foreground transition-colors duration-500"
          >
            Read More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const Index = () => (
  <PageTransition>
    <HeroSection />
    <HomeFeaturedShop />
    <HomeProjectsPreview />
    <HomeBlogPreview />
  </PageTransition>
);

export default Index;
