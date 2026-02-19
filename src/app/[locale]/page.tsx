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
} from "lucide-react";
import Link from "next/link";
import { useLocale } from "next-intl";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

/* Decorative floating suit */
function FloatingSuit({ suit, className }: { suit: string; className?: string }) {
  return (
    <span
      className={`absolute pointer-events-none select-none text-amber-500/[0.04] font-serif ${className}`}
      aria-hidden
    >
      {suit}
    </span>
  );
}

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const isRtl = locale === "he";

  return (
    <div className="min-h-screen bg-surface-primary overflow-x-hidden relative">
      {/* Global atmospheric elements */}
      <div className="fixed inset-0 pointer-events-none z-0 diamond-grid opacity-50" />

      {/* ═══════════ Navigation ═══════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-primary/70 backdrop-blur-2xl border-b border-amber-500/[0.08]">
        <div className="mx-auto max-w-7xl px-6 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo.svg`} alt="LynxPoker" className="h-6 md:h-7" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors">{t("nav.features")}</Link>
            <Link href="#comparison" className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors">{t("nav.pricing")}</Link>
            <Link href="#use-cases" className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors">{t("nav.useCases")}</Link>
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
              <Button variant="ghost" size="sm">Login</Button>
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
        <FloatingSuit suit="♠" className="text-[12rem] top-16 left-[8%] rotate-[-15deg]" />
        <FloatingSuit suit="♥" className="text-[8rem] top-32 right-[12%] rotate-[12deg]" />
        <FloatingSuit suit="♦" className="text-[10rem] top-[60%] left-[5%] rotate-[20deg]" />
        <FloatingSuit suit="♣" className="text-[9rem] top-[45%] right-[6%] rotate-[-8deg]" />
        
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
                {locale === "he" ? "הפלטפורמה היחידה עם ניהול דילרים בזמן אמת" : "The only platform with real-time dealer management"}
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
              {locale === "he" ? (
                <>טורנירי פוקר מקצועיים,{" "}<span className="text-gold-gradient">בכל מקום</span></>
              ) : (
                <>Run tournaments{" "}<br className="hidden md:block" />like a{" "}<span className="text-gold-gradient">pro</span></>
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
              {/* Glow behind clock */}
              <div className="absolute -inset-6 bg-amber-500/[0.06] rounded-3xl blur-3xl pointer-events-none glow-pulse" />
              <div className="relative">
                <LiveClock />
              </div>
              {/* Live indicator */}
              <div className="absolute -top-3 left-6 flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-rose-600 to-rose-500 shadow-[0_0_15px_rgba(225,29,72,0.4)]">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">Live Demo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ Social Proof ═══════════ */}
      <section className="py-12 px-6 mt-12 relative z-10">
        <motion.div
          className="mx-auto max-w-5xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Suit divider */}
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
                <p className="text-4xl md:text-5xl font-black text-gold-gradient">{value}</p>
                <p className="text-sm text-text-minus-1 mt-2 uppercase tracking-wider font-medium">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════ Why LynxPoker ═══════════ */}
      <section className="py-24 px-6 relative z-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-400/80 mb-4">
              <span>♦</span> Why LynxPoker <span>♦</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
              {locale === "he" ? "מה שהמתחרים לא יכולים" : "What others can't do"}
            </h2>
            <p className="text-lg text-text-minus-1 max-w-2xl mx-auto">
              {locale === "he"
                ? "שילוב ייחודי של טכנולוגיות מתקדמות שלא תמצאו בשום מקום אחר"
                : "A unique combination of cutting-edge features you won't find anywhere else"}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: RefreshCw,
                title: locale === "he" ? "סנכרון בזמן אמת" : "Real-Time Sync Engine",
                description: locale === "he"
                  ? "כל שינוי מתעדכן מיידית בכל המכשירים. בזמן שמתחרים עובדים עם רענון ידני, אנחנו משתמשים ב-WebSocket לסנכרון אמיתי."
                  : "Every change propagates instantly across all connected devices. While competitors rely on manual refresh, we use WebSocket connections for true real-time sync.",
                accent: "amber",
                suit: "♠",
              },
              {
                icon: UserCog,
                title: locale === "he" ? "ניהול דילרים מובנה" : "Built-in Dealer Management",
                description: locale === "he"
                  ? "הפלטפורמה היחידה במחיר זה עם ניהול דילרים מלא — שיבוצים, הפסקות ולוחות זמנים. המתחרים פשוט לא מציעים את זה."
                  : "The only platform at this price point with comprehensive dealer management — assignments, breaks, and schedules. Competitors simply don't offer this.",
                accent: "gold",
                badge: locale === "he" ? "ייחודי" : "Unique",
                suit: "♥",
              },
              {
                icon: Smartphone,
                title: locale === "he" ? "אפליקציות ייעודיות" : "Purpose-Built Mobile Apps",
                description: locale === "he"
                  ? "אפליקציות Floor ו-Dealer ייעודיות, לא סתם אתר רספונסיבי. כל אפליקציה מותאמת בדיוק לתהליך העבודה של כל תפקיד."
                  : "Dedicated Floor App and Dealer App — not just responsive web. Each app is purpose-built for the specific workflow of each role.",
                accent: "amber",
                suit: "♦",
              },
              {
                icon: Globe,
                title: locale === "he" ? "תמיכה מלאה בעברית" : "Full Hebrew & RTL Support",
                description: locale === "he"
                  ? "הפלטפורמה היחידה עם תמיכה מלאה בעברית ו-RTL. לא תרגום חצי אפוי — ממשק שנבנה מהיסוד לשוק הישראלי."
                  : "The only tournament platform with full Hebrew and RTL support. Not a half-baked translation — a UI built from the ground up for the Israeli market.",
                accent: "gold",
                badge: locale === "he" ? "בלעדי" : "Exclusive",
                suit: "♣",
              },
            ].map(({ icon: Icon, title, description, accent, badge, suit }, i) => (
              <motion.div
                key={title}
                className="relative p-8 rounded-2xl border border-amber-500/[0.08] bg-gradient-to-br from-amber-500/[0.04] to-transparent group hover:border-amber-500/20 transition-all duration-500 card-glow"
                variants={fadeInUp}
              >
                {badge && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/20">
                    {badge}
                  </span>
                )}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <span className="text-2xl text-amber-500/20 font-serif">{suit}</span>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ Features Grid ═══════════ */}
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
              <span>♣</span> Features <span>♣</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">{t("features.title")}</h2>
            <p className="text-lg text-text-minus-1">{t("features.subtitle")}</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { key: "tournament", Icon: Clock, suit: "♠" },
              { key: "sync", Icon: RefreshCw, suit: "♥" },
              { key: "players", Icon: Users, suit: "♦" },
              { key: "dealers", Icon: UserCog, suit: "♣" },
              { key: "mobile", Icon: Smartphone, suit: "♠" },
              { key: "multiOrg", Icon: Building2, suit: "♥" },
            ].map(({ key, Icon, suit }) => (
              <motion.div
                key={key}
                className="group relative p-6 rounded-2xl bg-surface-plus-1/30 border border-amber-500/[0.06] hover:border-amber-500/15 transition-all duration-500 card-glow"
                variants={fadeInUp}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="text-lg text-amber-500/10 font-serif group-hover:text-amber-500/20 transition-colors">{suit}</span>
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2">
                  {t(`features.${key}.title`)}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {t(`features.${key}.description`)}
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
              <span>♥</span> Comparison <span>♥</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
              {locale === "he" ? "איך אנחנו משתווים" : "See how we compare"}
            </h2>
            <p className="text-lg text-text-minus-1 max-w-2xl mx-auto">
              {locale === "he"
                ? "השוואה ישירה מול הפתרונות הפופולריים בשוק"
                : "A direct comparison against the most popular solutions on the market"}
            </p>
          </motion.div>

          <div className="rounded-2xl border border-amber-500/[0.08] bg-gradient-to-b from-amber-500/[0.03] to-surface-primary/80 p-6 md:p-8 card-glow">
            <CompetitorComparison />
          </div>
        </div>
      </section>

      {/* ═══════════ Use Cases ═══════════ */}
      <section id="use-cases" className="py-24 px-6 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/[0.02] to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-400/80 mb-4">
              <span>♠</span> Use Cases <span>♠</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary">{t("useCases.title")}</h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { key: "clubs", Icon: Building2, suit: "♠", emoji: "🏢" },
              { key: "home", Icon: Home, suit: "♥", emoji: "🏠" },
              { key: "charity", Icon: Building2, suit: "♦", emoji: "🎪" },
            ].map(({ key, Icon, suit, emoji }) => (
              <motion.div
                key={key}
                className="group relative rounded-2xl border border-amber-500/[0.08] overflow-hidden card-glow hover:border-amber-500/15 transition-all duration-500"
                variants={fadeInUp}
                whileHover={{ y: -6 }}
              >
                <div className="h-40 bg-gradient-to-br from-amber-500/[0.08] via-surface-plus-1/50 to-surface-primary flex items-center justify-center relative">
                  <span className="text-6xl relative z-10">{emoji}</span>
                  <span className="absolute top-3 right-4 text-4xl text-amber-500/[0.06] font-serif">{suit}</span>
                </div>
                <div className="p-6 bg-surface-primary/80">
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {t(`useCases.${key}.title`)}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {t(`useCases.${key}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
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
              <span>♣</span> Get Started <span>♣</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary">{t("howItWorks.title")}</h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { key: "step1", num: "01", suit: "♠" },
              { key: "step2", num: "02", suit: "♥" },
              { key: "step3", num: "03", suit: "♦" },
            ].map(({ key, num, suit }, i) => (
              <motion.div key={key} className="relative" variants={fadeInUp}>
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-px bg-gradient-to-r from-amber-500/20 to-transparent -translate-x-8" />
                )}
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-5xl font-black text-amber-500/20">{num}</span>
                  <span className="text-2xl text-amber-500/10 font-serif mb-1">{suit}</span>
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

      {/* ═══════════ Pricing Teaser ═══════════ */}
      <section className="py-16 px-6 relative z-10 border-y border-amber-500/[0.08]">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/[0.03] via-transparent to-amber-500/[0.03] pointer-events-none" />
        <div className="mx-auto max-w-5xl relative">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">{t("pricing.title")}</h3>
              <p className="text-base text-text-minus-1">{t("pricing.subtitle")}</p>
            </div>
            <Button variant="secondary" size="lg">
              {t("pricing.cta")}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ Final CTA ═══════════ */}
      <section className="relative py-28 px-6 overflow-hidden z-10">
        {/* Background glows */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.04] via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.06] rounded-full blur-[150px] pointer-events-none glow-pulse" />

        {/* Floating suits */}
        <FloatingSuit suit="♠" className="text-[14rem] top-0 left-[10%] rotate-[-20deg]" />
        <FloatingSuit suit="♣" className="text-[11rem] bottom-0 right-[8%] rotate-[15deg]" />
        
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6">{t("cta.title")}</h2>
            <p className="text-lg text-text-minus-1 mb-10">{t("cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.lynx.poker/signup">
                <Button variant="primary" size="lg" className="text-base px-10">
                  {t("cta.button")}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-text-minus-1">
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-amber-400" /> Free tier</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-amber-400" /> No credit card</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-amber-400" /> Setup in 2 min</span>
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
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo.svg`} alt="LynxPoker" className="h-6" />
              </div>
              <p className="text-sm text-text-minus-1 leading-relaxed">
                Professional poker tournament management platform.
              </p>
              <div className="mt-3 text-amber-500/20 text-sm tracking-[0.3em]">♠ ♥ ♦ ♣</div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-text-primary mb-4">{t("footer.product")}</h4>
              <ul className="space-y-2.5">
                <li><Link href="#" className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors">{t("footer.features")}</Link></li>
                <li><Link href="#" className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors">{t("footer.pricing")}</Link></li>
                <li><Link href="#" className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors">{t("footer.mobileApps")}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-text-primary mb-4">{t("footer.resources")}</h4>
              <ul className="space-y-2.5">
                <li><Link href="#" className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors">{t("footer.helpCenter")}</Link></li>
                <li><Link href="#" className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors">{t("footer.documentation")}</Link></li>
                <li><Link href={`/${locale}/blog`} className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors">{t("footer.blog")}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-text-primary mb-4">{t("footer.company")}</h4>
              <ul className="space-y-2.5">
                <li><Link href="#" className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors">{t("footer.about")}</Link></li>
                <li><Link href="#" className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors">{t("footer.contact")}</Link></li>
                <li><Link href={`/${locale}/privacy`} className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors">{t("footer.privacy")}</Link></li>
                <li><Link href={`/${locale}/terms`} className="text-sm text-text-minus-1 hover:text-amber-400 transition-colors">{t("footer.terms")}</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-amber-500/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-minus-2">{t("footer.copyright")}</p>
            <div className="flex gap-6">
              <Link href="#" className="text-text-minus-2 hover:text-amber-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </Link>
              <Link href="#" className="text-text-minus-2 hover:text-amber-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
