"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems } from "@/data/content";
import { staggerContainer, staggerItem } from "@/data/animations";
import CTASection from "@/components/ui/CTASection";

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<null | (typeof galleryItems)[0]>(null);

  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.p variants={staggerItem} className="section-label mb-4">
              Visual Narrative
            </motion.p>
            <motion.h1
              variants={staggerItem}
              className="text-5xl md:text-7xl font-black tracking-tighter text-on-background leading-tight"
            >
              Moments of <span className="text-primary">Impact.</span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="mt-6 text-xl text-on-surface-variant leading-relaxed max-w-xl"
            >
              A curated collection of leadership engagements, enterprise strategy
              sessions, and keynote presentations across the global technology
              landscape.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid — Bento Layout */}
      <section className="pb-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {galleryItems.map((item) => {
              const colSpan =
                item.size === "large"
                  ? "md:col-span-2 md:row-span-2"
                  : item.size === "wide"
                  ? "md:col-span-2"
                  : item.size === "medium"
                  ? "md:col-span-1"
                  : "md:col-span-1";
              const aspectRatio =
                item.size === "large"
                  ? "aspect-[4/3]"
                  : item.size === "wide"
                  ? "aspect-[16/7]"
                  : "aspect-[4/3]";

              return (
                <motion.div
                  key={item.id}
                  variants={staggerItem}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className={`${colSpan} relative rounded-2xl overflow-hidden cursor-pointer group`}
                  onClick={() => setLightbox(item)}
                >
                  <div className={`${aspectRatio} w-full relative`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2 uppercase tracking-widest">
                        {item.tag}
                      </span>
                      <h3 className="text-white font-black text-lg tracking-tight leading-tight">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-white/70 text-sm mt-1">{item.subtitle}</p>
                      )}
                    </div>
                    {/* Zoom icon */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="material-symbols-outlined text-white text-sm">open_in_full</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
            onClick={() => setLightbox(null)}
          >
            <div className="absolute inset-0 bg-inverse-surface/90 backdrop-blur-md" />
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 max-w-4xl w-full bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video relative">
                <img
                  src={lightbox.image}
                  alt={lightbox.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex items-start justify-between gap-4">
                <div>
                  <span className="chip mb-2 inline-flex">{lightbox.tag}</span>
                  <h3 className="text-xl font-black tracking-tight text-on-background">
                    {lightbox.title}
                  </h3>
                  {lightbox.subtitle && (
                    <p className="text-sm text-outline mt-1">{lightbox.subtitle}</p>
                  )}
                  {lightbox.description && (
                    <p className="text-sm text-on-surface-variant mt-3 leading-relaxed">
                      {lightbox.description}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="w-10 h-10 rounded-xl bg-surface-container-low hover:bg-surface-container flex items-center justify-center flex-shrink-0 transition-colors"
                >
                  <span className="material-symbols-outlined text-on-surface">close</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection
        title="Ready to build something impactful together?"
        description="Strategic partnerships start with a conversation."
        primaryLabel="Discuss a Partnership"
        primaryHref="/contact"
        secondaryLabel="View Resume"
        secondaryHref="/experience"
      />
    </>
  );
}
