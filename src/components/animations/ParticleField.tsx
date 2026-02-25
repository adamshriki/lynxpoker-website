"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  suit: string;
}

/* Floating particle field with poker suits — creates atmospheric depth */
export function ParticleField({ count = 20, className = "" }: { count?: number; className?: string }) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const suits = ["♠", "♥", "♦", "♣"];

  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 8 + Math.random() * 16,
        duration: 15 + Math.random() * 25,
        delay: Math.random() * 10,
        suit: suits[i % 4],
      }))
    );
  }, [count]);

  if (particles.length === 0) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute text-amber-500/[0.04] font-serif select-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, -10, 0],
            rotate: [0, 15, -15, 0],
            opacity: [0.02, 0.06, 0.02],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {p.suit}
        </motion.span>
      ))}
    </div>
  );
}

/* Golden dust particles — small dots that float up like casino magic */
export function GoldenDust({ count = 30, className = "" }: { count?: number; className?: string }) {
  const [dots, setDots] = useState<{ id: number; x: number; size: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    setDots(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: 1 + Math.random() * 3,
        duration: 5 + Math.random() * 10,
        delay: Math.random() * 5,
      }))
    );
  }, [count]);

  if (dots.length === 0) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {dots.map((d) => (
        <motion.div
          key={d.id}
          className="absolute rounded-full bg-amber-400"
          style={{
            left: `${d.x}%`,
            bottom: "-5%",
            width: d.size,
            height: d.size,
          }}
          animate={{
            y: [0, -(200 + Math.random() * 400)],
            opacity: [0, 0.4, 0.2, 0],
            x: [0, (Math.random() - 0.5) * 60],
          }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
