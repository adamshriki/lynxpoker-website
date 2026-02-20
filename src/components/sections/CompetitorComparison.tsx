"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import { useLocale } from "next-intl";

type Status = "yes" | "no" | "partial";

type Feature = {
  nameEn: string;
  nameHe: string;
  lynx: Status;
  letsPoker: Status;
  blindValet: Status;
  tournamentDirector: Status;
  uht: Status;
};

const features: Feature[] = [
  {
    nameEn: "Real-Time Multi-Device Sync",
    nameHe: "סנכרון בזמן אמת בין מכשירים",
    lynx: "yes",
    letsPoker: "yes",
    blindValet: "no",
    tournamentDirector: "no",
    uht: "no",
  },
  {
    nameEn: "Dealer Management",
    nameHe: "ניהול דילרים",
    lynx: "yes",
    letsPoker: "no",
    blindValet: "no",
    tournamentDirector: "no",
    uht: "no",
  },
  {
    nameEn: "Floor Management",
    nameHe: "ניהול פלור",
    lynx: "yes",
    letsPoker: "yes",
    blindValet: "no",
    tournamentDirector: "no",
    uht: "no",
  },
  {
    nameEn: "RTL & Multilingual Support",
    nameHe: "תמיכה ב-RTL ורב-שפתיות",
    lynx: "yes",
    letsPoker: "no",
    blindValet: "no",
    tournamentDirector: "no",
    uht: "no",
  },
  {
    nameEn: "Player History & Analytics",
    nameHe: "היסטוריית שחקנים ואנליטיקס",
    lynx: "yes",
    letsPoker: "yes",
    blindValet: "no",
    tournamentDirector: "no",
    uht: "no",
  },
  {
    nameEn: "Smart Tournament Clock",
    nameHe: "שעון טורניר חכם",
    lynx: "yes",
    letsPoker: "yes",
    blindValet: "no",
    tournamentDirector: "partial",
    uht: "yes",
  },
  {
    nameEn: "Free Tier Available",
    nameHe: "תוכנית חינמית",
    lynx: "yes",
    letsPoker: "no",
    blindValet: "no",
    tournamentDirector: "no",
    uht: "yes",
  },
  {
    nameEn: "Instant Setup — No Training Needed",
    nameHe: "הקמה מיידית — ללא הדרכה",
    lynx: "yes",
    letsPoker: "no",
    blindValet: "yes",
    tournamentDirector: "no",
    uht: "yes",
  },
  {
    nameEn: "Transparent Fixed Pricing",
    nameHe: "מחירון שקוף וקבוע",
    lynx: "yes",
    letsPoker: "no",
    blindValet: "yes",
    tournamentDirector: "yes",
    uht: "yes",
  },
  {
    nameEn: "Mystery Bounty Management",
    nameHe: "ניהול מיסטרי באונטי",
    lynx: "yes",
    letsPoker: "yes",
    blindValet: "no",
    tournamentDirector: "no",
    uht: "partial",
  },
];

const StatusIcon = ({ status }: { status: Status }) => {
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

function countYes(key: keyof Feature) {
  return features.filter((f) => f[key] === "yes").length;
}

export function CompetitorComparison() {
  const locale = useLocale();
  const isHe = locale === "he";

  const lynxScore = countYes("lynx");
  const totalFeatures = features.length;

  return (
    <motion.div
      className="overflow-x-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <table className="w-full min-w-[800px]">
        <thead>
          <tr className="border-b border-amber-500/10">
            <th className="text-start text-sm font-semibold text-text-secondary py-4 px-3 w-[24%]">
              {isHe ? "תכונה" : "Feature"}
            </th>
            <th className="text-center py-4 px-3">
              <div className="inline-flex flex-col items-center gap-1.5">
                <span className="text-base font-extrabold text-gold-gradient tracking-wide">LynxPoker</span>
                <span className="text-[10px] uppercase tracking-widest text-amber-500/60 font-bold">♠ ♥ ♦ ♣</span>
              </div>
            </th>
            <th className="text-center text-sm font-semibold text-text-minus-2 py-4 px-3">LetsPoker</th>
            <th className="text-center text-sm font-semibold text-text-minus-2 py-4 px-3">
              <span className="hidden sm:inline">Blind Valet</span>
              <span className="sm:hidden">BV</span>
            </th>
            <th className="text-center text-sm font-semibold text-text-minus-2 py-4 px-3">
              <span className="hidden sm:inline">Tournament Director</span>
              <span className="sm:hidden">TD</span>
            </th>
            <th className="text-center text-sm font-semibold text-text-minus-2 py-4 px-3">
              <span className="hidden sm:inline">UH Timer</span>
              <span className="sm:hidden">UHT</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, i) => (
            <motion.tr
              key={feature.nameEn}
              className="border-b border-white/[0.03] hover:bg-amber-500/[0.02] transition-colors group"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <td className="text-sm text-text-primary py-3.5 px-3 font-medium">
                {isHe ? feature.nameHe : feature.nameEn}
              </td>
              <td className="text-center py-3.5 px-3 bg-amber-500/[0.03] border-x border-amber-500/[0.06]">
                <div className="flex justify-center">
                  <StatusIcon status={feature.lynx} />
                </div>
              </td>
              <td className="text-center py-3.5 px-3">
                <div className="flex justify-center">
                  <StatusIcon status={feature.letsPoker} />
                </div>
              </td>
              <td className="text-center py-3.5 px-3">
                <div className="flex justify-center">
                  <StatusIcon status={feature.blindValet} />
                </div>
              </td>
              <td className="text-center py-3.5 px-3">
                <div className="flex justify-center">
                  <StatusIcon status={feature.tournamentDirector} />
                </div>
              </td>
              <td className="text-center py-3.5 px-3">
                <div className="flex justify-center">
                  <StatusIcon status={feature.uht} />
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      {/* Score summary */}
      <div className="flex items-center justify-center gap-3 pt-6 mt-2 border-t border-amber-500/10">
        <span className="text-3xl font-black text-gold-gradient">{lynxScore}/{totalFeatures}</span>
        <span className="text-sm text-text-minus-1">
          {isHe ? "תכונות — אף פלטפורמה אחרת לא מתקרבת" : "features — no other platform comes close"}
        </span>
      </div>
    </motion.div>
  );
}
