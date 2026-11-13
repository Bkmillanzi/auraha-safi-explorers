"use client";
import { useState } from "react";

interface ItineraryDay {
  day: number;
  title: string;
  desc: string;
}

interface PackageItem {
  id: number;
  name: string;
  category: "Northern Circuit" | "Bush & Beach" | "Mountain Treks" | "Southern Circuit";
  duration: string;
  route: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  badge: string;
  badgeColor: string;
  highlights: string[];
  includes: string[];
  itinerary: ItineraryDay[];
}

const PACKAGES: PackageItem[] = [
  {
    id: 1,
    name: "7-Day Serengeti Migration & Ngorongoro Caldera",
    category: "Northern Circuit",
    duration: "7 Days / 6 Nights",
    route: "Arusha → Tarangire → Central Serengeti → Ngorongoro Crater → Arusha",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    price: 3290,
    originalPrice: 3850,
    rating: 4.98,
    badge: "Most Requested",
    badgeColor: "bg-[#B8722E]",
    highlights: ["Wildebeest migration tracking in Seronera", "Black rhino search on Ngorongoro crater floor", "Elephant herds & ancient baobabs in Tarangire"],
    includes: [
      "Custom 4x4 Land Cruiser with pop-up roof & inverter",
      "All TANAPA park fees & Ngorongoro Crater permits",
      "AMREF Flying Doctors 500km emergency evacuation",
      "Full-board accommodation (Lodge / Luxury Tented)",
      "Certified native KPSGA English-speaking master guide",
      "Chilled mineral water & binoculars in vehicle",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Arusha", desc: "VIP reception at Kilimanjaro Airport (JRO), transfer to your boutique lodge in Arusha, and comprehensive expedition briefing." },
      { day: 2, title: "Tarangire National Park", desc: "Full-day game drive across Tarangire's ancient baobab valleys, tracking matriarch elephant families and tree-resting leopards." },
      { day: 3, title: "Journey to Serengeti via Ngorongoro", desc: "Drive through the lush crater highlands into the golden sea of the Serengeti. Late afternoon predator tracking in Seronera." },
      { day: 4, title: "Deep Serengeti Game Drives", desc: "Sunrise to dusk wildlife exploration. Track lion prides on granite kopjes, cheetah sprints, and migratory herds along riverbeds." },
      { day: 5, title: "Serengeti to Ngorongoro Rim", desc: "Morning game drive in Serengeti, followed by a scenic drive to your lodge perched on the rim of the UNESCO Ngorongoro Crater." },
      { day: 6, title: "Ngorongoro Crater Floor Descent", desc: "600m descent into the world's most dense wildlife sanctuary. Spot black rhinos, hippos, and pink flamingo lagoons." },
      { day: 7, title: "Mto wa Mbu Cultural Walk & Departure", desc: "Experience local village life in Mto wa Mbu, explore local artisan crafts, and transfer back to Arusha or JRO airport." },
    ],
  },
  {
    id: 2,
    name: "10-Day Bush to Beach: Serengeti Wildlife & Zanzibar",
    category: "Bush & Beach",
    duration: "10 Days / 9 Nights",
    route: "Arusha → Tarangire → Serengeti → Ngorongoro → Fly to Zanzibar (Stone Town & Nungwi)",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800&q=80",
    price: 4650,
    originalPrice: 5400,
    rating: 4.96,
    badge: "Signature Journey",
    badgeColor: "bg-[#1F5C3A]",
    highlights: ["Big Five wildlife safari followed by tropical turquoise coast", "Domestic bush flight straight to Zanzibar Island", "Mnemba Atoll dolphin snorkel & private sunset dhow cruise"],
    includes: [
      "Domestic scheduled flight from Serengeti/Arusha to Zanzibar",
      "5 Days full-board safari in custom 4x4 Land Cruiser",
      "4 Nights beachfront resort stay in Zanzibar (Half-Board)",
      "Guided Stone Town heritage & organic spice farm tours",
      "Private wooden dhow cruise to coral sandbanks",
      "All national park, conservation, and marine reserve fees",
    ],
    itinerary: [
      { day: 1, title: "Arusha Welcome", desc: "Arrive at JRO, transfer to your garden lodge, relax and prepare for the safari." },
      { day: 2, title: "Tarangire Wildlife Sanctuary", desc: "Game drives among giant baobabs, dense elephant herds, and raptors." },
      { day: 3, title: "Central Serengeti Plains", desc: "Enter the Serengeti through Naabi Hill Gate; afternoon game drive." },
      { day: 4, title: "Serengeti Big Cats", desc: "Full-day tracking of cheetahs, leopards, and wildebeest crossings." },
      { day: 5, title: "Ngorongoro Crater Safari", desc: "Descend into the caldera for prime Big Five encounters." },
      { day: 6, title: "Fly to Zanzibar Island", desc: "Scenic bush flight over Tanzania to Zanzibar. Check into boutique Stone Town hotel; evening street food tour." },
      { day: 7, title: "Stone Town & Spice Farm Tour", desc: "Explore carved doors, sultan palaces, and taste fresh vanilla, cloves, and nutmeg." },
      { day: 8, title: "Nungwi Beach Bliss", desc: "Transfer to northern white sand beaches. Relaxation and oceanfront dining." },
      { day: 9, title: "Mnemba Atoll Dhow Excursion", desc: "Private dhow sail, dolphin spotting, and snorkeling vibrant coral reefs." },
      { day: 10, title: "Farewell Paradise", desc: "Morning swim, souvenir shopping, and private transfer to Zanzibar Airport (ZNZ)." },
    ],
  },
  {
    id: 3,
    name: "8-Day Kilimanjaro Summit: Scenic Lemosho Route",
    category: "Mountain Treks",
    duration: "8 Days / 7 Nights",
    route: "Londorossi Gate → Shira Plateau → Barranco Wall → Barafu Base → Uhuru Peak (5,895m)",
    image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&q=80",
    price: 2780,
    originalPrice: 3300,
    rating: 4.97,
    badge: "92%+ Summit Rate",
    badgeColor: "bg-[#6B3A1F]",
    highlights: ["Gradual acclimatization profile through diverse climate zones", "Scramble up the iconic Great Barranco Wall", "Standing on Uhuru Peak 5,895m at sunrise"],
    includes: [
      "KPAP-certified guide, cook, and porter team with fair wages",
      "All Kilimanjaro National Park rescue & conservation fees",
      "Four-season stormproof mountain tents & private chemical toilet",
      "Pulse oximeters, emergency hyperbaric protocol, and oxygen",
      "Three hot nutritious chef-prepared meals daily on the mountain",
      "Official Kilimanjaro National Park summit certificate",
    ],
    itinerary: [
      { day: 1, title: "Londorossi Gate to Mti Mkubwa (2,650m)", desc: "Trek through lush rainforest with black-and-white colobus monkeys." },
      { day: 2, title: "Mti Mkubwa to Shira 1 Camp (3,610m)", desc: "Cross heath and moorland zones onto the vast volcanic Shira plateau." },
      { day: 3, title: "Shira 1 to Shira 2 Camp (3,850m)", desc: "Gentle acclimatization walk with panoramic vistas of Kibo's glaciers." },
      { day: 4, title: "Lava Tower (4,600m) to Barranco Camp (3,960m)", desc: "Crucial 'Climb High, Sleep Low' day. Hike to alpine desert before descending to the valley of giant senecios." },
      { day: 5, title: "Barranco Wall to Karanga Camp (4,035m)", desc: "Exciting non-technical scramble up the Barranco Wall followed by scenic ridges." },
      { day: 6, title: "Karanga to Barafu Summit Base (4,673m)", desc: "Hike into stark alpine desert. Early dinner and rest before midnight summit push." },
      { day: 7, title: "Summit Night: Uhuru Peak (5,895m) & Mweka Camp", desc: "Ascent by headlamp to Stella Point at dawn, then Uhuru Peak. Descend to Mweka Camp (3,100m)." },
      { day: 8, title: "Mweka Gate to Arusha", desc: "Final descent through rainforest, celebration with the mountain team, and transfer to Arusha." },
    ],
  },
  {
    id: 4,
    name: "5-Day Essential Northern Wilderness Highlights",
    category: "Northern Circuit",
    duration: "5 Days / 4 Nights",
    route: "Arusha → Tarangire → Lake Manyara → Ngorongoro Crater → Arusha",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
    price: 2350,
    originalPrice: 2800,
    rating: 4.92,
    badge: "Best Value",
    badgeColor: "bg-[#B8722E]",
    highlights: ["Tree-climbing lions & alkaline flamingo lake in Manyara", "Huge elephant concentrations in Tarangire", "Guaranteed Big Five game drives in Ngorongoro Caldera"],
    includes: [
      "Exclusive 4x4 Safari Land Cruiser with pop-up roof",
      "All park fees, concession fees, and caldera permits",
      "Full-board stay at hand-picked comfortable safari lodges",
      "Professional naturalist driver-guide",
      "AMREF Flying Doctors emergency insurance",
      "Airport transfers from/to Arusha or JRO",
    ],
    itinerary: [
      { day: 1, title: "Arusha to Tarangire National Park", desc: "Morning pickup and game drive amidst massive elephant herds and baobab trees." },
      { day: 2, title: "Lake Manyara National Park", desc: "Discover groundwater forests, baboon troops, and flamingos along the Rift Valley wall." },
      { day: 3, title: "Ngorongoro Crater Full Day", desc: "Early morning descent onto the crater floor for a 6-hour wildlife safari." },
      { day: 4, title: "Karatu Highland Walks & Coffee Tour", desc: "Visit an organic coffee plantation and local artisan market in Karatu." },
      { day: 5, title: "Return to Arusha & Airport Transfer", desc: "Scenic drive back to Arusha for your outbound travel or Zanzibar connection." },
    ],
  },
  {
    id: 5,
    name: "4-Day Southern Wild: Nyerere (Selous) River & Walking Safari",
    category: "Southern Circuit",
    duration: "4 Days / 3 Nights",
    route: "Dar es Salaam / Arusha → Nyerere National Park (Rufiji River) → Dar es Salaam",
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&q=80",
    price: 1890,
    originalPrice: 2250,
    rating: 4.89,
    badge: "Off The Beaten Path",
    badgeColor: "bg-[#1F5C3A]",
    highlights: ["Sunset boat safari on the Rufiji River among hippos & crocs", "Guided walking safari on foot with an armed national park ranger", "Africa's largest wilderness without safari vehicle crowds"],
    includes: [
      "Return transport or internal flight from Dar es Salaam / Arusha",
      "Riverfront safari lodge accommodation with full board",
      "Rufiji River boat safari & guided walking expedition",
      "All Nyerere National Park conservation fees",
      "Experienced southern circuit specialist guide",
    ],
    itinerary: [
      { day: 1, title: "Journey to Nyerere & Rufiji Boat Safari", desc: "Travel to Nyerere National Park. Afternoon boat safari on the great Rufiji River watching hippo pods and basking crocodiles." },
      { day: 2, title: "Full-Day Untamed Savannah Game Drive", desc: "Track wild dogs, lions, leopards, giraffes, and waterbucks through diverse lake systems." },
      { day: 3, title: "Armed Ranger Walking Safari", desc: "Step onto the savannah on foot with an armed ranger. Experience smells, tracks, and bush lore up close." },
      { day: 4, title: "Morning Bird Watching & Return", desc: "Final riverfront breakfast before transferring back to Dar es Salaam or catching your connection." },
    ],
  },
  {
    id: 6,
    name: "3-Day Short Wilderness Escapade (Tarangire & Ngorongoro)",
    category: "Northern Circuit",
    duration: "3 Days / 2 Nights",
    route: "Arusha → Tarangire National Park → Ngorongoro Crater → Arusha",
    image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80",
    price: 1380,
    originalPrice: 1650,
    rating: 4.94,
    badge: "Weekend Escape",
    badgeColor: "bg-[#6B3A1F]",
    highlights: ["Perfect short trip for business travelers and short layovers", "Dense wildlife encounters in two premier national parks", "Convenient start and end in Arusha"],
    includes: [
      "Private 4x4 Safari Land Cruiser with pop-up roof",
      "2 nights full-board accommodation in comfortable lodges",
      "All park entry and Ngorongoro Crater service fees",
      "Professional English-speaking driver-guide",
      "Bottled mineral water and picnic lunches",
    ],
    itinerary: [
      { day: 1, title: "Arusha to Tarangire National Park", desc: "Depart Arusha at 8:00 AM for a full day of game viewing in Tarangire, famous for its baobab trees and elephant families." },
      { day: 2, title: "The Ngorongoro Crater Descent", desc: "Early morning descent into the crater caldera. Explore the Lerai forest, Lake Magadi, and open savannah." },
      { day: 3, title: "Cultural Village Visit & Return to Arusha", desc: "Morning visit to a local Maasai cultural boma or artisan market, followed by return drive to Arusha." },
    ],
  },
];

const CATEGORIES = ["All Packages", "Northern Circuit", "Bush & Beach", "Mountain Treks", "Southern Circuit"] as const;

export default function PackagesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Packages");
  const [activePackage, setActivePackage] = useState<PackageItem | null>(null);

  const filtered = selectedCategory === "All Packages"
    ? PACKAGES
    : PACKAGES.filter(p => p.category === selectedCategory);

  return (
    <section className="py-24 bg-base-100" id="packages">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[#B8722E] font-bold text-xs uppercase tracking-[0.2em] mb-2">
            VALIDATED ITINERARIES
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#1B4332] tracking-tight mb-4">
            Curated Safari Packages & Expeditions
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Every itinerary is calibrated by our Arusha expedition team for realistic drive times, optimal wildlife viewing, ethical standards, and complete peace of mind.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-[#B8722E] text-white shadow-lg shadow-[#B8722E]/30 scale-105"
                  : "bg-base-200 text-base-content/65 hover:bg-base-300 hover:text-base-content"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(pkg => (
            <div
              key={pkg.id}
              className="card-hover rounded-3xl bg-base-100 border border-base-300 shadow-xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className={`absolute top-4 left-4 ${pkg.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
                    {pkg.badge}
                  </div>
                  <div className="absolute top-4 right-4 glass text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {pkg.duration}
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] uppercase tracking-wider text-amber-300 font-semibold">{pkg.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-base-content leading-snug mb-2">{pkg.name}</h3>
                  <p className="text-xs text-base-content/55 font-medium mb-4 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-[#B8722E] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {pkg.route}
                  </p>

                  <div className="space-y-2 mb-6">
                    {pkg.highlights.map(hl => (
                      <div key={hl} className="flex items-start gap-2 text-xs text-base-content/75">
                        <span className="w-4 h-4 rounded-full bg-[#1F5C3A]/15 text-[#1F5C3A] flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="p-6 pt-0 border-t border-base-200 mt-2">
                <div className="flex items-center justify-between pt-4 mb-4">
                  <div>
                    <span className="text-xs font-bold text-[#B8722E] tracking-wide uppercase block">Custom Itinerary</span>
                    <span className="text-[11px] text-base-content/50">Inquire for tailored quote</span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-xs font-bold text-[#B8722E]">
                      <span>★</span>
                      <span>{pkg.rating}</span>
                    </div>
                    <span className="text-[10px] text-base-content/40">Verified reviews</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <button
                    type="button"
                    onClick={() => setActivePackage(pkg)}
                    className="w-full py-2.5 px-3 rounded-xl border border-stone-300 hover:border-[#B8722E] bg-white hover:bg-stone-50 text-stone-800 text-xs font-bold transition-all duration-200 text-center flex items-center justify-center cursor-pointer shadow-sm"
                  >
                    View Itinerary
                  </button>
                  <a
                    href={`#planner?package=${encodeURIComponent(pkg.name)}`}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#B8722E] hover:bg-[#965A20] text-white text-xs font-bold transition-all duration-200 text-center flex items-center justify-center shadow-md hover:shadow-lg whitespace-nowrap"
                  >
                    Book / Inquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Itinerary Modal */}
        {activePackage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in-up">
            <div className="bg-base-100 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-base-300 p-6 sm:p-8 relative">
              <button
                onClick={() => setActivePackage(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-base-200 hover:bg-base-300 flex items-center justify-center text-base-content/70 hover:text-base-content"
              >
                ✕
              </button>

              <span className="text-xs font-bold uppercase tracking-wider text-[#B8722E]">{activePackage.category}</span>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-base-content mt-1 mb-2">
                {activePackage.name}
              </h3>
              <p className="text-xs sm:text-sm text-base-content/60 mb-6">
                {activePackage.duration} • {activePackage.route}
              </p>

              {/* Inclusions checklist */}
              <div className="bg-base-200/60 rounded-2xl p-4 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-base-content mb-3">All Inclusions (No Hidden Fees):</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activePackage.includes.map(inc => (
                    <div key={inc} className="flex items-center gap-2 text-xs text-base-content/80">
                      <span className="text-[#1F5C3A] font-bold">✓</span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day-by-Day timeline */}
              <h4 className="text-xs font-bold uppercase tracking-wider text-base-content mb-4">Detailed Day-by-Day Itinerary:</h4>
              <div className="space-y-4 mb-8">
                {activePackage.itinerary.map(day => (
                  <div key={day.day} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-[#B8722E] text-white text-xs font-bold flex items-center justify-center shrink-0">
                        D{day.day}
                      </div>
                      <div className="w-0.5 flex-1 bg-base-300 my-1" />
                    </div>
                    <div className="pb-3">
                      <h5 className="font-bold text-sm text-base-content">{day.title}</h5>
                      <p className="text-xs text-base-content/65 mt-1 leading-relaxed">{day.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-base-200">
                <div>
                  <span className="text-sm font-bold text-[#B8722E] uppercase tracking-wide block">Pricing On Request</span>
                  <span className="text-[11px] text-base-content/50">Tailored to season & group size</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setActivePackage(null)}
                    className="px-4 py-2 rounded-xl border border-stone-300 hover:bg-stone-100 text-stone-700 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <a
                    href="#planner"
                    onClick={() => setActivePackage(null)}
                    className="px-5 py-2 rounded-xl bg-[#B8722E] hover:bg-[#965A20] text-white text-xs font-bold transition-all shadow-md hover:shadow-lg whitespace-nowrap"
                  >
                    Customize This Tour
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
