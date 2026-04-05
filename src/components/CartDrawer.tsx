import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { X, Trash2, ShoppingCart } from "lucide-react";

const CartDrawer = () => {
  const { items, removeItem, totalPrice, itemCount, isCartOpen, setCartOpen } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-card border-l border-border flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <h2 className="font-heading text-xl text-foreground">
                Cart <span className="text-muted-foreground text-sm font-body">({itemCount})</span>
              </h2>
              <button onClick={() => setCartOpen(false)} data-cursor-hover className="text-muted-foreground hover:text-foreground transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingCart size={32} className="text-muted-foreground/30 mb-4" />
                  <p className="text-sm text-muted-foreground">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.image.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex gap-4 group"
                    >
                      <div className="w-16 h-16 flex-shrink-0 overflow-hidden protected-image">
                        <img src={item.image.src} alt={item.image.title} draggable={false} className="w-full h-full object-cover select-none pointer-events-none" />
                      </div>
                      <div className="flex-1 flex items-center justify-between">
                        <div>
                          <p className="text-sm text-foreground">{item.image.title}</p>
                          <p className="text-xs text-muted-foreground">{item.image.category}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-primary">${item.image.price}</span>
                          <button
                            onClick={() => removeItem(item.image.id)}
                            data-cursor-hover
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-border space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total</span>
                  <span className="font-heading text-xl text-gradient-gold">${totalPrice}</span>
                </div>
                <Link
                  to="/cart"
                  onClick={() => setCartOpen(false)}
                  data-cursor-hover
                  className="block w-full py-3 bg-primary text-primary-foreground text-xs tracking-[0.3em] uppercase text-center font-medium hover:bg-primary/90 transition-colors"
                >
                  View Cart & Checkout
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
