"use client";

const TESTIMONIALS = [
  {
    id: 1, name: "Sarah Chen", role: "Wildlife Photographer", avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    destination: "Serengeti, Tanzania", rating: 5,
    quote: "Auraha Safi Explorers transformed a lifelong dream into the most magical two weeks of my life. Witnessing the Great Migration up close, with our expert guide narrating every moment — I've travelled to 40+ countries and this was truly extraordinary.",
  },
  {
    id: 2, name: "Marcus Rodriguez", role: "Adventure Enthusiast", avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    destination: "Mount Kilimanjaro", rating: 5,
    quote: "Summiting Kilimanjaro with Auraha Safi was everything I hoped for and more. The team's safety protocols, acclimatisation knowledge, and relentless encouragement got me to Uhuru Peak. No other company could have pulled this off so flawlessly.",
  },
  {
    id: 3, name: "Amelia Park", role: "Luxury Travel Blogger", avatar: "https://randomuser.me/api/portraits/women/67.jpg",
    destination: "Zanzibar, Tanzania", rating: 5,
    quote: "I write about luxury travel professionally and Auraha Safi Explorers genuinely raises the bar. The Zanzibar extension — private dhow at sunset, authentic Swahili dinner, spice farm at dawn — felt completely real, not touristy at all. Worth every shilling.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#D4975C] font-semibold text-sm tracking-widest uppercase mb-3">Real Stories</p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-4">
            Travelers Love
            <br />
            <span className="italic text-[#D4975C]">What We Create</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div key={t.id}
              className={`glass rounded-3xl p-8 ${idx === 1 ? "md:-mt-6 md:shadow-2xl" : ""}`}>
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#D4975C]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/75 leading-relaxed mb-8 relative">
                <span className="absolute -top-3 -left-1 text-5xl text-[#D4975C]/30 font-display font-black">&ldquo;</span>
                {t.quote}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-amber-400/50" />
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-white/50 text-xs">{t.role}</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-xs text-[#D4975C] font-medium">{t.destination}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
