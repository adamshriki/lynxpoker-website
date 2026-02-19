"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

type Feature = {
  name: string;
  lynx: "yes" | "no" | "partial";
  blindValet: "yes" | "no" | "partial";
  letsPoker: "yes" | "no" | "partial";
  timerApps: "yes" | "no" | "partial";
};

const features: Feature[] = [
  { name: "Real-time multi-device sync", lynx: "yes", blindValet: "yes", letsPoker: "no", timerApps: "no" },
  { name: "Dealer management", lynx: "yes", blindValet: "no", letsPoker: "no", timerApps: "no" },
  { name: "Dedicated mobile apps", lynx: "yes", blindValet: "no", letsPoker: "partial", timerApps: "yes" },
  { name: "Hebrew / RTL support", lynx: "yes", blindValet: "no", letsPoker: "no", timerApps: "no" },
  { name: "Player history & stats", lynx: "yes", blindValet: "yes", letsPoker: "no", timerApps: "no" },
  { name: "Multi-organization", lynx: "yes", blindValet: "yes", letsPoker: "no", timerApps: "no" },
  { name: "Free tier available", lynx: "yes", blindValet: "yes", letsPoker: "yes", timerApps: "yes" },
  { name: "No enterprise sales process", lynx: "yes", blindValet: "yes", letsPoker: "no", timerApps: "yes" },
];

const StatusIcon = ({ status }: { status: "yes" | "no" | "partial" }) => {
  if (status === "yes")
    return (
      <div className="w-7 h-7 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
        <Check className="w-4 h-4 text-green-400" />
      </div>
    );
  if (status === "partial")
    return (
      <div className="w-7 h-7 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
        <Minus className="w-4 h-4 text-amber-400" />
      </div>
    );
  return (
    <div className="w-7 h-7 rounded-full bg-white/3 border border-white/5 flex items-center justify-center">
      <X className="w-4 h-4 text-white/15" />
    </div>
  );
};

export function CompetitorComparison() {
  return (
    <motion.div
      className="overflow-x-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <table className="w-full min-w-[640px]">
        <thead>
          <tr className="border-b border-amber-500/10">
            <th className="text-left text-sm font-semibold text-text-secondary py-4 px-4 w-[30%]">Feature</th>
            <th className="text-center py-4 px-4">
              <div className="inline-flex flex-col items-center gap-1.5">
                <span className="text-base font-extrabold text-gold-gradient tracking-wide">LynxPoker</span>
                <span className="text-[10px] uppercase tracking-widest text-amber-500/60 font-bold">♠ ♥ ♦ ♣</span>
              </div>
            </th>
            <th className="text-center text-sm font-semibold text-text-minus-2 py-4 px-4">Blind Valet</th>
            <th className="text-center text-sm font-semibold text-text-minus-2 py-4 px-4">LetsPoker</th>
            <th className="text-center text-sm font-semibold text-text-minus-2 py-4 px-4">Timer Apps</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, i) => (
            <motion.tr
              key={feature.name}
              className="border-b border-white/[0.03] hover:bg-amber-500/[0.02] transition-colors group"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <td className="text-sm text-text-primary py-3.5 px-4 font-medium">{feature.name}</td>
              <td className="text-center py-3.5 px-4 bg-amber-500/[0.03] border-x border-amber-500/[0.06]">
                <div className="flex justify-center">
                  <StatusIcon status={feature.lynx} />
                </div>
              </td>
              <td className="text-center py-3.5 px-4">
                <div className="flex justify-center">
                  <StatusIcon status={feature.blindValet} />
                </div>
              </td>
              <td className="text-center py-3.5 px-4">
                <div className="flex justify-center">
                  <StatusIcon status={feature.letsPoker} />
                </div>
              </td>
              <td className="text-center py-3.5 px-4">
                <div className="flex justify-center">
                  <StatusIcon status={feature.timerApps} />
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      {/* Score summary */}
      <div className="flex items-center justify-center gap-3 pt-6 mt-2 border-t border-amber-500/10">
        <span className="text-3xl font-black text-gold-gradient">8/8</span>
        <span className="text-sm text-text-minus-1">features — no other platform comes close</span>
      </div>
    </motion.div>
  );
}
