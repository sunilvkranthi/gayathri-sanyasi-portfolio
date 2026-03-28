"use client";

import { motion } from "framer-motion";
import { strategies } from "@/data/content";
import { staggerContainer, staggerItem } from "@/data/animations";

export default function StrategiesSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem} className="mb-14">
            <p className="section-label mb-3">STRATEGY</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-background">
              How I Grow Accounts
            </h2>
            <p className="text-outline mt-3 text-base">
              A systematic approach to revenue expansion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strategies.map((strategy, i) => (
              <motion.div
                key={strategy.title}
                variants={staggerItem}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="bg-surface-container-lowest rounded-2xl p-8 ambient-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-primary">
                    {strategy.icon}
                  </span>
                </div>
                <h3 className="text-lg font-black tracking-tight text-on-background mb-3">
                  {strategy.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {strategy.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
