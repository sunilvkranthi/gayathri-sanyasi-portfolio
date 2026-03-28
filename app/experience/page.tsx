"use client";

import { motion } from "framer-motion";
import { experiences, strategies, toolCategories, heroMetrics } from "@/data/content";
import { staggerContainer, staggerItem } from "@/data/animations";
import CTASection from "@/components/ui/CTASection";

export default function ExperiencePage() {
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
              Career Timeline
            </motion.p>
            <motion.h1
              variants={staggerItem}
              className="text-5xl md:text-7xl font-black tracking-tighter text-on-background leading-tight"
            >
              Professional
              <br />
              <span className="text-primary">Experience</span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="mt-6 text-xl text-on-surface-variant leading-relaxed"
            >
              A decade of enterprise account management across technology and
              hospitality verticals, consistently delivering measurable revenue
              impact.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="bg-surface-container-low border-y border-outline-variant/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-3 gap-6"
          >
            {heroMetrics.map((m) => (
              <motion.div
                key={m.label}
                variants={staggerItem}
                className="text-center"
              >
                <div className={`text-4xl font-black ${m.color}`}>{m.value}</div>
                <div className="text-xs uppercase tracking-widest text-outline font-bold mt-2">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                variants={staggerItem}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-surface-container-lowest rounded-2xl p-10 ambient-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                  <div>
                    <h2 className="text-2xl font-black tracking-tight text-on-background">
                      {exp.company}
                    </h2>
                    <p className="text-base font-semibold text-primary mt-1">
                      {exp.role}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-outline bg-surface-container-low px-4 py-2 rounded-full whitespace-nowrap self-start">
                    <span className="material-symbols-outlined text-sm">
                      calendar_today
                    </span>
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-4">
                  {exp.highlights.map((highlight, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span
                        className="material-symbols-outlined text-primary text-base mt-0.5 flex-shrink-0"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      <span className="text-base text-on-surface-variant leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Strategies */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem} className="mb-14">
              <p className="section-label mb-3">How I Work</p>
              <h2 className="text-4xl font-black tracking-tighter text-on-background">
                Growth Methodology
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {strategies.map((s) => (
                <motion.div
                  key={s.title}
                  variants={staggerItem}
                  className="bg-surface-container-lowest rounded-2xl p-8 ambient-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-primary">
                      {s.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-on-background mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {s.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem} className="mb-14">
              <p className="section-label mb-3">Toolkit</p>
              <h2 className="text-4xl font-black tracking-tighter text-on-background">
                Tools & Technologies
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {toolCategories.map((cat) => (
                <motion.div
                  key={cat.category}
                  variants={staggerItem}
                  className="bg-surface-container-lowest rounded-2xl p-8 ambient-shadow"
                >
                  <h3 className="text-xs font-bold text-outline uppercase tracking-widest mb-6">
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {cat.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-4 py-2 rounded-full bg-surface-container-low text-sm font-semibold text-on-surface-variant hover:bg-primary-fixed hover:text-primary transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Let's Build Together"
        description="Open to strategic consulting and enterprise sales leadership roles."
        primaryLabel="Contact Me"
        primaryHref="/contact"
        secondaryLabel="View Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
