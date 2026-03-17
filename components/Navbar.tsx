"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "glass-dark shadow-2xl py-3" : "py-5"
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/auraha-safi-explorers/logo.png" alt="Auraha Safi Explorers" width={0} height={0} sizes="100vw" style={{ height: "56px", width: "auto" }} className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-300 shrink-0" />
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold text-lg tracking-tight">Auraha Safi Explorers</span>
            <span className="text-yellow-400 text-[10px] tracking-widest uppercase">Pure exploration with endless joy</span>
          </div>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Destinations", "Experiences", "Packages", "Stories", "About"].map(item => (
            <Link key={item} href={`#${item.toLowerCase()}`}
              className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors hover:scale-105 transform duration-200">
              {item}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="light" className="text-white text-sm font-medium" size="sm">
            Sign In
          </Button>
          <Button
            className="bg-gradient-to-r from-[#B8722E] to-[#8B5220] text-white font-semibold shadow-lg shadow-[#B8722E]/30 hover:shadow-[#B8722E]/50 hover:scale-105"
            size="sm"
          >
            Plan a Trip
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden glass-dark mt-2 mx-4 rounded-2xl p-4 space-y-3">
          {["Destinations", "Experiences", "Packages", "Stories", "About"].map(item => (
            <Link key={item} href={`#${item.toLowerCase()}`}
              className="block text-white/80 hover:text-white py-2 px-3 rounded-xl hover:bg-white/10 text-sm font-medium transition-colors"
              onClick={() => setMenuOpen(false)}>
              {item}
            </Link>
          ))}
          <Button className="w-full bg-gradient-to-r from-[#B8722E] to-[#8B5220] text-white font-semibold" size="sm">
            Plan a Trip
          </Button>
        </div>
      )}
    </nav>
  );
}
