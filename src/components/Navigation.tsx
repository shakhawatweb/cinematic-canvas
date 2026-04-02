import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Work", href: "/portfolio" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 bg-background/80 backdrop-blur-md"
      >
        <Link to="/" className="font-heading text-lg tracking-widest text-foreground" data-cursor-hover>
          AURELIA
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.href);
            return (
              <Link
                key={item.label}
                to={item.href}
                data-cursor-hover
                className={`text-sm tracking-[0.2em] uppercase transition-colors duration-500 relative group ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-500 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 z-50"
          data-cursor-hover
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-px bg-foreground block"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-px bg-foreground block"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-px bg-foreground block"
          />
        </button>
      </motion.nav>

      {/* Fullscreen mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-heading text-4xl text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
