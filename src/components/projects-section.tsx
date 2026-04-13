"use client";

import { useEffect, useState } from "react";
import { type Project } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type ProjectsSectionProps = {
  projects: Project[];
};

const INITIAL_VISIBLE = 6;

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!activeProject) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  return (
    <section
      id="projects"
      className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,24,0.94),rgba(5,8,18,0.86))] px-5 py-8 sm:px-8 sm:py-10 lg:px-10"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Selected Work"
          title="Product systems built for real users, real workflows, and real constraints"
          description="The grid highlights SaaS platforms, healthcare tooling, analytics products, and AI-adjacent builds with equal attention to engineering impact and product outcomes."
        />
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.slice(0, visibleCount).map((project, index) => (
          <Reveal key={project.id} className={index % 3 === 1 ? "delay-100" : index % 3 === 2 ? "delay-200" : ""}>
            <article className="project-card group h-full">
              <div
                className={`relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br ${project.featuredImage.accent} p-5`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,13,24,0.18),rgba(4,8,18,0.92))]" />
                <div className="relative flex min-h-44 flex-col justify-between">
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--color-text)]">
                      {project.id}
                    </span>
                    <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.22em] text-[var(--color-accent)]">
                      {project.category}
                    </span>
                  </div>
                  <p className="max-w-[14rem] text-xs uppercase tracking-[0.35em] text-[var(--color-text-soft)]">
                    {project.featuredImage.overlay}
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-soft)]">
                  {project.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.impactTags.map((tag) => (
                    <span key={tag.label} className="tag-pill">
                      {tag.label}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 5).map((item) => (
                    <span key={item} className="tech-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-xs uppercase tracking-[0.24em] text-[var(--color-text-soft)]">
                  {project.period}
                </div>
                <button
                  type="button"
                  className="button-secondary px-4 py-2 text-sm"
                  onClick={() => setActiveProject(project)}
                >
                  Open Project
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {visibleCount < projects.length ? (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="button-primary"
            onClick={() => setVisibleCount((current) => current + INITIAL_VISIBLE)}
          >
            Load More
          </button>
        </div>
      ) : null}

      {activeProject ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,16,34,1),rgba(6,10,22,0.98))] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  {activeProject.category}
                </p>
                <h3 id="project-modal-title" className="mt-3 text-3xl font-semibold text-white">
                  {activeProject.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">
                  {activeProject.description}
                </p>
              </div>
              <button
                type="button"
                className="icon-close"
                onClick={() => setActiveProject(null)}
                aria-label="Close project details"
              >
                ×
              </button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="glass-card p-4">
                <p className="text-xs uppercase tracking-[0.26em] text-[var(--color-text-soft)]">
                  Role
                </p>
                <p className="mt-2 text-white">{activeProject.role}</p>
              </div>
              <div className="glass-card p-4">
                <p className="text-xs uppercase tracking-[0.26em] text-[var(--color-text-soft)]">
                  Timeline
                </p>
                <p className="mt-2 text-white">{activeProject.period}</p>
              </div>
              <div className="glass-card p-4">
                <p className="text-xs uppercase tracking-[0.26em] text-[var(--color-text-soft)]">
                  Location
                </p>
                <p className="mt-2 text-white">{activeProject.location}</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-text-soft)]">
                What I Delivered
              </p>
              <div className="mt-4 grid gap-3">
                {activeProject.details.map((detail) => (
                  <div key={detail} className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-[var(--color-text)]">
                    {detail}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-text-soft)]">
                Tech Stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {activeProject.tech.map((item) => (
                  <span key={item} className="tech-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {activeProject.links.live ? (
                <a
                  href={activeProject.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary"
                >
                  Visit Project
                </a>
              ) : null}
              <button type="button" className="button-secondary" onClick={() => setActiveProject(null)}>
                Back to Grid
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
