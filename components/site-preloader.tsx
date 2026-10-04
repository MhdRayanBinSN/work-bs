"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrandLogo } from "@/components/brand-logo";

export function SitePreloader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("brahma-preloaded")) return;
    const showTimer = window.setTimeout(() => setShow(true), 0);
    const hideTimer = window.setTimeout(() => {
      sessionStorage.setItem("brahma-preloaded", "true");
      setShow(false);
    }, 1900);
    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-white text-kasavu"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.3, duration: 0.45 } }}
        >
          <motion.div
            className="absolute left-0 top-0 h-full w-1/2 bg-[linear-gradient(135deg,#ffffff,#ffe4e6)]"
            exit={{ x: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          />
          <motion.div
            className="absolute right-0 top-0 h-full w-1/2 bg-[linear-gradient(135deg,#fff1f2,#ffffff)]"
            exit={{ x: "100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          />
          <div className="relative z-10 text-center">
            <div className="flex justify-center overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              >
                <BrandLogo className="h-36 w-36 rounded-3xl sm:h-44 sm:w-44" priority />
              </motion.div>
            </div>
            <motion.p
              className="mt-5 text-xs uppercase tracking-[0.45em] text-kasavu/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Opening stage
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
