import React from "react";
import aboutImg from "@/assets/about-img.jpg";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Over 78 successfully completed projects",
  "Serving 25+ global brands and buyers",
  "Strict adherence to international quality standards",
  "Small to large-scale orders accepted",
  "Transparent communication throughout the process",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={aboutImg}
                alt="BengalWeft garment factory"
                className="w-full h-[480px] object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-gold rounded-xl p-5 shadow-gold hidden md:block">
              <div className="text-navy font-display font-bold text-3xl">78+</div>
              <div className="text-navy font-body text-sm font-medium">Completed Projects</div>
            </div>
            {/* Accent bar */}
            <div className="absolute top-0 left-0 w-1.5 h-24 bg-gradient-gold rounded-r" />
          </div>

          {/* Content */}
          <div>
            <p className="text-gold font-body text-sm font-semibold tracking-widest uppercase mb-3">
              About BengalWeft
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy leading-tight mb-6">
              A Trusted Name in Garments Buying & Production
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              BengalWeft is a leading garments buying house based in Chittagong, Bangladesh. We bridge the gap between global buyers and top-tier manufacturers, ensuring every order is executed with precision, quality, and transparency.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Our expert team handles the entire supply chain — from fabric sourcing and sample development to bulk production, quality control, and global shipping — so you can focus on your business.
            </p>

            {/* Highlights */}
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-body text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-block mt-8 bg-navy text-primary-foreground font-semibold px-7 py-3 rounded font-body hover:bg-navy-dark transition-colors duration-200"
            >
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
