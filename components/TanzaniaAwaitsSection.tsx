"use client";

export default function TanzaniaAwaitsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="about-tanzania">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 3-Image Collage (exact match to Obag style) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-4">
              {/* Main large vertical image: Hot Air Balloon over Serengeti */}
              <div className="col-span-7 h-[420px] sm:h-[480px] rounded-2xl overflow-hidden shadow-lg group">
                <img
                  src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80"
                  alt="Hot Air Balloon Safari over Serengeti wildlife"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Right column with 2 stacked images */}
              <div className="col-span-5 flex flex-col gap-4">
                {/* Top image: Mount Kilimanjaro Hikers */}
                <div className="h-[200px] sm:h-[232px] rounded-2xl overflow-hidden shadow-md group">
                  <img
                    src="https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=800&q=80"
                    alt="Mount Kilimanjaro Trekkers"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                {/* Bottom image: Zanzibar Sunset Dhow */}
                <div className="h-[204px] sm:h-[232px] rounded-2xl overflow-hidden shadow-md group relative">
                  <img
                    src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800&q=80"
                    alt="Zanzibar Sunset Dhow Sailing"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute bottom-3 left-3 text-[10px] uppercase font-bold tracking-wider bg-black/60 text-white px-2.5 py-1 rounded-full backdrop-blur-sm">
                    Zanzibar Coast
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial & 2x2 Highlights Grid */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Overline */}
            <p className="text-[#B8722E] font-bold text-xs uppercase tracking-[0.2em] mb-2">
              THE JEWEL OF AFRICA
            </p>

            {/* Heading with accent underline */}
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1B4332] tracking-tight leading-tight">
                Tanzania Awaits
              </h2>
              <div className="hidden sm:block h-[3px] w-16 bg-[#B8722E] rounded-full mt-2" />
            </div>

            {/* Description paragraph */}
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
              Tanzania is Africa&apos;s visual masterpiece, a country of extraordinary natural beauty and wildlife diversity. From the endless golden plains of the Serengeti to the snow-capped peak of Kilimanjaro and the turquoise spice beaches of Zanzibar, Tanzania offers some of the most spectacular landscapes on Earth.
            </p>

            {/* 2x2 Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {/* Feature 1 */}
              <div className="flex gap-3.5 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#B8722E]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#B8722E]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-stone-900 text-sm mb-1">Wildlife Wonderland</h3>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    Home to 20% of Africa&apos;s large mammals across 22 national parks and 38 protected game reserves.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-3.5 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#B8722E]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#B8722E]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-stone-900 text-sm mb-1">Perfect Climate</h3>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    Year-round warm weather with distinct dry and green seasons ideal for wildlife tracking and beach holidays.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-3.5 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#B8722E]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#B8722E]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-stone-900 text-sm mb-1">Cultural Richness</h3>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    Over 120 ethnic groups with rich traditions, including the iconic Maasai warriors and Hadzabe hunters.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-3.5 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#B8722E]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#B8722E]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-stone-900 text-sm mb-1">UNESCO Sites</h3>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    7 UNESCO World Heritage Sites including the Serengeti, Ngorongoro Crater, and Mount Kilimanjaro.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button matching Obag's orange pill button */}
            <div>
              <a
                href="#packages"
                className="inline-flex items-center gap-2.5 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Learn More About Tanzania Safaris</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
