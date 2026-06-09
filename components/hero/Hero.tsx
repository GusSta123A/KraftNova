"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  // Cinematic scroll transforms
  const yText = useTransform(scrollY, [0, 600], [0, -180]);
  const opacityText = useTransform(scrollY, [0, 350], [1, 0]);
  const scaleText = useTransform(scrollY, [0, 600], [1, 1.12]);
  const blurText = useTransform(scrollY, [0, 350], ["blur(0px)", "blur(8px)"]);

  return (
    <section ref={sectionRef} className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-transparent">

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ opacity: opacityText }}
          className="mb-8"
        >
          <div className="px-4 py-1.5 rounded-full border border-brand-navy/10 bg-brand-navy/5 backdrop-blur-md text-brand-navy font-bold text-sm tracking-wide shadow-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
            KraftNova Premium Services
          </div>
        </motion.div>

        <motion.h1
          suppressHydrationWarning
          style={{ y: yText, opacity: opacityText, scale: scaleText, filter: blurText }}
          className="max-w-5xl text-4xl font-black tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] will-change-transform"
        >
          Your High-Level Digital Infrastructure,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
            Without the Inflated Prices of Traditional Agencies.
          </span>
        </motion.h1>

        <motion.p
          suppressHydrationWarning
          style={{ y: yText, opacity: opacityText }}
          className="mt-8 max-w-3xl text-lg text-slate-300 sm:text-xl font-medium will-change-transform leading-relaxed"
        >
          We build fast, optimized websites and lead generation systems for US companies. We operate under a Nearshore "Digital Factory" model from El Salvador: US quality, support in your same time zone, and transparent flat-rate pricing.
        </motion.p>

        <motion.div
          suppressHydrationWarning
          style={{ opacity: opacityText }}
          className="mt-12 flex flex-col sm:flex-row gap-4 will-change-transform"
        >
          {/* Primary CTA - Apple Pink Glass */}
          <Link
            href="#pricing"
            className="group px-10 py-4 rounded-full bg-pink-600/90 hover:bg-pink-500 text-white font-bold text-base transition-all hover:scale-105 backdrop-blur-md shadow-[0_0_40px_-10px_rgba(236,72,153,0.5)] flex items-center gap-2"
          >
            View Pricing
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
          {/* Secondary CTA - Clean Apple Glass */}
          <Link
            href="#contacto"
            className="group px-10 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-base transition-all hover:scale-105 backdrop-blur-xl flex items-center gap-2"
          >
            Contact Us
            <span className="inline-block transition-transform group-hover:translate-x-1 opacity-60 group-hover:opacity-100">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        suppressHydrationWarning
        style={{ opacity: opacityText }}
        className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-black text-brand-navy tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="h-8 w-5 rounded-full border-2 border-brand-navy/40 flex items-start justify-center pt-1"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-brand-navy" />
        </motion.div>
      </motion.div>
    </section>
  );
}
