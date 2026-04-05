import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import { useCart } from "@/contexts/CartContext";
import { Trash2, ShoppingCart, Lock } from "lucide-react";

const Cart = () => {
  const { items, removeItem, clearCart, totalPrice } = useCart();

  return (
    <PageTransition>
      <section className="pt-32 pb-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block text-center"
          >
            Cart
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl text-foreground text-center mb-16"
          >
            Your <span className="italic text-gradient-gold">Selection</span>
          </motion.h1>

          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center py-20"
            >
              <ShoppingCart size={48} className="text-muted-foreground/30 mx-auto mb-6" />
              <p className="text-muted-foreground mb-8">Your cart is empty</p>
              <Link
                to="/shop"
                data-cursor-hover
                className="text-xs tracking-[0.3em] uppercase text-primary border-b border-primary pb-1 hover:text-foreground hover:border-foreground transition-colors duration-500"
              >
                Browse Shop
              </Link>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              {/* Items */}
              <div className="space-y-6 mb-12">
                {items.map((item, i) => (
                  <motion.div
                    key={item.image.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 border border-border p-4 group"
                  >
                    <Link to={`/shop/${item.image.slug}`} className="w-24 h-24 flex-shrink-0 overflow-hidden protected-image">
                      <img
                        src={item.image.src}
                        alt={item.image.title}
                        draggable={false}
                        className="w-full h-full object-cover select-none pointer-events-none"
                      />
                    </Link>
                    <div className="flex-1 flex items-center justify-between">
                      <div>
                        <Link to={`/shop/${item.image.slug}`} data-cursor-hover>
                          <h3 className="font-heading text-lg text-foreground group-hover:text-primary transition-colors">
                            {item.image.title}
                          </h3>
                        </Link>
                        <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">
                          {item.image.category} · Digital Download
                        </p>
                      </div>
                      <div className="flex items-center gap-6">
                        <span className="font-heading text-lg text-primary">${item.image.price}</span>
                        <button
                          onClick={() => removeItem(item.image.id)}
                          data-cursor-hover
                          className="text-muted-foreground hover:text-destructive transition-colors duration-300"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Summary */}
              <div className="border-t border-border pt-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    {items.length} image{items.length > 1 ? "s" : ""}
                  </span>
                  <button
                    onClick={clearCart}
                    data-cursor-hover
                    className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-destructive transition-colors"
                  >
                    Clear All
                  </button>
                </div>
                <div className="flex items-end justify-between mb-8">
                  <span className="text-sm text-muted-foreground">Total</span>
                  <span className="font-heading text-3xl text-gradient-gold">${totalPrice}</span>
                </div>

                <button
                  data-cursor-hover
                  className="w-full py-4 bg-primary text-primary-foreground text-xs tracking-[0.3em] uppercase font-medium hover:bg-primary/90 transition-colors duration-500 flex items-center justify-center gap-3"
                >
                  <Lock size={14} />
                  Proceed to Checkout
                </button>
                <p className="text-[10px] text-muted-foreground text-center mt-4 tracking-wider">
                  Secure checkout powered by Stripe. Payment processing will be enabled when the backend is connected.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </PageTransition>
  );
};

export default Cart;
