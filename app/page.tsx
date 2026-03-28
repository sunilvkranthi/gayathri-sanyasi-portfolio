import HeroSection from "@/components/sections/HeroSection";
import ProofBar from "@/components/sections/ProofBar";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import StrategiesSection from "@/components/sections/StrategiesSection";
import SkillsSection from "@/components/sections/SkillsSection";
import QuoteSection from "@/components/sections/QuoteSection";
import CTASection from "@/components/ui/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProofBar />
      {/* About / Quote */}
      <QuoteSection
        label="My Approach"
        quote="I believe that account management isn't just about maintenance; it's about anticipating needs before they become problems. My mindset is rooted in empathy-driven sales, where technical solutions meet human objectives."
        highlightWord="anticipating needs"
      />
      <ExperienceSection />
      <CaseStudiesPreview />
      <StrategiesSection />
      <SkillsSection />
      <CTASection
        title="Let's Connect"
        description="Available for strategic consulting and full-time opportunities."
        primaryLabel="Get In Touch"
        primaryHref="/contact"
        secondaryLabel="View Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
