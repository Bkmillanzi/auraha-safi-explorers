"use client";

const PILLARS = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#B8722E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "AMREF Flying Doctors Included",
    description: "Your safety is non-negotiable. Every traveler receives emergency aero-medical air ambulance evacuation coverage across all remote Tanzania national parks.",
    badge: "Safety Assured",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#B8722E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Custom 4x4 Safari Cruisers",
    description: "Modified Toyota Land Cruisers with pop-up photography roofs, guaranteed window seats, inverter charging sockets, 40L fridge, and high-spec binoculars.",
    badge: "The Fleet Standard",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#B8722E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Native Master Guides (TATO/KPSGA)",
    description: "Born and raised in Tanzania with 10+ years field tracking experience. Expert wildlife behaviorists, birding specialists, and warm Swahili hosts.",
    badge: "Local Maestros",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#B8722E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
    title: "100% Transparent All-Inclusive",
    description: "Zero surprise park fees at the gate. All TANAPA conservation permits, Ngorongoro caldera vehicle fees, concession taxes, and 18% VAT are explicitly covered.",
    badge: "No Hidden Costs",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#B8722E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Ethical Mountain & Porter Welfare",
    description: "We strictly adhere to KPAP fair-wage guidelines on Kilimanjaro and Meru: nutritious meals, warm gear, regulated load weights, and fair compensation.",
    badge: "KPAP Aligned",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#B8722E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "24/7 Tailor-Made Concierge",
    description: "Direct WhatsApp support with your personal safari designer in Arusha from initial flight planning to your last sunset cocktail in Zanzibar.",
    badge: "Personal Touch",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-stone-200/80" id="why-us">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[#B8722E] font-bold text-xs uppercase tracking-[0.2em] mb-2">
            THE AURAHA SAFI STANDARD
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#1B4332] tracking-tight mb-4">
            Why Discerning Travelers Choose Us
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            In Swahili, <span className="font-semibold text-stone-900">Raha Safi</span> means pure, untainted joy. We don&apos;t just sell packages — we craft seamless, safe, and deeply personal East African expeditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="card-hover rounded-2xl bg-stone-50/60 p-8 border border-stone-200/90 shadow-sm hover:shadow-md relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#B8722E]/10 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">{pillar.title}</h3>
                <p className="text-stone-600 text-xs leading-relaxed mb-4">{pillar.description}</p>
              </div>
              <div className="pt-3 border-t border-stone-200/80 flex items-center text-[11px] font-semibold text-[#B8722E]">
                <span>Verified Quality Standard</span>
                <span className="ml-1.5">✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
