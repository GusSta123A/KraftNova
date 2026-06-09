"use client";

import { motion } from "framer-motion";
import { Clock, DollarSign, ShieldCheck, Zap } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

const features = [
  {
    icon: <Zap className="h-8 w-8 text-pink-500" />,
    title: "Premium Software",
    description: "We work under a premium software production framework. Standardized processes, zero friction, and fast deliveries backed by strict Service Level Agreements (SLAs).",
    colorClass: "hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] group-hover:bg-pink-500/5"
  },
  {
    icon: <Clock className="h-8 w-8 text-purple-500" />,
    title: "Nearshore Methodology",
    description: "We are based in El Salvador. We share your same time zone (Central/Eastern Time), giving you real-time support without the delays of hiring teams on the other side of the world.",
    colorClass: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group-hover:bg-purple-500/5"
  },
  {
    icon: <DollarSign className="h-8 w-8 text-blue-500" />,
    title: "Zero Surprise Fees",
    description: "US agencies charge $125-$150/hr. We operate on a flat-rate monthly subscription. If you need a change, we do it. No extra invoices.",
    colorClass: "hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:bg-blue-500/5"
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-cyan-400" />,
    title: "The 50/50 Protocol",
    description: "We trust our speed and quality so much that we finance the start of the project. You pay 50% to start and 50% only when the site is approved and ready.",
    colorClass: "hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] group-hover:bg-cyan-400/5"
  }
];

export default function HowWeDoIt() {
  return (
    <section id="how-we-do-it" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 transform">
        <div className="h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base font-bold leading-7 text-brand-yellow tracking-wider uppercase"
          >
            The "Digital Factory" Model
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl"
          >
            How We Do It
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard enableGlow={false} className={`group relative h-full border border-white/10 bg-[#0f172a]/40 backdrop-blur-3xl shadow-xl transition-all duration-500 overflow-hidden ${feature.colorClass}`}>
                <div className="flex flex-col h-full relative z-10">
                  <div className={`mb-4 inline-flex p-3 rounded-xl bg-white/5 border border-white/10 transition-colors`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
