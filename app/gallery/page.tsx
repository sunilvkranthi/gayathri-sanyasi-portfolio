"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
import { galleryItems } from "@/data/content";
import CTASection from "@/components/ui/CTASection";
import { useFinePointer } from "@/hooks/useFinePointer";

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<
    null | (typeof galleryItems)[0]
  >(null);
  const finePointer = useFinePointer();
  const tileHover = finePointer ? { scale: 1.01 } : undefined;

  return (
    <>
      {/* HERO (MINIMAL) */}
      <Reveal>
        <section className="py-16 sm:py-20 lg:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="section-label mb-4">Visual Narrative</p>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-on-background leading-tight text-balance">
                Moments of <span className="text-primary">Impact.</span>
              </h1>

              <p className="mt-6 text-base sm:text-xl text-on-surface-variant leading-relaxed max-w-xl">
                A curated collection of leadership engagements, enterprise strategy
                sessions, and keynote presentations across the global technology
                landscape.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* GALLERY GRID (LIGHT STAGGER) */}
      <section className="pb-16 sm:pb-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {galleryItems.map((item, index) => {
              const colSpan =
                item.size === "large"
                  ? "md:col-span-2 md:row-span-2"
                  : item.size === "wide"
                    ? "md:col-span-2"
                    : "md:col-span-1";

              const aspectRatio =
                item.size === "large"
                  ? "aspect-[4/3]"
                  : item.size === "wide"
                    ? "aspect-[16/7]"
                    : "aspect-[4/3]";

              return (
                <Reveal key={item.id} delay={index * 0.08}>
                  <motion.div
                    whileHover={tileHover}
                    transition={{ duration: 0.25 }}
                    className={`${colSpan} relative rounded-2xl overflow-hidden cursor-pointer group touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface`}
                    onClick={() => setLightbox(item)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setLightbox(item);
                      }
                    }}
                    aria-label={`Open ${item.title} in viewer`}
                  >
                    <div className={`${aspectRatio} w-full relative`}>

                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 md:group-hover:scale-105"
                      />

                      {/* Overlay: always subtle on mobile; full on desktop hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/75 via-inverse-surface/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-0 opacity-100 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300">
                        <span className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2 uppercase tracking-widest">
                          {item.tag}
                        </span>
                        <h3 className="text-white font-black text-base sm:text-lg tracking-tight leading-tight">
                          {item.title}
                        </h3>
                        {item.subtitle && (
                          <p className="text-white/70 text-sm mt-1">
                            {item.subtitle}
                          </p>
                        )}
                      </div>

                      {/* Zoom Icon */}
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 min-w-9 min-h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                        <span className="material-symbols-outlined text-white text-sm" aria-hidden>
                          open_in_full
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
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
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 max-w-4xl w-full bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video relative min-h-[200px]">
                <Image
                  src={lightbox.image}
                  alt={lightbox.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 896px) 100vw, 896px"
                />
              </div>

              <div className="p-4 sm:p-6 relative min-w-0">
                <button
                  type="button"
                  onClick={() => setLightbox(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 min-w-11 min-h-11 rounded-xl bg-surface-container-low md:hover:bg-surface-container flex items-center justify-center transition-colors touch-manipulation shadow-sm"
                  aria-label="Close viewer"
                >
                  <span className="material-symbols-outlined text-on-surface" aria-hidden>
                    close
                  </span>
                </button>

                <div className="pr-12 sm:pr-14 min-w-0">
                  <span className="chip mb-2 inline-flex">
                    {lightbox.tag}
                  </span>

                  <h3 className="text-lg sm:text-xl font-black tracking-tight text-on-background">
                    {lightbox.title}
                  </h3>

                  {lightbox.subtitle && (
                    <p className="text-sm text-outline mt-1">
                      {lightbox.subtitle}
                    </p>
                  )}

                  {lightbox.description && (
                    <p className="text-sm text-on-surface-variant mt-3 leading-relaxed">
                      {lightbox.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
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