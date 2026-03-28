"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/leadership", label: "Leadership" },
  { href: "/gallery", label: "Gallery" },
  { href: "/achievements", label: "Achievements" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 pt-[env(safe-area-inset-top,0px)] ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-outline-variant/10"
          : "bg-white/70 backdrop-blur-md"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-16 sm:min-h-20 flex items-center justify-between gap-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg sm:text-xl font-black tracking-tighter text-on-background md:hover:text-primary transition-colors shrink-0 min-h-11 flex items-center py-1"
        >
          Gayathri Sanyasi
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-tight transition-colors relative group py-2 ${
                  isActive
                    ? "text-primary"
                    : "text-on-surface-variant md:hover:text-primary"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 md:group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center min-h-10 bg-primary md:hover:opacity-90 transition-all duration-300 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-primary/20 md:hover:scale-105 active:scale-95"
          >
            Contact
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden min-w-11 min-h-11 flex items-center justify-center rounded-xl bg-surface-container-low md:hover:bg-surface-container transition-colors touch-manipulation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
          >
            <span className="material-symbols-outlined text-on-surface text-2xl" aria-hidden>
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-outline-variant/10 overflow-x-hidden overflow-y-auto max-h-[min(70vh,calc(100dvh-5rem))] pb-[env(safe-area-inset-bottom,0px)]"
          >
            <div className="px-4 sm:px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`min-h-12 px-4 flex items-center rounded-xl text-base font-medium transition-colors touch-manipulation ${
                      isActive
                        ? "bg-primary-fixed text-primary font-semibold"
                        : "text-on-surface-variant active:bg-surface-container-low md:hover:bg-surface-container-low md:hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="mt-2 min-h-12 flex items-center justify-center bg-primary text-white px-6 py-3 rounded-xl text-base font-semibold touch-manipulation active:opacity-90"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
