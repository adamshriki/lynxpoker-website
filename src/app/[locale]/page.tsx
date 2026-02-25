"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LiveClock } from "@/components/hero/LiveClock";
import { CompetitorComparison } from "@/components/sections/CompetitorComparison";
import {
  Clock,
  RefreshCw,
  Users,
  UserCog,
  Smartphone,
  Building2,
  Home,
  ArrowRight,
  Globe,
  Check,
  Zap,
  Palette,
  BarChart3,
  Languages,
  Rocket,
  TrendingUp,
  DollarSign,
  Shield,
  Server,
  Lock,
  Database,
  ChevronDown,
  Quote,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

/* Decorative floating suit */
function FloatingSuit({
  suit,
  className,
}: {
  suit: string;
  className?: string;
}) {
  return (
    <span
      className={`absolute pointer-events-none select-none text-amber-500/[0.04] font-serif ${className}`}
      aria-hidden
    >
      {suit}
    </span>
  );
}

/* FAQ Accordion Item */
function FaqItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="border border-amber-500/[0.08] rounded-xl overflow-hidden bg-surface-plus-1/20 hover:border-amber-500/15 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-start"
      >
        <span className="text-base font-semibold text-text-primary pe-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-5 text-sm text-text-secondary leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const isRtl = locale === "he";

  const advantageKeys = [
    "realtime",
    "ui",
    "clock",
    "analytics",
    "apps",
    "dealers",
    "rtl",
    "setup",
    "updates",
    "pricing",
  ] as const;

  const advantageIcons = [
    Zap,
    Palette,
    Clock,
    BarChart3,
    Smartphone,
    UserCog,
    Languages,
    Rocket,
    TrendingUp,
    DollarSign,
  ];

  const advantageSuits = ["♠", "♥", "♦", "♣", "♠", "♥", "♦", "♣", "♠", "♥"];

  const pricingTiers = ["free", "starter", "pro", "enterprise"] as const;

  return (
    <div className="min-h-screen bg-surface-primary overflow-x-hidden relative">
      {/* Global atmospheric elements */}
      <div className="fixed inset-0 pointer-events-none z-0 diamond-grid opacity-50" />

      {/* ═══════════ Navigation ═══════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-primary/70 backdrop-blur-2xl border-b border-amber-500/[0.08]">
        <div className="mx-auto max-w-7xl px-6 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo.svg`}
              alt="LynxPoker"
              className="h-6 md:h-7"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors"
            >
              {t("nav.features")}
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors"
            >
              {t("nav.pricing")}
            </Link>
            <Link
              href="#comparison"
              className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors"
            >
              {t("nav.useCases")}
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={locale === "en" ? "/he" : "/en"}
              className="p-2 rounded-lg hover:bg-amber-500/5 transition-colors text-text-minus-1 hover:text-amber-400"
              title={locale === "en" ? "עברית" : "English"}
            >
              <Globe className="w-4.5 h-4.5" />
            </Link>
            <a href="https://app.lynx.poker/signin">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </a>
            <a href="https://app.lynx.poker/signup">
              <Button variant="primary" size="md">
                {t("nav.startFree")}
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* ═══════════ Hero ═══════════ */}
      <section className="relative pt-28 pb-4 px-6 overflow-hidden">
        {/* Atmospheric glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-amber-500/[0.06] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-amber-600/[0.04] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 left-0 w-[300px] h-[400px] bg-amber-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

        {/* Floating suits */}
        <FloatingSuit
          suit="♠"
          className="text-[12rem] top-16 left-[8%] rotate-[-15deg]"
        />
        <FloatingSuit
          suit="♥"
          className="text-[8rem] top-32 right-[12%] rotate-[12deg]"
        />
        <FloatingSuit
          suit="♦"
          className="text-[10rem] top-[60%] left-[5%] rotate-[20deg]"
        />
        <FloatingSuit
          suit="♣"
          className="text-[9rem] top-[45%] right-[6%] rotate-[-8deg]"
        />

        <div className="mx-auto max-w-7xl relative z-10">
          {/* Badge */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-amber-500/[0.08] border border-amber-500/20 backdrop-blur-sm">
              <span className="text-amber-400 text-sm">♠</span>
              <span className="text-xs font-bold text-amber-400/90 uppercase tracking-wider">
                {isRtl
                  ? "הפלטפורמה היחידה עם ניהול דילרים בזמן אמת"
                  : "The only platform with real-time dealer management"}
              </span>
              <span className="text-amber-400 text-sm">♠</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            className="text-center max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-text-primary mb-6 leading-[1.08] tracking-tight">
              {isRtl ? (
                <>
                  טורנירי פוקר מקצועיים,{" "}
                  <span className="text-gold-gradient">בכל מקום</span>
                </>
              ) : (
                <>
                  Run tournaments{" "}
                  <br className="hidden md:block" />
                  like a <span className="text-gold-gradient">pro</span>
                </>
              )}
            </h1>
            <p className="text-lg md:text-xl text-text-minus-1 max-w-2xl mx-auto leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <a href="https://app.lynx.poker/signup">
              <Button variant="primary" size="lg" className="text-base px-8">
                {t("hero.cta")}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </motion.div>

          {/* Live Clock Demo */}
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-amber-500/[0.06] rounded-3xl blur-3xl pointer-events-none glow-pulse" />
              <div className="relative">
                <LiveClock />
              </div>
              <div className="absolute -top-3 left-6 flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-rose-600 to-rose-500 shadow-[0_0_15px_rgba(225,29,72,0.4)]">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                  Live Demo
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ Social Proof Stats ═══════════ */}
      <section className="py-12 px-6 mt-12 relative z-10">
        <motion.div
          className="mx-auto max-w-5xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="suit-divider mb-10">♠ ♥ ♦ ♣</div>
          <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-8 text-center">
            {[
              { value: "10,000+", label: t("socialProof.tournaments") },
              { value: "50,000+", label: t("socialProof.players") },
              { value: "100+", label: t("socialProof.countries") },
            ].map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <p className="text-4xl md:text-5xl font-black text-gold-gradient">
                  {value}
                </p>
                <p className="text-sm text-text-minus-1 mt-2 uppercase tracking-wider font-medium">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════ 10 Key Advantages ═══════════ */}
      <section id="features" className="py-24 px-6 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/[0.02] to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-400/80 mb-4">
              <span>♦</span> {t("advantages.sectionLabel")} <span>♦</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
              {t("advantages.title")}
            </h2>
            <p className="text-lg text-text-minus-1 max-w-2xl mx-auto">
              {t("advantages.subtitle")}
            </p>
          </motion.div>

          {/* Top row: 2 large feature cards */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 mb-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {advantageKeys.slice(0, 2).map((key, i) => {
              const Icon = advantageIcons[i];
              const suit = advantageSuits[i];
              const hasBadge = key === "dealers";
              return (
                <motion.div
                  key={key}
                  className="relative p-8 rounded-2xl border border-amber-500/[0.08] bg-gradient-to-br from-amber-500/[0.04] to-transparent group hover:border-amber-500/20 transition-all duration-500 card-glow"
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                >
                  {hasBadge && (
                    <span className="absolute top-4 end-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/20">
                      {t(`advantages.${key}.badge`)}
                    </span>
                  )}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <span className="text-2xl text-amber-500/20 font-serif">
                      {suit}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {t(`advantages.${key}.title`)}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {t(`advantages.${key}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Remaining 8 advantages in a tight grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {advantageKeys.slice(2).map((key, i) => {
              const Icon = advantageIcons[i + 2];
              const suit = advantageSuits[i + 2];
              const hasBadge = key === "dealers";
              return (
                <motion.div
                  key={key}
                  className="relative p-6 rounded-2xl bg-surface-plus-1/30 border border-amber-500/[0.06] hover:border-amber-500/15 transition-all duration-500 card-glow group"
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                >
                  {hasBadge && (
                    <span className="absolute top-3 end-3 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/20">
                      {t(`advantages.${key}.badge`)}
                    </span>
                  )}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <span className="text-lg text-amber-500/10 font-serif group-hover:text-amber-500/20 transition-colors">
                      {suit}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-2">
                    {t(`advantages.${key}.title`)}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {t(`advantages.${key}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ How It Works ═══════════ */}
      <section className="py-24 px-6 relative z-10">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-400/80 mb-4">
              <span>♣</span> {isRtl ? "איך זה עובד" : "How It Works"}{" "}
              <span>♣</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
              {t("howItWorks.title")}
            </h2>
            <p className="text-lg text-text-minus-1">
              {t("howItWorks.subtitle")}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {(
              [
                { key: "step1", num: "01", suit: "♠", emoji: "🚀" },
                { key: "step2", num: "02", suit: "♥", emoji: "🎯" },
                { key: "step3", num: "03", suit: "♦", emoji: "📈" },
              ] as const
            ).map(({ key, num, suit, emoji }, i) => (
              <motion.div
                key={key}
                className="relative text-center md:text-start"
                variants={fadeInUp}
              >
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 start-[calc(100%+0.5rem)] w-[calc(100%-3rem)] h-px bg-gradient-to-r from-amber-500/20 to-transparent" />
                )}
                <div className="flex flex-col items-center md:items-start gap-3 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/10 flex items-center justify-center text-3xl">
                    {emoji}
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-black text-amber-500/20">
                      {num}
                    </span>
                    <span className="text-xl text-amber-500/10 font-serif mb-0.5">
                      {suit}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {t(`howItWorks.${key}.title`)}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {t(`howItWorks.${key}.description`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ Competitor Comparison ═══════════ */}
      <section id="comparison" className="py-24 px-6 relative z-10">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-400/80 mb-4">
              <span>♥</span> {isRtl ? "השוואה" : "Comparison"}{" "}
              <span>♥</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
              {isRtl ? "איך אנחנו משתווים" : "See how we compare"}
            </h2>
            <p className="text-lg text-text-minus-1 max-w-2xl mx-auto">
              {isRtl
                ? "השוואה ישירה מול הפתרונות הפופולריים בשוק"
                : "A direct comparison against the most popular solutions on the market"}
            </p>
          </motion.div>

          <div className="rounded-2xl border border-amber-500/[0.08] bg-gradient-to-b from-amber-500/[0.03] to-surface-primary/80 p-6 md:p-8 card-glow">
            <CompetitorComparison />
          </div>
        </div>
      </section>

      {/* ═══════════ Pricing ═══════════ */}
      <section id="pricing" className="py-24 px-6 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/[0.03] to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-400/80 mb-4">
              <span>♠</span> {t("pricingSection.sectionLabel")}{" "}
              <span>♠</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
              {t("pricingSection.title")}
            </h2>
            <p className="text-lg text-text-minus-1 max-w-2xl mx-auto">
              {t("pricingSection.subtitle")}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {pricingTiers.map((tier, i) => {
              const isPro = tier === "pro";
              const isEnterprise = tier === "enterprise";
              const featureCounts = { free: 5, starter: 6, pro: 8, enterprise: 7 } as const;
              const count = featureCounts[tier];
              const features: string[] = [];
              for (let j = 0; j < count; j++) {
                features.push(t(`pricingSection.${tier}.features.${j}`));
              }

              return (
                <motion.div
                  key={tier}
                  className={`relative rounded-2xl border p-6 flex flex-col transition-all duration-500 ${
                    isPro
                      ? "border-amber-500/30 bg-gradient-to-b from-amber-500/[0.08] to-amber-500/[0.02] card-glow scale-[1.02] lg:scale-105"
                      : "border-amber-500/[0.08] bg-surface-plus-1/20 hover:border-amber-500/15"
                  }`}
                  variants={fadeInUp}
                >
                  {isPro && (
                    <div className="absolute -top-3.5 inset-x-0 flex justify-center">
                      <span className="px-4 py-1 rounded-full bg-amber-500 text-xs font-bold text-black uppercase tracking-wider">
                        {t("pricingSection.popular")}
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-text-primary mb-1">
                      {t(`pricingSection.${tier}.name`)}
                    </h3>
                    <p className="text-sm text-text-minus-1 mb-4">
                      {t(`pricingSection.${tier}.description`)}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-text-primary">
                        {t(`pricingSection.${tier}.price`)}
                      </span>
                      <span className="text-sm text-text-minus-1">
                        /{t("pricingSection.monthly")}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-text-secondary"
                      >
                        <Check className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={isEnterprise ? "#" : "https://app.lynx.poker/signup"}>
                    <Button
                      variant={isPro ? "primary" : "secondary"}
                      size="md"
                      className="w-full"
                    >
                      {isEnterprise
                        ? t("pricingSection.ctaEnterprise")
                        : t("pricingSection.cta")}
                    </Button>
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ Testimonials ═══════════ */}
      <section className="py-24 px-6 relative z-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-400/80 mb-4">
              <span>♦</span> {t("testimonials.sectionLabel")}{" "}
              <span>♦</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary">
              {t("testimonials.title")}
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="relative p-6 rounded-2xl border border-amber-500/[0.08] bg-surface-plus-1/20 hover:border-amber-500/15 transition-all duration-500 card-glow"
                variants={fadeInUp}
              >
                <Quote className="w-8 h-8 text-amber-500/20 mb-4" />
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  &ldquo;{t(`testimonials.items.${i}.quote`)}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-sm font-bold text-text-primary">
                  {t(`testimonials.items.${i}.name`)}
                </p>
                <p className="text-xs text-text-minus-1">
                  {t(`testimonials.items.${i}.role`)}
                </p>
                <p className="text-xs text-text-minus-2">
                  {t(`testimonials.items.${i}.location`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ Trust Badges ═══════════ */}
      <section className="py-12 px-6 relative z-10">
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {(
              [
                { key: "encryption", Icon: Lock },
                { key: "uptime", Icon: Server },
                { key: "gdpr", Icon: Shield },
                { key: "backups", Icon: Database },
              ] as const
            ).map(({ key, Icon }) => (
              <div
                key={key}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-amber-500/[0.08] bg-surface-plus-1/20"
              >
                <Icon className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-text-minus-1 font-medium">
                  {t(`trust.${key}`)}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="py-24 px-6 relative z-10">
        <div className="mx-auto max-w-3xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-400/80 mb-4">
              <span>♣</span> {t("faq.sectionLabel")} <span>♣</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary">
              {t("faq.title")}
            </h2>
          </motion.div>

          <div className="space-y-3">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <FaqItem
                key={i}
                question={t(`faq.items.${i}.question`)}
                answer={t(`faq.items.${i}.answer`)}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ Final CTA ═══════════ */}
      <section className="relative py-28 px-6 overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.04] via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.06] rounded-full blur-[150px] pointer-events-none glow-pulse" />

        <FloatingSuit
          suit="♠"
          className="text-[14rem] top-0 left-[10%] rotate-[-20deg]"
        />
        <FloatingSuit
          suit="♣"
          className="text-[11rem] bottom-0 right-[8%] rotate-[15deg]"
        />

        <div className="mx-auto max-w-3xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-text-minus-1 mb-10">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.lynx.poker/signup">
                <Button
                  variant="primary"
                  size="lg"
                  className="text-base px-10"
                >
                  {t("cta.button")}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-text-minus-1">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-amber-400" /> Free tier
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-amber-400" /> No credit card
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-amber-400" /> Setup in 2 min
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ Footer ═══════════ */}
      <footer className="py-16 px-6 bg-surface-secondary/80 border-t border-amber-500/[0.08] relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="mb-4">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo.svg`}
                  alt="LynxPoker"
                  className="h-6"
                />
              </div>
              <p className="text-sm text-text-minus-1 leading-relaxed">
                Professional poker tournament management platform.
              </p>
              <div className="mt-3 text-amber-500/20 text-sm tracking-[0.3em]">
                ♠ ♥ ♦ ♣
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-text-primary mb-4">
                {t("footer.product")}
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="#features"
                    className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors"
                  >
                    {t("footer.features")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors"
                  >
                    {t("footer.pricing")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors"
                  >
                    {t("footer.mobileApps")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-text-primary mb-4">
                {t("footer.resources")}
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors"
                  >
                    {t("footer.helpCenter")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors"
                  >
                    {t("footer.documentation")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/blog`}
                    className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors"
                  >
                    {t("footer.blog")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-text-primary mb-4">
                {t("footer.company")}
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors"
                  >
                    {t("footer.about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors"
                  >
                    {t("footer.contact")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/privacy`}
                    className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors"
                  >
                    {t("footer.privacy")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/terms`}
                    className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors"
                  >
                    {t("footer.terms")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-amber-500/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-minus-2">{t("footer.copyright")}</p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-text-minus-2 hover:text-amber-400 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-text-minus-2 hover:text-amber-400 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
