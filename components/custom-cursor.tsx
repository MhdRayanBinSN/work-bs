"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("");
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 26 });
  const springY = useSpring(y, { stiffness: 220, damping: 26 });

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const enableTimer = window.setTimeout(() => setEnabled(media.matches), 0);

    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target as HTMLElement | null;
      setLabel(target?.closest("[data-cursor]")?.getAttribute("data-cursor") ?? "");
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.clearTimeout(enableTimer);
      window.removeEventListener("mousemove", move);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div className="pointer-events-none fixed z-[90] h-2 w-2 rounded-full bg-gold" style={{ x, y, translateX: "-50%", translateY: "-50%" }} />
      <motion.div
        className="pointer-events-none fixed z-[89] grid h-12 w-12 place-items-center rounded-full border border-gold/70 text-[9px] font-bold uppercase tracking-[0.2em] text-gold mix-blend-difference"
        animate={{ scale: label ? 1.7 : 1 }}
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      >
        {label}
      </motion.div>
    </>
  );
}
