import { notFound } from "next/navigation";
import { caseStudies } from "@/data/content";
import CaseStudyDetail from "./CaseStudyDetail";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) notFound();
  return <CaseStudyDetail study={study} />;
}
