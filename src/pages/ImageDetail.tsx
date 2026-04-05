import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { shopImages } from "@/data/shop";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Check, Shield, Download, Image } from "lucide-react";

const ImageDetail = () => {
  const { slug } = useParams();
  const image = shopImages.find((img) => img.slug === slug);
  const { addItem, isInCart } = useCart();

  if (!image) {
    return (
      <PageTransition>
        <div className="pt-40 pb-32 text-center">
          <h1 className="font-heading text-4xl text-foreground mb-4">Image not found</h1>
          <Link to="/shop" className="text-primary text-sm tracking-[0.2em] uppercase">← Back to Shop</Link>
        </div>
      </PageTransition>
    );
  }

  const inCart = isInCart(image.id);

  return (
    <PageTransition>
      <section className="pt-28 pb-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <Link
              to="/shop"
              data-cursor-hover
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500 mb-8 inline-block"
            >
              ← Back to Shop
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative protected-image"
            >
              <div className="overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  draggable={false}
                  className="w-full h-auto object-cover select-none pointer-events-none"
                />
              </div>
              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="font-heading text-foreground/15 text-5xl md:text-7xl tracking-[0.3em] rotate-[-30deg] select-none whitespace-nowrap">
                  AURELIA
                </span>
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              <span className="text-xs tracking-[0.2em] uppercase text-primary mb-2">{image.category}</span>
              <h1 className="font-heading text-3xl md:text-5xl text-foreground mb-4">{image.title}</h1>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">{image.description}</p>

              {/* Specs */}
              <div className="border-t border-border pt-6 mb-8 space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Image size={14} className="text-primary" />
                  <span className="text-muted-foreground">Resolution:</span>
                  <span className="text-foreground">{image.dimensions}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Download size={14} className="text-primary" />
                  <span className="text-muted-foreground">Format:</span>
                  <span className="text-foreground">{image.format}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Shield size={14} className="text-primary" />
                  <span className="text-muted-foreground">License:</span>
                  <span className="text-foreground">Personal & Print Use</span>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="border-t border-border pt-6">
                <div className="flex items-end justify-between mb-6">
                  <span className="font-heading text-4xl text-gradient-gold">${image.price}</span>
                  <span className="text-xs text-muted-foreground tracking-[0.15em] uppercase">Digital Download</span>
                </div>
                <button
                  onClick={() => addItem(image)}
                  disabled={inCart}
                  data-cursor-hover
                  className={`w-full py-4 text-xs tracking-[0.3em] uppercase font-medium transition-all duration-500 flex items-center justify-center gap-3 ${
                    inCart
                      ? "bg-primary/10 text-primary border border-primary/40"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  {inCart ? (
                    <>
                      <Check size={16} /> Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={16} /> Add to Cart
                    </>
                  )}
                </button>
              </div>

              {/* Security note */}
              <div className="mt-8 p-4 border border-border bg-card">
                <div className="flex items-start gap-3">
                  <Shield size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-foreground font-medium mb-1">Secure Digital Delivery</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      After purchase, you'll receive a time-limited secure download link for the full-resolution file.
                      Preview images are watermarked and low-resolution.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ImageDetail;
