"use client";

const PACKAGES = [
  {
    id: 1, name: "Serengeti Classic Safari", subtitle: "7 Days — Arusha → Serengeti → Ngorongoro",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    price: 3499, originalPrice: 4200, rating: 4.97,
    includes: ["Luxury tented camp", "Daily game drives", "Expert Swahili guide", "All meals & park fees"],
    badge: "Bestseller",
  },
  {
    id: 2, name: "Kilimanjaro Marangu Route", subtitle: "8 Days — Summit via Marangu",
    image: "https://images.unsplash.com/photo-1573226137699-a6ec0a2f9b0c?w=800&q=80",
    price: 2850, originalPrice: 3500, rating: 4.93,
    includes: ["Mountain hut accommodation", "Certified local guides", "All equipment hire", "Summit certificate"],
    badge: "Best Value",
  },
  {
    id: 3, name: "Zanzibar Luxury Retreat", subtitle: "10 Days — Safari + Beach Extension",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800&q=80",
    price: 4999, originalPrice: 6200, rating: 4.95,
    includes: ["5-star beachfront villa", "Private dhow excursion", "Spice farm tour", "Stone Town cultural walk"],
    badge: "Exclusive",
  },
];

export default function PackagesSection() {
  return (
    <section className="py-24 bg-base-100" id="packages">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#6B3A1F] font-semibold text-sm tracking-widest uppercase mb-3">Tailored for You</p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-base-content mb-4">
            Complete
            <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#6B3A1F] to-[#B8722E]">Travel Packages</span>
          </h2>
          <p className="text-base-content/60 text-lg">Everything included — transfers, camps, experiences, and memories that last a lifetime.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {PACKAGES.map(pkg => (
            <div key={pkg.id} className="card-hover rounded-3xl bg-base-100 border border-base-300 shadow-xl overflow-hidden cursor-pointer group">
              <div className="relative h-56 overflow-hidden">
                <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 left-4 bg-[#B8722E] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {pkg.badge}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-base-content">{pkg.name}</h3>
                <p className="text-base-content/50 text-sm mb-4">{pkg.subtitle}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.includes.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-base-content/70">
                      <span className="w-5 h-5 rounded-full bg-[#1F5C3A]/15 text-[#1F5C3A] flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-base-300">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-black text-base-content">${pkg.price.toLocaleString()}</span>
                      <span className="text-base-content/30 line-through text-sm">${pkg.originalPrice.toLocaleString()}</span>
                    </div>
                    <span className="text-xs text-base-content/40">per person</span>
                  </div>
                  <button className="btn rounded-2xl px-6 shadow-lg bg-[#B8722E] hover:bg-[#8B5220] text-white border-0">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
