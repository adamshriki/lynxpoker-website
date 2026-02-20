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
  thumbnail: string;
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "best-poker-tournament-management-software",
    category: "industry",
    emoji: "🏆",
    dateISO: "2026-02-17",
    thumbnail: "/blog/thumbnail-best-poker-tournament-management-software.svg",
  },
  {
    slug: "introducing-lynxpoker",
    category: "product",
    emoji: "🚀",
    dateISO: "2026-02-15",
    thumbnail: "/blog/thumbnail-introducing-lynxpoker.svg",
  },
  {
    slug: "dealer-management-guide",
    category: "guides",
    emoji: "🃏",
    dateISO: "2026-02-10",
    thumbnail: "/blog/thumbnail-dealer-management-guide.svg",
  },
  {
    slug: "home-game-to-club",
    category: "tips",
    emoji: "🏠",
    dateISO: "2026-02-05",
    thumbnail: "/blog/thumbnail-home-game-to-club.svg",
  },
];
