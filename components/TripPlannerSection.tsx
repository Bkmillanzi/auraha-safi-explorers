"use client";
import { useState } from "react";
import { Button } from "@heroui/react";

export default function TripPlannerSection() {
  const [circuit, setCircuit] = useState("Northern Circuit (Serengeti & Ngorongoro)");
  const [style, setStyle] = useState("Mid-Range Comfort");
  const [duration, setDuration] = useState("7–9 Days");
  const [travelers, setTravelers] = useState("2 Guests (Couple)");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-base-200 via-base-100 to-base-200" id="planner">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto rounded-[2.5rem] bg-base-100 border border-base-300 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Left Info Panel */}
            <div className="lg:col-span-2 bg-[#1A0E08] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-[#B8722E]/20 rounded-full blur-3xl" />
              <div className="relative z-10">
                <span className="text-xs uppercase font-bold tracking-widest text-[#D4975C]">Personalized Safaris</span>
                <h3 className="font-display text-3xl font-black mt-2 mb-4 leading-tight">
                  Design Your
                  <br />
                  <span className="italic text-[#D4975C]">Dream Safari</span>
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6">
                  Tell our Arusha-based safari architects your wishes. We will craft a bespoke, private itinerary with exact logistics, guaranteed 4x4 Land Cruiser, and honest pricing.
                </p>

                <div className="space-y-4 text-xs text-white/80 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#B8722E]/30 text-[#D4975C] flex items-center justify-center font-bold">1</span>
                    <span>Direct proposal within 12–24 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#B8722E]/30 text-[#D4975C] flex items-center justify-center font-bold">2</span>
                    <span>100% Tailor-made with unlimited revisions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#B8722E]/30 text-[#D4975C] flex items-center justify-center font-bold">3</span>
                    <span>Dedicated local safari host in Arusha</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-8 mt-8 border-t border-white/10 text-xs text-white/50">
                <p className="font-semibold text-white/80">Need instant advice?</p>
                <p className="mt-1">
                  WhatsApp / Call:{" "}
                  <a
                    href="https://wa.me/255658402886"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2 transition-colors"
                  >
                    +255 658 402 886
                  </a>
                </p>
                <p>Email: info@aurahasafi.com</p>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-3 p-8 sm:p-10">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#1F5C3A]/20 text-[#1F5C3A] flex items-center justify-center text-2xl font-bold mb-4">
                    ✓
                  </div>
                  <h4 className="font-display text-2xl font-black text-base-content mb-2">Asante Sana, {name}!</h4>
                  <p className="text-base-content/70 text-sm max-w-sm mb-6">
                    Your custom safari request has been received by our Arusha team. We are preparing your tailored proposal and will reach out shortly.
                  </p>
                  <Button
                    onPress={() => setSubmitted(false)}
                    variant="bordered"
                    size="sm"
                    className="rounded-xl text-xs font-semibold"
                  >
                    Send Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h4 className="font-display text-xl font-bold text-base-content mb-2">Safari Preferences</h4>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-base-content/70 mb-1.5">
                      1. Preferred Destination / Circuit
                    </label>
                    <select
                      value={circuit}
                      onChange={e => setCircuit(e.target.value)}
                      className="w-full bg-base-200 text-base-content text-xs rounded-xl px-4 py-3 border border-base-300 outline-none focus:ring-2 focus:ring-[#B8722E]"
                    >
                      <option>Northern Circuit (Serengeti, Ngorongoro, Tarangire)</option>
                      <option>Bush & Beach Combo (Serengeti + Zanzibar)</option>
                      <option>Mount Kilimanjaro Summit Trek</option>
                      <option>Southern Circuit (Nyerere / Selous & Mikumi)</option>
                      <option>Complete Tanzania Discovery (Safari, Peak & Coast)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-base-content/70 mb-1.5">
                        2. Safari Style
                      </label>
                      <select
                        value={style}
                        onChange={e => setStyle(e.target.value)}
                        className="w-full bg-base-200 text-base-content text-xs rounded-xl px-4 py-3 border border-base-300 outline-none focus:ring-2 focus:ring-[#B8722E]"
                      >
                        <option>Luxury Tented Camp & Lodges</option>
                        <option>Mid-Range Comfort Lodges</option>
                        <option>Honeymoon & Romantic Escape</option>
                        <option>Adventure Camping Safari</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-base-content/70 mb-1.5">
                        3. Duration
                      </label>
                      <select
                        value={duration}
                        onChange={e => setDuration(e.target.value)}
                        className="w-full bg-base-200 text-base-content text-xs rounded-xl px-4 py-3 border border-base-300 outline-none focus:ring-2 focus:ring-[#B8722E]"
                      >
                        <option>3–5 Days (Quick Escape)</option>
                        <option>6–8 Days (Classic Safari)</option>
                        <option>9–12 Days (Deep Exploration)</option>
                        <option>13+ Days (Grand Tanzania)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-base-content/70 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="e.g. David Miller"
                        className="w-full bg-base-200 text-base-content text-xs rounded-xl px-4 py-3 border border-base-300 outline-none focus:ring-2 focus:ring-[#B8722E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-base-content/70 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="david@example.com"
                        className="w-full bg-base-200 text-base-content text-xs rounded-xl px-4 py-3 border border-base-300 outline-none focus:ring-2 focus:ring-[#B8722E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-base-content/70 mb-1.5">
                        WhatsApp / Phone
                      </label>
                      <input
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-base-200 text-base-content text-xs rounded-xl px-4 py-3 border border-base-300 outline-none focus:ring-2 focus:ring-[#B8722E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-base-content/70 mb-1.5">
                        Group Size
                      </label>
                      <select
                        value={travelers}
                        onChange={e => setTravelers(e.target.value)}
                        className="w-full bg-base-200 text-base-content text-xs rounded-xl px-4 py-3 border border-base-300 outline-none focus:ring-2 focus:ring-[#B8722E]"
                      >
                        <option>1 Solo Traveler</option>
                        <option>2 Guests (Couple)</option>
                        <option>Family (3–5 Guests)</option>
                        <option>Group (6+ Guests)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-base-content/70 mb-1.5">
                      Special Requests / Dates of Travel
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="Share your preferred travel dates, wildlife goals (e.g. Great Migration river crossing), dietary requirements, or special milestones..."
                      className="w-full bg-base-200 text-base-content text-xs rounded-xl px-4 py-3 border border-base-300 outline-none focus:ring-2 focus:ring-[#B8722E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#B8722E] to-[#8B5220] text-white text-sm font-bold shadow-lg shadow-[#B8722E]/30 hover:scale-[1.01] transition-transform"
                  >
                    Request Custom Proposal & Quote →
                  </button>
                  <p className="text-[11px] text-center text-base-content/50">
                    No obligation. Direct reply from our certified safari planners in Arusha.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
