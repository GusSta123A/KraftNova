"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function SectionReveal({ children, noExit = false }: { children: React.ReactNode; noExit?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    noExit ? [0, 0.15] : [0, 0.08, 0.88, 1],
    noExit ? [0, 1]    : [0, 1,    1,    0]
  );
  const blur = useTransform(
    scrollYProgress,
    noExit ? [0, 0.15]             : [0, 0.08, 0.88, 1],
    noExit ? ["blur(12px)", "blur(0px)"] : ["blur(12px)", "blur(0px)", "blur(0px)", "blur(8px)"]
  );
  const scale = useTransform(
    scrollYProgress,
    noExit ? [0, 0.15]   : [0, 0.08, 0.88, 1],
    noExit ? [0.95, 1]   : [0.95, 1, 1, 0.98]
  );
  const y = useTransform(
    scrollYProgress,
    noExit ? [0, 0.15] : [0, 0.08, 0.88, 1],
    noExit ? [30, 0] : [30, 0, 0, -30]
  );

  return (
    <div ref={ref}>
      <motion.div
        style={{ opacity, filter: blur, scale, y, transformOrigin: "center center" }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
