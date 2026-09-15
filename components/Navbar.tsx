"use client";

import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const navLinksEn = [
    { label: 'Services', href: '#what-we-do' },
    { label: 'How It Works', href: '#how-we-do-it' },
    { label: 'Pricing', href: '#pricing' }
  ];

  const navLinksEs = [
    { label: 'Servicios', href: '#what-we-do' },
    { label: 'Cómo Funciona', href: '#how-we-do-it' },
    { label: 'Precios', href: '#pricing' }
  ];

  const navLinks = language === "en" ? navLinksEn : navLinksEs;

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (latest > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, [scrollY]);

  return (
    <div className={`fixed inset-x-0 top-0 z-50 flex justify-center p-6 md:p-8 transition-all duration-500 pointer-events-none`}>
      <div className={`flex flex-row items-center justify-center gap-2 md:gap-4 transition-transform duration-500 ${isScrolled ? 'scale-90 -translate-y-2' : 'scale-100'}`}>
        
        {/* Bubble 1: Logo — High-Tech Dark Glass */}
        <motion.div layout className="pointer-events-auto flex h-14 items-center justify-center rounded-full bg-black/40 border border-white/10 px-6 backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:bg-white/10">
          <Link href="/" className="flex items-center">
            <span className="text-lg md:text-xl font-black tracking-tight text-white">
              Kraft<span className="text-pink-500">Nova</span>
            </span>
          </Link>
        </motion.div>

        {/* Bubble 2: Desktop Nav — High-Tech Dark Glass */}
        <motion.nav layout className="pointer-events-auto hidden md:flex h-14 items-center rounded-full bg-black/40 border border-white/10 px-6 backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all hover:bg-white/10 flex-row gap-2">
          {navLinks.map((item) => (
            <Link key={item.label} href={item.href} className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition-all hover:bg-white/5 hover:text-pink-400 text-center">
              {item.label}
            </Link>
          ))}
          
          {/* Language Toggle in Desktop Nav */}
          <div className="h-6 w-[1px] bg-white/10 mx-2" />
          <button 
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors text-sm font-bold text-slate-300"
          >
            {language === "en" ? "🇸🇻 ES" : "🇺🇸 EN"}
          </button>
        </motion.nav>

        {/* Bubble 3: CTA & Mobile Toggle */}
        <motion.div layout className={`pointer-events-auto flex h-14 items-center gap-2 flex-row`}>
          {/* Desktop CTA Button */}
          <Link href="#contacto" className="relative hidden md:flex h-full items-center justify-center overflow-hidden rounded-full px-8 text-sm font-bold text-white shadow-xl shadow-pink-500/20 transition-all hover:scale-105 group min-w-[140px]">
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,#ec4899,#a855f7,#0ea5e9,#ec4899)] animate-[spin_4s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite]" />
            <div className="absolute inset-[2px] rounded-full bg-black/60 backdrop-blur-sm group-hover:bg-black/40 transition-colors" />
            <span className="relative z-10 drop-shadow-md whitespace-nowrap">
              {language === "en" ? "Contact Us" : "Contáctanos"}
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-2xl shadow-xl hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-24 left-4 right-4 rounded-2xl border border-white/10 bg-black/80 p-6 backdrop-blur-2xl md:hidden shadow-2xl shadow-black pointer-events-auto">
          <nav className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-300 hover:text-pink-400 transition-colors">
                {item.label}
              </Link>
            ))}
            
            <div className="h-[1px] w-full bg-white/10 my-2" />
            <button 
              onClick={() => {
                setLanguage(language === "en" ? "es" : "en");
                setMobileMenuOpen(false);
              }}
              className="text-lg font-medium text-slate-300 hover:text-pink-400 transition-colors text-left"
            >
              {language === "en" ? "🇸🇻 Switch to Spanish" : "🇺🇸 Cambiar a Inglés"}
            </button>

            <Link href="#contacto" onClick={() => setMobileMenuOpen(false)} className="mt-4 w-full rounded-full bg-gradient-to-r from-pink-600 to-purple-600 px-4 py-3 text-sm font-bold text-white hover:opacity-90 transition-opacity text-center">
              {language === "en" ? "Contact Us" : "Contáctanos"}
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
