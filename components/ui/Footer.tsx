import Link from "next/link";
import { siteConfig } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg font-black tracking-tighter text-white">
              {siteConfig.name}
            </p>
            <p className="text-sm text-white/50 mt-1">
              © 2024 {siteConfig.name}. Built for Enterprise Excellence.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white transition-colors font-medium"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-white/60 hover:text-white transition-colors font-medium"
            >
              Email
            </a>
            <a
              href={siteConfig.cvUrl}
              className="text-sm text-white/60 hover:text-white transition-colors font-medium"
            >
              Download CV
            </a>
            <Link
              href="/contact"
              className="text-sm text-white/60 hover:text-white transition-colors font-medium"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
