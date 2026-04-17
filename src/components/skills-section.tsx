import { type SkillCategory } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type SkillsSectionProps = {
  categories: SkillCategory[];
};

export function SkillsSection({ categories }: SkillsSectionProps) {
  const totalSkills = categories.reduce(
    (count, category) => count + category.skills.length,
    0,
  );

  return (
    <section
      id="skills"
      className="section-panel section-panel-blue relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14"
    >
      <div className="section-overlay section-overlay-blue" />

      <div className="relative grid gap-8 xl:grid-cols-[0.84fr_1.16fr] xl:gap-10">
        <Reveal>
          <div className="capability-summary-card xl:sticky xl:top-28 xl:self-start">
            <SectionHeading
              eyebrow="Capabilities"
              title="A delivery stack built for product teams that need momentum"
              description="I work across frontend, backend, data, and delivery systems, with a bias toward maintainable code, clear interfaces, and production-ready outcomes."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              <div className="capability-stat-card">
                <p className="text-xs uppercase tracking-[0.28em] text-[rgba(219,234,254,0.72)]">
                  Tools & technologies
                </p>
                <p className="mt-3 text-4xl font-semibold text-white">
                  {totalSkills}+
                </p>
              </div>
              <div className="capability-stat-card">
                <p className="text-xs uppercase tracking-[0.28em] text-[rgba(219,234,254,0.72)]">
                  Focus areas
                </p>
                <p className="mt-3 text-4xl font-semibold text-white">
                  {categories.length}
                </p>
              </div>
            </div>

            <div className="capability-note-card mt-6">
              <p className="text-xs uppercase tracking-[0.28em] text-[rgba(219,234,254,0.72)]">
                What teams rely on
              </p>
              <p className="mt-3 text-base leading-7 text-[var(--color-hero-muted)]">
                Backend-heavy implementation, polished web interfaces, and shipping discipline across architecture, APIs, dashboards, and product refinements.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="capability-note-pill">Product-minded</span>
                <span className="capability-note-pill">Backend-strong</span>
                <span className="capability-note-pill">Full-stack delivery</span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="capability-grid">
          {categories.map((category, index) => (
            <Reveal
              key={category.title}
              className={index % 2 === 0 ? "delay-100" : "delay-200"}
            >
              <article className="capability-card">
                <div className="flex items-start justify-between gap-4">
                  <div className="icon-badge">{category.icon}</div>
                  <span className="capability-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[var(--color-text)]">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                  {category.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.slice(0, 6).map((skill, skillIndex) => (
                    <span
                      key={skill.name}
                      className={skillIndex < 3 ? "skill-pill skill-pill-bright" : "skill-pill"}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
