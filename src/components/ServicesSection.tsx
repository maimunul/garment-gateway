import React from "react";
import { Layers, Scissors, Factory, ShieldCheck, Package, Ship } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Fabric Sourcing",
    desc: "We partner with trusted suppliers to source premium fabrics — cotton, polyester, denim, knits, and more — ensuring quality and cost-efficiency.",
  },
  {
    icon: Scissors,
    title: "Sample Development",
    desc: "Our skilled pattern makers create precise samples that bring your design vision to life before bulk production begins.",
  },
  {
    icon: Factory,
    title: "Bulk Production",
    desc: "Large-scale manufacturing with consistent quality across every unit. We coordinate with top garment factories in Bangladesh.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Control",
    desc: "Rigorous inspection at every stage — from raw materials to final products — following AQL international quality standards.",
  },
  {
    icon: Package,
    title: "Premium Packaging",
    desc: "Brand-focused packaging solutions that protect your garments and enhance your customer's unboxing experience.",
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    desc: "End-to-end logistics management with reliable freight partners for timely global delivery to any destination.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-navy">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm font-semibold tracking-widest uppercase mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            End-to-End Garment Services
          </h2>
          <p className="text-white/60 font-body max-w-2xl mx-auto">
            From the first thread to the final shipment, we manage every step of the production process with expertise and care.
          </p>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mt-6 rounded" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, index) => (
            <div
              key={title}
              className="group bg-white/5 border border-white/10 rounded-xl p-7 hover:bg-white/10 hover:border-gold/40 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center mb-5 group-hover:bg-gold/25 transition-colors duration-300">
                <Icon size={22} className="text-gold" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                {title}
              </h3>
              <p className="text-white/55 font-body text-sm leading-relaxed">
                {desc}
              </p>
              <div className="mt-5 w-8 h-0.5 bg-gold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
