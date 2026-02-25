"use client";

import { motion } from "framer-motion";

interface PokerChipProps {
  size?: number;
  color?: string;
  delay?: number;
  className?: string;
}

export function PokerChip({ size = 60, color = "#f59e0b", delay = 0, className = "" }: PokerChipProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay, duration: 1.2, type: "spring", damping: 15 }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Outer ring */}
        <circle cx="50" cy="50" r="48" fill="none" stroke={color} strokeWidth="2" opacity="0.3" />
        <circle cx="50" cy="50" r="44" fill="none" stroke={color} strokeWidth="1" opacity="0.15" />
        {/* Dashed edge pattern */}
        <circle cx="50" cy="50" r="46" fill="none" stroke={color} strokeWidth="3" strokeDasharray="6 4" opacity="0.2" />
        {/* Inner circle */}
        <circle cx="50" cy="50" r="32" fill="none" stroke={color} strokeWidth="1.5" opacity="0.2" />
        {/* Center suit */}
        <text x="50" y="56" textAnchor="middle" fontSize="20" fill={color} opacity="0.25">♠</text>
      </motion.svg>
    </motion.div>
  );
}

export function ChipStack({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ bottom: i * 4 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.15 - i * 0.02, y: 0 }}
          transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
        >
          <svg width="50" height="14" viewBox="0 0 50 14">
            <ellipse cx="25" cy="7" rx="25" ry="7" fill="#f59e0b" opacity="0.3" />
            <ellipse cx="25" cy="7" rx="25" ry="7" fill="none" stroke="#f59e0b" strokeWidth="0.5" opacity="0.5" />
            <ellipse cx="25" cy="5" rx="25" ry="7" fill="#f59e0b" opacity="0.15" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
