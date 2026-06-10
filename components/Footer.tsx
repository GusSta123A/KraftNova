import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-transparent pt-24 pb-12 overflow-hidden border-t border-white/10 backdrop-blur-md">
      {/* Massive Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none select-none flex justify-center opacity-5">
        <span className="text-[15vw] font-black text-white whitespace-nowrap">
          KRAFTNOVA
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-12 md:grid-cols-4 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="mb-6 inline-block">
              {/* Replace with a white/light logo if available, for now using text for elegance */}
              <span className="text-3xl font-black tracking-tight text-white">
                Kraft<span className="text-pink-500">Nova</span>
              </span>
            </Link>
            <p className="max-w-sm text-lg text-slate-400">
              Your Nearshore digital factory. Premium web infrastructure, zero friction, and USA quality without the inflated prices.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold text-white tracking-widest uppercase">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="#what-we-do" className="hover:text-pink-400 transition-colors">Website-as-a-Service</Link></li>
              <li><Link href="#pricing" className="hover:text-pink-400 transition-colors">Plans & Pricing</Link></li>
              <li><Link href="#how-we-do-it" className="hover:text-pink-400 transition-colors">How We Do It</Link></li>
              <li><Link href="#what-we-do" className="hover:text-pink-400 transition-colors">Web Development</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold text-white tracking-widest uppercase">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="#how-we-do-it" className="hover:text-pink-400 transition-colors">Our Methodology</Link></li>
              <li><Link href="#pricing" className="hover:text-pink-400 transition-colors">Custom Solutions</Link></li>
              <li><Link href="#contacto" className="hover:text-pink-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} KraftNova. All rights reserved.
          </p>
          <div className="flex gap-6">
            {/* 
            <Link href="https://www.facebook.com/kraftnova/" target="_blank" className="text-slate-500 hover:text-cyan-400 transition-colors"><Facebook size={24} strokeWidth={1.5} /></Link>
            <Link href="https://www.instagram.com/kraftnova" target="_blank" className="text-slate-500 hover:text-pink-500 transition-colors"><Instagram size={24} strokeWidth={1.5} /></Link>
            <Link href="https://www.linkedin.com/company/kraftnova" target="_blank" className="text-slate-500 hover:text-purple-500 transition-colors"><Linkedin size={24} strokeWidth={1.5} /></Link>
            */}
          </div>
        </div>
      </div>
    </footer>
  );
}
