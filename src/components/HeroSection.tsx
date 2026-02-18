import React from "react";
import heroImage from "@/assets/hero-banner.jpg";
import { ArrowDown, Globe, Award, Truck } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />

      <div className="relative container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 border border-gold/40 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase font-body">
              Bangladesh's Trusted Buying House
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
            Your Reliable Partner for{" "}
            <span className="text-gold">Global Garment</span> Production
          </h1>

          <p className="text-white/75 text-lg md:text-xl font-body leading-relaxed mb-10 max-w-2xl animate-fade-in-up delay-200">
            From fabric sourcing to final shipment — BengalWeft delivers
            premium quality garments with international standards, on time,
            every time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16 animate-fade-in-up delay-300">
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
          <div className="grid grid-cols-3 gap-6 animate-fade-in-up delay-400">
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
