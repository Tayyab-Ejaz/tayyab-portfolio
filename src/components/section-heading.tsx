type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading max-w-3xl">
      <p className="section-eyebrow text-sm font-medium uppercase tracking-[0.35em] text-[var(--color-accent)]">
        {eyebrow}
      </p>
      <h2 className="section-title mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="section-description mt-4 text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}
