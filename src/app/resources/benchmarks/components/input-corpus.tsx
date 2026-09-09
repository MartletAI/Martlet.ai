import { Reveal } from "@/components/reveal";

const CORPUS_STATS = [
  { value: "5,000", caption: "charts" },
  { value: "122,000", caption: "documents*" },
  { value: "246,500", caption: "pages" },
  { value: "24.4", caption: "documents per chart, mean" },
  { value: "49.3", caption: "pages per chart, mean" },
] as const;

const DOC_CLASSES = [
  { label: "Office Visit Note", count: 23424, pct: 19.2 },
  { label: "Lab", count: 18788, pct: 15.4 },
  { label: "Diagnostic Report", count: 11834, pct: 9.7 },
  { label: "Nurse Visit Note", count: 9272, pct: 7.6 },
  { label: "Registration & Coverage", count: 7686, pct: 6.3 },
  { label: "Fax Cover", count: 7320, pct: 6.0 },
  { label: "ID Document", count: 7320, pct: 6.0 },
  { label: "Care Plan", count: 5856, pct: 4.8 },
  { label: "Hospital Note", count: 5734, pct: 4.7 },
  { label: "Insurance Authorization", count: 5000, pct: 4.1 },
  { label: "Problem List Grid", count: 5000, pct: 4.1 },
  { label: "Intake Form", count: 5000, pct: 4.1 },
  { label: "Medication List", count: 4514, pct: 3.7 },
  { label: "Consent / Legal Form", count: 2684, pct: 2.2 },
  { label: "Order Requisition", count: 1342, pct: 1.1 },
  { label: "Referral Letter", count: 1220, pct: 1.0 },
] as const;

const MAX_PCT = Math.max(...DOC_CLASSES.map((d) => d.pct));

/**
 * InputCorpus - section 03. The document-class mix behind chart length: most
 * pages are not physician narrative, which is what makes evidence grounding
 * — not just length — the harder problem.
 */
export function InputCorpus() {
  return (
    <section className="bg-white py-16 md:py-20" aria-labelledby="corpus-heading">
      <div className="container-main max-w-[980px]!">
        <Reveal as="header" className="mb-8">
          <h2 id="corpus-heading" className="apple-display text-2xl md:text-[26px] mb-0">
            Input corpus
          </h2>
        </Reveal>

        <Reveal
          as="ul"
          stagger
          className="grid grid-cols-2 md:grid-cols-5 gap-5 list-none p-0 m-0 mb-3"
        >
          {CORPUS_STATS.map((stat) => (
            <li key={stat.caption} className="rounded-3xl border border-border bg-[#f7f9fc] p-5 text-center">
              <div className="apple-stat text-[26px] md:text-[30px] text-[#0165dc] mb-1.5">
                {stat.value}
              </div>
              <p className="text-sm font-medium apple-body leading-snug m-0">{stat.caption}</p>
            </li>
          ))}
        </Reveal>

        <p className="text-xs apple-caption leading-relaxed m-0 mb-10">
          *A document is a contiguous page span under one identifier, not a
          single page.
        </p>

        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted mb-4">
            Documents by class, across all 5,000 charts
          </p>
          <div className="rounded-3xl border border-border bg-[#f7f9fc] p-6 md:p-8">
            <div className="flex flex-col gap-3">
              {DOC_CLASSES.map((row) => (
                <div key={row.label} className="flex items-center gap-4">
                  <span className="text-sm font-medium text-[#0a0a12] w-[190px] shrink-0 truncate">
                    {row.label}
                  </span>
                  <div className="flex-1 h-5 rounded-md bg-[#e5e9f0] relative overflow-hidden">
                    <div
                      className="h-full rounded-md bg-[#0165dc]"
                      style={{ width: `${(row.pct / MAX_PCT) * 100}%` }}
                    />
                  </div>
                  <span className="evidence-mono text-sm text-[#0a0a12] w-[100px] text-right shrink-0">
                    {row.count.toLocaleString()} ({row.pct}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
