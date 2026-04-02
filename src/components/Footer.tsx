import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-12 px-8 border-t border-border">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <span className="font-heading text-sm tracking-widest text-muted-foreground">
        AURELIA © 2024
      </span>
      <div className="flex gap-8">
        {[
          { label: "Portfolio", to: "/portfolio" },
          { label: "Projects", to: "/projects" },
          { label: "About", to: "/about" },
          { label: "Contact", to: "/contact" },
        ].map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
            data-cursor-hover
          >
            {link.label}
          </Link>
        ))}
      </div>
      <span className="text-xs text-muted-foreground tracking-wider">
        All images and content are protected by copyright.
      </span>
    </div>
  </footer>
);

export default Footer;
