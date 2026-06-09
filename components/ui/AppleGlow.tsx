"use client";

import { motion } from "framer-motion";

export function AppleGlow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative group ${className}`}>
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition duration-500 group-hover:duration-200"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%"
        }}
      />
      <div className="relative rounded-2xl">
        {children}
      </div>
    </div>
  );
}
