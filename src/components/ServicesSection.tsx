import React from "react";
import { Layers, Scissors, Factory, ShieldCheck, Package, Ship } from "lucide-react";
import service1 from "@/assets/service-1.jpeg";
import service2 from "@/assets/service-2.jpeg";
import service3 from "@/assets/service-3.jpeg";
import service4 from "@/assets/service-4.jpeg";
import service5 from "@/assets/service-5.jpeg";
import service6 from "@/assets/service-6.jpeg";

const services = [
  {
    icon: Layers,
    image: service1,
    title: "Fabric Sourcing",
    desc: "We partner with trusted suppliers to source premium fabrics — cotton, polyester, denim, knits, and more — ensuring quality and cost-efficiency.",
  },
  {
    icon: Scissors,
    image: service2,
    title: "Sample Development",
    desc: "Our skilled pattern makers create precise samples that bring your design vision to life before bulk production begins.",
  },
  {
    icon: Factory,
    image: service3,
    title: "Bulk Production",
    desc: "Large-scale manufacturing with consistent quality across every unit. We coordinate with top garment factories in Bangladesh.",
  },
  {
    icon: ShieldCheck,
    image: service4,
    title: "Quality Control",
    desc: "Rigorous inspection at every stage — from raw materials to final products — following AQL international quality standards.",
  },
  {
    icon: Package,
    image: service5,
    title: "Premium Packaging",
    desc: "Brand-focused packaging solutions that protect your garments and enhance your customer's unboxing experience.",
  },
  {
    icon: Ship,
    image: service6,
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
          {services.map(({ icon: Icon, image, title, desc }) => (
            <div
              key={title}
              className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-gold/40 transition-all duration-300 cursor-default"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <div className="w-9 h-9 rounded-lg bg-gold/90 flex items-center justify-center">
                    <Icon size={18} className="text-navy" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {title}
                </h3>
                <p className="text-white/55 font-body text-sm leading-relaxed">
                  {desc}
                </p>
                <div className="mt-4 w-8 h-0.5 bg-gold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
