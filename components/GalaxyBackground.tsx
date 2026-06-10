"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Particles from "./ui/Particles";
import { useEffect, useState } from "react";

export default function GalaxyBackground() {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Parallax effects for the nebulas
  const y1 = useTransform(scrollY, [0, 2000], [0, -400]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -600]);
  const y3 = useTransform(scrollY, [0, 2000], [0, -200]);
  const y4 = useTransform(scrollY, [0, 2000], [0, -800]); // Fast moving foreground nebula
  const y5 = useTransform(scrollY, [0, 2000], [0, -150]); // Slow deep background nebula

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#070b14]">
      {/* Deep Space Base */}
      <div className="absolute inset-0 opacity-80 bg-gradient-to-br from-[#070b14] via-[#0f172a] to-[#04060a]" />

      {/* Parallax Galaxies (Pink, Cyan, Purple, Blue) - Darkened */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-20%] left-[-20%] w-[80vw] h-[60vw] rounded-[100%] bg-pink-600/5 blur-[120px] mix-blend-screen pointer-events-none rotate-12"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[20%] right-[-10%] w-[70vw] h-[50vw] rounded-[100%] bg-cyan-400/5 blur-[120px] mix-blend-screen pointer-events-none -rotate-12"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-[-20%] left-[10%] w-[90vw] h-[70vw] rounded-[100%] bg-purple-600/10 blur-[140px] mix-blend-screen pointer-events-none rotate-45"
      />
      
      {/* New Galaxies for extra depth */}
      <motion.div
        style={{ y: y4 }}
        className="absolute top-[60%] right-[30%] w-[50vw] h-[40vw] rounded-[100%] bg-blue-600/10 blur-[100px] mix-blend-screen pointer-events-none -rotate-45"
      />
      <motion.div
        style={{ y: y5 }}
        className="absolute top-[10%] left-[40%] w-[60vw] h-[30vw] rounded-[100%] bg-amber-500/5 blur-[150px] mix-blend-screen pointer-events-none rotate-90"
      />

      {/* White Star Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <Particles 
          particleCount={120} 
          color="rgba(255, 255, 255, 0.7)" 
          lineColor="transparent" 
          maxDistance={120} 
        />
      </div>

    </div>
  );
}
