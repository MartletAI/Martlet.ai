import { Reveal } from "@/components/reveal";

const COHORT_ROWS = [
  {
    cohort: "All charts",
    charts: "5,000",
    hccF1: "0.986",
    hccPR: "(.982 / .990)",
    icdF1: "0.982",
    icdPR: "(.974 / .990)",
    highlight: false,
  },
  {
    cohort: "Outpatient",
    charts: "4,116",
    hccF1: "0.987",
    hccPR: "(.984 / .990)",
    icdF1: "0.983",
    icdPR: "(.976 / .990)",
    highlight: true,
  },
  {
    cohort: "Inpatient",
    charts: "884",
    hccF1: "0.982",
    hccPR: "(.975 / .989)",
    icdF1: "0.976",
    icdPR: "(.965 / .988)",
    highlight: true,
  },
] as const;

/**
 * AccuracyBySetting - section 01. Cohort table (all / outpatient / inpatient)
 * across both scoring views.
 */
export function AccuracyBySetting() {
  return (
    <section className="bg-white py-16 md:py-20" aria-labelledby="accuracy-heading">
      <div className="container-main max-w-[980px]!">
        <Reveal as="header" className="mb-8">
          <h2 id="accuracy-heading" className="apple-display text-2xl md:text-[26px] mb-0">
            Accuracy
          </h2>
        </Reveal>

        <Reveal className="mb-10">
          <div className="rounded-3xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[15px] border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-[#f5f5f7] border-b border-border text-muted text-sm">
                    <th className="px-5 py-3 font-semibold">Cohort</th>
                    <th className="px-5 py-3 font-semibold">Charts</th>
                    <th className="px-5 py-3 font-semibold">HCC-category F1 (P / R)</th>
                    <th className="px-5 py-3 font-semibold">Exact-ICD F1 (P / R)</th>
                  </tr>
                </thead>
                <tbody>
                  {COHORT_ROWS.map((row) => (
                    <tr
                      key={row.cohort}
                      className={`border-b border-border-light last:border-0 ${row.highlight ? "" : "bg-[#fafbfc]"}`}
                    >
                      <td className="px-5 py-3 font-semibold text-[#0a0a12]">{row.cohort}</td>
                      <td className="px-5 py-3 evidence-mono apple-body">{row.charts}</td>
                      <td className="px-5 py-3">
                        <span className="evidence-mono font-semibold text-[#0a0a12]">{row.hccF1}</span>{" "}
                        <span className="evidence-mono text-sm text-muted">{row.hccPR}</span>
                      </td>
                      <td className="px-5 py-3">
                        <span className="evidence-mono font-semibold text-[#0a0a12]">{row.icdF1}</span>{" "}
                        <span className="evidence-mono text-sm text-muted">{row.icdPR}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
