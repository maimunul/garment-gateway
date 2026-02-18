import React from "react";

const categories = [
  {
    label: "Men's Wear",
    desc: "Shirts, trousers, jackets, formal & casual wear",
    emoji: "👔",
    color: "from-blue-900/50 to-blue-800/30",
  },
  {
    label: "Women's Wear",
    desc: "Tops, dresses, blouses, activewear & fashion garments",
    emoji: "👗",
    color: "from-rose-900/50 to-rose-800/30",
  },
  {
    label: "Kids' Wear",
    desc: "Comfortable, safe, and playful clothing for children",
    emoji: "🧒",
    color: "from-amber-900/50 to-amber-800/30",
  },
  {
    label: "Innerwear",
    desc: "Underwear, loungewear, sleepwear & essentials",
    emoji: "🧺",
    color: "from-teal-900/50 to-teal-800/30",
  },
];

const CategoriesSection = () => {
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
          {categories.map(({ label, desc, emoji, color }) => (
            <div
              key={label}
              className={`group relative bg-gradient-to-br ${color} border border-white/10 rounded-2xl p-8 overflow-hidden cursor-default hover:scale-105 transition-transform duration-300 bg-navy`}
            >
              <div className="text-5xl mb-5">{emoji}</div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                {label}
              </h3>
              <p className="text-white/60 font-body text-sm leading-relaxed">
                {desc}
              </p>
              {/* Decorative */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-gold/5 group-hover:bg-gold/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
