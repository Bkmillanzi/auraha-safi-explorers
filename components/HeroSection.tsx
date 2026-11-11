"use client";
import { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import { asset } from "@/lib/basePath";
import DatePickerModal from "@/components/DatePickerModal";

const HERO_IMAGES = [
  "/freepik__a-shirtless-male-hiker-standing-on-a-rocky-cliff-e__42742.png",
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80", // Serengeti safari
  "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1600&q=80", // Zanzibar beach
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [dateLabel, setDateLabel] = useState("Any date");
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Automatically cycle through slides every 6.5 seconds with Ken Burns zoom
  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % HERO_IMAGES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const handleExplore = () => {
    const target = document.getElementById("packages") || document.getElementById("planner");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden" id="home">
      {/* Zooming Hero Background Slides */}
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === active ? "opacity-100 z-0" : "opacity-0 -z-10 pointer-events-none"
          }`}
        >
          {i === active && (
            <img
              src={asset(src)}
              alt="Tanzania Safari Expeditions"
              className="w-full h-full object-cover"
              style={{
                animation: `${i === 0 ? "zoom-in-flipped" : "zoom-in"} 7.5s ease-out forwards`,
              }}
              loading={i === 0 ? "eager" : "lazy"}
            />
          )}
        </div>
      ))}

      {/* Hero dark overlay for readability */}
      <div className="absolute inset-0 bg-black/45 z-[1]" />
      <div className="hero-overlay absolute inset-0 z-[2]" />

      {/* Hero Foreground Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-5xl mx-auto px-4 py-6 sm:px-10 sm:py-10">
          
          {/* Motto pill */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-white/90 text-xs sm:text-sm font-medium mb-5 sm:mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#D4975C] animate-pulse shrink-0" />
            <span className="italic font-light tracking-wide text-yellow-400">Pure exploration with endless joy</span>
            <span className="w-px h-3.5 bg-white/20" />
            <span className="text-white/70 text-xs not-italic">Arusha, Tanzania</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl font-black text-white leading-[1.05] mb-4 sm:mb-6 animate-fade-in-up-delay-1 drop-shadow-md">
            Tanzania Like
            <br />
            <span className="text-[#F59E0B] italic">Never Before</span>
            <br />
            Awaits You
          </h1>

          <p className="text-white/85 text-sm sm:text-xl max-w-2xl mx-auto mb-6 sm:mb-10 animate-fade-in-up-delay-2 font-sans font-normal leading-relaxed drop-shadow">
            Expertly crafted safaris, Kilimanjaro treks, and Zanzibar escapes — designed by Arusha locals who know every trail and sunrise.
          </p>

          {/* Search bar */}
          <div className="animate-fade-in-up-delay-3 max-w-3xl mx-auto">
            <div className="glass rounded-2xl p-2 flex flex-col sm:flex-row gap-2 shadow-2xl">
              
              {/* Destination Search Input */}
              <div className="flex-1 flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                <svg className="w-5 h-5 text-white/70 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Serengeti, Zanzibar, Kilimanjaro…"
                  className="bg-transparent text-white placeholder-white/60 outline-none flex-1 text-sm sm:text-base font-sans"
                />
              </div>

              {/* Exact Custom Gold Date Picker Trigger Button */}
              <button
                type="button"
                onClick={() => setShowDatePicker(true)}
                className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-3 text-white/80 text-sm sm:text-base hover:bg-white/20 transition-colors w-full sm:w-auto font-sans cursor-pointer group"
              >
                <svg className="w-5 h-5 text-white/70 group-hover:text-white shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className={selectedDate ? "text-amber-300 font-semibold" : ""}>{dateLabel}</span>
                {selectedDate && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDate("");
                      setDateLabel("Any date");
                    }}
                    className="ml-2 w-4 h-4 rounded-full bg-white/20 text-white flex items-center justify-center text-xs hover:bg-white/40"
                    title="Reset date"
                  >
                    ✕
                  </span>
                )}
              </button>

              {/* Explore CTA Button */}
              <Button
                onPress={handleExplore}
                className="bg-gradient-to-r from-[#B8722E] to-[#8B5220] text-white font-bold shadow-lg shadow-[#B8722E]/40 hover:scale-[1.02] transition-transform rounded-xl px-8 py-3"
                size="lg"
              >
                Explore
              </Button>
            </div>
          </div>

          {/* Trending tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 animate-fade-in-up-delay-3">
            <span className="text-white/60 text-xs sm:text-sm font-sans">Trending:</span>
            {["Serengeti", "Kilimanjaro", "Zanzibar", "Ngorongoro", "Tarangire"].map(tag => (
              <a
                key={tag}
                href="#destinations"
                className="px-3 py-1 rounded-full text-xs font-medium text-white/90 bg-white/10 hover:bg-white/20 transition-colors border border-white/15 hover:border-white/30"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Image switcher dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-[#F59E0B]" : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 z-10 animate-float">
        <span className="text-white/60 text-xs tracking-widest uppercase rotate-90 mb-4 font-sans font-semibold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </div>

      {/* Recovered "So, when is it?" Gold Date Picker Modal */}
      <DatePickerModal
        show={showDatePicker}
        value={selectedDate}
        onClose={() => setShowDatePicker(false)}
        onChange={(dateStr) => {
          setSelectedDate(dateStr);
          try {
            const [y, m, d] = dateStr.split("-").map(Number);
            const dateObj = new Date(y, m - 1, d);
            setDateLabel(dateObj.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }));
          } catch {
            setDateLabel(dateStr);
          }
          setShowDatePicker(false);
        }}
      />
    </section>
  );
}
