"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { caseStudies } from "@/data/content";
import { staggerContainer, staggerItem } from "@/data/animations";
import CaseStudyCard from "@/components/ui/CaseStudyCard";

export default function CaseStudiesPreview() {
  return (
    <section className="py-24 bg-surface-container-low" id="case-studies">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div
            variants={staggerItem}
            className="flex items-end justify-between mb-14"
          >
            <div>
              <p className="section-label mb-3">Impact Stories</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-background">
                Real results from complex account navigation.
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              All Case Studies
              <span className="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {caseStudies.slice(0, 3).map((study) => (
              <motion.div key={study.slug} variants={staggerItem}>
                <CaseStudyCard {...study} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="mt-10 text-center md:hidden"
          >
            <Link href="/case-studies" className="btn-secondary inline-flex">
              View All Case Studies
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
