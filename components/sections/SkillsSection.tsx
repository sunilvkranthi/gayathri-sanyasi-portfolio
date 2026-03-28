"use client";

import { motion } from "framer-motion";
import { toolCategories } from "@/data/content";
import { staggerContainer, staggerItem } from "@/data/animations";

export default function SkillsSection() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
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
                      className="px-4 py-2 rounded-full bg-surface-container-low text-on-surface-variant text-sm font-semibold hover:bg-primary-fixed hover:text-primary transition-colors duration-200 cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Big Quote */}
          <motion.div
            variants={staggerItem}
            className="mt-16 text-center"
          >
            <blockquote className="text-2xl md:text-3xl font-black tracking-tighter text-on-background italic">
              "If your accounts aren't growing, they're leaking revenue."
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
