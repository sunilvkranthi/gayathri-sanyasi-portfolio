"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/content";
import { staggerContainer, staggerItem } from "@/data/animations";

export default function ExperienceSection() {
  return (
    <section className="py-24 bg-surface" id="experience">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem} className="mb-14">
            <p className="section-label mb-3">Career Path</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-background">
              Professional Experience
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                variants={staggerItem}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="bg-surface-container-lowest rounded-2xl p-8 ambient-shadow group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-black tracking-tight text-on-background">
                      {exp.company}
                    </h3>
                    <p className="text-base font-semibold text-primary mt-1">
                      {exp.role}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-outline bg-surface-container-low px-3 py-1.5 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span
                        className="material-symbols-outlined text-primary text-base mt-0.5 flex-shrink-0"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      <span className="text-sm text-on-surface-variant leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
