"use client";

import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";

const plans = [
  {
    name: "The Starter Pack",
    idealFor: "Small businesses, professionals, contractors, coaches, and local restaurants.",
    setupCost: "1,499.00",
    monthlyCost: "149.00",
    delivery: "10-14 business days",
    setupFeatures: [
      "Up to 6 sections/pages (Home, About, Services, Contact, etc.)",
      "Modern, 100% responsive design optimized for conversions",
      "Basic technical SEO, speed optimization, and mobile-first approach",
      "Contact forms + Google Analytics 4 integration",
      "Domain + premium hosting + SSL for 1 year",
      "2 rounds of revisions"
    ],
    monthlyFeatures: [
      "5-7 hours of work included per month",
      "Content updates, minor design changes, and tech support"
    ],
    requirements: [
      "High-resolution brand logos and images",
      "Main texts (Home, About, Services)",
      "Desired colors and style (or approval of our proposal)",
      "Domain access or preferred name",
      "Content ready or approval to use initial placeholders"
    ],
    popular: false
  },
  {
    name: "The Growth Plan",
    idealFor: "SMEs, clinics, law firms, and local services.",
    setupCost: "2,499.00",
    monthlyCost: "249.00",
    delivery: "14-18 business days",
    setupFeatures: [
      "Complete website up to 12 sections/pages",
      "Premium design with subtle animations and great UX",
      "Advanced On-Page SEO",
      "Advanced forms + simple integrations (WhatsApp, Google Maps, Calendly)",
      "Security and performance optimization",
      "3 rounds of revisions + project handover"
    ],
    monthlyFeatures: [
      "10-12 hours of work included per month",
      "Frequent updates, conversion improvements, and medium priority support"
    ],
    requirements: [
      "Everything from Starter +",
      "Complete or near-complete content for all pages",
      "Access to existing tools (Google Business, Email Marketing)",
      "Website references to align style",
      "Specific feature requirement list",
      "A fast point of contact for revisions"
    ],
    popular: true
  },
  {
    name: "The Premium Integration",
    idealFor: "Growing businesses or companies with more advanced digital needs.",
    setupCost: "3,499.00+",
    monthlyCost: "399.00+",
    delivery: "18-25 business days",
    setupFeatures: [
      "Advanced website or basic e-commerce (up to 15-18 pages)",
      "Highly customized design and premium user experience",
      "Medium integrations (basic payments, simple CRM, Zapier automations)",
      "Complete technical SEO + initial strategy",
      "Exhaustive testing and documentation"
    ],
    monthlyFeatures: [
      "20-25 hours included + high priority support",
      "Development of medium new features and proactive maintenance"
    ],
    requirements: [
      "Everything from Growth +",
      "Professional content reviewed (texts, images, videos)",
      "API accesses or third-party service accounts",
      "Detailed brief of business goals and key features",
      "Availability for kickoff meetings and weekly reviews",
      "Complete branding material (style guides, logo variations)"
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
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase text-pink-500 mb-3 tracking-wider">Setup Includes</h4>
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-brand-yellow shrink-0" />
                      <span><strong>Delivery:</strong> {plan.delivery}</span>
                    </li>
                    {plan.setupFeatures.map((feature, i) => (
                      <li key={`setup-${i}`} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-brand-yellow shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase text-purple-400 mb-3 tracking-wider">Monthly Maintenance</h4>
                  <ul className="space-y-3 text-sm text-slate-300">
                    {plan.monthlyFeatures.map((feature, i) => (
                      <li key={`monthly-${i}`} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-brand-yellow shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase text-slate-500 mb-3 tracking-wider">Client Requirements</h4>
                  <ul className="space-y-3 text-xs text-slate-400">
                    {plan.requirements.map((req, i) => (
                      <li key={`req-${i}`} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
              <ul className="text-slate-400 text-sm leading-relaxed space-y-2 list-disc pl-5">
                <li>Delivery times start counting once we have all client requirements approved.</li>
                <li>If the client delays in delivering content or revisions, delivery times will be extended.</li>
                <li><strong>Clear policy:</strong> Unused monthly hours do not accumulate (max 1 month rollover).</li>
                <li><strong>Agile process:</strong> Kickoff → Design Proposal → Development → Revisions → Launch.</li>
              </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
