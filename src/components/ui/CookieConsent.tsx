"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-5 end-5 z-50 max-w-sm"
        >
          <div className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gray-900/95 p-5 shadow-2xl shadow-amber-900/20 backdrop-blur-xl">
            {/* Decorative corner accent */}
            <div className="absolute -top-8 -end-8 h-24 w-24 rounded-full bg-amber-500/10 blur-2xl" />
            <div className="absolute -bottom-4 -start-4 h-16 w-16 rounded-full bg-amber-600/10 blur-xl" />

            {/* Suit icon */}
            <div className="relative mb-3 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400">
                <span className="text-base">♠</span>
              </div>
              <h3 className="text-sm font-bold text-white tracking-wide">
                This website uses cookies
              </h3>
            </div>

            <p className="relative mb-4 text-xs leading-relaxed text-gray-400">
              We use cookies to analyze website traffic and optimize your website
              experience. By accepting our use of cookies, your data will be
              aggregated with all other user data.
            </p>

            <button
              onClick={accept}
              className="relative w-full cursor-pointer rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2.5 text-sm font-bold text-gray-900 shadow-lg shadow-amber-500/25 transition-all duration-200 hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-500/40 active:scale-[0.98]"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
