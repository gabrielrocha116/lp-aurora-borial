"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/data/mock";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex justify-center px-4 transition-[padding] duration-300 ${scrolled ? "pt-2 sm:pt-3" : "pt-4 sm:pt-6"}`}
    >
      <div
        className={`glass-panel w-full rounded-3xl transition-[max-width,padding] duration-300 sm:rounded-full ${
          scrolled ? "max-w-4xl px-4 py-2 sm:px-5" : "max-w-5xl px-4 py-2.5 sm:px-6"
        }`}
        style={open ? { backgroundColor: "rgba(5,8,22,0.98)" } : undefined}
      >
        <div className="flex items-center justify-between">
          <a href="#hero" className="focus-ring flex items-center gap-2 rounded-full">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 2.5l1.8 5.4 5.7.1-4.6 3.5 1.7 5.5L12 13.7l-4.6 3.3 1.7-5.5-4.6-3.5 5.7-.1L12 2.5Z"
                fill="url(#nav-star)"
              />
              <defs>
                <linearGradient id="nav-star" x1="0" y1="0" x2="24" y2="24">
                  <stop offset="0" stopColor="#4ADE80" />
                  <stop offset="0.5" stopColor="#A855F7" />
                  <stop offset="1" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </svg>
            <span className="font-display text-lg font-semibold tracking-tight text-text-primary">
              Nordr
            </span>
          </a>

          <nav className="hidden items-center gap-1 rounded-full md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring rounded-full px-4 py-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#"
              className="focus-ring hidden rounded-full border border-glass-border px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-aurora-green/60 hover:text-aurora-green sm:inline-block"
            >
              Sign In
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full text-text-primary md:hidden"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              id="mobile-nav"
              aria-label="Primary"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden md:hidden"
            >
              <div className="flex flex-col gap-1 border-t border-glass-border pt-3 pb-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="focus-ring rounded-xl px-3 py-2.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#"
                  onClick={() => setOpen(false)}
                  className="focus-ring mt-1 rounded-xl border border-glass-border px-3 py-2.5 text-center text-sm font-medium text-text-primary"
                >
                  Sign In
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
