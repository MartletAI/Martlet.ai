import { CTA as SharedCTA } from "@/components/cta";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

import { AccuracyBySetting } from "./components/accuracy-by-setting";
import { ChartLength } from "./components/chart-length";
import { CodingCoverage } from "./components/coding-coverage";
import { Header } from "./components/header";
import { InputCorpus } from "./components/input-corpus";
import { Methodology } from "./components/methodology";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HCC Coding Benchmark Report — Accuracy by Chart Length & Care Setting | Martlet AI",
  description:
    "Martlet's HCC coding accuracy on 5,000 synthetic charts against a MEAT-corrected gold standard: HCC-category and exact-ICD F1, broken out by outpatient vs. inpatient charts and by chart length.",
  alternates: {
    canonical: "/resources/benchmarks",
  },
};

export default function Page() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources/blog" },
          { name: "Benchmarks", href: "/resources/benchmarks" },
        ]}
      />
      {/* Plain page title */}
      <Header />

      {/* Accuracy by cohort + the precision/recall/F1 gap by care setting */}
      <AccuracyBySetting />

      {/* Chart-length distribution + why inpatient charts run longer */}
      <ChartLength />

      {/* Document-class mix behind the page counts */}
      <InputCorpus />

      {/* What the gold standard holds */}
      <CodingCoverage />

      {/* Denominator + disclaimer */}
      <Methodology />

      {/* CTA */}
      <SharedCTA
        title="See it run on your own chart mix."
        description="Bring a sample of your own charts — inpatient, outpatient, or both. We'll score it the same way, inside your environment."
        submitLabel="Run it on your charts"
        backgroundColor="bg-white"
      />
    </main>
  );
}
