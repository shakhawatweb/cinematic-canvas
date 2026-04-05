import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import { blogPosts, blogCategories, type BlogCategory } from "@/data/blog";

const Blog = () => {
  const [active, setActive] = useState<"All" | BlogCategory>("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const filtered = active === "All" ? blogPosts : blogPosts.filter((p) => p.category === active);

  return (
    <PageTransition>
      <section ref={ref} className="pt-32 pb-32 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block text-center"
          >
            Journal
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-7xl text-foreground text-center mb-16"
          >
            Behind the <span className="italic text-gradient-gold">Lens</span>
          </motion.h1>

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 md:gap-10 mb-16 flex-wrap"
          >
            {(["All", ...blogCategories] as const).map((cat) => (
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
                  <motion.span layoutId="blogFilter" className="absolute bottom-0 left-0 right-0 h-px bg-primary" />
                )}
              </button>
            ))}
          </motion.div>

          {/* Posts grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {filtered.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`} className="group block" data-cursor-hover>
                  <div className="aspect-[16/9] overflow-hidden mb-5">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                    />
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-primary">{post.category}</span>
                    <span className="text-[10px] text-muted-foreground">{post.date}</span>
                    <span className="text-[10px] text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h2 className="font-heading text-2xl text-foreground group-hover:text-primary transition-colors duration-500 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Blog;
