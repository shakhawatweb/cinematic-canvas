import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { ShopImage } from "@/data/shop";

export interface CartItem {
  image: ShopImage;
  addedAt: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (image: ShopImage) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  isInCart: (id: string) => boolean;
  totalPrice: number;
  itemCount: number;
  isCartOpen: boolean;
  setCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setCartOpen] = useState(false);

  const addItem = useCallback((image: ShopImage) => {
    setItems((prev) => {
      if (prev.some((item) => item.image.id === image.id)) return prev;
      return [...prev, { image, addedAt: Date.now() }];
    });
    setCartOpen(true);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.image.id !== id));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const isInCart = useCallback(
    (id: string) => items.some((item) => item.image.id === id),
    [items]
  );

  const totalPrice = items.reduce((sum, item) => sum + item.image.price, 0);
  const itemCount = items.length;

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart, isInCart, totalPrice, itemCount, isCartOpen, setCartOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
