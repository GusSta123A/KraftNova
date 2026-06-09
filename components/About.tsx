"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Particles from "@/components/ui/Particles";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section id="sobre-nosotros" ref={containerRef} className="relative w-full bg-slate-900 border-t border-brand-navy/5 py-32 overflow-hidden">
      {/* Massive Background Typography */}
      <motion.div 
        style={{ x: xTransform }}
        className="absolute top-1/3 left-0 -translate-y-1/2 w-[200%] pointer-events-none select-none flex opacity-[0.03] whitespace-nowrap"
      >
        <span className="text-[15vw] font-black text-white">
          SOLUTIONS SOLUTIONS SOLUTIONS
        </span>
      </motion.div>

      {/* Interactive Particles (Global for the section) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-brand-navy/20 blur-[120px]" />
        <div className="absolute right-0 bottom-1/4 h-[500px] w-[500px] rounded-full bg-brand-yellow/10 blur-[120px]" />
        <Particles particleCount={30} color="rgba(30, 58, 138, 0.5)" lineColor="rgba(30, 58, 138, 0.2)" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center space-y-48">
        
        {/* Misión */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-5xl mx-auto px-4"
        >
          <h3 className="text-xl md:text-2xl font-bold text-brand-yellow mb-6 tracking-widest uppercase">Nuestra Misión</h3>
          <p className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter">
            Somos una compañía de base tecnológica y seguridad. <br />
            <span className="text-slate-400 font-medium text-2xl md:text-3xl lg:text-4xl mt-6 block max-w-3xl mx-auto leading-snug">
              Generamos valor apalancando el cumplimiento de tus objetivos estratégicos mediante metodologías adaptables.
            </span>
          </p>
        </motion.div>

        {/* Visión */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-5xl mx-auto px-4"
        >
          <h3 className="text-xl md:text-2xl font-bold text-brand-yellow mb-6 tracking-widest uppercase">Nuestra Visión</h3>
          <p className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter">
            Servicios de calidad, excelencia e integralidad. <br />
            <span className="text-slate-400 font-medium text-2xl md:text-3xl lg:text-4xl mt-6 block max-w-3xl mx-auto leading-snug">
              Queremos ser percibidos como tu aliado estratégico principal, generando valor para clientes y socios.
            </span>
          </p>
        </motion.div>

        {/* Valores */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-5xl mx-auto px-4"
        >
          <h3 className="text-xl md:text-2xl font-bold text-brand-yellow mb-6 tracking-widest uppercase">Nuestros Valores</h3>
          <p className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter">
            Innovación constante y excelencia. <br />
            <span className="text-slate-400 font-medium text-2xl md:text-3xl lg:text-4xl mt-6 block max-w-3xl mx-auto leading-snug">
              Integridad, transparencia, colaboración y trabajo en equipo para el éxito conjunto.
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
