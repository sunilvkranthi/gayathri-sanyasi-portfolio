"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Reveal from "@/components/animations/Reveal"; // ✅ ADD
import { caseStudies } from "@/data/content";
import { staggerContainer, staggerItem } from "@/data/animations";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { useFinePointer } from "@/hooks/useFinePointer";

export default function CaseStudiesPreview() {
  const finePointer = useFinePointer();
  const cardHover = finePointer
    ? { y: -10, scale: 1.02, transition: { duration: 0.3 } }
    : undefined;

  return (
    <Reveal> {/* ✅ SECTION ENTRY */}
      <section className="py-16 sm:py-20 lg:py-24 bg-surface-container-low" id="case-studies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {/* HEADER */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10 sm:mb-14"
            >
              <div className="min-w-0">
                <p className="section-label mb-3">Impact Stories</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-on-background text-balance">
                  Real results from complex account navigation.
                </h2>
              </div>

              <Link
                href="/case-studies"
                className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-primary md:hover:gap-3 transition-all shrink-0 min-h-10"
              >
                All Case Studies
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </Link>
            </motion.div>

            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.slice(0, 3).map((study, index) => (
                <Reveal key={study.slug} delay={index * 0.15}> {/* ✅ STAGGER */}
                  <motion.div
                    variants={staggerItem}
                    whileHover={cardHover}
                    className="transition-all duration-300 min-w-0"
                  >
                    <CaseStudyCard {...study} />
                  </motion.div>
                </Reveal>
              ))}
            </div>

            {/* MOBILE CTA */}
            <Reveal delay={0.4}>
              <motion.div
                variants={staggerItem}
                className="mt-10 text-center md:hidden"
              >
                <Link href="/case-studies" className="btn-secondary inline-flex w-full sm:w-auto justify-center">
                  View All Case Studies
                </Link>
              </motion.div>
            </Reveal>

          </motion.div>
        </div>
      </section>
    </Reveal>
  );
}