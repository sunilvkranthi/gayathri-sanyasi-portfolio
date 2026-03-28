"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeInUp } from "@/data/animations";
import CTASection from "@/components/ui/CTASection";

interface CaseStudy {
  slug: string;
  badge: string;
  badgeColor: string;
  title: string;
  summary: string;
  tags: string[];
  featured: boolean;
  metrics: { label: string; value: string }[];
  challenge: string;
  strategy: string;
  outcome: string;
  learnings: string[];
  quote: string;
  quoteAuthor: string;
  totalRevenue: string;
  cycleReduction: string;
  churn: string;
  teamSize: string;
  timeline: string;
}

export default function CaseStudyDetail({ study }: { study: CaseStudy }) {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-surface overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary-fixed/30 blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem}>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-sm font-semibold text-outline hover:text-primary transition-colors mb-8"
              >
                <span className="material-symbols-outlined text-base">arrow_back</span>
                All Case Studies
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Left: Title + Meta */}
              <div className="lg:col-span-2">
                <motion.div variants={staggerItem} className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag) => (
                    <span key={tag} className="chip">{tag}</span>
                  ))}
                </motion.div>
                <motion.div variants={staggerItem}>
                  <span className={`text-5xl font-black ${study.badgeColor}`}>{study.badge}</span>
                </motion.div>
                <motion.h1
                  variants={staggerItem}
                  className="text-4xl md:text-6xl font-black tracking-tighter text-on-background leading-tight mt-4"
                >
                  {study.title}
                </motion.h1>
                <motion.p
                  variants={staggerItem}
                  className="text-xl text-on-surface-variant leading-relaxed mt-6"
                >
                  {study.summary}
                </motion.p>
              </div>

              {/* Right: Sticky Sidebar Metrics */}
              <motion.div
                variants={staggerItem}
                className="bg-surface-container-lowest rounded-2xl p-6 ambient-shadow sticky top-28"
              >
                <p className="section-label mb-5">Case Summary</p>
                <div className="space-y-4">
                  {[
                    { icon: "schedule", label: "Timeline", value: study.timeline },
                    { icon: "group", label: "Team Size", value: study.teamSize },
                    { icon: "payments", label: "Revenue", value: study.totalRevenue },
                    { icon: "speed", label: "Cycle Reduction", value: study.cycleReduction },
                    { icon: "loyalty", label: "Churn", value: study.churn },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between py-3 border-b border-outline-variant/10 last:border-0">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-outline text-base">{item.icon}</span>
                        <span className="text-xs font-bold text-outline uppercase tracking-wider">{item.label}</span>
                      </div>
                      <span className="text-sm font-black text-on-background">{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Row */}
      <section className="bg-surface-container-low border-y border-outline-variant/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {study.metrics.map((m) => (
              <motion.div key={m.label} variants={staggerItem} className="text-center">
                <div className="text-3xl font-black text-primary">{m.value}</div>
                <div className="text-xs uppercase tracking-widest text-outline font-bold mt-2">{m.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="material-symbols-outlined text-primary text-4xl mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>
              format_quote
            </span>
            <blockquote className="text-xl md:text-2xl font-semibold text-on-surface leading-snug tracking-tight">
              "{study.quote}"
            </blockquote>
            <p className="mt-4 text-sm font-bold text-outline uppercase tracking-widest">
              — {study.quoteAuthor}
            </p>
          </motion.div>
        </div>
      </section>

      {/* PAR: Problem / Action / Result */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {/* The Challenge */}
            <motion.div variants={staggerItem} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-error-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-error text-sm">cancel</span>
                  </div>
                  <p className="section-label">The Challenge</p>
                </div>
              </div>
              <div className="md:col-span-9">
                <div className="bg-surface-container-lowest rounded-2xl p-8 ambient-shadow">
                  <p className="text-base text-on-surface-variant leading-relaxed">
                    {study.challenge}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* The Strategy */}
            <motion.div variants={staggerItem} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-sm">architecture</span>
                  </div>
                  <p className="section-label">The Strategy</p>
                </div>
              </div>
              <div className="md:col-span-9">
                <div className="bg-surface-container-lowest rounded-2xl p-8 ambient-shadow">
                  <p className="text-base text-on-surface-variant leading-relaxed">
                    {study.strategy}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* The Outcome */}
            <motion.div variants={staggerItem} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-sm">trending_up</span>
                  </div>
                  <p className="section-label">The Outcome</p>
                </div>
              </div>
              <div className="md:col-span-9">
                <div className="bg-surface-container-lowest rounded-2xl p-8 ambient-shadow border-l-4 border-secondary">
                  <p className="text-base text-on-surface-variant leading-relaxed">
                    {study.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Revenue Trajectory Visual */}
      <section className="py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem} className="mb-10">
              <p className="section-label mb-2">Revenue Trajectory</p>
              <h2 className="text-2xl font-black tracking-tighter text-on-background">
                {study.totalRevenue} Total
              </h2>
            </motion.div>
            <motion.div variants={staggerItem} className="bg-surface-container-lowest rounded-2xl p-8 ambient-shadow">
              {/* Chart bars */}
              <div className="flex items-end justify-between gap-4 h-48">
                {["Q1", "Q2", "Q3", "Q4"].map((q, i) => {
                  const heights = [25, 50, 78, 100];
                  return (
                    <div key={q} className="flex-1 flex flex-col items-center gap-2">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${heights[i]}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full rounded-t-xl bg-gradient-to-t from-primary to-primary-container"
                        style={{ maxHeight: "100%" }}
                      />
                      <span className="text-xs font-bold text-outline">{q}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 flex items-center justify-end gap-2">
                <span className="material-symbols-outlined text-primary text-sm">trending_up</span>
                <span className="text-sm font-bold text-primary">240% Target Hit</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem} className="mb-10">
              <p className="section-label mb-3">Key Learnings</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.learnings.map((learning, i) => {
                const [title, ...rest] = learning.split(":");
                return (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="bg-surface-container-lowest rounded-2xl p-8 ambient-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl font-black text-outline/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-base font-black text-on-background mb-2">{title}</h3>
                        {rest.length > 0 && (
                          <p className="text-sm text-on-surface-variant leading-relaxed">
                            {rest.join(":")}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Ready to Scale Your Account Strategy?"
        description="Let's discuss how we can replicate these architectural sales results for your organization."
        primaryLabel="Schedule a Consultation"
        primaryHref="/contact"
        secondaryLabel="Download Full Report"
        secondaryHref="#"
      />
    </>
  );
}
