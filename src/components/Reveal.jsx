"use client";

import { motion, useReducedMotion } from "framer-motion";

// Fades and slides its children in once, when they scroll into view.
// Props: delay (seconds, for staggering), y (start offset in px), className.
// Users with "reduce motion" enabled get the content with no animation.
export default function Reveal({ children, delay = 0, y = 24, className = "" }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
