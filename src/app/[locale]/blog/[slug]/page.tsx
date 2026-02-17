import { locales } from "@/i18n/config";
import { blogPosts } from "@/lib/blog-data";
import BlogPostPageClient from "@/components/blog/BlogPostPage";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    blogPosts.map((post) => ({ locale, slug: post.slug }))
  );
}

export default function BlogPostPage(props: { params: Promise<{ locale: string; slug: string }> }) {
  return <BlogPostPageClient params={props.params} />;
}
