"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AppleGlow } from "./AppleGlow";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  enableGlow?: boolean;
}

export function GlassCard({ children, className, enableGlow = true }: GlassCardProps) {
  const CardContent = (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-2xl transition-all hover:bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
        className
      )}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      {children}
    </motion.div>
  );

  if (enableGlow) {
    return <AppleGlow>{CardContent}</AppleGlow>;
  }

  return CardContent;
}
