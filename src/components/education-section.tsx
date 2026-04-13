import { type EducationEntry } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type EducationSectionProps = {
  entries: EducationEntry[];
};

export function EducationSection({ entries }: EducationSectionProps) {
  return (
    <section
      id="academia"
      className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,24,0.94),rgba(5,8,18,0.86))] px-5 py-8 sm:px-8 sm:py-10 lg:px-10"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Academia"
          title="Computer science foundations with product-focused application"
          description="Formal study built the systems thinking underneath the shipping mindset: architecture, data, mobile, operating systems, and practical engineering fundamentals."
        />
      </Reveal>

      <div className="mt-10 grid gap-6">
        {entries.map((entry) => (
          <Reveal key={entry.institution}>
            <article className="glass-card relative overflow-hidden p-6">
              <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-[linear-gradient(180deg,var(--color-accent),transparent)]" />
              <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    {entry.period}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">
                    {entry.degree}
                  </h3>
                  <p className="mt-3 text-lg text-[var(--color-text)]">
                    {entry.institution}
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-text-soft)]">
                    {entry.location}
                  </p>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--color-text-muted)]">
                    {entry.summary}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-text-soft)]">
                    Core Subjects & FYP Technologies
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.subjects.map((subject) => (
                      <span key={subject} className="skill-pill">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
