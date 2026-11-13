"use client";
import { useState } from "react";

const CATEGORIES = ["All", "Northern Circuit", "Southern Circuit", "Islands & Coast", "Mountains"];

const DESTINATIONS = [
  {
    id: 1,
    name: "Serengeti National Park",
    circuit: "Northern Circuit",
    region: "Mara & Simiyu, Tanzania",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    rating: 4.98,
    reviews: 3840,
    price: 2890,
    tag: "Iconic Migration",
    tagColor: "bg-[#B8722E]",
    bestSeason: "July–Oct (River Crossings) | Jan–Mar (Calving)",
    wildlife: "Wildebeest Migration, Lions, Leopards, Cheetahs, Hyenas",
    desc: "14,763 km² of untamed golden plains. Witness two million wildebeest brave crocodile-infested rivers and track legendary predator prides across granite kopjes.",
  },
  {
    id: 2,
    name: "Ngorongoro Crater",
    circuit: "Northern Circuit",
    region: "Arusha Region, Tanzania",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
    rating: 4.97,
    reviews: 2950,
    price: 2450,
    tag: "UNESCO 8th Wonder",
    tagColor: "bg-[#1F5C3A]",
    bestSeason: "Year-Round Prime Game Viewing",
    wildlife: "Black Rhinos, Big Tusker Elephants, Hippo Pools, Flamingos",
    desc: "The world's largest unbroken volcanic caldera. A 600-meter deep sanctuary sheltering 25,000 large mammals and the rarest black rhinos in East Africa.",
  },
  {
    id: 3,
    name: "Tarangire National Park",
    circuit: "Northern Circuit",
    region: "Manyara Region, Tanzania",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80",
    rating: 4.88,
    reviews: 1420,
    price: 1850,
    tag: "Elephant Haven",
    tagColor: "bg-[#B8722E]",
    bestSeason: "June–November (Dry Season Gathering)",
    wildlife: "300+ Elephant Herds, Tree Leopards, Pythons, 550 Bird Species",
    desc: "Famous for colossal thousand-year-old baobab trees and the largest elephant herds on earth gathering along the life-giving Tarangire River.",
  },
  {
    id: 4,
    name: "Mount Kilimanjaro (5,895m)",
    circuit: "Mountains",
    region: "Kilimanjaro Region, Tanzania",
    image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&q=80",
    rating: 4.96,
    reviews: 2180,
    price: 2780,
    tag: "Roof of Africa",
    tagColor: "bg-[#6B3A1F]",
    bestSeason: "Jan–March & June–October (Clear Skies)",
    wildlife: "Colobus Monkeys, Alpine Raptors, Giant Senecio Flora",
    desc: "The highest free-standing mountain on Earth. Journey through five distinct ecological climate zones from equatorial rainforest to eternal glacial summit.",
  },
  {
    id: 5,
    name: "Zanzibar Archipelago",
    circuit: "Islands & Coast",
    region: "Unguja & Pemba, Tanzania",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800&q=80",
    rating: 4.93,
    reviews: 4610,
    price: 1490,
    tag: "Turquoise Spice Isle",
    tagColor: "bg-[#1F5C3A]",
    bestSeason: "June–October & December–March",
    wildlife: "Dolphins, Green Sea Turtles, Red Colobus Monkeys",
    desc: "Powder-white sand beaches, coral reefs at Mnemba Atoll, historic Stone Town UNESCO alleyways, and organic vanilla and clove plantations.",
  },
  {
    id: 6,
    name: "Nyerere National Park (Selous)",
    circuit: "Southern Circuit",
    region: "Pwani & Morogoro, Tanzania",
    image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80",
    rating: 4.91,
    reviews: 860,
    price: 2100,
    tag: "Untamed Riverlands",
    tagColor: "bg-[#6B3A1F]",
    bestSeason: "July–November (Best Boat & Walk Safaris)",
    wildlife: "African Wild Dogs, Rufiji Crocodiles, Hippo Pods, Lions",
    desc: "Africa's greatest raw wilderness. Experience sunset boat safaris on the Rufiji River and authentic walking safaris on foot alongside armed rangers.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i <= Math.floor(rating) ? "text-[#D4975C]" : "text-white/20"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function DestinationsSection() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? DESTINATIONS : DESTINATIONS.filter(d => d.circuit === active);

  return (
    <section className="py-24 bg-base-100" id="destinations">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-[#B8722E] font-bold text-xs uppercase tracking-[0.2em] mb-2">
            TANZANIA&apos;S CROWN JEWELS
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#1B4332] tracking-tight mb-4">
            Destinations & Circuits
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            From the endless savannahs of the Northern Circuit to the untouched riverlands of the South and the spice-scented Swahili shores.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? "bg-base-content text-base-100 shadow-lg scale-105"
                  : "bg-base-200 text-base-content/60 hover:bg-base-300 hover:text-base-content"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map(dest => (
            <div key={dest.id} className="group card-hover rounded-3xl overflow-hidden shadow-lg border border-base-200/80 bg-base-100 flex flex-col justify-between">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className={`absolute top-4 left-4 ${dest.tagColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
                  {dest.tag}
                </div>
                <div className="absolute top-4 right-4 glass text-[#D4975C] text-xs font-bold px-3 py-1.5 rounded-full">
                  Custom Itinerary
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-end justify-between mb-1">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">{dest.circuit}</span>
                      <h3 className="font-display text-2xl font-bold text-white">{dest.name}</h3>
                      <div className="flex items-center gap-1.5 text-white/70 text-xs mt-0.5">
                        <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {dest.region}
                      </div>
                    </div>
                    <div className="text-right">
                      <StarRating rating={dest.rating} />
                      <p className="text-white/60 text-[10px] mt-0.5">{dest.reviews.toLocaleString()} reviews</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-base-content/70 text-xs sm:text-sm leading-relaxed mb-4">{dest.desc}</p>
                  
                  <div className="space-y-1.5 text-[11px] bg-base-200/60 rounded-xl p-3 mb-4">
                    <p className="text-base-content/80">
                      <span className="font-bold text-[#B8722E]">Best Timing:</span> {dest.bestSeason}
                    </p>
                    <p className="text-base-content/80">
                      <span className="font-bold text-[#1F5C3A]">Key Wildlife:</span> {dest.wildlife}
                    </p>
                  </div>
                </div>

                <a
                  href="#planner"
                  className="w-full block text-center py-2.5 rounded-xl bg-base-200 hover:bg-[#B8722E] text-base-content hover:text-white text-xs font-bold transition-colors"
                >
                  Plan Safari to {dest.name.split(" ")[0]} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
