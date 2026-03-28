"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal"; // ✅ ADD
import { experiences } from "@/data/content";
import { staggerContainer, staggerItem } from "@/data/animations";
import { useFinePointer } from "@/hooks/useFinePointer";

export default function ExperienceSection() {
  const finePointer = useFinePointer();
  const cardHover = finePointer
    ? { y: -8, scale: 1.02, transition: { duration: 0.3 } }
    : undefined;

  return (
    <Reveal> {/* ✅ SECTION LEVEL */}
      <section className="py-16 sm:py-20 lg:py-24 bg-surface" id="experience">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {/* HEADER */}
            <motion.div variants={staggerItem} className="mb-10 sm:mb-14">
              <p className="section-label mb-3">Career Path</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-on-background text-balance">
                Professional Experience
              </h2>
            </motion.div>

            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experiences.map((exp, i) => (
                <Reveal key={exp.company} delay={i * 0.15}> {/* ✅ STAGGER */}
                  <motion.div
                    variants={staggerItem}
                    whileHover={cardHover}
                    className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 ambient-shadow group transition-all duration-300 min-w-0"
                  >
                    {/* HEADER */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-6">
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-xl font-black tracking-tight text-on-background">
                          {exp.company}
                        </h3>
                        <p className="text-sm sm:text-base font-semibold text-primary mt-1">
                          {exp.role}
                        </p>
                      </div>
                      <span className="text-xs font-bold text-outline bg-surface-container-low px-3 py-2 rounded-full whitespace-nowrap self-start">
                        {exp.period}
                      </span>
                    </div>

                    {/* BULLETS */}
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, j) => (
                        <Reveal key={j} delay={j * 0.08}> {/* ✅ MICRO STAGGER */}
                          <li className="flex items-start gap-3">
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
                        </Reveal>
                      ))}
                    </ul>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </Reveal>
  );
}