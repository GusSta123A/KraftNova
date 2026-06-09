"use client";

import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";

const plans = [
  {
    name: "The Starter Pack",
    idealFor: "Independent technicians, consultants, and local contractors who need a fast, ultra-professional presence geared towards getting calls.",
    setupCost: "1,499.00",
    monthlyCost: "149.00",
    sla: "48 to 72 hours",
    scope: "One-Page Site",
    ecommerce: "Not Included",
    forms: "Out-of-the-box Integration (Stripe/PayPal)",
    features: [
      "High-conversion One-Page website",
      "Google Business Profile creation and optimization",
      "Premium hosting and SSL certificate",
      "Daily backups",
      "Text and image updates at no extra cost"
    ],
    popular: false
  },
  {
    name: "The Growth Plan",
    idealFor: "Agencies, law firms, general contractors, and service companies that need a portfolio or detailed multiple services.",
    setupCost: "2,499.00",
    monthlyCost: "249.00",
    sla: "24 to 48 hours",
    scope: "Multi-Page (Up to 6 static pages)",
    ecommerce: "Not Included",
    forms: "Out-of-the-box Integration (Stripe/PayPal)",
    features: [
      "Web architecture of up to 6 static pages",
      "Dynamic project portfolio",
      "Advanced Local SEO",
      "Multi-step contact forms",
      "Includes everything in The Starter Pack"
    ],
    popular: true
  },
  {
    name: "The Premium Integration",
    idealFor: "Clinics, restaurants, small e-commerce stores, or businesses that need to automate their calendar and charge online.",
    setupCost: "3,499.00+",
    monthlyCost: "399.00+",
    sla: "12 to 24 hours (Priority)",
    scope: "Dynamic Architecture (Catalogs/Menus)",
    ecommerce: "Yes (Catalogs of up to 50 products)",
    forms: "Out-of-the-box Integration (Stripe/PayPal)",
    features: [
      "Standard dynamic architecture",
      "Catalogs of up to 50 products or menus",
      "System integration (Stripe/PayPal, bookings)",
      "Automated confirmation sequences",
      "Email reminders for clients"
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-bold leading-7 text-brand-yellow tracking-wider uppercase"
          >
            WaaS Plans
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl"
          >
            Transparent Subscriptions
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 relative">
          {/* Subtle background glow for pricing section */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 blur-[100px] pointer-events-none -z-10" />
          
          {plans.map((plan, idx) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex flex-col p-8 rounded-3xl bg-[#0f172a]/50 backdrop-blur-xl border transition-all duration-300 hover:bg-[#0f172a]/80 ${plan.popular ? 'border-pink-500/50 shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)]' : 'border-white/10 shadow-xl'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-bold shadow-sm">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-400 leading-relaxed min-h-[60px]">{plan.idealFor}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-black text-white">USD {plan.setupCost}</span>
                  <span className="text-sm font-semibold text-slate-500 uppercase">Setup</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-slate-300">USD {plan.monthlyCost}</span>
                  <span className="text-sm text-slate-500">/ month (Maintenance)</span>
                </div>
              </div>

              <div className="flex-1">
                <ul className="space-y-4 text-sm text-slate-300 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-brand-yellow shrink-0" />
                    <span><strong>SLA:</strong> {plan.sla}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-brand-yellow shrink-0" />
                    <span><strong>Alcance:</strong> {plan.scope}</span>
                  </li>
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-brand-yellow shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all backdrop-blur-sm ${plan.popular ? 'bg-pink-600/90 text-white hover:bg-pink-500 shadow-lg shadow-pink-500/25' : 'bg-white/10 text-white hover:bg-white/20 border border-white/5'}`}>
                Start Project
              </button>
            </motion.div>
          ))}
        </div>

        {/* Custom Solutions & Rules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-[#0f172a]/50 backdrop-blur-xl border border-white/10 text-white shadow-xl"
          >
            <h3 className="text-2xl font-bold text-pink-400 mb-4">KraftNova Custom Solutions</h3>
            <p className="text-slate-300 mb-4">
              <strong>Ideal for:</strong> Franchises, corporate companies, or startups that need custom platforms, ERPs, billing systems, or complex web applications.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              If your business requires development from scratch, deep relational databases, integrations with electronic billing, or enterprise management systems, we assign a dedicated team of engineers, software architects, and QA. <strong>Custom cost and SLA.</strong>
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <Info className="h-6 w-6 text-white" />
              <h3 className="text-xl font-bold text-white">Clear Factory Rules</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              To maintain our record delivery times and intact quality, the Starter, Growth, and Premium plans do not include custom software development. They are based on integrations of market-leading tools and proven architectures. If your project requires unique workflows and custom code, our team will guide you to the Custom Solutions plan.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
