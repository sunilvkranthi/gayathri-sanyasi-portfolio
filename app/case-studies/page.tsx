"use client";

import { motion } from "framer-motion";
import { caseStudies } from "@/data/content";
import { staggerContainer, staggerItem } from "@/data/animations";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import CTASection from "@/components/ui/CTASection";

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.p variants={staggerItem} className="section-label mb-4">
              Impact Stories
            </motion.p>
            <motion.h1
              variants={staggerItem}
              className="text-5xl md:text-7xl font-black tracking-tighter text-on-background leading-tight"
            >
              Case <span className="text-primary">Studies</span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="mt-6 text-xl text-on-surface-variant leading-relaxed max-w-xl"
            >
              Real results from complex account navigation. Each study represents a
              strategic challenge solved through consultative selling and deep
              relationship management.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {caseStudies.map((study, i) => (
              <motion.div key={study.slug} variants={staggerItem} className={study.featured ? "md:col-span-2" : ""}>
                <CaseStudyCard {...study} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Ready to Scale Your Account Strategy?"
        description="Let's discuss how we can replicate these architectural sales results for your organization."
        primaryLabel="Schedule a Consultation"
        primaryHref="/contact"
        secondaryLabel="View Experience"
        secondaryHref="/experience"
      />
    </>
  );
}
