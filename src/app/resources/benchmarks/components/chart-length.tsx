import { Reveal } from "@/components/reveal";

const LENGTH_STATS = [
  { label: "Min", pages: "16", chars: "—" },
  { label: "p25", pages: "33", chars: "—" },
  { label: "Median", pages: "41", chars: "95k" },
  { label: "Mean", pages: "48.3", chars: "118k" },
  { label: "p90", pages: "90", chars: "236k" },
  { label: "Max", pages: "145", chars: "412k" },
] as const;

const DISTRIBUTION = [
  { bucket: "≤ 20 pages", count: 40, pct: 0.8 },
  { bucket: "21 – 40", count: 2410, pct: 48.2 },
  { bucket: "41 – 60", count: 1655, pct: 33.1 },
  { bucket: "61 – 80", count: 185, pct: 3.7 },
  { bucket: "> 80 pages", count: 710, pct: 14.3 },
] as const;

const MAX_PCT = Math.max(...DISTRIBUTION.map((d) => d.pct));

const SETTING_ROWS = [
  { cohort: "Outpatient", charts: "4,116", pages: "38 · 61", docs: "20 · 31" },
  { cohort: "Inpatient", charts: "884", pages: "94 · 145", docs: "44 · 57" },
  { cohort: "All charts", charts: "5,000", pages: "41 · 145", docs: "21 · 57" },
] as const;

/**
 * ChartLength - section 02. Length is the doc's own answer for where the
 * inpatient accuracy gap originates, so it follows accuracy directly rather
 * than the source report's later placement.
 */
export function ChartLength() {
  return (
    <section className="apple-section-gray py-16 md:py-20" aria-labelledby="length-heading">
      <div className="container-main max-w-[980px]!">
        <Reveal as="header" className="mb-8">
          <h2 id="length-heading" className="apple-display text-2xl md:text-[26px] mb-0">
            Chart length
          </h2>
        </Reveal>

        <Reveal className="mb-10">
          <div className="rounded-3xl border border-border bg-white overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[15px] border-collapse min-w-[520px]">
                <thead>
                  <tr className="bg-[#f5f5f7] border-b border-border text-muted text-sm">
                    <th className="px-5 py-3 font-semibold"> </th>
                    {LENGTH_STATS.map((s) => (
                      <th key={s.label} className="px-5 py-3 font-semibold">
                        {s.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border-light">
                    <td className="px-5 py-3 font-semibold text-[#0a0a12]">Pages</td>
                    {LENGTH_STATS.map((s) => (
                      <td key={s.label} className="px-5 py-3 evidence-mono apple-body">
                        {s.pages}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-5 py-3 font-semibold text-[#0a0a12]">Characters</td>
                    {LENGTH_STATS.map((s) => (
                      <td key={s.label} className="px-5 py-3 evidence-mono apple-body">
                        {s.chars}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted mb-4">
            Charts by page count
          </p>
          <div className="rounded-3xl border border-border bg-white p-6 md:p-8">
            <div className="flex flex-col gap-4">
              {DISTRIBUTION.map((row) => (
                <div key={row.bucket} className="flex items-center gap-4">
                  <span className="text-sm font-medium text-[#0a0a12] w-[90px] shrink-0">
                    {row.bucket}
                  </span>
                  <div className="flex-1 h-6 rounded-md bg-[#eef1f6] relative overflow-hidden">
                    <div
                      className="h-full rounded-md bg-[#0165dc]"
                      style={{ width: `${(row.pct / MAX_PCT) * 100}%` }}
                    />
                  </div>
                  <span className="evidence-mono text-sm text-[#0a0a12] w-[110px] text-right shrink-0">
                    {row.count} ({row.pct}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted mb-4">
            By care setting
          </p>
          <div className="rounded-3xl border border-border bg-white overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[15px] border-collapse min-w-[560px]">
                <thead>
                  <tr className="bg-[#f5f5f7] border-b border-border text-muted text-sm">
                    <th className="px-5 py-3 font-semibold">Cohort</th>
                    <th className="px-5 py-3 font-semibold">Charts</th>
                    <th className="px-5 py-3 font-semibold">Pages per chart (median &middot; max)</th>
                    <th className="px-5 py-3 font-semibold">Documents per chart (median &middot; max)</th>
                  </tr>
                </thead>
                <tbody>
                  {SETTING_ROWS.map((row) => (
                    <tr key={row.cohort} className="border-b border-border-light last:border-0">
                      <td className="px-5 py-3 font-semibold text-[#0a0a12]">{row.cohort}</td>
                      <td className="px-5 py-3 evidence-mono apple-body">{row.charts}</td>
                      <td className="px-5 py-3 evidence-mono apple-body">{row.pages}</td>
                      <td className="px-5 py-3 evidence-mono apple-body">{row.docs}</td>
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
