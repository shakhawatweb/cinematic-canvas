import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { blogPosts } from "@/data/blog";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageTransition>
        <div className="pt-40 pb-32 text-center">
          <h1 className="font-heading text-4xl text-foreground mb-4">Post not found</h1>
          <Link to="/blog" className="text-primary text-sm tracking-[0.2em] uppercase">← Back to Journal</Link>
        </div>
      </PageTransition>
    );
  }

  // Simple markdown-ish rendering: split by ## headings
  const sections = post.content.split(/\n## /).map((section, i) => {
    if (i === 0) return { heading: null, body: section.trim() };
    const [heading, ...rest] = section.split("\n");
    return { heading: heading.trim(), body: rest.join("\n").trim() };
  });

  return (
    <PageTransition>
      <article className="pt-28 pb-32">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[50vh] md:h-[60vh] overflow-hidden mb-16"
        >
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-12">
            <div className="max-w-3xl mx-auto">
              <Link
                to="/blog"
                data-cursor-hover
                className="text-xs tracking-[0.2em] uppercase text-primary/80 hover:text-primary transition-colors mb-4 inline-block"
              >
                ← Back to Journal
              </Link>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[10px] tracking-[0.2em] uppercase text-primary">{post.category}</span>
                <span className="text-[10px] text-muted-foreground">{post.date}</span>
                <span className="text-[10px] text-muted-foreground">{post.readTime}</span>
              </div>
              <h1 className="font-heading text-3xl md:text-5xl text-foreground">{post.title}</h1>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto px-8 md:px-16"
        >
          {sections.map((section, i) => (
            <div key={i} className="mb-10">
              {section.heading && (
                <h2 className="font-heading text-2xl text-foreground mb-4">{section.heading}</h2>
              )}
              {section.body.split("\n\n").map((paragraph, j) => (
                <p key={j} className="text-muted-foreground text-sm leading-[1.9] mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </motion.div>
      </article>
    </PageTransition>
  );
};

export default BlogPost;
