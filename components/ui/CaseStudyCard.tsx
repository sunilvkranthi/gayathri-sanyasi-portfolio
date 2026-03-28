"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={`bg-surface-container-lowest rounded-2xl overflow-hidden group ambient-shadow ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="p-8 h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className={`text-3xl font-black ${badgeColor}`}>{badge}</span>
            <div className="flex flex-wrap gap-2 justify-end">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-bold text-outline bg-surface-container-low px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h3 className="text-xl font-black tracking-tight text-on-background mb-3">
            {title}
          </h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            {summary}
          </p>
        </div>
        <Link
          href={`/case-studies/${slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200 group"
        >
          Read Full Study
          <span className="material-symbols-outlined text-base">
            arrow_forward
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
