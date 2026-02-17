"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Tag, ChevronLeft } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { blogContent } from "@/lib/blog-content";
import { notFound } from "next/navigation";
import { use } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
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
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${colors}`}>
      <Tag className="w-3 h-3" />
      {category}
    </span>
  );
}

interface ContentBlock {
  type: "paragraph" | "heading" | "list" | "quote" | "divider" | "callout" | "comparison-table";
  text?: string;
  items?: string[];
  emoji?: string;
  level?: number;
  tableData?: { headers: string[]; rows: string[][] };
}

function RenderBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading":
      if (block.level === 3) {
        return (
          <motion.h3
            variants={fadeInUp}
            className="text-lg font-bold text-text-primary mt-6 mb-3"
          >
            {block.text}
          </motion.h3>
        );
      }
      return (
        <motion.h2
          variants={fadeInUp}
          className="text-2xl font-bold text-text-primary mt-10 mb-4"
        >
          {block.text}
        </motion.h2>
      );
    case "paragraph":
      return (
        <motion.p
          variants={fadeInUp}
          className="text-text-minus-1 leading-relaxed mb-5"
        >
          {block.text}
        </motion.p>
      );
    case "list":
      return (
        <motion.ul variants={fadeInUp} className="space-y-3 mb-6 ms-1">
          {block.items?.map((item, i) => (
            <li key={i} className="flex gap-3 text-text-minus-1 leading-relaxed">
              <span className="text-primary mt-1 shrink-0">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>
      );
    case "quote":
      return (
        <motion.blockquote
          variants={fadeInUp}
          className="border-s-4 border-primary/50 ps-6 py-3 my-8 bg-primary/5 rounded-e-lg"
        >
          <p className="text-text-minus-1 italic leading-relaxed">{block.text}</p>
        </motion.blockquote>
      );
    case "callout":
      return (
        <motion.div
          variants={fadeInUp}
          className="flex gap-4 p-5 my-8 rounded-xl bg-surface-secondary border border-border-primary"
        >
          <span className="text-2xl shrink-0">{block.emoji || "💡"}</span>
          <p className="text-text-minus-1 leading-relaxed">{block.text}</p>
        </motion.div>
      );
    case "comparison-table":
      if (!block.tableData) return null;
      return (
        <motion.div variants={fadeInUp} className="my-8 overflow-x-auto rounded-xl border border-border-primary">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-secondary">
                {block.tableData.headers.map((h, i) => (
                  <th
                    key={i}
                    className={`px-4 py-3 font-bold text-text-primary whitespace-nowrap ${i === 0 ? "text-start" : "text-center"} ${i === 1 ? "bg-primary/10" : ""}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.tableData.rows.map((row, ri) => (
                <tr key={ri} className="border-t border-border-primary hover:bg-surface-secondary/50 transition-colors">
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-4 py-2.5 ${ci === 0 ? "text-start font-medium text-text-primary" : "text-center text-text-minus-1"} ${ci === 1 ? "bg-primary/5" : ""}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      );
    case "divider":
      return (
        <motion.hr variants={fadeInUp} className="border-border-primary my-10" />
      );
    default:
      return null;
  }
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = use(params);
  const t = useTranslations("blog");
  const isRtl = locale === "he";

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = blogContent[slug];
  const blocks: ContentBlock[] = content
    ? locale === "he"
      ? content.he
      : content.en
    : [];
  const meta = locale === "he" ? post.he : post.en;

  // Find prev/next posts
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
  );
  const idx = sorted.findIndex((p) => p.slug === slug);
  const prevPost = idx < sorted.length - 1 ? sorted[idx + 1] : null;
  const nextPost = idx > 0 ? sorted[idx - 1] : null;

  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border-primary">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <img
              src={`${typeof window !== "undefined" && (window as any).__NEXT_DATA__?.basePath || ""}/logo.svg`}
              alt="LynxPoker"
              className="h-8 w-auto"
            />
          </Link>
          <Link
            href={`/${locale}/blog`}
            className="flex items-center gap-1.5 text-sm text-text-minus-1 hover:text-text-primary transition-colors"
          >
            {isRtl ? (
              <>
                {t("allPosts")} <ArrowRight className="w-4 h-4" />
              </>
            ) : (
              <>
                <ChevronLeft className="w-4 h-4" /> {t("allPosts")}
              </>
            )}
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 pt-12 pb-20">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-12"
        >
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 mb-6">
            <CategoryBadge category={post.category} />
            <span className="flex items-center gap-1.5 text-sm text-text-minus-2">
              <Clock className="w-3.5 h-3.5" />
              {meta.readTime}
            </span>
            <span className="text-text-minus-2">·</span>
            <time className="text-sm text-text-minus-2">{meta.date}</time>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
          >
            <span className="bg-gradient-to-r from-text-primary via-text-primary to-primary/80 bg-clip-text text-transparent">
              {meta.title}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-text-minus-1 leading-relaxed"
          >
            {meta.excerpt}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 border-b border-border-primary"
          />
        </motion.header>

        {/* Content */}
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          {blocks.map((block, i) => (
            <RenderBlock key={i} block={block} />
          ))}
        </motion.div>

        {/* Post navigation */}
        <div className="mt-16 pt-8 border-t border-border-primary grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevPost ? (
            <Link
              href={`/${locale}/blog/${prevPost.slug}`}
              className="group flex flex-col p-5 rounded-xl border border-border-primary hover:border-primary/40 hover:bg-surface-secondary transition-all"
            >
              <span className="text-xs text-text-minus-2 mb-1 flex items-center gap-1">
                {isRtl ? <ArrowRight className="w-3 h-3" /> : <ArrowLeft className="w-3 h-3" />}
                {isRtl ? "הפוסט הקודם" : "Previous"}
              </span>
              <span className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors line-clamp-1">
                {(locale === "he" ? prevPost.he : prevPost.en).title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {nextPost ? (
            <Link
              href={`/${locale}/blog/${nextPost.slug}`}
              className="group flex flex-col items-end text-end p-5 rounded-xl border border-border-primary hover:border-primary/40 hover:bg-surface-secondary transition-all"
            >
              <span className="text-xs text-text-minus-2 mb-1 flex items-center gap-1">
                {isRtl ? "הפוסט הבא" : "Next"}
                {isRtl ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
              </span>
              <span className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors line-clamp-1">
                {(locale === "he" ? nextPost.he : nextPost.en).title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-border-primary bg-surface-primary">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <img
              src={`${typeof window !== "undefined" && (window as any).__NEXT_DATA__?.basePath || ""}/logo.svg`}
              alt="LynxPoker"
              className="h-6 w-auto"
            />
          </Link>
          <p className="text-xs text-text-minus-2">© 2026 LynxPoker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
