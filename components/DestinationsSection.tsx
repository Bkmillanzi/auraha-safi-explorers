"use client";
import { useState } from "react";

const CATEGORIES = ["All", "Safari", "Mountain", "Beach", "Cultural", "Nature"];

const DESTINATIONS = [
  {
    id: 1, name: "Serengeti", country: "Mara Region, Tanzania", category: "Safari",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    rating: 4.97, reviews: 3241, price: 2800, tag: "Most Iconic",
    tagColor: "bg-[#B8722E]",
    desc: "Witness the Great Migration — two million wildebeest crossing the golden plains in the world's greatest wildlife spectacle.",
  },
  {
    id: 2, name: "Zanzibar", country: "Zanzibar Archipelago", category: "Beach",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800&q=80",
    rating: 4.9, reviews: 4812, price: 1400, tag: "Best Escape",
    tagColor: "bg-[#1F5C3A]",
    desc: "Powder-white beaches, turquoise lagoons, and the labyrinthine spice-scented lanes of Stone Town UNESCO heritage.",
  },
  {
    id: 3, name: "Kilimanjaro", country: "Kilimanjaro Region", category: "Mountain",
    image: "https://images.unsplash.com/photo-1573226137699-a6ec0a2f9b0c?w=800&q=80",
    rating: 4.95, reviews: 1876, price: 3200, tag: "Roof of Africa",
    tagColor: "bg-[#6B3A1F]",
    desc: "Africa's highest peak at 5,895 m — a bucket-list summit rising above clouds into an eternal snow-capped crown.",
  },
  {
    id: 4, name: "Ngorongoro", country: "Arusha Region, Tanzania", category: "Safari",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
    rating: 4.95, reviews: 2103, price: 2400, tag: "Eden on Earth",
    tagColor: "bg-[#B8722E]",
    desc: "The world's largest intact volcanic caldera — a natural ark sheltering the Big Five within a 260 km² living Eden.",
  },
  {
    id: 5, name: "Tarangire", country: "Manyara Region, Tanzania", category: "Nature",
    image: "https://images.unsplash.com/photo-1551373884-8a04a80d4af7?w=800&q=80",
    rating: 4.85, reviews: 987, price: 1800, tag: "Hidden Gem",
    tagColor: "bg-[#1F5C3A]",
    desc: "Ancient baobabs, vast elephant herds, and rare dry-season river wildlife rivalling any park in Africa.",
  },
  {
    id: 6, name: "Stone Town", country: "Zanzibar City", category: "Cultural",
    image: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=800&q=80",
    rating: 4.8, reviews: 2341, price: 650, tag: "UNESCO Heritage",
    tagColor: "bg-[#6B3A1F]",
    desc: "Arab, Persian, Indian and African cultures fused into one labyrinthine city of carved doors, markets and history.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className={`w-3.5 h-3.5 ${i <= Math.floor(rating) ? "text-[#D4975C]" : "text-white/20"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function DestinationsSection() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? DESTINATIONS : DESTINATIONS.filter(d => d.category === active);

  return (
    <section className="py-24 bg-base-100" id="destinations">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-[#B8722E] font-semibold text-sm tracking-widest uppercase mb-3">Explore Tanzania</p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-base-content mb-4">
            Iconic
            <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#B8722E] to-[#1F5C3A]">Destinations</span>
          </h2>
          <p className="text-base-content/60 text-lg leading-relaxed">
            From the Serengeti&apos;s endless plains to Zanzibar&apos;s spice-scented shores — every destination curated by our Arusha-based experts.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map(cat => (
            <button key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? "bg-base-content text-base-100 shadow-lg scale-105"
                  : "bg-base-200 text-base-content/60 hover:bg-base-300 hover:text-base-content"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(dest => (
            <div key={dest.id} className="group card-hover rounded-3xl overflow-hidden shadow-md cursor-pointer">
              <div className="relative h-72 overflow-hidden">
                <img src={dest.image} alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className={`absolute top-4 left-4 ${dest.tagColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
                  {dest.tag}
                </div>
                <div className="absolute top-4 right-4 glass text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  From ${dest.price.toLocaleString()}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white">{dest.name}</h3>
                      <div className="flex items-center gap-1.5 text-white/70 text-sm mt-0.5">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {dest.country}
                      </div>
                    </div>
                    <div className="text-right">
                      <StarRating rating={dest.rating} />
                      <p className="text-white/60 text-xs mt-0.5">{dest.reviews.toLocaleString()} reviews</p>
                    </div>
                  </div>
                  <p className="text-white/65 text-sm mt-3 line-clamp-2 leading-relaxed">{dest.desc}</p>
                  <button className="mt-4 w-full glass text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-white/20 transition-colors">
                    Explore →
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
