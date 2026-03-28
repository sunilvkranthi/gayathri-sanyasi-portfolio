"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import Reveal from "@/components/animations/Reveal"; // ✅ ADD THIS
import { staggerContainer, staggerItem } from "@/data/animations";
import { heroMetrics, siteConfig } from "@/data/content";
import MagneticButton from "../ui/MagneticButton";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD9PfjJZHMrOwdL7XcuEYD8e4GYMDRTKGezWNgsjK3PInc7Nx7Bc0UBk2bh-O8dd2eHtARnD5MD_WQbtrkME9b-JRjcFL-eW1BZRa5oXwxX77or7x8oXm5pJiQ5vK1z2fLxg1fCM6Jkp6oStpoU3pIAMlNZIKzNOh3p57xVZnFoVhJQA1bw3w5pElkjvK9GYh-rgjsLNtfsJAqftd1WVPo60fAd25RYWbdYcWcXqCNPJizv1PwhhSUURgoalO2aqO9uP9SPJpjWtLA";

export default function HeroSection() {
  const [mobileColorOn, setMobileColorOn] = useState(false);

  const toggleMobileColor = useCallback(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 1023px)").matches) {
      setMobileColorOn((v) => !v);
    }
  }, []);

  return (
    <section className="relative min-h-[min(100dvh,920px)] sm:min-h-[90vh] flex items-center overflow-hidden bg-surface">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[min(100vw,600px)] h-[min(100vw,600px)] max-md:opacity-70 rounded-full bg-primary-fixed/30 blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[min(90vw,400px)] h-[min(90vw,400px)] max-md:opacity-60 rounded-full bg-secondary-fixed/20 blur-[70px] md:blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-14 sm:py-20 relative w-full min-w-0">

        {/* LEFT: IMAGE (Reveal here) */}
        <Reveal>
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative group order-2 lg:order-1 max-w-xl mx-auto lg:max-w-none w-full"
          >
            <div className="absolute -inset-2 sm:-inset-4 bg-primary-fixed rounded-2xl -rotate-2 md:group-hover:rotate-0 transition-transform duration-500" />

            <div
              className="relative w-full h-[min(72vw,420px)] sm:h-[min(65vh,480px)] lg:h-[520px] rounded-xl overflow-hidden shadow-2xl cursor-pointer lg:cursor-default touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              onClick={toggleMobileColor}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleMobileColor();
                }
              }}
              role="button"
              tabIndex={0}
              aria-label="Portrait: tap to show or hide color"
              aria-pressed={mobileColorOn}
            >
              <Image
                src={HERO_IMAGE}
                alt="Gayathri Sanyasi — Professional Portrait"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={clsx(
                  "object-cover transition-[filter,transform] duration-700 ease-out",
                  /* Bias crop toward the head */
                  "object-[50%_16%] sm:object-[50%_18%] lg:object-[50%_20%]",
                  /* Slight lift + zoom inside the frame */
                  "scale-[1.08] -translate-y-[4%] sm:scale-[1.06] sm:-translate-y-[3%] lg:scale-[1.05] lg:-translate-y-[2.5%]",
                  /* Mobile / tablet: grayscale until tap */
                  mobileColorOn ? "max-lg:grayscale-0" : "max-lg:grayscale",
                  /* Desktop: grayscale until hover */
                  "lg:grayscale lg:group-hover:grayscale-0"
                )}
              />
            </div>
          </motion.div>
        </Reveal>

        {/* RIGHT: CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="order-1 lg:order-2 space-y-6 sm:space-y-8 min-w-0"
        >
          <motion.div variants={staggerItem}>
            <span className="chip max-w-full flex flex-wrap items-center gap-1.5">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              B2B Sales Account Manager
            </span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-[clamp(2.25rem,6vw,4.5rem)] md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] text-on-background text-balance"
          >
            Gayathri <br />
            <span className="text-primary">Sanyasi</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-lg sm:text-xl md:text-2xl font-bold text-on-surface-variant tracking-tight leading-snug text-balance"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="text-base sm:text-lg text-outline leading-relaxed max-w-lg"
          >
            {siteConfig.description}
          </motion.p>

          {/* METRICS (Reveal + Stagger) */}
          <Reveal>
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-3 gap-2 sm:gap-3 pt-2 sm:pt-4"
            >
              {heroMetrics.map((metric, index) => (
                <Reveal key={metric.label} delay={index * 0.1}>
                  <div className="metric-card group cursor-default text-center sm:text-left">
                    <div className={`text-lg sm:text-xl md:text-2xl font-black tabular-nums ${metric.color}`}>
                      {metric.value}
                    </div>
                    <div className="text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest text-outline font-bold mt-1 leading-tight">
                      {metric.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </motion.div>
          </Reveal>

          {/* CTA BUTTONS (Reveal) */}
          <Reveal delay={0.3}>
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4"
            >
              <MagneticButton className="w-full sm:w-auto">
                <div className="w-full sm:w-auto">
                  <Link href="/case-studies" className="btn-primary w-full sm:w-auto">
                    View My Work
                  </Link>
                </div>
              </MagneticButton>
              <MagneticButton className="w-full sm:w-auto">
                <div className="w-full sm:w-auto">
                  <Link href="/contact" className="btn-secondary w-full sm:w-auto">
                    Contact Me
                  </Link>
                </div>
              </MagneticButton>
            </motion.div>
          </Reveal>
        </motion.div>
      </div>
    </section>
  );
}