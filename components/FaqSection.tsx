"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "When is the best time to witness the Great Wildebeest Migration?",
    a: "The Great Migration is a year-round phenomenon: From July to October, herds cross the dramatic crocodile-filled Mara River in Northern Serengeti into Kenya's Masai Mara. From January to March, the herds gather on the short-grass plains of Southern Serengeti (Ndutu) for the calving season, where over 8,000 calves are born daily, attracting immense predator action.",
  },
  {
    q: "Are national park fees and crater permits included in your prices?",
    a: "Yes, 100%. All Auraha Safi proposals are fully inclusive of TANAPA national park entrance fees, Ngorongoro Crater descent vehicle fees, concession fees, camping/lodge fees, transit permits, and 18% Tanzanian government VAT. You will never be surprised by unexpected gate fees.",
  },
  {
    q: "What luggage restrictions apply for internal safari flights?",
    a: "Domestic bush flights (such as flights between Serengeti, Arusha, and Zanzibar operated on Cessna Caravans) enforce a strict baggage limit of 15 kg (33 lbs) per passenger in soft-sided duffle bags without rigid frames or hard wheels. Excess luggage can be stored securely and free of charge at our Arusha operations office.",
  },
  {
    q: "What health precautions and vaccinations are required for Tanzania?",
    a: "A Yellow Fever vaccination certificate is mandatory if you are arriving from or transiting through a country with risk of yellow fever transmission (for more than 12 hours). We strongly recommend consulting your travel clinic for anti-malarial medication, tetanus, and hepatitis vaccines prior to travel.",
  },
  {
    q: "What is standard tipping etiquette in Tanzania?",
    a: "Tipping is customary and deeply appreciated: For private safari driver-guides, the industry norm is $15 to $25 USD per vehicle per day from the group. On Kilimanjaro treks, recommend $20–$25 USD/day for the lead guide, $12–$15/day for assistant guides, and $8–$10/day per porter. Safari lodges usually feature a communal staff tip box ($5–$10 USD per room/night).",
  },
  {
    q: "Can you accommodate dietary requirements (vegan, gluten-free, halal)?",
    a: "Absolutely. All our partnered lodges and mobile bush chefs cater to specialized dietary preferences including vegetarian, vegan, lactose-free, celiac/gluten-free, kosher-style, and halal. Please advise us during your initial booking so our culinary team can prepare in advance.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-24 bg-base-100" id="faqs">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-[#B8722E] font-bold text-xs uppercase tracking-[0.2em] mb-2">
            EXPERT TRAVEL GUIDANCE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#1B4332] tracking-tight mb-4">
            Frequently Asked Safari Questions
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Essential facts, seasonal timing, health requirements, and packing tips validated by our local Arusha guides.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-base-300 bg-base-100 overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 font-display font-bold text-base-content text-base sm:text-lg hover:text-[#B8722E] transition-colors"
              >
                <span>{faq.q}</span>
                <span className={`w-8 h-8 rounded-full bg-base-200 flex items-center justify-center shrink-0 text-sm font-bold transition-transform duration-300 ${openIndex === idx ? "rotate-180 bg-[#B8722E] text-white" : ""}`}>
                  ↓
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 pt-1 text-sm text-base-content/70 leading-relaxed border-t border-base-200/50 animate-fade-in-up">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
