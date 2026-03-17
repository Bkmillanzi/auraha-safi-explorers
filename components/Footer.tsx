import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1A0E08] text-white/60">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <Image src="/auraha-safi-explorers/logo.png" alt="Auraha Safi Explorers" width={0} height={0} sizes="100vw" style={{ height: "56px", width: "auto" }} className="drop-shadow-md shrink-0" />
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-lg">Auraha Safi Explorers</span>
                <span className="text-yellow-400 text-[10px] tracking-widest uppercase italic">Pure exploration with endless joy</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-2 mt-4">
              Arusha-based travel experts crafting authentic East African adventures since 2009. Your journey begins here.
            </p>
            <p className="text-xs text-white/30 mb-6">📍 Arusha, Tanzania</p>
            <div className="flex gap-3">
              {["instagram", "twitter", "facebook", "youtube"].map(social => (
                <a key={social} href="#" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#B8722E]/30 flex items-center justify-center transition-colors">
                  <span className="text-xs capitalize">{social[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: "Destinations",
              links: ["Serengeti", "Kilimanjaro", "Zanzibar", "Ngorongoro", "Tarangire", "Lake Manyara"],
            },
            {
              title: "Experiences",
              links: ["Safari & Game Drives", "Mountain Trekking", "Beach Getaways", "Cultural Tours", "Bird Watching", "Photography Tours"],
            },
            {
              title: "Company",
              links: ["About Us", "Careers", "Press", "Partners", "Sustainability", "Contact"],
            },
          ].map(col => (
            <div key={col.title}>
              <h4 className="font-bold text-white text-sm mb-4 tracking-wide">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Auraha Safi Explorers Ltd. Arusha, Tanzania. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
