import Image from "next/image";
import { asset } from "@/lib/basePath";

export default function Footer() {
  return (
    <footer className="bg-[#120A06] text-white/70 border-t border-white/5">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={asset("/logo.png")}
                alt="Auraha Safi Explorers"
                width={0}
                height={0}
                sizes="100vw"
                style={{ height: "54px", width: "auto" }}
                className="drop-shadow-md shrink-0"
              />
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-lg">Auraha Safi Explorers</span>
                <span className="text-yellow-400 text-[10px] tracking-widest uppercase italic">
                  Pure exploration with endless joy
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4 text-white/60">
              Locally owned and operated in Arusha, Tanzania. We specialize in custom-tailored private wildlife safaris, Mount Kilimanjaro expeditions, and Zanzibar coastal escapes with authentic Swahili warmth.
            </p>
            
            <div className="space-y-1.5 text-xs text-white/50 mb-6">
              <p>📍 Operations Hub: Arusha, Tanzania (Gateway to Northern Circuit)</p>
              <p>
                📞 Phone / WhatsApp:{" "}
                <a
                  href="https://wa.me/255658402886"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2 transition-colors"
                >
                  +255 658 402 886
                </a>
              </p>
              <p>✉️ Inquiries: info@aurahasafi.com | bookings@aurahasafi.com</p>
            </div>

            {/* Certifications badges */}
            <div className="flex flex-wrap gap-2 text-[10px] text-white/60 font-semibold">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">TATO Member</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">TANAPA Licensed</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">KPAP Aligned</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">AMREF Evac Partner</span>
            </div>
          </div>

          {/* Quick link columns */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4 tracking-wide uppercase text-xs text-[#D4975C]">Destinations</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#destinations" className="hover:text-white transition-colors">Serengeti National Park</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Ngorongoro Caldera</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Tarangire Baobabs</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Mount Kilimanjaro</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Zanzibar Spice Coast</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Nyerere / Selous Wild</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4 tracking-wide uppercase text-xs text-[#D4975C]">Safari Packages</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#packages" className="hover:text-white transition-colors">7-Day Serengeti Migration</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">10-Day Bush to Beach</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">8-Day Kilimanjaro Lemosho</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">5-Day Northern Highlights</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">4-Day Selous River Safari</a></li>
              <li><a href="#planner" className="hover:text-white transition-colors text-amber-400 font-semibold">Custom Itinerary Builder</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4 tracking-wide uppercase text-xs text-[#D4975C]">Safari Planning</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#why-us" className="hover:text-white transition-colors">The 4x4 Fleet Standard</a></li>
              <li><a href="#safari-styles" className="hover:text-white transition-colors">Safari Styles & Camps</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">Migration Timing Guide</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">Luggage & Flight Rules</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">Health & Visa Advice</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">Tipping Guidelines</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Auraha Safi Explorers Ltd. Registered in Arusha, Tanzania. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms & Booking Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Safety Standards</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
