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
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,14,31,0.97),rgba(6,9,22,0.94))] px-5 py-8 shadow-[0_0_80px_rgba(16,24,52,0.24)] sm:px-8 sm:py-10 lg:px-10 lg:py-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(65,224,255,0.14),transparent_24%),radial-gradient(circle_at_90%_18%,rgba(142,92,255,0.14),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(0,255,163,0.08),transparent_30%)]" />

      <Reveal>
        <div className="relative grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Capabilities"
              title="The stack, organized with a little more clarity"
              description="This version keeps the section simpler: one compact overview, then a readable breakdown of the areas I work across most often."
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="glass-card p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-text-soft)]">
                  Tools & technologies
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">
                  {totalSkills}+
                </p>
              </div>
              <div className="glass-card p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-text-soft)]">
                  Working style
                </p>
                <p className="mt-3 text-base leading-7 text-[var(--color-text-muted)]">
                  Product-minded, backend-strong, and comfortable across delivery.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {categories.map((category, index) => (
              <Reveal
                key={category.title}
                className={index % 2 === 0 ? "delay-100" : "delay-200"}
              >
                <article className="glass-card relative overflow-hidden p-5 sm:p-6">
                  <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-[linear-gradient(180deg,var(--color-accent),rgba(142,92,255,0.45),transparent)]" />

                  <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[0.78fr_1.22fr] lg:gap-6">
                    <div className="pl-2">
                      <div className="flex items-center gap-4">
                        <div className="icon-badge">{category.icon}</div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-text-soft)]">
                            Capability {String(index + 1).padStart(2, "0")}
                          </p>
                          <h3 className="mt-2 text-2xl font-semibold text-white">
                            {category.title}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
                        {category.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.slice(0, 4).map((skill) => (
                          <span key={skill.name} className="skill-pill border-cyan-300/20 bg-cyan-300/8 text-white">
                            {skill.name}
                          </span>
                        ))}
                      </div>

                      {category.skills.length > 4 ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {category.skills.slice(4).map((skill) => (
                            <span key={skill.name} className="skill-pill">
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
