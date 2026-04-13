import { type SkillCategory } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type SkillsSectionProps = {
  categories: SkillCategory[];
};

export function SkillsSection({ categories }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,24,0.94),rgba(5,8,18,0.86))] px-5 py-8 sm:px-8 sm:py-10 lg:px-10"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Capabilities"
          title="Full-stack depth across product, platform, and delivery"
          description="The skill map balances UI craft, backend reliability, data fluency, and the delivery systems needed to ship real products under constraints."
        />
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category, index) => (
          <Reveal key={category.title} className={index % 2 === 0 ? "" : "delay-100"}>
            <article className="group glass-card h-full p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="icon-badge">{category.icon}</div>
                <span className="text-xs uppercase tracking-[0.24em] text-[var(--color-text-soft)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">
                {category.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-soft)]">
                {category.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill.name} className="skill-pill">
                    {skill.name}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
