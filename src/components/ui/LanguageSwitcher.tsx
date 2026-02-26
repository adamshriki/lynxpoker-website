"use client";

import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Build path for target locale: replace /en/... or /he/... prefix
  function getLocalePath(target: Locale) {
    const segments = pathname.split("/");
    if (locales.includes(segments[1] as Locale)) {
      segments[1] = target;
    } else {
      segments.splice(1, 0, target);
    }
    return segments.join("/") || `/${target}`;
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="p-2 rounded-lg hover:bg-amber-500/5 transition-colors text-text-minus-1 hover:text-amber-400 cursor-pointer"
        aria-label="Switch language"
      >
        <Globe className="w-4.5 h-4.5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute end-0 top-full mt-2 min-w-[140px] rounded-xl border border-amber-500/15 bg-surface-primary/95 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden z-50"
          >
            {locales.map((l) => (
              <Link
                key={l}
                href={getLocalePath(l)}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                  l === locale
                    ? "text-amber-400 bg-amber-500/10 font-semibold"
                    : "text-text-minus-1 hover:text-text-primary hover:bg-amber-500/5"
                }`}
              >
                <span className="text-base">{l === "he" ? "🇮🇱" : "🇬🇧"}</span>
                <span>{localeNames[l]}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
