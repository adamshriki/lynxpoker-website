"use client";

import React from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import {
  ArrowLeft,
  Sparkles,
  Palette,
  Zap,
  RefreshCw,
  Wifi,
  Heart,
  ExternalLink,
  Quote,
  User,
  Clock,
  Code,
  Globe,
  Trophy,
} from "lucide-react";

/* ── Animation variants ── */
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

const staggerContainer = {
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true },
};

const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

/* ── Floating card suit decorator ── */
function FloatingSuit({ suit, className }: { suit: string; className?: string }) {
  return (
    <motion.span
      className={`absolute pointer-events-none select-none text-amber-500/[0.04] font-serif ${className}`}
      aria-hidden
      animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      {suit}
    </motion.span>
  );
}

/* ── Pull Quote component ── */
function PullQuote({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <motion.blockquote
      className="relative my-12 md:my-16 px-6 md:px-12"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute top-0 start-0 w-1 h-full bg-gradient-to-b from-amber-400 via-amber-500/50 to-transparent rounded-full" />
      <Quote className="w-8 h-8 text-amber-500/20 mb-3" />
      <p className="text-xl md:text-2xl lg:text-3xl font-bold text-text-primary leading-snug italic">
        &ldquo;{text}&rdquo;
      </p>
    </motion.blockquote>
  );
}

/* ── Chapter heading ── */
function ChapterHeading({
  label,
  title,
  delay = 0,
}: {
  label: string;
  title: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
    >
      <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-2">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary leading-tight">
        {title}
      </h2>
    </motion.div>
  );
}

/* ── Narrative paragraph ── */
function NarrativeParagraph({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.p
      className="text-base md:text-lg text-text-secondary leading-relaxed mb-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.p>
  );
}

/* ── Stat card ── */
function StatCard({
  value,
  label,
  icon: Icon,
  delay = 0,
}: {
  value: string;
  label: string;
  icon: React.ElementType;
  delay?: number;
}) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="absolute inset-0 bg-amber-500/5 rounded-2xl blur-xl group-hover:bg-amber-500/10 transition-colors duration-500" />
      <div className="relative bg-surface-plus-1/40 backdrop-blur-sm border border-amber-500/[0.08] rounded-2xl p-6 text-center hover:border-amber-500/20 transition-colors">
        <Icon className="w-5 h-5 text-amber-400/60 mx-auto mb-3" />
        <div className="text-3xl md:text-4xl font-extrabold text-amber-400 mb-1">
          {value}
        </div>
        <div className="text-sm text-text-minus-1">{label}</div>
      </div>
    </motion.div>
  );
}

/* ── Venture card ── */
function VentureCard({
  name,
  description,
  link,
  href,
  delay = 0,
}: {
  name: string;
  description: string;
  link: string;
  href: string;
  delay?: number;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-surface-plus-1/30 backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 hover:border-amber-500/20 transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-text-primary group-hover:text-amber-400 transition-colors">
            {name}
          </h3>
          <ExternalLink className="w-4 h-4 text-text-minus-2 group-hover:text-amber-400 transition-colors shrink-0 mt-1" />
        </div>
        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          {description}
        </p>
        <span className="text-xs text-amber-400/60 font-mono">{link}</span>
      </div>
    </motion.a>
  );
}

/* ── Testimonial card ── */
function TestimonialCard({
  text,
  author,
  role,
  delay = 0,
}: {
  text: string;
  author: string;
  role: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
    >
      <div className="bg-surface-plus-1/30 backdrop-blur-sm border border-amber-500/[0.08] rounded-2xl p-8 h-full">
        <Quote className="w-6 h-6 text-amber-500/30 mb-4" />
        <p className="text-base md:text-lg text-text-primary leading-relaxed italic mb-6">
          &ldquo;{text}&rdquo;
        </p>
        <div>
          <div className="font-semibold text-text-primary text-sm">{author}</div>
          <div className="text-xs text-text-minus-1">{role}</div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Differentiator item ── */
function DifferentiatorItem({
  icon: Icon,
  title,
  description,
  delay = 0,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="flex gap-4 md:gap-5"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mt-0.5">
        <Icon className="w-5 h-5 text-amber-400" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-text-primary mb-1">{title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ══════════════════════════════════════════════════ */
export default function StoryPage() {
  const t = useTranslations("story");
  const tNav = useTranslations("nav");
  const locale = useLocale();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const diffIcons = [Sparkles, Palette, RefreshCw, Wifi, Heart] as const;
  const diffKeys = ["design", "simplicity", "updates", "technology", "community"] as const;

  return (
    <div className="min-h-screen bg-surface-primary overflow-x-hidden relative">
      {/* Diamond grid background */}
      <div className="fixed inset-0 pointer-events-none z-0 diamond-grid opacity-50" />

      {/* Floating suits */}
      <FloatingSuit suit="♠" className="top-[12%] start-[8%] text-8xl" />
      <FloatingSuit suit="♥" className="top-[28%] end-[6%] text-7xl" />
      <FloatingSuit suit="♦" className="top-[55%] start-[4%] text-9xl" />
      <FloatingSuit suit="♣" className="top-[72%] end-[10%] text-8xl" />
      <FloatingSuit suit="♠" className="top-[90%] start-[15%] text-7xl" />

      {/* ═══════════ Navigation ═══════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-primary/70 backdrop-blur-2xl border-b border-amber-500/[0.08]">
        <div className="mx-auto max-w-7xl px-6 py-3.5 flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center">
            <img src={`${basePath}/logo.svg`} alt="LynxPoker" className="h-6 md:h-7" />
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href={`/${locale}`}
              className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{tNav("features")}</span>
            </Link>
            <LanguageSwitcher />
            <a href="https://app.lynx.poker/signup">
              <Button variant="primary" size="md">
                {tNav("startFree")}
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* ═══════════ Hero ═══════════ */}
      <section className="relative pt-32 md:pt-44 pb-16 md:pb-24 px-6">
        {/* Radial glow */}
        <div className="absolute top-0 start-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-text-primary leading-[1.1] mb-6">
              {t("hero.title")}
            </h1>
          </motion.div>
          <motion.p
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="mx-auto mt-12 w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </section>

      {/* ═══════════ Stats ═══════════ */}
      <section className="relative px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <StatCard value={t("stats.pokerYears")} label={t("stats.pokerLabel")} icon={Trophy} delay={0} />
          <StatCard value={t("stats.techYears")} label={t("stats.techLabel")} icon={Code} delay={0.1} />
          <StatCard value={t("stats.startupsCount")} label={t("stats.startupsLabel")} icon={Sparkles} delay={0.2} />
          <StatCard value={t("stats.countriesCount")} label={t("stats.countriesLabel")} icon={Globe} delay={0.3} />
        </div>
      </section>

      {/* ═══════════ Chapter 1 ═══════════ */}
      <section className="relative px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl">
          <ChapterHeading label={t("chapter1.label")} title={t("chapter1.title")} />
          <NarrativeParagraph delay={0.1}>{t("chapter1.p1")}</NarrativeParagraph>
          <NarrativeParagraph delay={0.15}>{t("chapter1.p2")}</NarrativeParagraph>
          <NarrativeParagraph delay={0.2}>{t("chapter1.p3")}</NarrativeParagraph>
          <NarrativeParagraph delay={0.25}>{t("chapter1.p4")}</NarrativeParagraph>
          <PullQuote text={t("chapter1.quote")} />
        </div>
      </section>

      {/* ═══════════ Chapter 2 ═══════════ */}
      <section className="relative px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl">
          <ChapterHeading label={t("chapter2.label")} title={t("chapter2.title")} />
          <NarrativeParagraph delay={0.1}>{t("chapter2.p1")}</NarrativeParagraph>
          <NarrativeParagraph delay={0.15}>{t("chapter2.p2")}</NarrativeParagraph>
          <NarrativeParagraph delay={0.2}>{t("chapter2.p3")}</NarrativeParagraph>
          <NarrativeParagraph delay={0.25}>{t("chapter2.p4")}</NarrativeParagraph>
          <PullQuote text={t("chapter2.quote")} />
        </div>
      </section>

      {/* ═══════════ Chapter 3 ═══════════ */}
      <section className="relative px-6 pb-20 md:pb-28">
        {/* Ambient glow */}
        <div className="absolute top-1/2 end-0 w-[500px] h-[500px] bg-amber-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-3xl">
          <ChapterHeading label={t("chapter3.label")} title={t("chapter3.title")} />
          <NarrativeParagraph delay={0.1}>{t("chapter3.p1")}</NarrativeParagraph>
          <NarrativeParagraph delay={0.15}>{t("chapter3.p2")}</NarrativeParagraph>
          <NarrativeParagraph delay={0.2}>{t("chapter3.p3")}</NarrativeParagraph>
          <NarrativeParagraph delay={0.25}>{t("chapter3.p4")}</NarrativeParagraph>
          <NarrativeParagraph delay={0.3}>{t("chapter3.p5")}</NarrativeParagraph>
          <PullQuote text={t("chapter3.quote")} />
        </div>
      </section>

      {/* ═══════════ Ventures ═══════════ */}
      <section className="relative px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            className="text-2xl md:text-3xl font-extrabold text-text-primary text-center mb-12"
            {...fadeUp}
          >
            {t("ventures.title")}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-5">
            <VentureCard
              name={t("ventures.uniqorn.name")}
              description={t("ventures.uniqorn.description")}
              link={t("ventures.uniqorn.link")}
              href="https://uniqorn.design"
              delay={0}
            />
            <VentureCard
              name={t("ventures.pokergene.name")}
              description={t("ventures.pokergene.description")}
              link={t("ventures.pokergene.link")}
              href="https://pokergene.art"
              delay={0.1}
            />
            <VentureCard
              name={t("ventures.lynxpoker.name")}
              description={t("ventures.lynxpoker.description")}
              link={t("ventures.lynxpoker.link")}
              href="https://lynx.poker"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* ═══════════ Testimonials ═══════════ */}
      <section className="relative px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            className="text-2xl md:text-3xl font-extrabold text-text-primary text-center mb-12"
            {...fadeUp}
          >
            {t("testimonials.title")}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialCard
              text={t("testimonials.quote1.text")}
              author={t("testimonials.quote1.author")}
              role={t("testimonials.quote1.role")}
              delay={0}
            />
            <TestimonialCard
              text={t("testimonials.quote2.text")}
              author={t("testimonials.quote2.author")}
              role={t("testimonials.quote2.role")}
              delay={0.15}
            />
          </div>
        </div>
      </section>

      {/* ═══════════ Chapter 4 — Differentiators ═══════════ */}
      <section className="relative px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl">
          <ChapterHeading label={t("chapter4.label")} title={t("chapter4.title")} />
          <NarrativeParagraph delay={0.1}>{t("chapter4.p1")}</NarrativeParagraph>

          <div className="mt-10 space-y-6">
            {diffKeys.map((key, i) => (
              <DifferentiatorItem
                key={key}
                icon={diffIcons[i]}
                title={t(`chapter4.items.${key}.title`)}
                description={t(`chapter4.items.${key}.description`)}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="relative px-6 pb-24 md:pb-32">
        {/* Glow */}
        <div className="absolute bottom-0 start-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          className="relative mx-auto max-w-2xl text-center"
          {...fadeUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-base md:text-lg text-text-secondary mb-8">
            {t("cta.subtitle")}
          </p>
          <a href="https://app.lynx.poker/signup">
            <Button variant="primary" size="lg">
              {t("cta.button")}
            </Button>
          </a>
        </motion.div>
      </section>

      {/* ═══════════ Footer ═══════════ */}
      <footer className="py-8 px-6 bg-surface-secondary border-t border-border-primary text-center">
        <p className="text-xs text-text-minus-2">© 2026 LynxPoker. All rights reserved.</p>
      </footer>
    </div>
  );
}
