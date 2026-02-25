"use client";

import { motion } from "framer-motion";

/* Animated casino felt table — the oval table surface with rail */
export function FeltTable({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <svg width="600" height="300" viewBox="0 0 600 300" fill="none" className="w-full h-auto">
        {/* Table shadow */}
        <ellipse cx="300" cy="160" rx="280" ry="130" fill="#000" opacity="0.3" filter="blur(20px)" />
        {/* Felt surface */}
        <ellipse cx="300" cy="150" rx="270" ry="120" fill="#0b4f30" opacity="0.12" />
        <ellipse cx="300" cy="150" rx="270" ry="120" fill="none" stroke="#f59e0b" strokeWidth="3" opacity="0.08" />
        {/* Rail */}
        <ellipse cx="300" cy="150" rx="280" ry="128" fill="none" stroke="#78350f" strokeWidth="5" opacity="0.08" />
        <ellipse cx="300" cy="150" rx="285" ry="132" fill="none" stroke="#451a03" strokeWidth="2" opacity="0.06" />
        {/* Betting lines */}
        <line x1="150" y1="150" x2="450" y2="150" stroke="#f59e0b" strokeWidth="0.5" opacity="0.06" />
        <ellipse cx="300" cy="150" rx="100" ry="45" fill="none" stroke="#f59e0b" strokeWidth="0.5" opacity="0.06" strokeDasharray="4 4" />
      </svg>
    </motion.div>
  );
}

/* Roulette-inspired spinning element for loading/transition */
export function SpinWheel({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="60" cy="60" r="55" fill="none" stroke="#f59e0b" strokeWidth="0.5" opacity="0.1" />
        {/* Segments */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 60 + 35 * Math.cos(angle);
          const y1 = 60 + 35 * Math.sin(angle);
          const x2 = 60 + 55 * Math.cos(angle);
          const y2 = 60 + 55 * Math.sin(angle);
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f59e0b" strokeWidth="0.5" opacity="0.08" />
          );
        })}
        {/* Center dot */}
        <circle cx="60" cy="60" r="4" fill="#f59e0b" opacity="0.1" />
        <circle cx="60" cy="60" r="2" fill="#f59e0b" opacity="0.2" />
      </motion.svg>
    </motion.div>
  );
}
