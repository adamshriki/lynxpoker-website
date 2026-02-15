"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * A simulated live tournament clock for the hero section.
 * Uses container-query-based sizing to maintain 16:9 ratio on all screens.
 */
export function LiveClock() {
  const [minutes, setMinutes] = useState(12);
  const [seconds, setSeconds] = useState(47);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 0) {
          setMinutes((m) => (m === 0 ? 14 : m - 1));
          return 59;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-border-primary shadow-elevation-5 aspect-video"
      style={{ containerType: "size" }}
    >
      <div
        className="absolute inset-0 grid grid-cols-[25%_50%_25%] grid-rows-[1fr_auto]"
        style={{ backgroundColor: "#1a3a5c" }}
      >
        {/* ── Left Panel ── */}
        <div className="flex flex-col justify-between overflow-hidden border-r border-white/10" style={{ padding: "4cqh 3cqw" }}>
          <div className="text-center">
            <div className="font-bold text-white/60 uppercase tracking-wider" style={{ fontSize: "clamp(0.4rem, 1.8cqh, 0.875rem)" }}>
              ♠ Royal Flush Club
            </div>
          </div>

          <div className="text-right" style={{ display: "flex", flexDirection: "column", gap: "2cqh" }}>
            {[
              { value: "10,000", label: "Starting Stack" },
              { value: "8 Lvl", label: "Late Reg" },
              { value: "Unlimited", label: "Re-Entry" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-black text-white" style={{ fontSize: "clamp(0.5rem, 3cqh, 1.5rem)" }}>{value}</div>
                <div className="font-semibold text-white/50" style={{ fontSize: "clamp(0.3rem, 1.5cqh, 0.75rem)" }}>{label}</div>
              </div>
            ))}
          </div>

          <div>
            <div className="font-black text-amber-400" style={{ fontSize: "clamp(0.5rem, 3cqh, 1.5rem)" }}>₪12,500</div>
            <div className="font-semibold text-white/50" style={{ fontSize: "clamp(0.3rem, 1.5cqh, 0.75rem)" }}>Total Prize Pool</div>
          </div>
        </div>

        {/* ── Center Panel ── */}
        <div className="flex flex-col bg-black/25 overflow-hidden">
          <div className="text-center" style={{ padding: "3cqh 3cqw 0" }}>
            <h2 className="font-bold text-white truncate" style={{ fontSize: "clamp(0.5rem, 2.5cqh, 1.125rem)" }}>
              Saturday Night Special
            </h2>
            <p className="font-semibold text-white/50" style={{ fontSize: "clamp(0.4rem, 1.8cqh, 0.875rem)" }}>
              ₪100+₪20 NLH Freezeout
            </p>
            <div className="mx-auto rounded bg-amber-400" style={{ height: "0.3cqh", width: "8cqw", marginTop: "1.5cqh" }} />
          </div>

          <div className="flex-1 flex flex-col items-center justify-center" style={{ gap: "2cqh" }}>
            {/* Timer */}
            <div className="font-black text-white leading-none" style={{ fontSize: "clamp(1rem, 12cqh, 7rem)" }}>
              <span className="tabular-nums">{pad(minutes)}</span>
              <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity }}>:</motion.span>
              <span className="tabular-nums">{pad(seconds)}</span>
            </div>

            {/* Blinds */}
            <div className="flex items-center text-white" style={{ gap: "1cqw" }}>
              <span className="font-black" style={{ fontSize: "clamp(0.6rem, 5cqh, 2.5rem)" }}>200 / 400</span>
              <span className="font-bold text-white/50" style={{ fontSize: "clamp(0.5rem, 3.5cqh, 1.5rem)" }}>/ 400</span>
            </div>

            {/* Next */}
            <div className="flex items-center text-white/40" style={{ gap: "0.5cqw" }}>
              <span className="font-bold" style={{ fontSize: "clamp(0.4rem, 1.8cqh, 0.875rem)" }}>Next</span>
              <span className="font-bold" style={{ fontSize: "clamp(0.4rem, 2.2cqh, 1rem)" }}>300 / 600</span>
            </div>
          </div>
        </div>

        {/* ── Right Panel ── */}
        <div className="flex flex-col justify-between overflow-hidden border-l border-white/10" style={{ padding: "4cqh 3cqw" }}>
          <div className="flex justify-center opacity-60">
            <img src={`${basePath}/logo.svg`} alt="LynxPoker" style={{ height: "clamp(0.6rem, 3cqh, 1.25rem)" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2cqh" }}>
            {[
              { value: "Level 5", label: null },
              { value: "01:23:45", label: "Total Time" },
              { value: "₪100+₪20", label: "Buy-In" },
              { value: "18/25", label: "Entries" },
              { value: "13,889", label: "Avg Stack" },
            ].map(({ value, label }) => (
              <div key={value}>
                <div className="font-black text-white" style={{ fontSize: "clamp(0.5rem, 3cqh, 1.5rem)" }}>{value}</div>
                {label && <div className="font-semibold text-white/50" style={{ fontSize: "clamp(0.3rem, 1.5cqh, 0.75rem)" }}>{label}</div>}
              </div>
            ))}
          </div>

          <div>
            <div className="font-semibold text-white/50" style={{ fontSize: "clamp(0.3rem, 1.5cqh, 0.75rem)" }}>Next Break</div>
            <div className="font-bold text-white" style={{ fontSize: "clamp(0.4rem, 2.2cqh, 1rem)" }}>27:47</div>
          </div>
        </div>

        {/* ── Bottom Announcement ── */}
        <div className="col-span-3 bg-black/25 overflow-hidden" style={{ padding: "1cqh 0" }}>
          <motion.div
            className="whitespace-nowrap font-bold text-white"
            style={{ fontSize: "clamp(0.4rem, 2cqh, 1rem)" }}
            animate={{ x: ["100%", "-100%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            🏆 Welcome to Saturday Night Special! Late registration closes at Level 8. Good luck to all players! 🃏
          </motion.div>
        </div>
      </div>

      {/* Glow overlay */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-t from-surface-blue-primary/5 to-transparent" />
    </div>
  );
}
