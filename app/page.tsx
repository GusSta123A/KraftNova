import Hero from "@/components/hero/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import HowWeDoIt from "@/components/HowWeDoIt";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import GalaxyBackground from "@/components/GalaxyBackground";
import { SectionReveal } from "@/components/ui/SectionReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-pink-500/30 overflow-x-hidden">
      <GalaxyBackground />
      {/* Hero */}
      <Hero />

      {/* Business Plan Sections */}
      <SectionReveal>
        <WhatWeDo />
      </SectionReveal>

      <SectionReveal>
        <HowWeDoIt />
      </SectionReveal>

      <SectionReveal>
        <Pricing />
      </SectionReveal>

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
