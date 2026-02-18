import React from "react";
import { Zap, Globe, Scale, MessageSquare, Clock, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Expert Craftsmanship",
    desc: "Our team brings years of hands-on experience in garment manufacturing, ensuring every stitch meets the highest standard.",
  },
  {
    icon: Globe,
    title: "International Standards",
    desc: "We follow AQL, ISO, and buyer-specific compliance standards to guarantee quality that global markets demand.",
  },
  {
    icon: Scale,
    title: "Scalable Orders",
    desc: "Whether you need 500 or 500,000 pieces, our production network scales to meet your exact requirements.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    desc: "Regular updates, clear reporting, and dedicated account management keep you informed at every step.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We understand deadlines are non-negotiable. Our logistics team ensures your orders arrive when promised.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    desc: "We build lasting relationships with our buyers, growing together through trust, quality, and mutual success.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm font-semibold tracking-widest uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-5">
            The BengalWeft Advantage
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            We don't just manufacture garments — we build partnerships built on quality, trust, and excellence.
          </p>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mt-6 rounded" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-card rounded-xl p-7 shadow-card hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-11 h-11 rounded-lg bg-navy flex items-center justify-center mb-5 group-hover:bg-gold transition-colors duration-300">
                <Icon size={20} className="text-gold group-hover:text-navy transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg font-bold text-navy mb-3">
                {title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-navy font-display text-2xl font-bold mb-2">
            Quality. Trust. Excellence.
          </p>
          <p className="text-muted-foreground font-body text-sm mb-6">
            Ready to start your next garment project?
          </p>
          <a
            href="#contact"
            className="inline-block bg-gold text-navy font-semibold px-8 py-3.5 rounded font-body hover:bg-gold-light transition-colors duration-200 shadow-gold"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
