"use client";

import { motion } from "framer-motion";
import { Wrench, Globe, Server } from "lucide-react";

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base font-bold leading-7 text-pink-400 tracking-wider uppercase"
          >
            Our Solution
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl"
          >
            What We Do
          </motion.p>
        </div>

        <div className="mt-16 bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
          <div className="p-8 sm:p-12 relative">
            {/* Subtle glow inside the card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px] pointer-events-none" />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl leading-relaxed text-white font-medium mb-8 relative z-10"
            >
              We are not a traditional marketing agency that charges you for endless meetings. We are <strong className="text-pink-400">Digital Solution Engineers & Developers</strong>.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg leading-relaxed text-slate-300 mb-8 relative z-10"
            >
              We specialize in <strong>Website-as-a-Service (WaaS)</strong>. This means we don't just build your digital presence, we maintain it, optimize it, and provide continuous support. We build everything from ultra-fast landing pages to capture leads, to complex web architectures with payment gateway integrations.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-black/20 border-l-4 border-pink-500 rounded-r-xl relative z-10"
            >
              <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Globe className="h-5 w-5 text-cyan-400" />
                Our Goal?
              </h4>
              <p className="text-slate-300">
                That you focus on operating your business while we guarantee your digital machinery never fails.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
