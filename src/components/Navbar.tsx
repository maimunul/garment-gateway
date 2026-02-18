import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Categories", href: "#categories" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy shadow-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex flex-col leading-none">
          <span className="font-display text-2xl font-bold text-gold">
            Bengal<span className="text-white">Weft</span>
          </span>
          <span className="text-xs text-white/60 font-body tracking-widest uppercase">
            Garments Buying House
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-gold text-sm font-medium tracking-wide transition-colors duration-200 font-body"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gold text-navy font-semibold text-sm px-5 py-2.5 rounded font-body hover:bg-gold-light transition-colors duration-200"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-dark border-t border-white/10 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-white/80 hover:text-gold py-2 text-sm font-body"
            >
              <ChevronRight size={14} className="text-gold" />
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-2 bg-gold text-navy font-semibold text-sm px-5 py-2.5 rounded text-center font-body"
            onClick={() => setMenuOpen(false)}
          >
            Get Quote
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
