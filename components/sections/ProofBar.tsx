"use client";

import { motion } from "framer-motion";
import { proofPoints } from "@/data/content";
import { staggerContainer, staggerItem } from "@/data/animations";

export default function ProofBar() {
  return (
    <section className="bg-surface-container-low border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row justify-between items-center gap-10"
        >
          {proofPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={staggerItem}
              className="flex items-center gap-4 group"
            >
              <div
                className={`w-12 h-12 rounded-full ${point.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <span className={`material-symbols-outlined ${point.iconColor}`}>
                  {point.icon}
                </span>
              </div>
              <div>
                <div className="text-base font-bold text-on-surface">
                  {point.title}
                </div>
                <div className="text-xs text-outline font-medium uppercase tracking-widest">
                  {point.subtitle}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
