"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/data/animations";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title = "Ready to Scale Your Account Strategy?",
  description = "Let's discuss how we can replicate these architectural sales results for your organization.",
  primaryLabel = "Schedule a Consultation",
  primaryHref = "/contact",
  secondaryLabel = "View Case Studies",
  secondaryHref = "/case-studies",
}: CTASectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary-fixed">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="space-y-5 sm:space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-on-primary-fixed leading-tight text-balance">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-on-primary-fixed-variant/80 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            <Link href={primaryHref} className="btn-primary w-full sm:w-auto justify-center">
              {primaryLabel}
            </Link>
            <Link href={secondaryHref} className="btn-secondary w-full sm:w-auto justify-center">
              {secondaryLabel}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
