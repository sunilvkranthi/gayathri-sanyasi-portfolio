"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal"; // ✅ ADD
import { toolCategories } from "@/data/content";
import { staggerContainer, staggerItem } from "@/data/animations";

export default function SkillsSection() {
  return (
    <Reveal> {/* ✅ SECTION ENTRY */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {/* HEADER */}
            <motion.div variants={staggerItem} className="mb-14 text-center">
              <p className="section-label mb-3">The Modern Toolkit</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-background">
                Industry-Standard Tools
              </h2>
              <p className="text-outline mt-3 text-base max-w-xl mx-auto">
                I leverage industry-standard tools to automate reporting, track
                account health, and visualize pipeline growth.
              </p>
            </motion.div>

            {/* CATEGORY CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {toolCategories.map((cat, i) => (
                <Reveal key={cat.category} delay={i * 0.15}> {/* ✅ STAGGER */}
                  <motion.div
                    variants={staggerItem}
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                      transition: { duration: 0.3 },
                    }}
                    className="bg-surface-container-lowest rounded-2xl p-8 ambient-shadow transition-all duration-300"
                  >
                    {/* CATEGORY TITLE */}
                    <h3 className="text-xs font-bold text-outline uppercase tracking-widest mb-6">
                      {cat.category}
                    </h3>

                    {/* SKILLS */}
                    <div className="flex flex-wrap gap-3">
                      {cat.tools.map((tool, j) => (
                        <Reveal key={tool} delay={j * 0.05}> {/* ✅ MICRO STAGGER */}
                          <span
                            className="px-4 py-2 rounded-full bg-surface-container-low 
                            text-on-surface-variant text-sm font-semibold 
                            hover:bg-primary-fixed hover:text-primary 
                            transition-all duration-300 cursor-default 
                            hover:scale-105"
                          >
                            {tool}
                          </span>
                        </Reveal>
                      ))}
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            {/* QUOTE */}
            <Reveal delay={0.3}>
              <motion.div
                variants={staggerItem}
                className="mt-16 text-center"
              >
                <blockquote className="text-2xl md:text-3xl font-black tracking-tighter text-on-background italic">
                  "If your accounts aren't growing, they're leaking revenue."
                </blockquote>
              </motion.div>
            </Reveal>

          </motion.div>
        </div>
      </section>
    </Reveal>
  );
}