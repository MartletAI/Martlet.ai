import { Reveal } from "@/components/reveal";

const ICD_CATEGORIES = [
  { category: "E11.x — type 2 diabetes", count: 628 },
  { category: "L97.x — chronic leg ulcer", count: 327 },
  { category: "G10 — Huntington's disease", count: 327 },
  { category: "I63.x — ischemic stroke", count: 321 },
  { category: "J95.x — respiratory complication", count: 301 },
  { category: "I42.x — cardiomyopathy", count: 301 },
  { category: "S06.x — intracranial injury", count: 295 },
  { category: "I47.x — paroxysmal tachycardia", count: 288 },
  { category: "G40.x — epilepsy", count: 275 },
] as const;

const HCC_TOP10 = [
  { category: "HCC 37", count: 864 },
  { category: "HCC 280", count: 360 },
  { category: "HCC 383", count: 360 },
  { category: "HCC 298", count: 340 },
  { category: "HCC 380", count: 327 },
  { category: "HCC 238", count: 327 },
  { category: "HCC 200", count: 327 },
  { category: "HCC 249", count: 321 },
  { category: "HCC 64", count: 314 },
  { category: "HCC 211", count: 301 },
] as const;

/**
 * CodingCoverage - section 04. What the gold standard actually holds, so
 * the accuracy numbers above can be read against a known code mix rather
 * than taken on faith.
 */
export function CodingCoverage() {
  return (
    <section className="apple-section-gray py-16 md:py-20" aria-labelledby="coverage-heading">
      <div className="container-main max-w-[980px]!">
        <Reveal as="header" className="mb-8">
          <h2 id="coverage-heading" className="apple-display text-2xl md:text-[26px] mb-4">
            Coding coverage
          </h2>
          <p className="text-base apple-body leading-relaxed m-0">
            The gold standard has 18,843 HCC-relevant ICD codes — 134
            distinct codes mapping to 109 HCC categories, 0 to 6 per chart
            and averaging 3.8. Coverage is broad: only one HCC category shows
            up just once, and even the top ICD category, E11.x (type 2
            diabetes), accounts for just 3.3% of the set. HCC 37 leads the
            HCC-category table for the same reason — the whole E11.x family
            rolls up into it.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-3xl border border-border bg-white overflow-hidden">
              <div className="px-5 py-3 bg-[#f5f5f7] border-b border-border text-sm font-semibold text-muted">
                Top ICD categories
              </div>
              <table className="w-full text-left text-[15px] border-collapse">
                <tbody>
                  {ICD_CATEGORIES.map((row) => (
                    <tr key={row.category} className="border-b border-border-light last:border-0">
                      <td className="px-5 py-2.5 evidence-mono font-semibold text-[#0a0a12]">
                        {row.category}
                      </td>
                      <td className="px-5 py-2.5 evidence-mono apple-body text-right">
                        {row.count}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-3xl border border-border bg-white overflow-hidden">
              <div className="px-5 py-3 bg-[#f5f5f7] border-b border-border text-sm font-semibold text-muted">
                Top 10 HCC categories
              </div>
              <table className="w-full text-left text-[15px] border-collapse">
                <tbody>
                  {HCC_TOP10.map((row) => (
                    <tr key={row.category} className="border-b border-border-light last:border-0">
                      <td className="px-5 py-2.5 evidence-mono font-semibold text-[#0a0a12]">
                        {row.category}
                      </td>
                      <td className="px-5 py-2.5 evidence-mono apple-body text-right">
                        {row.count}
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
