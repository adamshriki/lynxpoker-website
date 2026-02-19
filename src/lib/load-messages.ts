import fs from "fs";
import path from "path";
import { parse as parseJsonc } from "jsonc-parser";

/**
 * Load all .jsonc files from messages/[locale]/ directory
 * and merge them into a single messages object for next-intl.
 *
 * File naming convention:
 * - ui.jsonc → top-level keys (metadata, nav, hero, etc.)
 * - blog-index.jsonc → { posts: { ... } } (blog post metadata)
 * - blog-*.jsonc → { blocks: [...] } (blog post content)
 */
export function loadMessages(locale: string): Record<string, any> {
  const dir = path.join(process.cwd(), "messages", locale);
  const messages: Record<string, any> = {};

  if (!fs.existsSync(dir)) {
    // Fallback to old JSON file if JSONC dir doesn't exist yet
    const fallback = path.join(process.cwd(), "messages", `${locale}.json`);
    if (fs.existsSync(fallback)) {
      return JSON.parse(fs.readFileSync(fallback, "utf-8"));
    }
    return messages;
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".jsonc"));

  for (const file of files) {
    const content = fs.readFileSync(path.join(dir, file), "utf-8");
    const parsed = parseJsonc(content);

    if (file === "ui.jsonc") {
      // UI strings merge at top level
      Object.assign(messages, parsed);
    } else if (file === "blog-index.jsonc") {
      // Blog index has post metadata
      messages.blogPosts = parsed.posts;
    } else if (file.startsWith("blog-") && file !== "blog-index.jsonc") {
      // Blog content files: blog-{slug}.jsonc → blogContent.{slug}
      const slug = file.replace("blog-", "").replace(".jsonc", "");
      if (!messages.blogContent) messages.blogContent = {};
      messages.blogContent[slug] = parsed.blocks;
    }
  }

  return messages;
}
