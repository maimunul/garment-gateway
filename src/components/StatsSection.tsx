import React, { useEffect, useRef, useState } from "react";
import { Users, Smile, CheckSquare, Loader } from "lucide-react";

const stats = [
  { icon: Users, value: 13, label: "Expert Workers", suffix: "+" },
  { icon: Smile, value: 25, label: "Happy Clients", suffix: "+" },
  { icon: CheckSquare, value: 78, label: "Completed Projects", suffix: "+" },
  { icon: Loader, value: 5, label: "Active Projects", suffix: "" },
];

function useCountUp(target: number, duration: number = 1500, active: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

const StatItem = ({ icon: Icon, value, label, suffix, active }: {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix: string;
  active: boolean;
}) => {
  const count = useCountUp(value, 1200, active);
  return (
    <div className="text-center group">
      <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors duration-300">
        <Icon size={26} className="text-gold" />
      </div>
      <div className="font-display text-5xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-white/60 font-body text-sm tracking-wide uppercase font-medium">
        {label}
      </div>
    </div>
  );
};

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-navy-dark border-y border-white/5" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
