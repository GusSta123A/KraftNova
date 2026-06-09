"use client";

import { motion } from "framer-motion";
import { Server, Shield, Cloud, Code, LineChart, Layout } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

const services = [
  {
    icon: <Cloud className="h-8 w-8 text-brand-yellow" />,
    title: "Cloud Architecture & Migration",
    description: "Seamlessly transition to the cloud or optimize your existing infrastructure for scalability, security, and performance. We support AWS, Azure, and Google Cloud.",
  },
  {
    icon: <Code className="h-8 w-8 text-brand-yellow" />,
    title: "Custom Software Engineering",
    description: "Bespoke application development tailored to your specific business processes. From mobile apps to complex enterprise systems, we build scalable software.",
  },
  {
    icon: <Shield className="h-8 w-8 text-brand-yellow" />,
    title: "Cybersecurity & Compliance",
    description: "Protect your digital assets with our comprehensive security audits, penetration testing, and compliance frameworks designed for the modern enterprise.",
  },
  {
    icon: <Server className="h-8 w-8 text-brand-yellow" />,
    title: "DevOps & Infrastructure",
    description: "Accelerate your delivery pipelines and ensure 99.99% uptime with our automated infrastructure and CI/CD best practices.",
  },
  {
    icon: <LineChart className="h-8 w-8 text-brand-yellow" />,
    title: "Data Analytics & AI",
    description: "Unlock the value of your data. We implement machine learning models, predictive analytics, and BI dashboards to drive informed decision-making.",
  },
  {
    icon: <Layout className="h-8 w-8 text-brand-yellow" />,
    title: "UI/UX Design",
    description: "Crafting intuitive and engaging user experiences. We blend aesthetics with functionality to create interfaces your users will love.",
  },
];

export default function ServicesCatalog() {
  return (
    <section id="services-catalog" className="relative py-24 sm:py-32 bg-slate-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base font-bold leading-7 text-brand-yellow tracking-wider uppercase"
          >
            Our Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl"
          >
            Premium Technology Services
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-slate-400"
          >
            We deliver end-to-end solutions that transform your business. Partner with us to navigate the digital frontier with confidence and precision.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <GlassCard className="flex flex-col h-full p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-yellow/10 group cursor-pointer border border-white/5 hover:border-brand-yellow/30 bg-white/5">
                  <div className="mb-6 inline-flex p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-brand-yellow/10 group-hover:border-brand-yellow/20 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-yellow transition-colors">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center text-sm font-semibold text-brand-yellow opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    Learn more <span className="ml-2">→</span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
