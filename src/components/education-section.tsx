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
      className="section-panel section-panel-sky relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14"
    >
      <div className="section-overlay section-overlay-sky" />
      <div className="relative grid gap-8 xl:grid-cols-[0.82fr_1.18fr] xl:gap-10">
        <Reveal>
          <div className="education-summary-card xl:sticky xl:top-28 xl:self-start">
            <SectionHeading
              eyebrow="Academia"
              title="Computer science foundations that still shape how I build products"
              description="The academic side of the story is less about credentials alone and more about the systems thinking behind architecture, data, interfaces, and long-term engineering decisions."
            />
          </div>
        </Reveal>

        <div className="grid gap-6">
          {entries.map((entry) => (
            <Reveal key={entry.institution}>
              <article className="education-card">
                <div className="education-card-aside">
                  <p className="text-xs uppercase tracking-[0.3em] text-[rgba(219,234,254,0.72)]">
                    Qualification
                  </p>
                  <p className="mt-4 text-2xl font-semibold text-white">
                    {entry.degree}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-[var(--color-hero-muted)]">
                    {entry.period}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-hero-muted)]">
                    {entry.location}
                  </p>
                </div>

                <div className="education-card-main">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    Institution
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-[var(--color-text)]">
                    {entry.institution}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-8 text-[var(--color-text-muted)]">
                    {entry.summary}
                  </p>

                  <p className="mt-8 text-xs uppercase tracking-[0.28em] text-[var(--color-text-soft)]">
                    Core subjects & technologies
                  </p>
                  <div className="education-subject-grid mt-4">
                    {entry.subjects.map((subject) => (
                      <span key={subject} className="skill-pill">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
