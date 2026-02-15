"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Marketing demo clock — mirrors the real Clock organism from the design system.
 * Uses the same CSS classes (ds-clock, ds-clock-grid, ds-text-fluid-*, etc.)
 * and grid-template-areas layout. Forced to 16:9 via padding-bottom trick.
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
      className="relative w-full overflow-hidden rounded-2xl border border-border-primary shadow-elevation-5"
      style={{ paddingBottom: "56.25%", height: 0 }}
    >
      {/* ds-clock container — same as the real component */}
      <section
        className="ds-clock absolute inset-0 cursor-default rounded-2xl"
        style={{ backgroundColor: "#1a3a5c" }}
      >
        <div className="ds-clock-grid grid h-full w-full gap-0">

          {/* ── Left Panel (grid-area: Left) ── */}
          <div className="[container-type:size] [grid-area:Left]">
            <div className="flex h-full w-full flex-col items-center gap-y-clock-fluid-md p-clock-fluid-lg">
              {/* Club logo area */}
              <div className="flex aspect-[3/1] w-full flex-col items-center justify-center">
                <div className="ds-text-fluid-value truncate font-black leading-[1.1]">
                  Royal Flush Club
                </div>
              </div>

              {/* Stats */}
              <div className="flex h-full w-full flex-col border-r border-white/20 text-right text-text-primary">
                <div className="flex flex-grow flex-col">
                  <div className="space-y-clock-fluid-xxs px-clock-fluid-lg py-clock-fluid-md">
                    <div className="ds-text-fluid-value font-black leading-[1.1]">10,000</div>
                    <div className="ds-text-fluid-label font-semibold leading-[1.1] text-text-secondary">Starting Stack</div>
                  </div>
                  <div className="space-y-clock-fluid-xxs px-clock-fluid-lg py-clock-fluid-sm">
                    <div className="ds-text-fluid-value font-black leading-[1.1]">8 Lvl</div>
                    <div className="ds-text-fluid-label font-semibold leading-[1.1] text-text-secondary">Late Reg</div>
                  </div>
                  <div className="space-y-clock-fluid-xxs px-clock-fluid-lg py-clock-fluid-sm">
                    <div className="ds-text-fluid-value font-black leading-[1.1]">Unlimited</div>
                    <div className="ds-text-fluid-label font-semibold leading-[1.1] text-text-secondary">Re-Entry</div>
                  </div>
                </div>
                <div className="space-y-clock-fluid-xxs px-clock-fluid-lg py-clock-fluid-sm">
                  <div className="ds-text-fluid-value font-black leading-[1.1] text-text-amber-primary">₪12,500</div>
                  <div className="ds-text-fluid-label font-semibold leading-[1.1] text-text-secondary">Total Prize Pool</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Center Panel (grid-area: Middle) ── */}
          <div className="flex flex-col text-center [container-type:size] [grid-area:Middle] bg-black/25">
            <div className="space-y-clock-fluid-lg px-clock-fluid-xl py-clock-fluid-lg pb-0">
              <div className="space-y-clock-fluid-sm">
                <h2 className="ds-text-fluid-title truncate font-bold leading-[1.1] text-text-primary">Saturday Night Special</h2>
                <h3 className="ds-text-fluid-description font-semibold leading-[1.2] text-text-secondary">₪100+₪20 NLH Freezeout</h3>
              </div>
              <div className="mx-auto h-clock-fluid-xxs w-1/6 rounded bg-text-amber-primary"></div>
            </div>

            <div className="flex flex-grow flex-col gap-y-clock-fluid-md px-clock-fluid-xxl pb-clock-fluid-lg pt-clock-fluid-sm">
              {/* Timer */}
              <div className="flex grow flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="ds-text-fluid-big ds-text-bigshadow-white font-black leading-[1.4]">
                    <span className="tabular-nums">{pad(minutes)}</span>
                    <span>:</span>
                    <span className="tabular-nums">{pad(seconds)}</span>
                  </div>
                </div>
              </div>

              {/* Blinds */}
              <div className="flex flex-grow flex-col items-center justify-center gap-y-clock-fluid-md">
                <div className="flex flex-row items-center gap-x-clock-fluid-lg truncate">
                  <span className="ds-text-fluid-display truncate font-black leading-[1.1]">200 / 400</span>
                  <span className="ds-text-fluid-title truncate font-bold leading-[1.1]">/ 400</span>
                </div>

                {/* Next level */}
                <div className="flex items-center justify-center gap-x-clock-fluid-lg truncate opacity-50">
                  <span className="ds-text-fluid-description truncate font-bold leading-[1.1]">Next</span>
                  <span className="ds-text-fluid-title font-bold leading-[1.1]">300 / 600</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Panel (grid-area: Right) ── */}
          <div className="[container-type:size] [grid-area:Right]">
            <div className="flex h-full w-full flex-col items-center gap-y-clock-fluid-md p-clock-fluid-lg">
              {/* Logo */}
              <div className="flex w-full flex-col items-center p-clock-fluid-sm">
                <div className="flex w-2/3 flex-col justify-center opacity-60">
                  <img src={`${basePath}/logo.svg`} alt="LynxPoker" className="w-full" />
                </div>
              </div>

              {/* Stats */}
              <div className="flex h-full w-full flex-col border-l border-white/20 text-text-primary">
                <div className="space-y-clock-fluid-xxs px-clock-fluid-lg py-clock-fluid-sm">
                  <div className="ds-text-fluid-value font-black leading-[1.1]">Level 5</div>
                </div>
                {/* Total time */}
                <div className="space-y-clock-fluid-xxs px-clock-fluid-lg py-clock-fluid-sm">
                  <div className="ds-text-fluid-value font-black leading-[1.1]">01:23:45</div>
                  <div className="ds-text-fluid-label font-semibold leading-[1.1] text-text-secondary">Total Time</div>
                </div>
                <div className="flex flex-grow flex-col justify-center">
                  <div className="space-y-clock-fluid-xs px-clock-fluid-lg py-clock-fluid-md">
                    <div className="ds-text-fluid-value font-black leading-[1.1]">₪100+₪20</div>
                    <div className="ds-text-fluid-subvalue font-bold leading-[1.1] text-text-secondary">(₪80 + ₪20)</div>
                    <div className="ds-text-fluid-label font-semibold leading-[1.1] text-text-secondary">Buy-In</div>
                  </div>
                  <div className="space-y-clock-fluid-xxs px-clock-fluid-lg py-clock-fluid-md">
                    <div className="ds-text-fluid-value font-black leading-[1.1]">18/25</div>
                    <div className="ds-text-fluid-label font-semibold leading-[1.1] text-text-secondary">Entries</div>
                  </div>
                  <div className="space-y-clock-fluid-xxs px-clock-fluid-lg py-clock-fluid-md">
                    <div className="ds-text-fluid-value font-black leading-[1.1]">13,889</div>
                    <div className="ds-text-fluid-label font-semibold leading-[1.1] text-text-secondary">Avg Stack</div>
                  </div>
                </div>
                {/* Next break */}
                <div className="px-clock-fluid-lg py-clock-fluid-md">
                  <div className="ds-text-fluid-label font-semibold leading-[1.1] text-text-secondary">Next Break</div>
                  <div className="ds-text-fluid-subvalue font-bold leading-[1.1]">27:47</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Bottom Announcement (grid-area: Bottom) ── */}
          <div className="bg-black/25 [container-type:inline-size] [grid-area:Bottom]">
            <div className="relative flex w-full items-center gap-y-clock-fluid-md overflow-hidden py-clock-fluid-sm">
              <div className="ds-text-fluid-subvalue flex-grow animate-marquee whitespace-nowrap font-bold leading-[1.1] text-text-primary">
                🏆 Welcome to Saturday Night Special! Late registration closes at Level 8. Good luck to all players! 🃏
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Subtle glow overlay */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-t from-surface-blue-primary/5 to-transparent" />
    </div>
  );
}
