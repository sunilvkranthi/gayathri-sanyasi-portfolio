import Link from "next/link";
import { siteConfig } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <p className="text-lg font-black tracking-tighter text-white">
              {siteConfig.name}
            </p>
            <p className="text-sm text-white/50 mt-1">
              © 2024 {siteConfig.name}. Built for Enterprise Excellence.
            </p>
          </div>

          <nav
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6"
            aria-label="Footer links"
          >
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 md:hover:text-white transition-colors font-medium min-h-11 inline-flex items-center px-2 py-2 touch-manipulation"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-white/60 md:hover:text-white transition-colors font-medium min-h-11 inline-flex items-center px-2 py-2 touch-manipulation"
            >
              Email
            </a>
            <a
              href={siteConfig.cvUrl}
              className="text-sm text-white/60 md:hover:text-white transition-colors font-medium min-h-11 inline-flex items-center px-2 py-2 touch-manipulation"
            >
              Download CV
            </a>
            <Link
              href="/contact"
              className="text-sm text-white/60 md:hover:text-white transition-colors font-medium min-h-11 inline-flex items-center px-2 py-2 touch-manipulation"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
