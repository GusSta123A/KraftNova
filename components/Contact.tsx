"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Send, User, Mail, Building2, Briefcase, MessageSquare, ChevronDown, Phone } from "lucide-react";

const SERVICES = [
  "The Starter Pack",
  "The Growth Plan",
  "The Premium Integration",
  "KraftNova Custom Solutions",
];

const COUNTRY_CODES = [
  { code: "+1", flag: "🇺🇸", country: "USA" },
  { code: "+503", flag: "🇸🇻", country: "El Salvador" },
  { code: "+502", flag: "🇬🇹", country: "Guatemala" },
  { code: "+504", flag: "🇭🇳", country: "Honduras" },
  { code: "+505", flag: "🇳🇮", country: "Nicaragua" },
  { code: "+506", flag: "🇨🇷", country: "Costa Rica" },
  { code: "+507", flag: "🇵🇦", country: "Panama" },
  { code: "+501", flag: "🇧🇿", country: "Belize" },
];

function GlassInput({ icon: Icon, label, id, type = "text", placeholder, required = true, ...rest }: { icon: React.ComponentType<{className?: string}>, label: string, id: string, type?: string, placeholder: string, required?: boolean, [key: string]: unknown }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs font-bold text-slate-400 tracking-widest uppercase flex items-center gap-2">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-700/80 bg-slate-800/40 px-5 py-3.5 text-white placeholder-slate-600 focus:border-[#00D2FF] focus:outline-none focus:ring-1 focus:ring-[#00D2FF]/50 transition-all backdrop-blur-sm text-sm"
        {...rest}
      />
    </div>
  );
}

function GlassSelect({ icon: Icon, label, id, options }: { icon: React.ComponentType<{className?: string}>, label: string, id: string, options: string[] }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs font-bold text-slate-400 tracking-widest uppercase flex items-center gap-2">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          name={id}
          required
          defaultValue=""
          className="w-full appearance-none rounded-xl border border-slate-700/80 bg-slate-800/40 px-5 py-3.5 text-sm text-white focus:border-[#00D2FF] focus:outline-none focus:ring-1 focus:ring-[#00D2FF]/50 transition-all backdrop-blur-sm pr-10 cursor-pointer"
        >
          <option value="" disabled className="bg-slate-900 text-slate-500">Select...</option>
          {options.map(o => <option key={o} value={o} className="bg-slate-900 text-white">{o}</option>)}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
      </div>
    </div>
  );
}

function GlassPhoneInput({ icon: Icon, label, id }: { icon: React.ComponentType<{className?: string}>, label: string, id: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs font-bold text-slate-400 tracking-widest uppercase flex items-center gap-2">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </label>
      <div className="flex rounded-xl border border-slate-700/80 bg-slate-800/40 focus-within:border-[#00D2FF] focus-within:ring-1 focus-within:ring-[#00D2FF]/50 transition-all backdrop-blur-sm overflow-hidden">
        <div className="relative border-r border-slate-700/80">
          <select
            name={`${id}Prefix`}
            defaultValue="+1"
            className="h-full appearance-none bg-transparent pl-4 pr-8 py-3.5 text-sm text-white focus:outline-none cursor-pointer"
          >
            {COUNTRY_CODES.map(c => (
              <option key={c.country} value={c.code} className="bg-slate-900 text-white">
                {c.flag} {c.code}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500 pointer-events-none" />
        </div>
        <input
          type="tel"
          id={id}
          name={id}
          required
          placeholder="0000-0000"
          className="w-full bg-transparent px-5 py-3.5 text-white placeholder-slate-600 focus:outline-none text-sm"
        />
      </div>
    </div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const xTransform = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" ref={containerRef} className="relative w-full py-24 bg-transparent border-t border-white/10 overflow-hidden">
      {/* Animated Background Typography */}
      <motion.div 
        style={{ x: xTransform }}
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[200%] pointer-events-none select-none flex opacity-[0.03] whitespace-nowrap"
      >
        <span className="text-[15vw] font-black text-white">
          KRAFTNOVA KRAFTNOVA KRAFTNOVA
        </span>
      </motion.div>

      {/* Ambient gradients */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#3A5AFE]/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[#FFAB40]/8 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-widest uppercase text-pink-500 mb-4">Let's Talk</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Ready for the next level?
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Tell us about your company and our expert team will contact you in less than 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left: Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {[
              { title: "Fast Response", desc: "Our team responds in less than 24 business hours.", color: "#ec4899" }, // pink-500
              { title: "Certified Partners", desc: "We are official partners of the best cloud technologies.", color: "#a855f7" }, // purple-500
              { title: "Free Initial Audit", desc: "We analyze your case with no obligations before proposing a solution.", color: "#3b82f6" }, // blue-500
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="rounded-2xl border border-white/5 bg-slate-800/30 p-6 backdrop-blur-md hover:bg-slate-800/50 transition-all"
              >
                <div className="h-1 w-10 rounded-full mb-4" style={{ backgroundColor: card.color }} />
                <h4 className="font-bold text-white mb-1">{card.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-20 rounded-3xl border border-[#00CC6A]/20 bg-[#00CC6A]/5"
                >
                  <div className="text-5xl mb-6">🎉</div>
                  <h3 className="text-2xl font-black text-white mb-3">Message sent!</h3>
                  <p className="text-slate-400 max-w-sm">Thank you for contacting us. A KraftNova expert will get in touch with you shortly.</p>
                  <button onClick={() => setStatus("idle")} className="mt-8 text-sm text-[#00D2FF] hover:underline">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="relative rounded-3xl border border-white/8 bg-slate-900/60 backdrop-blur-2xl p-8 md:p-10 shadow-2xl shadow-black/60 overflow-hidden"
                >
                  {/* Glassmorphism inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none rounded-3xl" />
                  <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#3A5AFE]/10 blur-[60px] pointer-events-none" />

                  <div className="relative z-10 flex flex-col gap-6">
                    {/* Row 1: Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <GlassInput icon={User} label="Full Name" id="name" placeholder="Your name" />
                      <GlassInput icon={Mail} label="Email Address" id="email" type="email" placeholder="you@company.com" />
                    </div>

                    {/* Row 2: Company + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <GlassInput icon={Building2} label="Company" id="company" placeholder="Your company name" />
                      <GlassPhoneInput icon={Phone} label="Phone Number" id="phone" />
                    </div>

                    {/* Row 3: Service */}
                    <GlassSelect icon={Briefcase} label="Service of Interest" id="service" options={SERVICES} />

                    {/* Row 4: Message */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-bold text-slate-400 tracking-widest uppercase flex items-center gap-2">
                        <MessageSquare className="h-3.5 w-3.5" />
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full rounded-xl border border-slate-700/80 bg-slate-800/40 px-5 py-3.5 text-white placeholder-slate-600 focus:border-[#00D2FF] focus:outline-none focus:ring-1 focus:ring-[#00D2FF]/50 transition-all resize-none backdrop-blur-sm text-sm"
                        placeholder="What is your challenge or project? Tell us in detail..."
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group relative w-full overflow-hidden rounded-xl py-4 font-bold text-white transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-90 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 blur-lg transition-opacity" />
                      <span className="relative z-10 text-base tracking-wide">
                        {status === "loading" ? "Sending..." : "Send Message"}
                      </span>
                      {status !== "loading" && <Send className="relative z-10 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
                    </button>

                    {status === "error" && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center text-sm text-[#FF4081] font-medium"
                      >
                        There was an error sending the message. Please try again.
                      </motion.p>
                    )}
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
