import { Reveal } from "@/components/reveal";

const GOLD_STANDARD_STEPS = [
  "Produced by a single AAPC-certified coder holding the Certified Risk Adjustment Coder (CRC) credential",
  "First pass: identify every diagnosis in the chart that meets CMS's MEAT documentation guidelines — evidence a condition was Monitored, Evaluated, Assessed, or Treated in that encounter",
  "Second pass: the same coder independently reviews the same charts against the same criteria",
  "Only diagnoses confirmed in both passes are retained as gold-standard HCC-relevant codes",
] as const;

const SCORING_STEPS = [
  "The system is run against the same 5,000 charts in its shipped configuration — same rules, evidence grounding, and reconciliation used in production, with nothing tuned for this evaluation",
  "Its output is compared directly against the finalized gold-standard codes",
  "Precision, recall, and F1 are computed at both the HCC-category and exact-ICD level, micro-averaged across all codes",
  "Reported separately for outpatient and inpatient charts",
] as const;

/**
 * Methodology - how the gold standard was built and how the shipped system
 * was scored against it. This is the credibility section, so it keeps the
 * full narrative detail but grouped into two scannable, bulleted phases.
 */
export function Methodology() {
  return (
    <section className="bg-white py-16 md:py-20" aria-labelledby="methodology-heading">
      <div className="container-main max-w-[980px]!">
        <Reveal>
          <h2
            id="methodology-heading"
            className="apple-display text-2xl md:text-[26px] mb-6"
          >
            Methodology
          </h2>
          <div className="rounded-3xl border border-border bg-[#f7f9fc] p-6 md:p-8 flex flex-col gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted mb-3">
                Gold-standard labels
              </p>
              <ul className="flex flex-col gap-2.5 list-disc pl-5 m-0">
                {GOLD_STANDARD_STEPS.map((step) => (
                  <li key={step} className="text-base apple-body leading-relaxed">
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted mb-3">
                Scoring
              </p>
              <ul className="flex flex-col gap-2.5 list-disc pl-5 m-0">
                {SCORING_STEPS.map((step) => (
                  <li key={step} className="text-base apple-body leading-relaxed">
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
