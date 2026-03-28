"use client";

import { motion } from "framer-motion";
import {
  achievements,
  recognitionPoints,
  certifications,
} from "@/data/content";
import { staggerContainer, staggerItem, fadeInUp } from "@/data/animations";
import CTASection from "@/components/ui/CTASection";

export default function AchievementsPage() {
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
              Hall of Excellence
            </motion.p>
            <motion.h1
              variants={staggerItem}
              className="text-5xl md:text-7xl font-black tracking-tighter text-on-background leading-tight"
            >
              Milestones in{" "}
              <span className="text-primary">Enterprise Impact.</span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="mt-6 text-xl text-on-surface-variant leading-relaxed max-w-xl"
            >
              A curated record of professional recognition, sales performance
              awards, and strategic contributions across the B2B hospitality and
              enterprise sectors.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Bento Grid */}
      <section className="pb-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.id}
                variants={staggerItem}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`bg-surface-container-lowest rounded-2xl overflow-hidden ambient-shadow group ${
                  ach.featured ? "md:col-span-2" : ""
                }`}
              >
                {ach.featured && (
                  <div className="h-2 w-full bg-gradient-to-r from-primary to-primary-container" />
                )}
                <div className="p-10">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span
                        className="material-symbols-outlined text-primary text-2xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {ach.icon}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-outline bg-surface-container-low px-3 py-1.5 rounded-full uppercase tracking-widest">
                      {ach.badge}
                    </span>
                  </div>
                  <h2
                    className={`font-black tracking-tight text-on-background mb-3 ${
                      ach.featured ? "text-2xl md:text-3xl" : "text-xl"
                    }`}
                  >
                    {ach.title}
                  </h2>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-5">
                    {ach.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {ach.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-surface-container-low text-xs font-semibold text-on-surface-variant"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recognition Showcase */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem} className="mb-12 text-center">
              <p className="section-label mb-3">The Standard of Recognition</p>
              <h2 className="text-4xl font-black tracking-tighter text-on-background">
                Beyond the Badges
              </h2>
              <p className="text-on-surface-variant mt-4 text-base max-w-xl mx-auto leading-relaxed">
                These accolades reflect a consistent track record of exceeding
                benchmarks. Beyond the badges, they represent millions in secured
                revenue and hundreds of strengthened enterprise partnerships.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {recognitionPoints.map((point) => (
                <motion.div
                  key={point}
                  variants={staggerItem}
                  className="flex items-center gap-3 bg-surface-container-lowest rounded-2xl p-6 ambient-shadow"
                >
                  <span
                    className="material-symbols-outlined text-secondary flex-shrink-0"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-sm font-semibold text-on-surface">
                    {point}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem} className="mb-12">
              <p className="section-label mb-3">Continuous Learning</p>
              <h2 className="text-4xl font-black tracking-tighter text-on-background">
                Professional Certifications
              </h2>
            </motion.div>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  variants={staggerItem}
                  whileHover={{ x: 8, transition: { duration: 0.25 } }}
                  className="flex items-center justify-between gap-6 bg-surface-container-lowest rounded-2xl p-8 ambient-shadow group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary text-base">
                        verified
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-black tracking-tight text-on-background">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-outline font-medium mt-0.5">
                        {cert.issuer} • Issued {cert.year}
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                    arrow_forward
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Let's Create the Next Milestone Together"
        description="These results aren't anomalies — they're a methodology. Let's apply it to your organization."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
        secondaryLabel="View Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
