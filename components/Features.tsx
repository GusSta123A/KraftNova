"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Lightbulb, Database, Settings, BrainCircuit, BarChart, Globe, GraduationCap, Zap } from "lucide-react";
import Particles from "@/components/ui/Particles";

const features = [
  {
    title: "Consultorías",
    description: "Arquitectura Cloud y On-premises · Arquitectura de Software · Mantenimiento a infraestructura · Innovación de aplicaciones · Ciberseguridad.",
    icon: <Lightbulb className="h-5 w-5" />,
    image: "/service_consulting.png",
    accent: "#FFAB40",
  },
  {
    title: "Implementación y Migración",
    description: "Sistemas Cloud Native · Protección de información · Administración de dispositivos y aplicaciones · Migración On-Premise a la nube · Actualización de SO y bases de datos.",
    icon: <Database className="h-5 w-5" />,
    image: "/service_migration.png",
    accent: "#00D2FF",
  },
  {
    title: "Desarrollo",
    description: "Integración de servicios · Desarrollo a la medida · Desacoplamiento de aplicaciones · Desarrollo de APIs.",
    icon: <Settings className="h-5 w-5" />,
    image: "/service_development.png",
    accent: "#3A5AFE",
  },
  {
    title: "Automatización",
    description: "Automatización Cloud Based · Automatización RPA · Integración de aplicaciones basado en flujos de trabajo.",
    icon: <Zap className="h-5 w-5" />,
    image: "/service_automation.png",
    accent: "#8E24AA",
  },
  {
    title: "Inteligencia Artificial",
    description: "Implementación de soluciones con IA · Flujos de automatización con IA · Extracción de información · Creación de Chatbots.",
    icon: <BrainCircuit className="h-5 w-5" />,
    image: "/service_ai.png",
    accent: "#FF4081",
  },
  {
    title: "Inteligencia de Negocio",
    description: "Herramientas para análisis de datos · Implementación de Dashboards · Integración de plataformas analíticas.",
    icon: <BarChart className="h-5 w-5" />,
    image: "/service_bi.png",
    accent: "#00D2FF",
  },
  {
    title: "Desarrollo Web",
    description: "Creación y mantenimiento de páginas web · Soporte emergente · Certificados SSL · Migración a sistemas OnCloud.",
    icon: <Globe className="h-5 w-5" />,
    image: "/service_webdev.png",
    accent: "#3A5AFE",
  },
  {
    title: "Capacitaciones",
    description: "Capacitaciones oficiales Microsoft · Capacitaciones ADHOC · Desarrollo de aplicaciones · Automatización de procesos · On-premises y OnCloud.",
    icon: <GraduationCap className="h-5 w-5" />,
    image: "/service_training.png",
    accent: "#FFAB40",
  },
];

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Background text parallax
  const xTransform = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  // Apple-style: image zooms slowly while in view
  const { scrollYProgress: imageScroll } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageScale = useTransform(imageScroll, [0, 1], [1.08, 1.18]);
  const imageY = useTransform(imageScroll, [0, 1], ["-5%", "5%"]);

  return (
    <section id="servicios" ref={containerRef} className="relative w-full py-32 bg-slate-900 border-t border-white/5 overflow-hidden">
      {/* Massive Animated Background Typography */}
      <motion.div
        style={{ x: xTransform }}
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[200%] pointer-events-none select-none flex opacity-[0.03] whitespace-nowrap"
      >
        <span className="text-[15vw] font-black text-white">
          SOLUTIONS SOLUTIONS SOLUTIONS
        </span>
      </motion.div>

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-brand-navy/25 blur-[130px]" />
        <div className="absolute right-0 bottom-1/4 h-[500px] w-[500px] rounded-full bg-brand-yellow/10 blur-[130px]" />
        <Particles particleCount={25} color="rgba(255,255,255,0.3)" lineColor="rgba(255,255,255,0.05)" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 relative z-10 max-w-7xl"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24 text-center"
        >
          <p className="text-sm font-bold tracking-widest uppercase text-brand-yellow mb-4">Nuestros Servicios</p>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
            Todo lo que necesitas.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-emerald-400">
              En un solo lugar.
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Interactive service list */}
          <div className="flex flex-col gap-3">
            {features.map((feature, idx) => {
              const isActive = idx === activeIndex;
              return (
                <motion.div
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  whileHover={{ x: isActive ? 0 : 4 }}
                  className="cursor-pointer group"
                >
                  <div
                    className="rounded-2xl px-6 py-4 transition-all duration-400 border"
                    style={{
                      backgroundColor: isActive ? `${feature.accent}10` : "transparent",
                      borderColor: isActive ? `${feature.accent}40` : "transparent",
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="p-2.5 rounded-xl transition-all duration-300 flex-shrink-0"
                        style={{
                          backgroundColor: isActive ? feature.accent : "rgba(255,255,255,0.05)",
                          color: isActive ? "#0f172a" : "#64748b",
                        }}
                      >
                        {feature.icon}
                      </div>
                      <h3
                        className="text-lg md:text-xl font-bold transition-colors duration-300"
                        style={{ color: isActive ? "#ffffff" : "#64748b" }}
                      >
                        {feature.title}
                      </h3>
                      {isActive && (
                        <motion.div
                          layoutId="active-dot"
                          className="ml-auto h-2 w-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: feature.accent }}
                        />
                      )}
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35 }}
                          className="overflow-hidden text-sm text-slate-400 mt-3 pl-14 leading-relaxed"
                        >
                          {feature.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Apple-style image panel — sticky, image zooms on scroll */}
          <div className="lg:sticky lg:top-24" ref={imageRef}>
            <div className="relative h-[520px] md:h-[640px] w-full rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, filter: "blur(12px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(12px)" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  {/* The image itself zooms via scroll parallax (Apple-style) */}
                  <motion.div
                    style={{ scale: imageScale, y: imageY }}
                    className="absolute inset-0 origin-center will-change-transform"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={features[activeIndex].image}
                      alt={features[activeIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                  {/* Bottom label */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.div
                      key={activeIndex + "-label"}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <span
                        className="text-xs font-black uppercase tracking-[0.2em] mb-2 block"
                        style={{ color: features[activeIndex].accent }}
                      >
                        {features[activeIndex].title}
                      </span>
                      <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                        {features[activeIndex].description.split("·")[0]}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
