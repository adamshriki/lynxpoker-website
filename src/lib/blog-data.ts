export interface BlogPost {
  slug: string;
  category: string;
  emoji: string;
  dateISO: string; // for sorting
  en: {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
  };
  he: {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
  };
}

/**
 * Blog posts registry.
 * Add new posts here — they'll appear automatically on the blog index page.
 * For the actual post content, create a page at /blog/[slug]/page.tsx
 * or use MDX files in the future.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "introducing-lynxpoker",
    category: "product",
    emoji: "🚀",
    dateISO: "2026-02-15",
    en: {
      title: "Introducing LynxPoker: Professional Tournament Management for Everyone",
      excerpt:
        "We built LynxPoker because running a poker tournament shouldn't require enterprise software or a spreadsheet PhD. Here's our story and what makes us different.",
      date: "Feb 15, 2026",
      readTime: "5 min read",
    },
    he: {
      title: "הכירו את LynxPoker: ניהול טורנירי פוקר מקצועי לכולם",
      excerpt:
        "בנינו את LynxPoker כי ניהול טורניר פוקר לא צריך לדרוש תוכנה ארגונית או דוקטורט באקסל. הנה הסיפור שלנו ומה שמבדיל אותנו.",
      date: "15 בפברואר 2026",
      readTime: "5 דק׳ קריאה",
    },
  },
  {
    slug: "dealer-management-guide",
    category: "guides",
    emoji: "🃏",
    dateISO: "2026-02-10",
    en: {
      title: "The Complete Guide to Dealer Management in Poker Tournaments",
      excerpt:
        "Managing dealers is one of the biggest challenges in running multi-table tournaments. Learn how to schedule rotations, handle breaks, and keep your floor running smoothly.",
      date: "Feb 10, 2026",
      readTime: "8 min read",
    },
    he: {
      title: "המדריך המלא לניהול דילרים בטורנירי פוקר",
      excerpt:
        "ניהול דילרים הוא אחד האתגרים הגדולים בטורנירים מרובי שולחנות. למדו איך לתכנן רוטציות, לנהל הפסקות ולשמור על המשחק זורם.",
      date: "10 בפברואר 2026",
      readTime: "8 דק׳ קריאה",
    },
  },
  {
    slug: "home-game-to-club",
    category: "tips",
    emoji: "🏠",
    dateISO: "2026-02-05",
    en: {
      title: "From Home Game to Poker Club: Scaling Your Tournament Operations",
      excerpt:
        "Your weekly home game is growing. More players, more tables, more logistics. Here's how to make the leap from casual to professional without losing the fun.",
      date: "Feb 5, 2026",
      readTime: "6 min read",
    },
    he: {
      title: "ממשחק ביתי למועדון פוקר: איך להרחיב את הטורנירים שלכם",
      excerpt:
        "המשחק הביתי השבועי שלכם גדל. יותר שחקנים, יותר שולחנות, יותר לוגיסטיקה. הנה איך לעשות את הקפיצה מחובבני למקצועי בלי לאבד את הכיף.",
      date: "5 בפברואר 2026",
      readTime: "6 דק׳ קריאה",
    },
  },
];
