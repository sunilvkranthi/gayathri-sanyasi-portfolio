"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, scaleIn } from "@/data/animations";
import { heroMetrics, siteConfig } from "@/data/content";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-surface">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary-fixed/30 blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary-fixed/20 blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20 relative">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative group order-2 lg:order-1"
        >
          <div className="absolute -inset-4 bg-primary-fixed rounded-2xl -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
          <div className="relative h-[520px] w-full rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9PfjJZHMrOwdL7XcuEYD8e4GYMDRTKGezWNgsjK3PInc7Nx7Bc0UBk2bh-O8dd2eHtARnD5MD_WQbtrkME9b-JRjcFL-eW1BZRa5oXwxX77or7x8oXm5pJiQ5vK1z2fLxg1fCM6Jkp6oStpoU3pIAMlNZIKzNOh3p57xVZnFoVhJQA1bw3w5pElkjvK9GYh-rgjsLNtfsJAqftd1WVPo60fAd25RYWbdYcWcXqCNPJizv1PwhhSUURgoalO2aqO9uP9SPJpjWtLA"
              alt="Gayathri Sanyasi — Professional Portrait"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="order-1 lg:order-2 space-y-8"
        >
          <motion.div variants={staggerItem}>
            <span className="chip">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
              B2B Sales Account Manager
            </span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-6xl md:text-7xl font-black tracking-tighter leading-tight text-on-background"
          >
            Gayathri{" "}
            <br />
            <span className="text-primary">Sanyasi</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-2xl font-bold text-on-surface-variant tracking-tight leading-snug"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="text-lg text-outline leading-relaxed max-w-lg"
          >
            {siteConfig.description}
          </motion.p>

          {/* Metrics */}
          <motion.div
            variants={staggerItem}
            className="grid grid-cols-3 gap-3 pt-4"
          >
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="metric-card group cursor-default"
              >
                <div className={`text-2xl font-black ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-outline font-bold mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link href="/case-studies" className="btn-primary">
              View My Work
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
