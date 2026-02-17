"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Tag, ChevronLeft } from "lucide-react";
import { blogPosts, type BlogPost } from "@/lib/blog-data";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function CategoryBadge({ category }: { category: string }) {
  const colorMap: Record<string, string> = {
    product: "bg-primary/20 text-primary",
    guides: "bg-green-500/20 text-green-400",
    industry: "bg-blue-500/20 text-blue-400",
    updates: "bg-amber-500/20 text-amber-400",
    tips: "bg-rose-500/20 text-rose-400",
  };
  const colors = colorMap[category] || "bg-gray-500/20 text-gray-400";
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${colors}`}>
      <Tag className="w-3 h-3" />
      {category}
    </span>
  );
}

function FeaturedPost({ post, locale }: { post: BlogPost; locale: string }) {
  const t = useTranslations("blog");
  const p = locale === "he" ? post.he : post.en;

  return (
    <motion.article variants={fadeInUp}>
      <Link
        href={`/${locale}/blog/${post.slug}`}
        className="group block relative overflow-hidden rounded-2xl border border-border-primary bg-gradient-to-br from-surface-primary to-surface-secondary hover:border-primary/50 transition-all duration-300"
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden bg-surface-secondary">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/5 flex items-center justify-center">
              <div className="text-6xl opacity-40 group-hover:scale-110 transition-transform duration-500">
                {post.emoji}
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <CategoryBadge category={post.category} />
              <span className="flex items-center gap-1 text-xs text-text-minus-2">
                <Clock className="w-3 h-3" />
                {p.readTime}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
              {p.title}
            </h2>
            <p className="text-text-minus-1 mb-6 line-clamp-3 leading-relaxed">
              {p.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <time className="text-sm text-text-minus-2">{p.date}</time>
              <span className="flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                {t("readMore")} <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function PostCard({ post, locale }: { post: BlogPost; locale: string }) {
  const t = useTranslations("blog");
  const p = locale === "he" ? post.he : post.en;

  return (
    <motion.article variants={fadeInUp}>
      <Link
        href={`/${locale}/blog/${post.slug}`}
        className="group flex flex-col h-full rounded-xl border border-border-primary bg-surface-primary hover:border-primary/40 hover:bg-surface-secondary transition-all duration-300 overflow-hidden"
      >
        {/* Thumbnail area */}
        <div className="relative aspect-[16/9] overflow-hidden bg-surface-secondary">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 flex items-center justify-center">
            <div className="text-5xl opacity-30 group-hover:scale-110 transition-transform duration-500">
              {post.emoji}
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-3">
            <CategoryBadge category={post.category} />
            <span className="flex items-center gap-1 text-xs text-text-minus-2">
              <Clock className="w-3 h-3" />
              {p.readTime}
            </span>
          </div>
          <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {p.title}
          </h3>
          <p className="text-sm text-text-minus-1 mb-4 line-clamp-3 flex-1 leading-relaxed">
            {p.excerpt}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-border-primary">
            <time className="text-xs text-text-minus-2">{p.date}</time>
            <span className="flex items-center gap-1 text-primary font-semibold text-xs group-hover:gap-2 transition-all">
              {t("readMore")} <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function BlogPage() {
  const t = useTranslations("blog");
  const locale = useLocale();
  const isRtl = locale === "he";

  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
  );
  const featured = sorted[0];
  const rest = sorted.slice(1);

  // Unique categories
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border-primary">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo.svg`} alt="LynxPoker" className="h-8 w-auto" />
          </Link>
          <Link
            href={`/${locale}`}
            className="flex items-center gap-1 text-sm text-text-minus-1 hover:text-text-primary transition-colors"
          >
            {isRtl ? (
              <>
                {t("backHome")} <ArrowRight className="w-4 h-4 rotate-180" />
              </>
            ) : (
              <>
                <ChevronLeft className="w-4 h-4" /> {t("backHome")}
              </>
            )}
          </Link>
        </div>
      </nav>

      {/* Header */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="max-w-6xl mx-auto px-6 pt-16 pb-12"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-amber-400 to-primary bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h1>
          <p className="text-lg text-text-minus-1 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Featured Post */}
        {featured && <FeaturedPost post={featured} locale={locale} />}
      </motion.section>

      {/* Posts Grid */}
      {rest.length > 0 && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="max-w-6xl mx-auto px-6 pb-24"
        >
          <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-text-primary mb-8">
            {t("allPosts")}
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <PostCard key={post.slug} post={post} locale={locale} />
            ))}
          </div>
        </motion.section>
      )}

      {/* Empty state */}
      {blogPosts.length === 0 && (
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <div className="text-6xl mb-6">📝</div>
          <h2 className="text-2xl font-bold text-text-primary mb-3">{t("comingSoon")}</h2>
          <p className="text-text-minus-1">{t("comingSoonDesc")}</p>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-border-primary bg-surface-primary">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo.svg`} alt="LynxPoker" className="h-6 w-auto" />
          </Link>
          <p className="text-xs text-text-minus-2">© 2026 LynxPoker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
