"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export default function HowWeDoIt() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: "How it works",
      title: "The Nearshore Advantage",
      desc: "By operating from El Salvador, we share your timezone (CST) and work culture, but with highly competitive operational costs. We pass those savings directly to you.",
      steps: [
        {
          num: "01",
          title: "Discovery & Strategy",
          desc: "We analyze your business, your competitors, and define a digital roadmap."
        },
        {
          num: "02",
          title: "UX/UI Design",
          desc: "We create high-fidelity prototypes in Figma so you can approve the vision before we code."
        },
        {
          num: "03",
          title: "Agile Development",
          desc: "We build your platform using the latest web technologies for maximum performance."
        },
        {
          num: "04",
          title: "Launch & Support",
          desc: "We deploy to premium cloud servers and provide ongoing maintenance and improvements."
        }
      ]
    },
    es: {
      badge: "Cómo funciona",
      title: "La Ventaja Nearshore",
      desc: "Al operar desde El Salvador, compartimos tu zona horaria y cultura laboral, pero con costos operativos altamente competitivos. Trasladamos esos ahorros directamente a ti.",
      steps: [
        {
          num: "01",
          title: "Descubrimiento y Estrategia",
          desc: "Analizamos tu negocio, tus competidores y definimos una hoja de ruta digital."
        },
        {
          num: "02",
          title: "Diseño UX/UI",
          desc: "Creamos prototipos de alta fidelidad en Figma para que apruebes la visión antes de programar."
        },
        {
          num: "03",
          title: "Desarrollo Ágil",
          desc: "Construimos tu plataforma usando las últimas tecnologías web para el máximo rendimiento."
        },
        {
          num: "04",
          title: "Lanzamiento y Soporte",
          desc: "Desplegamos en servidores premium en la nube y proveemos mantenimiento continuo."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="how-we-do-it" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-base font-bold leading-7 text-purple-400 tracking-wider uppercase mb-3">
              {t.badge}
            </h2>
            <p className="text-4xl font-black tracking-tight text-white sm:text-5xl mb-6">
              {t.title}
            </p>
            <p className="text-lg leading-8 text-slate-300">
              {t.desc}
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-transparent hidden sm:block" />

            <div className="space-y-12">
              {t.steps.map((step, idx) => (
                <motion.div 
                  key={step.num}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative flex gap-6 sm:gap-8 items-start group"
                >
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate-900 border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.4)] group-hover:scale-110 transition-transform">
                    <span className="text-lg font-black text-white">{step.num}</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
