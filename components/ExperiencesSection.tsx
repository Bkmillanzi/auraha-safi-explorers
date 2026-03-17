"use client";

const EXPERIENCES = [
  {
    id: 1, title: "Great Migration Game Drive", location: "Serengeti, Tanzania",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80",
    duration: "Full Day", groupSize: "2-6", price: 420, category: "Safari",
    color: "from-[#B8722E]/80",
  },
  {
    id: 2, title: "Kilimanjaro Summit Trek", location: "Kilimanjaro NP",
    image: "https://images.unsplash.com/photo-1573226137699-a6ec0a2f9b0c?w=600&q=80",
    duration: "7–9 Days", groupSize: "2-8", price: 2800, category: "Adventure",
    color: "from-[#6B3A1F]/80",
  },
  {
    id: 3, title: "Zanzibar Dhow Sunset Cruise", location: "Zanzibar Archipelago",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=600&q=80",
    duration: "3 hours", groupSize: "2-10", price: 180, category: "Luxury",
    color: "from-[#1F5C3A]/80",
  },
  {
    id: 4, title: "Ngorongoro Crater Day Tour", location: "Arusha Region",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&q=80",
    duration: "Full Day", groupSize: "2-7", price: 350, category: "Safari",
    color: "from-[#B8722E]/80",
  },
  {
    id: 5, title: "Maasai Village Cultural Visit", location: "Arusha, Tanzania",
    image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=600&q=80",
    duration: "4 hours", groupSize: "2-12", price: 95, category: "Cultural",
    color: "from-[#6B3A1F]/80",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Safari: "bg-[#B8722E]",
  Adventure: "bg-[#6B3A1F]",
  Luxury: "bg-[#1F5C3A]",
  Cultural: "bg-[#B8722E]/80",
};

export default function ExperiencesSection() {
  return (
    <section className="py-24 bg-base-200" id="experiences">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[#1F5C3A] font-semibold text-sm tracking-widest uppercase mb-3">Unique Moments</p>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-base-content">
              Curated
              <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#1F5C3A] to-[#6B3A1F]">Experiences</span>
            </h2>
          </div>
          <button className="self-start md:self-auto btn btn-outline border-base-content/20 hover:border-base-content/50 rounded-2xl px-8 font-semibold">
            View All Experiences →
          </button>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory -mx-2 px-2 scrollbar-hide">
          {EXPERIENCES.map(exp => (
            <div key={exp.id}
              className="shrink-0 w-72 sm:w-80 snap-start card-hover rounded-3xl overflow-hidden shadow-lg cursor-pointer">
              <div className="relative h-96">
                <img src={exp.image} alt={exp.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className={`absolute inset-0 bg-gradient-to-t ${exp.color} via-transparent to-transparent`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className={`absolute top-4 left-4 ${CATEGORY_COLORS[exp.category]} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
                  {exp.category}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display font-bold text-white text-xl leading-tight mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-1.5 text-white/65 text-sm mb-4">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {exp.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3 text-xs text-white/60">
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {exp.groupSize}
                      </span>
                    </div>
                    <span className="text-[#D4975C] font-bold text-lg">${exp.price.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
