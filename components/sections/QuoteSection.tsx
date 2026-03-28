"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/data/animations";

interface QuoteSectionProps {
  label?: string;
  quote: string;
  highlightWord?: string;
  author?: string;
}

export default function QuoteSection({
  label,
  quote,
  highlightWord,
  author,
}: QuoteSectionProps) {
  const renderQuote = () => {
    if (!highlightWord) return <>{quote}</>;
    const parts = quote.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-primary italic">{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
        >
          {label && (
            <p className="section-label mb-8">{label}</p>
          )}
          <blockquote className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight text-on-surface">
            "{renderQuote()}"
          </blockquote>
          {author && (
            <p className="mt-6 text-sm font-bold text-outline uppercase tracking-widest">
              — {author}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
