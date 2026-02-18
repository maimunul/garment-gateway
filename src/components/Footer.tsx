import React from "react";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-dark border-t border-white/10">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="font-display text-2xl font-bold text-gold">Bengal</span>
              <span className="font-display text-2xl font-bold text-white">Weft</span>
            </div>
            <p className="text-white/55 font-body text-sm leading-relaxed mb-6 max-w-sm">
              Your reliable partner for global garment production. We deliver premium quality clothing solutions from Bangladesh to the world.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-colors duration-200">
                <Linkedin size={15} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-colors duration-200">
                <Instagram size={15} />
              </a>
              <a href="mailto:info@bengalweft.com" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-colors duration-200">
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold text-base mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {["Home", "About", "Services", "Categories", "Why Us", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-white/55 hover:text-gold font-body text-sm transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-bold text-base mb-5">Contact</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold flex-shrink-0 mt-1" />
                <span className="text-white/55 font-body text-xs leading-relaxed">
                  B9, Sketch Meher Bhavan, Chandgaon, Chittagong, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-gold flex-shrink-0" />
                <a href="mailto:info@bengalweft.com" className="text-white/55 hover:text-gold font-body text-xs transition-colors">
                  info@bengalweft.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold flex-shrink-0" />
                <span className="text-white/55 font-body text-xs">+012 345 67890</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/35 font-body text-xs">
            © 2024 BengalWeft. All rights reserved.
          </p>
          <p className="text-white/35 font-body text-xs">
            www.bengalweft.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
