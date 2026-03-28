"use client";

import Reveal from "@/components/animations/Reveal";
import {
  achievements,
  recognitionPoints,
  certifications,
} from "@/data/content";
import CTASection from "@/components/ui/CTASection";

export default function AchievementsPage() {
  return (
    <>
      {/* HERO (MINIMAL) */}
      <Reveal>
        <section className="py-16 sm:py-20 lg:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="section-label mb-4">Hall of Excellence</p>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-on-background leading-tight text-balance">
                Milestones in{" "}
                <span className="text-primary">Enterprise Impact.</span>
              </h1>

              <p className="mt-6 text-base sm:text-xl text-on-surface-variant leading-relaxed max-w-xl">
                A curated record of professional recognition, sales performance
                awards, and strategic contributions across the B2B hospitality and
                enterprise sectors.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ACHIEVEMENTS GRID (LIGHT STAGGER) */}
      <section className="pb-16 sm:pb-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((ach, index) => (
              <Reveal key={ach.id} delay={index * 0.08}>
                <div
                  className={`bg-surface-container-lowest rounded-2xl overflow-hidden ambient-shadow group min-w-0
                  md:hover:-translate-y-2 md:hover:scale-[1.01] transition-all duration-300 ${ach.featured ? "md:col-span-2" : ""
                    }`}
                >
                  {ach.featured && (
                    <div className="h-2 w-full bg-gradient-to-r from-primary to-primary-container" />
                  )}

                  <div className="p-6 sm:p-10">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center flex-shrink-0 md:group-hover:scale-110 transition-transform duration-300">
                        <span
                          className="material-symbols-outlined text-primary text-2xl"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          {ach.icon}
                        </span>
                      </div>

                      <span className="text-xs font-bold text-outline bg-surface-container-low px-3 py-1.5 rounded-full uppercase tracking-widest">
                        {ach.badge}
                      </span>
                    </div>

                    <h2
                      className={`font-black tracking-tight text-on-background mb-3 ${ach.featured ? "text-2xl md:text-3xl" : "text-xl"
                        }`}
                    >
                      {ach.title}
                    </h2>

                    <p className="text-sm text-on-surface-variant leading-relaxed mb-5">
                      {ach.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {ach.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full bg-surface-container-low text-xs font-semibold text-on-surface-variant"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RECOGNITION (MINIMAL + LIGHT STAGGER) */}
      <Reveal>
        <section className="py-16 sm:py-20 lg:py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            <div className="mb-10 sm:mb-12 text-center">
              <p className="section-label mb-3">The Standard of Recognition</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-on-background text-balance">
                Beyond the Badges
              </h2>
              <p className="text-on-surface-variant mt-4 text-sm sm:text-base max-w-xl mx-auto leading-relaxed px-2">
                These accolades reflect a consistent track record of exceeding
                benchmarks. Beyond the badges, they represent millions in secured
                revenue and hundreds of strengthened enterprise partnerships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recognitionPoints.map((point, index) => (
                <Reveal key={point} delay={index * 0.06}>
                  <div className="flex items-center gap-3 bg-surface-container-lowest rounded-2xl p-6 ambient-shadow">
                    <span
                      className="material-symbols-outlined text-secondary flex-shrink-0"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span className="text-sm font-semibold text-on-surface">
                      {point}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </section>
      </Reveal>

      {/* CERTIFICATIONS (MINIMAL) */}
      <Reveal>
        <section className="py-16 sm:py-20 lg:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            <div className="mb-10 sm:mb-12">
              <p className="section-label mb-3">Continuous Learning</p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-on-background text-balance">
                Professional Certifications
              </h2>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-center justify-between gap-4 sm:gap-6 bg-surface-container-lowest rounded-2xl p-5 sm:p-8 ambient-shadow group min-w-0
                  md:hover:translate-x-2 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary text-base">
                        verified
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-black tracking-tight text-on-background">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-outline font-medium mt-0.5">
                        {cert.issuer} • Issued {cert.year}
                      </p>
                    </div>
                  </div>

                  <span className="material-symbols-outlined text-outline md:group-hover:text-primary transition-colors shrink-0">
                    arrow_forward
                  </span>
                </div>
              ))}
            </div>

          </div>
        </section>
      </Reveal>

      {/* CTA */}
      <CTASection
        title="Let's Create the Next Milestone Together"
        description="These results aren't anomalies — they're a methodology. Let's apply it to your organization."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
        secondaryLabel="View Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}