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

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#070b14]">
      {/* Deep Space Base */}
      <div className="absolute inset-0 opacity-80 bg-gradient-to-br from-[#070b14] via-[#0f172a] to-[#04060a]" />

      {/* Parallax Galaxies (Pink, Cyan, Purple) */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-20%] left-[-20%] w-[80vw] h-[60vw] rounded-[100%] bg-pink-600/15 blur-[120px] mix-blend-screen pointer-events-none rotate-12"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[20%] right-[-10%] w-[70vw] h-[50vw] rounded-[100%] bg-cyan-400/15 blur-[120px] mix-blend-screen pointer-events-none -rotate-12"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-[-20%] left-[10%] w-[90vw] h-[70vw] rounded-[100%] bg-purple-600/20 blur-[140px] mix-blend-screen pointer-events-none rotate-45"
      />

      {/* White Star Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <Particles 
          particleCount={150} 
          color="rgba(255, 255, 255, 0.8)" 
          lineColor="rgba(255, 255, 255, 0.1)" 
          maxDistance={120} 
        />
      </div>
    </div>
  );
}
