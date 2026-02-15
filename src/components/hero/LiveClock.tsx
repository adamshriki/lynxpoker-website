"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * A simulated live tournament clock for the hero section.
 * Shows a running timer, blind levels, and tournament stats
 * to demonstrate the product in action.
 */
export function LiveClock() {
  const [minutes, setMinutes] = useState(12);
  const [seconds, setSeconds] = useState(47);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
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
  }, [isPaused]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border-primary shadow-elevation-5">
      {/* Clock Grid - mimics the real clock layout */}
      <div className="grid grid-cols-[25%_50%_25%] grid-rows-[auto_min-content] min-h-[320px] md:min-h-[400px]"
        style={{ backgroundColor: "#1a3a5c" }}>
        
        {/* Left Panel - Tournament Info */}
        <div className="flex flex-col justify-between p-4 md:p-6 border-r border-white/10">
          {/* Logo area */}
          <div className="text-center mb-4">
            <div className="text-xs md:text-sm font-bold text-white/60 uppercase tracking-wider">♠ Royal Flush Club</div>
          </div>
          
          <div className="space-y-4 md:space-y-6 text-right">
            <div>
              <div className="text-lg md:text-2xl font-black text-white">10,000</div>
              <div className="text-[10px] md:text-xs font-semibold text-white/50">Starting Stack</div>
            </div>
            <div>
              <div className="text-lg md:text-2xl font-black text-white">8 Lvl</div>
              <div className="text-[10px] md:text-xs font-semibold text-white/50">Late Reg</div>
            </div>
            <div>
              <div className="text-lg md:text-2xl font-black text-white">Unlimited</div>
              <div className="text-[10px] md:text-xs font-semibold text-white/50">Re-Entry</div>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="text-lg md:text-2xl font-black text-amber-400">₪12,500</div>
            <div className="text-[10px] md:text-xs font-semibold text-white/50">Total Prize Pool</div>
          </div>
        </div>

        {/* Center Panel - Timer */}
        <div className="flex flex-col bg-black/25">
          <div className="px-4 md:px-8 pt-4 md:pt-6 text-center space-y-2">
            <h2 className="text-sm md:text-lg font-bold text-white truncate">Saturday Night Special</h2>
            <p className="text-xs md:text-sm font-semibold text-white/50">₪100+₪20 NLH Freezeout</p>
            <div className="mx-auto h-0.5 w-12 rounded bg-amber-400" />
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center px-4 gap-4">
            {/* Main Timer */}
            <motion.div 
              className="font-black text-white leading-none"
              style={{ fontSize: "clamp(2.5rem, 10vw, 7rem)" }}
            >
              <span className="tabular-nums">{pad(minutes)}</span>
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                :
              </motion.span>
              <span className="tabular-nums">{pad(seconds)}</span>
            </motion.div>

            {/* Blinds */}
            <div className="flex items-center gap-3 text-white">
              <span className="text-2xl md:text-4xl font-black">200 / 400</span>
              <span className="text-lg md:text-2xl font-bold text-white/50">/ 400</span>
            </div>

            {/* Next Level */}
            <div className="flex items-center gap-2 text-white/40">
              <span className="text-xs md:text-sm font-bold">Next</span>
              <span className="text-sm md:text-base font-bold">300 / 600</span>
            </div>
          </div>
        </div>

        {/* Right Panel - Stats */}
        <div className="flex flex-col justify-between p-4 md:p-6 border-l border-white/10">
          <div className="text-center mb-4">
            <div className="flex justify-center opacity-60">
              <svg viewBox="0 0 120 24" className="h-4 md:h-6 text-white" fill="currentColor">
                <text x="0" y="18" fontSize="16" fontWeight="bold" fontFamily="system-ui">LynxPoker</text>
              </svg>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div>
              <div className="text-lg md:text-2xl font-black text-white">Level 5</div>
            </div>
            <div>
              <div className="text-lg md:text-2xl font-black text-white">01:23:45</div>
              <div className="text-[10px] md:text-xs font-semibold text-white/50">Total Time</div>
            </div>
            <div>
              <div className="text-lg md:text-2xl font-black text-white">₪100+₪20</div>
              <div className="text-[10px] md:text-xs font-semibold text-white/50">(₪80 + ₪20)</div>
              <div className="text-[10px] md:text-xs font-semibold text-white/50">Buy-In</div>
            </div>
            <div>
              <div className="text-lg md:text-2xl font-black text-white">18/25</div>
              <div className="text-[10px] md:text-xs font-semibold text-white/50">Entries</div>
            </div>
            <div>
              <div className="text-lg md:text-2xl font-black text-white">13,889</div>
              <div className="text-[10px] md:text-xs font-semibold text-white/50">Avg Stack</div>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="text-[10px] md:text-xs font-semibold text-white/50">Next Break</div>
            <div className="text-sm md:text-base font-bold text-white">27:47</div>
          </div>
        </div>

        {/* Bottom - Announcement Bar */}
        <div className="col-span-3 bg-black/25 py-2 md:py-3 overflow-hidden">
          <motion.div 
            className="whitespace-nowrap text-sm md:text-base font-bold text-white"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            🏆 Welcome to Saturday Night Special! Late registration closes at Level 8. Good luck to all players! 🃏
          </motion.div>
        </div>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-t from-surface-blue-primary/5 to-transparent" />
    </div>
  );
}
