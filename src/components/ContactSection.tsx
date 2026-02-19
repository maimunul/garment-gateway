import React, { useState } from "react";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${form.name} - ${form.company || "Individual"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:info@bengalweft.com?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: "", email: "", company: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-navy">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Let's Work Together
          </h2>
          <p className="text-white/60 font-body max-w-xl mx-auto">
            Ready to source garments or have questions? Reach out — our team will get back to you within 24 hours.
          </p>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mt-6 rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                {[
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "1284, Askarabad, Mistripada, Dewanhut, Chittagong",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@bengalweft.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+8801302185808",
                  },
                  {
                    icon: Clock,
                    label: "Working Hours",
                    value: "Sun – Thu: 8:00 AM – 9:00 PM",
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-white/50 font-body text-xs uppercase tracking-wide mb-0.5">{label}</p>
                      <p className="text-white font-body text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/50 font-body text-xs uppercase tracking-widest mb-3">Follow Us</p>
              <div className="flex gap-3">
                {["LinkedIn", "Instagram", "WhatsApp"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="border border-white/20 text-white/70 hover:border-gold hover:text-gold text-xs font-body px-4 py-2 rounded transition-colors duration-200"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                  <Send size={24} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/60 font-body">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-white/60 font-body text-xs uppercase tracking-wide block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white font-body text-sm placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="text-white/60 font-body text-xs uppercase tracking-wide block mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white font-body text-sm placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-white/60 font-body text-xs uppercase tracking-wide block mb-2">
                    Company / Brand
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white font-body text-sm placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="text-white/60 font-body text-xs uppercase tracking-wide block mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white font-body text-sm placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Tell us about your garment requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold text-navy font-semibold py-3.5 rounded-lg font-body hover:bg-gold-light transition-colors duration-200 shadow-gold flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
