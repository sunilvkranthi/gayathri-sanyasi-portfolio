"use client";

import { motion } from "framer-motion";
import {
  leadershipRoles,
  judgeExperience,
  keyEvents,
} from "@/data/content";
import { staggerContainer, staggerItem, fadeInUp } from "@/data/animations";
import CTASection from "@/components/ui/CTASection";

export default function LeadershipPage() {
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
              Executive Influence
            </motion.p>
            <motion.h1
              variants={staggerItem}
              className="text-5xl md:text-7xl font-black tracking-tighter text-on-background leading-tight"
            >
              Architecting Impact Through{" "}
              <span className="text-primary">Leadership.</span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="mt-6 text-xl text-on-surface-variant leading-relaxed max-w-xl"
            >
              Gayathri Sanyasi combines strategic foresight with operational
              excellence, driving high-stakes initiatives across enterprise
              environments and community leadership roles.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* VP Role + Internship */}
      <section className="pb-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {leadershipRoles.map((role, i) => (
              <motion.div
                key={role.title}
                variants={staggerItem}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="bg-surface-container-lowest rounded-2xl p-10 ambient-shadow"
              >
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">{role.icon}</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-black tracking-tight text-on-background">
                      {role.title}
                    </h2>
                    <p className="text-sm text-on-surface-variant mt-1">{role.subtitle}</p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low text-xs font-bold text-outline uppercase tracking-wider mb-6">
                  {role.tag}
                </span>

                <ul className="space-y-3 mt-4">
                  {role.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-base mt-0.5 flex-shrink-0">
                        arrow_forward
                      </span>
                      <span className="text-sm text-on-surface-variant leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Judge Experience Bento */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem} className="mb-12">
              <p className="section-label mb-3">Industry Contributions</p>
              <h2 className="text-4xl font-black tracking-tighter text-on-background">
                Advisory & Jury Experience
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Judge Card */}
              <motion.div
                variants={staggerItem}
                className="md:col-span-2 bg-surface-container-lowest rounded-2xl p-10 ambient-shadow"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">gavel</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-black tracking-tight text-on-background">
                      {judgeExperience.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                      {judgeExperience.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {judgeExperience.events.map((ev) => (
                    <span
                      key={ev}
                      className="px-3 py-1.5 rounded-full bg-surface-container-low text-xs font-bold text-on-surface-variant"
                    >
                      {ev}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Events Count */}
              <motion.div
                variants={staggerItem}
                className="bg-gradient-to-br from-primary to-primary-container rounded-2xl p-10 flex flex-col items-center justify-center text-center"
              >
                <p className="text-6xl font-black text-white">{judgeExperience.eventsJudged}</p>
                <p className="text-sm font-bold text-white/70 uppercase tracking-widest mt-3">
                  Events Judged
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Events Timeline */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem} className="mb-12">
              <p className="section-label mb-3">Event Organisation</p>
              <h2 className="text-4xl font-black tracking-tighter text-on-background">
                Key Event Highlights
              </h2>
            </motion.div>

            <div className="space-y-4">
              {keyEvents.map((ev, i) => (
                <motion.div
                  key={ev.number}
                  variants={staggerItem}
                  whileHover={{ x: 8, transition: { duration: 0.25 } }}
                  className="flex items-start gap-6 bg-surface-container-lowest rounded-2xl p-8 ambient-shadow group cursor-default"
                >
                  <span className="text-4xl font-black text-outline/20 flex-shrink-0 group-hover:text-primary/20 transition-colors">
                    {ev.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-black tracking-tight text-on-background">
                      {ev.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                      {ev.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Quote */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="material-symbols-outlined text-primary text-4xl mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>
              format_quote
            </span>
            <blockquote className="text-2xl md:text-3xl font-semibold tracking-tight text-on-surface leading-snug">
              "Leadership is not about the position, but about the clarity of
              the vision and the commitment to the team's collective success."
            </blockquote>
            <p className="mt-6 text-sm font-bold text-outline uppercase tracking-widest">
              — Gayathri Sanyasi
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Let's Lead Something Together"
        description="Available for strategic consulting, advisory roles, and full-time leadership opportunities."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
        secondaryLabel="View Achievements"
        secondaryHref="/achievements"
      />
    </>
  );
}
