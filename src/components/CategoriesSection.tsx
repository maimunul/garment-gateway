import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";

// Import carousel images to reuse as gallery photos for each category
import inner1 from "@/assets/categories/inner-1.png";
import inner2 from "@/assets/categories/inner-2.png";
import inner3 from "@/assets/categories/inner-3.png";
import kids1 from "@/assets/categories/kids-1.png";
import kids2 from "@/assets/categories/kids-2.png";
import kids3 from "@/assets/categories/kids-3.png";
import man1 from "@/assets/categories/men-1.png";
import man2 from "@/assets/categories/men-2.png";
import man3 from "@/assets/categories/men-3.png";
import man4 from "@/assets/categories/men-4.png";
import man5 from "@/assets/categories/men-5.png";
import man6 from "@/assets/categories/men-6.png";
import women1 from "@/assets/categories/women-1.png";
import women2 from "@/assets/categories/women-2.png";
import women3 from "@/assets/categories/women-3.png";
import women4 from "@/assets/categories/women-4.png";
import women5 from "@/assets/categories/women-5.png";
import women6 from "@/assets/categories/women-6.png";

const categories = [
  {
    label: "Men's Wear",
    desc: "Shirts, trousers, jackets, formal & casual wear",
    emoji: "👔",
    color: "from-blue-900/50 to-blue-800/30",
    images: [man1, man2, man3, man4, man5, man6],
    tags: ["Formal Shirts", "Trousers", "Denim Jackets", "Polo Shirts"],
  },
  {
    label: "Women's Wear",
    desc: "Tops, dresses, blouses, activewear & fashion garments",
    emoji: "👗",
    color: "from-rose-900/50 to-rose-800/30",
    images: [women1, women2, women3, women4, women5, women6],
    tags: ["Dresses", "Blouses", "Activewear", "Knitwear"],
  },
  {
    label: "Kids' Wear",
    desc: "Comfortable, safe, and playful clothing for children",
    emoji: "🧒",
    color: "from-amber-900/50 to-amber-800/30",
    images: [kids1, kids2, kids3],
    tags: ["T-Shirts", "Pyjamas", "School Uniform", "Outerwear"],
  },
  {
    label: "Innerwear",
    desc: "Underwear, loungewear, sleepwear & essentials",
    emoji: "🧺",
    color: "from-teal-900/50 to-teal-800/30",
    images: [inner1, inner2, inner3],
    tags: ["Underwear", "Loungewear", "Sleepwear", "Essentials"],
  },
];

interface GalleryModalProps {
  category: (typeof categories)[0];
  onClose: () => void;
}

const GalleryModal = ({ category, onClose }: GalleryModalProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + category.images.length) % category.images.length);
  const next = () =>
    setActiveIndex((i) => (i + 1) % category.images.length);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-navy border border-white/10 rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{category.emoji}</span>
            <div>
              <h3 className="font-display text-xl font-bold text-white">{category.label}</h3>
              <p className="text-white/50 text-xs font-body">{category.desc}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all duration-200"
          >
            <X size={16} />
          </button>
        </div>

        {/* Main Image Viewer */}
        <div className="relative aspect-video bg-black/40 overflow-hidden">
          <img
            src={category.images[activeIndex]}
            alt={`${category.label} ${activeIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Nav Arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all duration-200"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all duration-200"
          >
            <ChevronRight size={20} />
          </button>

          {/* Image counter */}
          <div className="absolute bottom-3 right-4 bg-black/60 text-white text-xs font-body px-2.5 py-1 rounded-full">
            {activeIndex + 1} / {category.images.length}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 px-6 py-4 bg-black/20">
          {category.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`flex-1 aspect-video rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                i === activeIndex ? "border-gold" : "border-white/10 hover:border-white/30"
              }`}
            >
              <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Tags */}
        <div className="px-6 pb-5">
          <p className="text-white/40 text-xs font-body uppercase tracking-widest mb-2">Product Types</p>
          <div className="flex flex-wrap gap-2">
            {category.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-body text-gold border border-gold/30 bg-gold/5 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoriesSection = () => {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[0] | null>(null);

  return (
    <section id="categories" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gold font-body text-sm font-semibold tracking-widest uppercase mb-3">
            Product Categories
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-5">
            What We Produce
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Covering all major garment categories with the same commitment to quality and precision.
          </p>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mt-6 rounded" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className={`group relative bg-gradient-to-br ${cat.color} border border-white/10 rounded-2xl p-8 overflow-hidden cursor-default hover:scale-105 transition-transform duration-300 bg-navy flex flex-col`}
            >
              <div className="text-5xl mb-5">{cat.emoji}</div>
              <h3 className="font-display text-xl font-bold text-white mb-2">{cat.label}</h3>
              <p className="text-white/60 font-body text-sm leading-relaxed flex-1">{cat.desc}</p>

              {/* View Gallery Button */}
              <button
                onClick={() => setActiveCategory(cat)}
                className="mt-6 flex items-center gap-2 bg-white/10 hover:bg-gold hover:text-navy text-white text-xs font-semibold font-body px-4 py-2 rounded-lg transition-all duration-200 border border-white/15 hover:border-gold w-full justify-center"
              >
                <Images size={14} />
                View Gallery
              </button>

              {/* Decorative */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-gold/5 group-hover:bg-gold/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {activeCategory && (
        <GalleryModal category={activeCategory} onClose={() => setActiveCategory(null)} />
      )}
    </section>
  );
};

export default CategoriesSection;
