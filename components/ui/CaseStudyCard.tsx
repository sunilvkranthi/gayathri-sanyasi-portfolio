"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useFinePointer } from "@/hooks/useFinePointer";

interface CaseStudyCardProps {
  slug: string;
  badge: string;
  badgeColor: string;
  title: string;
  summary: string;
  tags: string[];
  featured?: boolean;
}

export default function CaseStudyCard({
  slug,
  badge,
  badgeColor,
  title,
  summary,
  tags,
  featured = false,
}: CaseStudyCardProps) {
  const finePointer = useFinePointer();
  const hoverLift = finePointer
    ? { y: -10, scale: 1.02 }
    : undefined;

  return (
    <Link href={`/case-studies/${slug}`} className="block min-h-[44px] rounded-2xl touch-manipulation">
      <motion.div
        whileHover={hoverLift}
        transition={{ duration: 0.3 }}
        className={`group relative bg-surface-container-lowest rounded-2xl overflow-hidden ambient-shadow transition-all duration-300 active:scale-[0.99] ${featured ? "md:col-span-2" : ""
          }`}
      >
        {/* BORDER GLOW */}
        <div className="absolute inset-0 rounded-2xl border border-transparent md:group-hover:border-primary/30 transition-all duration-300 pointer-events-none" />

        <div className="p-6 sm:p-8 h-full flex flex-col justify-between min-w-0">

          {/* TOP */}
          <div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-6 min-w-0">

              {/* BADGE (HERO ELEMENT 🔥) */}
              <span
                className={`text-2xl sm:text-3xl font-black ${badgeColor} tracking-tight shrink-0`}
              >
                {badge}
              </span>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 sm:justify-end">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-bold text-outline bg-surface-container-low px-2.5 py-1 rounded-full transition-colors duration-200 md:group-hover:bg-primary/10 md:group-hover:text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* TITLE */}
            <h3 className="text-lg sm:text-xl font-black tracking-tight text-on-background mb-3 md:group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>

            {/* SUMMARY */}
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {summary}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 min-h-11">
            Read Full Study
            <span className="material-symbols-outlined text-base transition-transform duration-300 md:group-hover:translate-x-1">
              arrow_forward
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}