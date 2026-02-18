import React, { useState, useEffect } from "react";
import { ArrowDown, Globe, Award, Truck, ChevronLeft, ChevronRight } from "lucide-react";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";

const slides = [
  {
    image: carousel1,
    tag: "Trusted Partnerships",
    headline: "Your Reliable Partner for",
    highlight: "Global Garment",
    suffix: "Production",
    sub: "From fabric sourcing to final shipment — BengalWeft delivers premium quality garments with international standards, on time, every time.",
  },
  {
    image: carousel2,
    tag: "International Standards",
    headline: "Premium Garments",
    highlight: "Crafted to",
    suffix: "Perfection",
    sub: "We work with top-rated factories across Bangladesh to produce high-quality apparel for leading global brands and buyers.",
  },
  {
    image: carousel3,
    tag: "Expert Manufacturing",
    headline: "Precision Stitching &",
    highlight: "Flawless",
    suffix: "Quality Control",
    sub: "Every stitch is monitored. Every order is verified. We uphold AQL international quality standards at every stage of production.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 300);
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const slide = slides[current];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700"
          style={{
            backgroundImage: `url(${s.image})`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />

      <div
        className={`relative container mx-auto px-6 pt-24 pb-16 transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 border border-gold/40 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase font-body">
              {slide.tag}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {slide.headline}{" "}
            <span className="text-gold">{slide.highlight}</span> {slide.suffix}
          </h1>

          <p className="text-white/75 text-lg md:text-xl font-body leading-relaxed mb-10 max-w-2xl">
            {slide.sub}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#services"
              className="bg-gold text-navy font-semibold px-8 py-3.5 rounded font-body hover:bg-gold-light transition-all duration-200 shadow-gold"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="border border-white/40 text-white font-semibold px-8 py-3.5 rounded font-body hover:border-gold hover:text-gold transition-all duration-200"
            >
              Get a Quote
            </a>
          </div>

          {/* Quick highlights */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: Globe, label: "Global Reach", desc: "Serving buyers worldwide" },
              { icon: Award, label: "ISO Standards", desc: "International quality" },
              { icon: Truck, label: "On-Time Delivery", desc: "Reliable logistics" },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex flex-col gap-1">
                <Icon size={20} className="text-gold mb-1" />
                <span className="text-white font-semibold text-sm font-body">{label}</span>
                <span className="text-white/55 text-xs font-body">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all duration-200"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-gold" : "w-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all duration-200"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-gold transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
