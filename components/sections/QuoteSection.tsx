"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";

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
    <Reveal> {/* ✅ ONLY ONE REVEAL */}
      <section className="py-28 bg-surface-container-lowest relative overflow-hidden">

        {/* Subtle background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* LABEL */}
            {label && (
              <p className="section-label mb-8">{label}</p>
            )}

            {/* QUOTE */}
            <blockquote className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight text-on-surface">
              "{renderQuote()}"
            </blockquote>

            {/* AUTHOR */}
            {author && (
              <p className="mt-6 text-sm font-bold text-outline uppercase tracking-widest">
                — {author}
              </p>
            )}

          </motion.div>
        </div>
      </section>
    </Reveal>
  );
}