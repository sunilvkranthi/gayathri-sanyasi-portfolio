"use client";

import Reveal from "@/components/animations/Reveal";
import {
  leadershipRoles,
  judgeExperience,
  keyEvents,
} from "@/data/content";
import CTASection from "@/components/ui/CTASection";

export default function LeadershipPage() {
  return (
    <>
      {/* HERO */}
      <Reveal>
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="section-label mb-4">Executive Influence</p>

              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-on-background leading-tight">
                Architecting Impact Through{" "}
                <span className="text-primary">Leadership.</span>
              </h1>

              <p className="mt-6 text-xl text-on-surface-variant leading-relaxed max-w-xl">
                Gayathri Sanyasi combines strategic foresight with operational
                excellence, driving high-stakes initiatives across enterprise
                environments and community leadership roles.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* VP ROLE + INTERNSHIP */}
      <Reveal>
        <section className="pb-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {leadershipRoles.map((role, i) => (
                <Reveal key={role.title} delay={i * 0.12}>
                  <div
                    className="bg-surface-container-lowest rounded-2xl p-10 ambient-shadow 
                    hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-primary">
                          {role.icon}
                        </span>
                      </div>
                      <div>
                        <h2 className="text-xl font-black tracking-tight text-on-background">
                          {role.title}
                        </h2>
                        <p className="text-sm text-on-surface-variant mt-1">
                          {role.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low text-xs font-bold text-outline uppercase tracking-wider mb-6">
                      {role.tag}
                    </span>

                    <ul className="space-y-3 mt-4">
                      {role.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-primary text-base mt-0.5 flex-shrink-0">
                            arrow_forward
                          </span>
                          <span className="text-sm text-on-surface-variant leading-relaxed">
                            {h}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* JUDGE EXPERIENCE */}
      <Reveal>
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <p className="section-label mb-3">Industry Contributions</p>
              <h2 className="text-4xl font-black tracking-tighter text-on-background">
                Advisory & Jury Experience
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Judge Card */}
              <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl p-10 ambient-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">
                      gavel
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-black tracking-tight text-on-background">
                      {judgeExperience.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                      {judgeExperience.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {judgeExperience.events.map((ev) => (
                    <span
                      key={ev}
                      className="px-3 py-1.5 rounded-full bg-surface-container-low text-xs font-bold text-on-surface-variant"
                    >
                      {ev}
                    </span>
                  ))}
                </div>
              </div>

              {/* Events Count */}
              <div className="bg-gradient-to-br from-primary to-primary-container rounded-2xl p-10 flex flex-col items-center justify-center text-center">
                <p className="text-6xl font-black text-white">
                  {judgeExperience.eventsJudged}
                </p>
                <p className="text-sm font-bold text-white/70 uppercase tracking-widest mt-3">
                  Events Judged
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* KEY EVENTS */}
      <Reveal>
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <p className="section-label mb-3">Event Organisation</p>
              <h2 className="text-4xl font-black tracking-tighter text-on-background">
                Key Event Highlights
              </h2>
            </div>

            <div className="space-y-4">
              {keyEvents.map((ev) => (
                <div
                  key={ev.number}
                  className="flex items-start gap-6 bg-surface-container-lowest rounded-2xl p-8 ambient-shadow 
                  hover:translate-x-2 transition-all duration-300"
                >
                  <span className="text-4xl font-black text-outline/20 flex-shrink-0">
                    {ev.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-black tracking-tight text-on-background">
                      {ev.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                      {ev.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* QUOTE */}
      <Reveal>
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span
              className="material-symbols-outlined text-primary text-4xl mb-6 block"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              format_quote
            </span>

            <blockquote className="text-2xl md:text-3xl font-semibold tracking-tight text-on-surface leading-snug">
              "Leadership is not about the position, but about the clarity of
              the vision and the commitment to the team's collective success."
            </blockquote>

            <p className="mt-6 text-sm font-bold text-outline uppercase tracking-widest">
              — Gayathri Sanyasi
            </p>
          </div>
        </section>
      </Reveal>

      {/* CTA */}
      <CTASection
        title="Let's Lead Something Together"
        description="Available for strategic consulting, advisory roles, and full-time leadership opportunities."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
        secondaryLabel="View Achievements"
        secondaryHref="/achievements"
      />
    </>
  );
}