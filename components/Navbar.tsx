"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/basePath";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About Tanzania", href: "#about-tanzania" },
  { name: "Safari Packages", href: "#packages" },
  { name: "Destinations", href: "#destinations" },
  { name: "Safari Styles", href: "#safari-styles" },
  { name: "Why Us", href: "#why-us" },
  { name: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-stone-200/90 shadow-md py-3"
          : "bg-gradient-to-b from-black/70 via-black/35 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-10 xl:px-14 flex items-center justify-between gap-4 lg:gap-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <Image
            src={asset("/logo.png")}
            alt="Auraha Safi Explorers"
            width={0}
            height={0}
            sizes="100vw"
            style={{ height: "46px", width: "auto" }}
            className="group-hover:scale-105 transition-transform duration-300 shrink-0 drop-shadow-md"
          />
          <div className="flex flex-col leading-none">
            <span
              className={`font-extrabold text-base sm:text-lg tracking-tight font-sans transition-colors whitespace-nowrap ${
                scrolled ? "text-stone-900" : "text-white drop-shadow"
              }`}
            >
              Auraha Safi Explorers
            </span>
            <span
              className={`text-[10px] tracking-wider uppercase font-semibold mt-0.5 transition-colors whitespace-nowrap ${
                scrolled ? "text-[#B8722E]" : "text-yellow-400 drop-shadow"
              }`}
            >
              Pure exploration with endless joy
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-7">
          {NAV_LINKS.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold tracking-normal whitespace-nowrap transition-colors ${
                scrolled
                  ? "text-stone-700 hover:text-[#B8722E]"
                  : "text-white/90 hover:text-white drop-shadow"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right CTA / Action Buttons */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href="https://wa.me/255658402886"
            target="_blank"
            rel="noopener noreferrer"
            className={`whitespace-nowrap text-xs font-semibold rounded-full px-3.5 py-2 flex items-center gap-1.5 shrink-0 transition-colors ${
              scrolled
                ? "text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300"
                : "text-white bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-sm"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="whitespace-nowrap font-medium">+255 658 402 886</span>
          </a>
          <a
            href="#planner"
            className="whitespace-nowrap bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all shrink-0"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={`lg:hidden p-2 rounded-lg focus:outline-none transition-colors ${
            scrolled ? "text-stone-800 hover:bg-stone-100" : "text-white hover:bg-white/10"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-4 space-y-3 shadow-2xl">
          {NAV_LINKS.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-stone-700 hover:text-[#B8722E] py-2 text-sm font-semibold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <a
              href="https://wa.me/255658402886"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold text-xs py-2.5 rounded-lg flex items-center justify-center gap-2 shadow-sm"
              onClick={() => setMenuOpen(false)}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>WhatsApp: +255 658 402 886</span>
            </a>
            <a
              href="#planner"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-lg shadow-sm"
            >
              Book Now / Custom Safari
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
