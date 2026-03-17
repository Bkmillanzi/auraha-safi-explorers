"use client";
import { useEffect, useRef, useState } from "react";

function Counter({ target, suffix = "" }: Readonly<{ target: number; suffix?: string }>) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          setCount(Math.floor(current));
          if (current >= target) clearInterval(timer);
        }, 16);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref}>{count.toLocaleString()}{suffix}</div>;
}

const STATS = [
  { label: "Happy Travelers", value: 48000, suffix: "+" },
  { label: "Destinations Covered", value: 120, suffix: "+" },
  { label: "Expert Guides", value: 340, suffix: "+" },
  { label: "Years of Excellence", value: 15, suffix: "" },
];

export default function StatsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80"
          alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#D4975C] font-semibold text-sm tracking-widest uppercase mb-3">Our Impact</p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white">
            Trusted by Thousands
            <br />
            <span className="italic text-[#D4975C]">of Explorers</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map(stat => (
            <div key={stat.label} className="text-center glass rounded-3xl p-8">
              <div className="font-display text-4xl sm:text-5xl font-black text-white mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/60 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
