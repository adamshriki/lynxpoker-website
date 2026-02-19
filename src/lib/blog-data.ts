/**
 * Blog posts registry — static metadata only.
 * Translated titles/excerpts come from messages/[locale]/blog-index.jsonc
 * Content blocks come from messages/[locale]/blog-{slug}.jsonc
 */
export interface BlogPostMeta {
  slug: string;
  category: string;
  emoji: string;
  dateISO: string;
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "best-poker-tournament-management-software",
    category: "industry",
    emoji: "🏆",
    dateISO: "2026-02-17",
  },
  {
    slug: "introducing-lynxpoker",
    category: "product",
    emoji: "🚀",
    dateISO: "2026-02-15",
  },
  {
    slug: "dealer-management-guide",
    category: "guides",
    emoji: "🃏",
    dateISO: "2026-02-10",
  },
  {
    slug: "home-game-to-club",
    category: "tips",
    emoji: "🏠",
    dateISO: "2026-02-05",
  },
];
