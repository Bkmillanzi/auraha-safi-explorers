"use client";

const STYLES = [
  {
    title: "Luxury Tented Lodges",
    subtitle: "Wilderness immersion with 5-star elegance",
    description: "Fine dining under acacia canopies, private plunge pools, king-sized four-poster beds, and sunset cocktails overlooking active waterholes in the Serengeti.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
    features: ["Butler service & fine dining", "En-suite hot showers & bathtubs", "Eco-solar luxury camps"],
    tag: "Conscious Luxury",
  },
  {
    title: "Mid-Range Comfort Lodges",
    subtitle: "Authentic safari charm & outstanding value",
    description: "Hand-picked boutique safari lodges and permanent tented lodges providing warm Swahili hospitality, swimming pools, excellent meals, and prime park proximity.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    features: ["Comfortable private en-suite rooms", "Spectacular rift valley & plains vistas", "Family-friendly amenities"],
    tag: "Most Popular",
  },
  {
    title: "Bush-to-Beach Combos",
    subtitle: "Savannah Big Five meets Indian Ocean turquoise",
    description: "Witness the Great Migration on the Serengeti plains before flying directly to Zanzibar for spice tours, coral reef snorkeling at Mnemba Atoll, and dhow sunset sailing.",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800&q=80",
    features: ["Seamless bush flight connections", "Stone Town UNESCO historic walks", "Pristine white sand beaches"],
    tag: "Signature Journey",
  },
  {
    title: "Kilimanjaro Climbing",
    subtitle: "Summit the Roof of Africa (5,895m)",
    description: "Professionally guided expeditions via high-acclimatization routes (Lemosho, Machame) with wilderness medical kits, pulse oximeters, and fair-wage mountain crews.",
    image: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=800&q=80",
    features: ["92%+ Summit success profile", "Wilderness First Responder guides", "Four-season all-weather tents"],
    tag: "Bucket List",
  },
];

export default function SafariStylesSection() {
  return (
    <section className="py-20 lg:py-28 bg-stone-50" id="safari-styles">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[#B8722E] font-bold text-xs uppercase tracking-[0.2em] mb-2">
              TAILORED TO YOUR PACE
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#1B4332] tracking-tight">
              Choose Your Safari Style
            </h2>
          </div>
          <p className="max-w-md text-stone-600 text-xs sm:text-sm leading-relaxed">
            Every traveler is unique. Whether you crave the romance of a lantern-lit luxury tent, the thrill of summiting Kilimanjaro, or an authentic family lodge adventure, we tailor every detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STYLES.map((style) => (
            <div
              key={style.title}
              className="group card-hover rounded-2xl bg-white border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={style.image}
                    alt={style.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute top-3.5 left-3.5 text-[11px] font-bold px-3 py-1 rounded-md bg-[#B8722E] text-white shadow-sm">
                    {style.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">{style.title}</h3>
                  <p className="text-xs font-semibold text-[#B8722E] mb-3">{style.subtitle}</p>
                  <p className="text-stone-600 text-xs leading-relaxed mb-5">{style.description}</p>

                  <ul className="space-y-2 mb-2">
                    {style.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-stone-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="#planner"
                  className="w-full block text-center py-2.5 rounded-lg border border-stone-300 hover:border-[#F59E0B] hover:bg-[#F59E0B]/5 text-xs font-bold text-stone-800 hover:text-[#D97706] transition-colors"
                >
                  Inquire This Style →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
