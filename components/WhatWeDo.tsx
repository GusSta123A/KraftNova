"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Rocket, ShieldCheck } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function WhatWeDo() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: "What we do",
      title: "Your Outsourced Digital Factory",
      features: [
        {
          title: "Premium Development",
          desc: "We don't use cheap templates. We build custom websites with Next.js, React, and modern architectures that load instantly.",
        },
        {
          title: "Technical SEO & Speed",
          desc: "An invisible website is useless. We optimize every image, script, and meta-tag so Google loves your site.",
        },
        {
          title: "Bulletproof Security",
          desc: "We protect your data and your clients' data with advanced cloud infrastructure and constant monitoring.",
        },
        {
          title: "Proactive Maintenance",
          desc: "That you focus on operating your business while we guarantee your digital machinery never fails.",
        }
      ]
    },
    es: {
      badge: "Qué Hacemos",
      title: "Tu Fábrica Digital Externalizada",
      features: [
        {
          title: "Desarrollo Premium",
          desc: "No usamos plantillas baratas. Construimos sitios a medida con Next.js, React y arquitecturas modernas que cargan al instante.",
        },
        {
          title: "SEO Técnico y Velocidad",
          desc: "Un sitio invisible no sirve de nada. Optimizamos cada imagen, script y etiqueta para que Google posicione tu web.",
        },
        {
          title: "Seguridad Blindada",
          desc: "Protegemos tu información y la de tus clientes con infraestructura en la nube avanzada y monitoreo constante.",
        },
        {
          title: "Mantenimiento Proactivo",
          desc: "Para que tú te enfoques en operar tu negocio mientras nosotros garantizamos que tu maquinaria digital nunca falle.",
        }
      ]
    }
  };

  const t = content[language];
  const icons = [Code2, Rocket, ShieldCheck, Cpu];

  return (
    <section id="what-we-do" className="relative py-24 sm:py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-bold leading-7 text-pink-500 tracking-wider uppercase"
          >
            {t.badge}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {t.title}
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {t.features.map((feature, idx) => {
              const Icon = icons[idx];
              return (
                <motion.div 
                  key={feature.title} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center p-6 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:bg-slate-900/60 transition-all hover:border-pink-500/30 group"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-pink-400" aria-hidden="true" />
                  </div>
                  <dt className="text-xl font-bold leading-7 text-white mb-3">
                    {feature.title}
                  </dt>
                  <dd className="text-base leading-7 text-slate-400 flex-1">
                    {feature.desc}
                  </dd>
                </motion.div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
