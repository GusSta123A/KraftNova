"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Contact() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: "Let's talk",
      title: "Ready to scale?",
      desc: "Leave us your details and we will contact you in less than 24 hours to schedule a 15-minute discovery call.",
      nameLabel: "Name",
      namePlaceholder: "John Doe",
      emailLabel: "Email",
      emailPlaceholder: "john@company.com",
      messageLabel: "Tell us about your project",
      messagePlaceholder: "We need a new website for...",
      submit: "Send Message",
      contactDirectly: "Or contact us directly:"
    },
    es: {
      badge: "Hablemos",
      title: "¿Listo para escalar?",
      desc: "Déjanos tus datos y te contactaremos en menos de 24 horas para agendar una llamada de descubrimiento de 15 minutos.",
      nameLabel: "Nombre",
      namePlaceholder: "Juan Pérez",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "juan@empresa.com",
      messageLabel: "Cuéntanos sobre tu proyecto",
      messagePlaceholder: "Necesitamos un nuevo sitio web para...",
      submit: "Enviar Mensaje",
      contactDirectly: "O contáctanos directamente:"
    }
  };

  const t = content[language];

  return (
    <section id="contacto" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            
            {/* Info Side */}
            <div className="p-10 md:p-12 bg-white/5 border-b md:border-b-0 md:border-r border-white/10">
              <h2 className="text-sm font-bold text-blue-400 tracking-wider uppercase mb-2">
                {t.badge}
              </h2>
              <h3 className="text-3xl font-black text-white mb-4">
                {t.title}
              </h3>
              <p className="text-slate-400 mb-12">
                {t.desc}
              </p>

              <div className="space-y-6">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                  {t.contactDirectly}
                </p>
                <a href="mailto:hello@kraftnova.com" className="flex items-center gap-4 text-white hover:text-blue-400 transition-colors group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="font-medium">hello@kraftnova.com</span>
                </a>
                <div className="flex items-center gap-4 text-white hover:text-blue-400 transition-colors group cursor-pointer">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 group-hover:bg-blue-500/20 transition-colors">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <span className="font-medium">WhatsApp (Coming soon)</span>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-10 md:p-12">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    {t.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder={t.namePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder={t.emailPlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    {t.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                    placeholder={t.messagePlaceholder}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  <Send className="h-4 w-4" />
                  {t.submit}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
