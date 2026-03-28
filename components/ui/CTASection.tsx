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
    <section className="py-24 bg-primary-fixed">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-primary-fixed leading-tight">
            {title}
          </h2>
          <p className="text-lg text-on-primary-fixed-variant/80 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link href={primaryHref} className="btn-primary">
              {primaryLabel}
            </Link>
            <Link href={secondaryHref} className="btn-secondary">
              {secondaryLabel}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
