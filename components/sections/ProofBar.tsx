"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
import { proofPoints } from "@/data/content";

export default function ProofBar() {
  return (
    <Reveal> {/* ✅ ONLY ONE REVEAL */}
      <section className="bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-8 md:gap-10"
          >
            {proofPoints.map((point) => (
              <div
                key={point.title}
                className="flex items-center gap-4 group transition-all duration-300"
              >
                {/* ICON */}
                <div
                  className={`w-12 h-12 shrink-0 rounded-full ${point.bg} flex items-center justify-center 
                  md:group-hover:scale-105 transition-transform duration-200`}
                >
                  <span
                    className={`material-symbols-outlined ${point.iconColor}`}
                  >
                    {point.icon}
                  </span>
                </div>

                {/* TEXT */}
                <div>
                  <div className="text-base font-bold text-on-surface">
                    {point.title}
                  </div>
                  <div className="text-xs text-outline font-medium uppercase tracking-widest">
                    {point.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>
    </Reveal>
  );
}