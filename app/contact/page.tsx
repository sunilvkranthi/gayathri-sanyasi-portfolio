"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/content";
import { staggerContainer, staggerItem } from "@/data/animations";
import { useFinePointer } from "@/hooks/useFinePointer";

export default function ContactPage() {
  const finePointer = useFinePointer();

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.p variants={staggerItem} className="section-label mb-4">
              Let&apos;s Connect
            </motion.p>
            <motion.h1
              variants={staggerItem}
              className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-on-background leading-tight text-balance"
            >
              Get In <span className="text-primary">Touch</span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="mt-6 text-base sm:text-xl text-on-surface-variant leading-relaxed max-w-xl"
            >
              Available for strategic consulting, enterprise sales leadership
              roles, and speaking engagements.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-16 sm:pb-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Left: Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-2 space-y-8"
            >
              {[
                {
                  icon: "mail",
                  label: "Email",
                  value: siteConfig.email,
                  href: `mailto:${siteConfig.email}`,
                },
                {
                  icon: "link",
                  label: "LinkedIn",
                  value: "gayathrisanyasi",
                  href: siteConfig.linkedin,
                },
                {
                  icon: "download",
                  label: "Resume",
                  value: "Download CV",
                  href: siteConfig.cvUrl,
                },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={staggerItem}
                  whileHover={
                    finePointer
                      ? { x: 6, transition: { duration: 0.2 } }
                      : undefined
                  }
                  className="flex items-center gap-4 group min-h-14 py-2 rounded-xl touch-manipulation"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center flex-shrink-0 md:group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-primary">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-outline uppercase tracking-widest">
                      {item.label}
                    </p>
                    <p className="text-base font-semibold text-on-background md:group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Availability chip */}
              <motion.div
                variants={staggerItem}
                className="bg-surface-container-lowest rounded-2xl p-6 ambient-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                    Available Now
                  </span>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Open to strategic consulting and full-time opportunities in
                  enterprise B2B sales and account management leadership.
                </p>
              </motion.div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="lg:col-span-3"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
