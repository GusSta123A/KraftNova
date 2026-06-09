"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const partners = [
  { name: "Microsoft", role: "Cloud Partner", image: "/microsoft.png", width: 160 },
  { name: "Amazon Web Services", role: "Partner Network", image: "/aws.png", width: 100 }
];

export default function Partners() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Animates the background text from left to right as the user scrolls
  const xTransform = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section id="partners" ref={containerRef} className="relative w-full py-32 bg-slate-900 text-slate-900 border-t border-brand-navy/5 overflow-hidden">
      {/* Massive Animated Background Typography */}
      <motion.div 
        style={{ x: xTransform }}
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[200%] pointer-events-none select-none opacity-[0.03] flex whitespace-nowrap"
      >
        <span className="text-[15vw] font-black text-white">
          PARTNERS PARTNERS PARTNERS
        </span>
      </motion.div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-4xl md:text-5xl font-black tracking-tight text-white"
        >
          Nuestros <span className="text-brand-yellow">Partners</span>
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group flex flex-col items-center justify-center p-8 rounded-3xl bg-slate-800/30 border border-white/5 backdrop-blur-md hover:bg-slate-800/50 hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,171,64,0.1)] transition-all cursor-pointer w-full sm:w-[300px]"
            >
              <div className="h-24 flex items-center justify-center mb-6 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                <Image 
                  src={partner.image} 
                  alt={partner.name} 
                  width={partner.width} 
                  height={80} 
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white">
                {partner.name}
              </h3>
              <p className="text-sm text-[#00D2FF] mt-2 font-bold tracking-wide uppercase">{partner.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
