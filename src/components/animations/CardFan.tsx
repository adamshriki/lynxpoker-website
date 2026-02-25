"use client";

import { motion } from "framer-motion";

/* Animated playing cards that fan out — used as decorative background element */
export function CardFan({ className = "", direction = "left" }: { className?: string; direction?: "left" | "right" }) {
  const cards = [
    { suit: "♠", value: "A", rotation: direction === "left" ? -25 : 25, color: "#f8fafc" },
    { suit: "♥", value: "K", rotation: direction === "left" ? -12 : 12, color: "#fb7185" },
    { suit: "♦", value: "Q", rotation: 0, color: "#fbbf24" },
    { suit: "♣", value: "J", rotation: direction === "left" ? 12 : -12, color: "#f8fafc" },
  ];

  return (
    <div className={`absolute pointer-events-none ${className}`}>
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className="absolute origin-bottom"
          initial={{ opacity: 0, rotate: 0, y: 30 }}
          whileInView={{ opacity: 0.06, rotate: card.rotation, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.12, duration: 0.8, type: "spring", damping: 20 }}
          style={{ transformOrigin: "50% 100%" }}
        >
          <svg width="80" height="112" viewBox="0 0 80 112" fill="none">
            {/* Card body */}
            <rect x="1" y="1" width="78" height="110" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="0.5" opacity="0.8" />
            {/* Card value top-left */}
            <text x="8" y="22" fontSize="14" fontWeight="bold" fill={card.color}>{card.value}</text>
            <text x="8" y="36" fontSize="12" fill={card.color}>{card.suit}</text>
            {/* Center suit */}
            <text x="40" y="65" textAnchor="middle" fontSize="28" fill={card.color}>{card.suit}</text>
            {/* Card value bottom-right (inverted) */}
            <text x="72" y="98" fontSize="14" fontWeight="bold" fill={card.color} textAnchor="end">{card.value}</text>
            <text x="72" y="108" fontSize="12" fill={card.color} textAnchor="end">{card.suit}</text>
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

/* Single card deal animation — a card slides in from off-screen */
export function DealCard({ suit, delay = 0, className = "" }: { suit: string; delay?: number; className?: string }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0, x: 200, y: -100, rotate: 45 }}
      whileInView={{ opacity: 0.08, x: 0, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, type: "spring", damping: 25 }}
    >
      <svg width="60" height="84" viewBox="0 0 60 84" fill="none">
        <rect x="1" y="1" width="58" height="82" rx="5" fill="#0b1224" stroke="#f59e0b" strokeWidth="0.5" />
        {/* Card back pattern */}
        <rect x="5" y="5" width="50" height="74" rx="3" fill="none" stroke="#f59e0b" strokeWidth="0.3" strokeDasharray="2 2" />
        <text x="30" y="48" textAnchor="middle" fontSize="24" fill="#f59e0b" opacity="0.3">{suit}</text>
      </svg>
    </motion.div>
  );
}
