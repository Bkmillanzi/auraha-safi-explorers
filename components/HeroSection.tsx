"use client";
import { useState } from "react";
import { Button } from "@heroui/react";

const HERO_IMAGES = [
    "/freepik__a-shirtless-male-hiker-standing-on-a-rocky-cliff-e__42742.png",
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80", // Serengeti safari
  "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1600&q=80", // Zanzibar beach
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [search, setSearch] = useState("");

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden" id="home">
      {HERO_IMAGES.map((src, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"}`}>
          <img src={src.startsWith("/") ? `/auraha-safi-explorers${src}` : src} alt="" className={`w-full h-full object-cover${i === 0 ? " -scale-x-100" : ""}`} loading={i === 0 ? "eager" : "lazy"} />
        </div>
      ))}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-5xl mx-auto px-8 py-10 sm:px-14 sm:py-14">
          {/* Motto pill */}
          <div className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full text-white/90 text-sm font-medium mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#D4975C] animate-pulse shrink-0" />
            <span className="italic font-light tracking-wide text-yellow-400">Pure exploration with endless joy</span>
            <span className="w-px h-3.5 bg-white/20" />
            <span className="text-white/60 text-xs not-italic">Arusha, Tanzania</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-black text-white leading-[1.05] mb-6 animate-fade-in-up-delay-1">
            Tanzania Like
            <br />
            <span className="italic text-[#D4975C]">Never Before</span>
            <br />
            Awaits You
          </h1>

          <p className="text-white/75 text-lg sm:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up-delay-2">
            Expertly crafted safaris, Kilimanjaro treks, and Zanzibar escapes — designed by Arusha locals who know every trail and sunrise.
          </p>

          {/* Search bar */}
          <div className="animate-fade-in-up-delay-3 max-w-3xl mx-auto">
            <div className="glass rounded-2xl p-2 flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                <svg className="w-5 h-5 text-white/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Serengeti, Zanzibar, Kilimanjaro…"
                  className="bg-transparent text-white placeholder-white/50 outline-none flex-1 text-sm sm:text-base"
                />
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-3">
                <svg className="w-5 h-5 text-white/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-white/60 text-sm sm:text-base">Any date</span>
              </div>
              <Button
                className="bg-gradient-to-r from-[#B8722E] to-[#8B5220] text-white font-bold shadow-lg shadow-[#B8722E]/40 hover:scale-[1.02] transition-transform rounded-xl px-8 py-3"
                size="lg"
              >
                Explore
              </Button>
            </div>
          </div>

          {/* Trending tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 animate-fade-in-up-delay-3">
            <span className="text-white/50 text-sm">Trending:</span>
            {["Serengeti", "Kilimanjaro", "Zanzibar", "Ngorongoro", "Tarangire"].map(tag => (
              <button key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium text-white/80 bg-white/10 hover:bg-white/20 transition-colors border border-white/10 hover:border-white/30">
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Image switcher dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {HERO_IMAGES.map((_, i) => (
          <button key={i} onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-[#D4975C]" : "w-2 bg-white/40 hover:bg-white/70"}`} />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 z-10 animate-float">
        <span className="text-white/50 text-xs tracking-widest uppercase rotate-90 mb-4">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
