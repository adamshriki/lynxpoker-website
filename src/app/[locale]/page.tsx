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
  Heart,
  ArrowRight,
  Globe,
  Play,
  Shield,
  Zap,
  BarChart3,
  Layers,
  Check,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useLocale } from "next-intl";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const isRtl = locale === "he";

  return (
    <div className="min-h-screen bg-surface-primary overflow-x-hidden">
      {/* ═══════════ Navigation ═══════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-primary/60 backdrop-blur-xl border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-surface-blue-primary flex items-center justify-center">
              <span className="text-white font-black text-sm">L</span>
            </div>
            <span className="text-xl font-bold text-text-primary tracking-tight">
              Lynx<span className="text-text-blue-primary">Poker</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-text-minus-1 hover:text-text-primary transition-colors">{t("nav.features")}</Link>
            <Link href="#comparison" className="text-sm text-text-minus-1 hover:text-text-primary transition-colors">{t("nav.pricing")}</Link>
            <Link href="#use-cases" className="text-sm text-text-minus-1 hover:text-text-primary transition-colors">{t("nav.useCases")}</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={locale === "en" ? "/he" : "/en"}
              className="p-2 rounded-lg hover:bg-surface-plus-1 transition-colors text-text-minus-1 hover:text-text-primary"
              title={locale === "en" ? "עברית" : "English"}
            >
              <Globe className="w-4.5 h-4.5" />
            </Link>
            <Button variant="ghost" size="sm">{t("hero.ctaSecondary")}</Button>
            <Button variant="primary" size="md">
              {t("nav.startFree")}
            </Button>
          </div>
        </div>
      </nav>

      {/* ═══════════ Hero ═══════════ */}
      <section className="relative pt-28 pb-4 px-6">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-surface-blue-primary/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-surface-blue-primary/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl relative z-10">
          {/* Badge */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-blue-primary/10 border border-surface-blue-primary/20">
              <Zap className="w-3.5 h-3.5 text-text-blue-primary" />
              <span className="text-xs font-semibold text-text-blue-primary">
                The only poker platform with real-time dealer management
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            className="text-center max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-text-primary mb-6 leading-[1.1] tracking-tight">
              {locale === "he" ? (
                <>טורנירי פוקר מקצועיים,{" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">בכל מקום</span></>
              ) : (
                <>Run tournaments like a{" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">pro</span></>
              )}
            </h1>
            <p className="text-lg md:text-xl text-text-minus-1 max-w-2xl mx-auto leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <Button variant="primary" size="lg" className="text-base px-8">
              {t("hero.cta")}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8">
              <Play className="w-5 h-5" />
              {t("hero.ctaSecondary")}
            </Button>
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
              <div className="absolute -inset-4 bg-surface-blue-primary/10 rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative">
                <LiveClock />
              </div>
              {/* Live indicator */}
              <div className="absolute -top-3 left-6 flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/90 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">Live Demo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ Social Proof Strip ═══════════ */}
      <section className="py-10 px-6 mt-12">
        <motion.div
          className="mx-auto max-w-5xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 text-center">
            {[
              { value: "10,000+", label: t("socialProof.tournaments") },
              { value: "50,000+", label: t("socialProof.players") },
              { value: "100+", label: t("socialProof.countries") },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl md:text-4xl font-extrabold text-text-primary">{value}</p>
                <p className="text-sm text-text-minus-1 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════ Why LynxPoker (Competitive Advantages) ═══════════ */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-text-blue-primary mb-4">Why LynxPoker</span>
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
            {/* Advantage Cards */}
            {[
              {
                icon: RefreshCw,
                title: locale === "he" ? "סנכרון בזמן אמת" : "Real-Time Sync Engine",
                description: locale === "he"
                  ? "כל שינוי מתעדכן מיידית בכל המכשירים. בזמן שמתחרים עובדים עם רענון ידני, אנחנו משתמשים ב-WebSocket לסנכרון אמיתי."
                  : "Every change propagates instantly across all connected devices. While competitors rely on manual refresh, we use WebSocket connections for true real-time sync.",
                color: "from-blue-500/20 to-blue-500/5",
                borderColor: "border-blue-500/20",
              },
              {
                icon: UserCog,
                title: locale === "he" ? "ניהול דילרים מובנה" : "Built-in Dealer Management",
                description: locale === "he"
                  ? "הפלטפורמה היחידה במחיר זה עם ניהול דילרים מלא — שיבוצים, הפסקות ולוחות זמנים. המתחרים פשוט לא מציעים את זה."
                  : "The only platform at this price point with comprehensive dealer management — assignments, breaks, and schedules. Competitors simply don't offer this.",
                color: "from-amber-500/20 to-amber-500/5",
                borderColor: "border-amber-500/20",
                badge: locale === "he" ? "ייחודי" : "Unique",
              },
              {
                icon: Smartphone,
                title: locale === "he" ? "אפליקציות ייעודיות" : "Purpose-Built Mobile Apps",
                description: locale === "he"
                  ? "אפליקציות Floor ו-Dealer ייעודיות, לא סתם אתר רספונסיבי. כל אפליקציה מותאמת בדיוק לתהליך העבודה של כל תפקיד."
                  : "Dedicated Floor App and Dealer App — not just responsive web. Each app is purpose-built for the specific workflow of each role.",
                color: "from-green-500/20 to-green-500/5",
                borderColor: "border-green-500/20",
              },
              {
                icon: Globe,
                title: locale === "he" ? "תמיכה מלאה בעברית" : "Full Hebrew & RTL Support",
                description: locale === "he"
                  ? "הפלטפורמה היחידה עם תמיכה מלאה בעברית ו-RTL. לא תרגום חצי אפוי — ממשק שנבנה מהיסוד לשוק הישראלי."
                  : "The only tournament platform with full Hebrew and RTL support. Not a half-baked translation — a UI built from the ground up for the Israeli market.",
                color: "from-cyan-500/20 to-cyan-500/5",
                borderColor: "border-cyan-500/20",
                badge: locale === "he" ? "בלעדי" : "Exclusive",
              },
            ].map(({ icon: Icon, title, description, color, borderColor, badge }, i) => (
              <motion.div
                key={title}
                className={`relative p-8 rounded-2xl border ${borderColor} bg-gradient-to-br ${color} group hover:scale-[1.02] transition-transform duration-300`}
                variants={fadeInUp}
              >
                {badge && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/20">
                    {badge}
                  </span>
                )}
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ Features Grid ═══════════ */}
      <section id="features" className="py-24 px-6 bg-surface-secondary/50">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-text-blue-primary mb-4">Features</span>
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
              { key: "tournament", Icon: Clock, color: "text-blue-400" },
              { key: "sync", Icon: RefreshCw, color: "text-cyan-400" },
              { key: "players", Icon: Users, color: "text-green-400" },
              { key: "dealers", Icon: UserCog, color: "text-amber-400" },
              { key: "mobile", Icon: Smartphone, color: "text-rose-400" },
              { key: "multiOrg", Icon: Building2, color: "text-purple-400" },
            ].map(({ key, Icon, color }) => (
              <motion.div
                key={key}
                className="group relative p-6 rounded-2xl bg-surface-primary border border-border-primary hover:border-white/10 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -4 }}
              >
                <Icon className={`w-8 h-8 ${color} mb-4`} />
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
      <section id="comparison" className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-text-blue-primary mb-4">Comparison</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
              {locale === "he" ? "איך אנחנו משתווים" : "See how we compare"}
            </h2>
            <p className="text-lg text-text-minus-1 max-w-2xl mx-auto">
              {locale === "he"
                ? "השוואה ישירה מול הפתרונות הפופולריים בשוק"
                : "A direct comparison against the most popular solutions on the market"}
            </p>
          </motion.div>

          <div className="bg-surface-secondary rounded-2xl border border-border-primary p-6 md:p-8">
            <CompetitorComparison />
          </div>
        </div>
      </section>

      {/* ═══════════ Use Cases ═══════════ */}
      <section id="use-cases" className="py-24 px-6 bg-surface-secondary/50">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-text-blue-primary mb-4">Use Cases</span>
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
              { key: "clubs", Icon: Building2, gradient: "from-blue-600/30 to-blue-900/30", emoji: "🏢" },
              { key: "home", Icon: Home, gradient: "from-green-600/30 to-green-900/30", emoji: "🏠" },
              { key: "charity", Icon: Heart, gradient: "from-rose-600/30 to-rose-900/30", emoji: "❤️" },
            ].map(({ key, Icon, gradient, emoji }) => (
              <motion.div
                key={key}
                className="group relative rounded-2xl border border-border-primary overflow-hidden"
                variants={fadeInUp}
                whileHover={{ y: -6 }}
              >
                {/* Gradient header */}
                <div className={`h-40 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                  <span className="text-6xl">{emoji}</span>
                </div>
                <div className="p-6 bg-surface-primary">
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
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-text-blue-primary mb-4">Get Started</span>
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
              { key: "step1", num: "01" },
              { key: "step2", num: "02" },
              { key: "step3", num: "03" },
            ].map(({ key, num }, i) => (
              <motion.div key={key} className="relative" variants={fadeInUp}>
                {/* Connector line */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-px bg-gradient-to-r from-border-secondary to-transparent -translate-x-8" />
                )}
                <div className="text-5xl font-black text-surface-blue-primary/30 mb-4">{num}</div>
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
      <section className="py-16 px-6 bg-surface-secondary/50 border-y border-border-primary">
        <div className="mx-auto max-w-5xl">
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
      <section className="relative py-28 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-blue-primary/8 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-surface-blue-primary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6">{t("cta.title")}</h2>
            <p className="text-lg text-text-minus-1 mb-10">{t("cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="text-base px-10">
                {t("cta.button")}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-text-minus-1">
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-400" /> Free tier</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-400" /> No credit card</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-400" /> Setup in 2 min</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ Footer ═══════════ */}
      <footer className="py-16 px-6 bg-surface-secondary border-t border-border-primary">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-surface-blue-primary flex items-center justify-center">
                  <span className="text-white font-black text-xs">L</span>
                </div>
                <span className="text-lg font-bold text-text-primary">LynxPoker</span>
              </div>
              <p className="text-sm text-text-minus-1 leading-relaxed">
                Professional poker tournament management platform.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-text-primary mb-4">{t("footer.product")}</h4>
              <ul className="space-y-2.5">
                <li><Link href="#" className="text-sm text-text-minus-1 hover:text-text-primary transition-colors">{t("footer.features")}</Link></li>
                <li><Link href="#" className="text-sm text-text-minus-1 hover:text-text-primary transition-colors">{t("footer.pricing")}</Link></li>
                <li><Link href="#" className="text-sm text-text-minus-1 hover:text-text-primary transition-colors">{t("footer.mobileApps")}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-text-primary mb-4">{t("footer.resources")}</h4>
              <ul className="space-y-2.5">
                <li><Link href="#" className="text-sm text-text-minus-1 hover:text-text-primary transition-colors">{t("footer.helpCenter")}</Link></li>
                <li><Link href="#" className="text-sm text-text-minus-1 hover:text-text-primary transition-colors">{t("footer.documentation")}</Link></li>
                <li><Link href="#" className="text-sm text-text-minus-1 hover:text-text-primary transition-colors">{t("footer.blog")}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-text-primary mb-4">{t("footer.company")}</h4>
              <ul className="space-y-2.5">
                <li><Link href="#" className="text-sm text-text-minus-1 hover:text-text-primary transition-colors">{t("footer.about")}</Link></li>
                <li><Link href="#" className="text-sm text-text-minus-1 hover:text-text-primary transition-colors">{t("footer.contact")}</Link></li>
                <li><Link href="#" className="text-sm text-text-minus-1 hover:text-text-primary transition-colors">{t("footer.privacy")}</Link></li>
                <li><Link href="#" className="text-sm text-text-minus-1 hover:text-text-primary transition-colors">{t("footer.terms")}</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-border-primary flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-minus-2">{t("footer.copyright")}</p>
            <div className="flex gap-6">
              <Link href="#" className="text-text-minus-2 hover:text-text-minus-1 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </Link>
              <Link href="#" className="text-text-minus-2 hover:text-text-minus-1 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
