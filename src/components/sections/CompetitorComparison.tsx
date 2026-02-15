"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import { useTranslations } from "next-intl";

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
  if (status === "yes") return <Check className="w-5 h-5 text-green-400" />;
  if (status === "partial") return <Minus className="w-5 h-5 text-amber-400" />;
  return <X className="w-5 h-5 text-white/20" />;
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
          <tr className="border-b border-border-secondary">
            <th className="text-left text-sm font-semibold text-text-secondary py-4 px-4 w-[30%]">Feature</th>
            <th className="text-center py-4 px-4">
              <div className="inline-flex flex-col items-center gap-1">
                <span className="text-base font-bold text-text-blue-primary">LynxPoker</span>
              </div>
            </th>
            <th className="text-center text-sm font-semibold text-text-secondary py-4 px-4">Blind Valet</th>
            <th className="text-center text-sm font-semibold text-text-secondary py-4 px-4">LetsPoker</th>
            <th className="text-center text-sm font-semibold text-text-secondary py-4 px-4">Timer Apps</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, i) => (
            <motion.tr
              key={feature.name}
              className="border-b border-border-primary hover:bg-surface-plus-1/50 transition-colors"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <td className="text-sm text-text-primary py-3 px-4">{feature.name}</td>
              <td className="text-center py-3 px-4 bg-surface-blue-primary/5">
                <div className="flex justify-center">
                  <StatusIcon status={feature.lynx} />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <StatusIcon status={feature.blindValet} />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <StatusIcon status={feature.letsPoker} />
                </div>
              </td>
              <td className="text-center py-3 px-4">
                <div className="flex justify-center">
                  <StatusIcon status={feature.timerApps} />
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
