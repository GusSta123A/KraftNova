"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { language } = useLanguage();

  const content = {
    en: {
      desc: "Premium Website-as-a-Service solutions for businesses that want to scale without technical friction.",
      links: "Links",
      services: "Services",
      pricing: "Pricing",
      contact: "Contact",
      legal: "Legal",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      rights: "All rights reserved."
    },
    es: {
      desc: "Soluciones de Website-as-a-Service premium para empresas que quieren escalar sin fricción técnica.",
      links: "Enlaces",
      services: "Servicios",
      pricing: "Precios",
      contact: "Contacto",
      legal: "Legal",
      terms: "Términos y Condiciones",
      privacy: "Política de Privacidad",
      rights: "Todos los derechos reservados."
    }
  };

  const t = content[language];

  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-black tracking-tight text-white">
                Kraft<span className="text-pink-500">Nova</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {t.desc}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-4">{t.links}</h3>
            <ul className="space-y-3">
              <li><Link href="#what-we-do" className="text-slate-400 hover:text-pink-400 text-sm transition-colors">{t.services}</Link></li>
              <li><Link href="#pricing" className="text-slate-400 hover:text-pink-400 text-sm transition-colors">{t.pricing}</Link></li>
              <li><Link href="#contacto" className="text-slate-400 hover:text-pink-400 text-sm transition-colors">{t.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-4">{t.legal}</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-slate-400 hover:text-pink-400 text-sm transition-colors">{t.terms}</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-pink-400 text-sm transition-colors">{t.privacy}</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} KraftNova. {t.rights}
          </p>
          <div className="text-slate-600 text-sm font-medium">
            Based in El Salvador 🇸🇻
          </div>
        </div>
      </div>
    </footer>
  );
}
