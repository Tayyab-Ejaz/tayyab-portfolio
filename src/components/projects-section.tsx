"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { type Project, type ProjectImage } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type ProjectsSectionProps = {
  projects: Project[];
};

const INITIAL_VISIBLE = 6;

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<ProjectImage | null>(null);

  const getFeaturedProjectImage = (project: Project) =>
    project.images.find((image) => image.featured) ?? project.images[0];

  useEffect(() => {
    if (!activeProject && !lightboxImage) {
      document.body.style.overflow = "";
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      if (lightboxImage) {
        setLightboxImage(null);
        return;
      }

      setActiveProject(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject, lightboxImage]);

  const visibleProjects = useMemo(
    () => projects.slice(0, visibleCount),
    [projects, visibleCount],
  );

  const openProject = (project: Project) => {
    setActiveProject(project);
    const featuredIndex = project.images.findIndex((image) => image.featured);
    setActiveImageIndex(featuredIndex >= 0 ? featuredIndex : 0);
  };

  const closeProject = () => {
    setLightboxImage(null);
    setActiveImageIndex(0);
    setActiveProject(null);
  };

  const activeGalleryImage =
    activeProject?.images[activeImageIndex] ?? null;

  const showPreviousImage = () => {
    if (!activeProject) {
      return;
    }

    setActiveImageIndex((current) =>
      current === 0 ? activeProject.images.length - 1 : current - 1,
    );
  };

  const showNextImage = () => {
    if (!activeProject) {
      return;
    }

    setActiveImageIndex((current) =>
      current === activeProject.images.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section
      id="projects"
      className="section-panel section-panel-rose relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14"
    >
      <div className="section-overlay section-overlay-rose" />
      <Reveal>
        <SectionHeading
          eyebrow="PROJECTS"
          title="Projects built around product thinking, performance, and real business impact"
          description="Explore a curated set of projects with clear visuals, measurable outcomes, and the technical decisions behind each build."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => {
          const featuredImage = getFeaturedProjectImage(project);
          return (
            <Reveal
              key={project.id}
              className={index % 3 === 1 ? "delay-100" : index % 3 === 2 ? "delay-200" : ""}
            >
              <article className="project-card group h-full">
                <button
                  type="button"
                  className="project-shot-shell"
                  onClick={() => openProject(project)}
                  aria-label={`View screenshots and details for ${project.title}`}
                >
                  <div className={`project-shot-glow bg-gradient-to-br ${project.featuredImage.accent}`} />
                  <div className="project-shot-browser">
                    <div className="project-shot-toolbar">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="project-shot-preview">
                      <Image
                        src={featuredImage.src}
                        alt={featuredImage.alt}
                        width={900}
                        height={1800}
                        className="project-shot-image"
                      />
                    </div>
                  </div>
                </button>

                <div className="mt-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="project-category-pill">{project.category}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-[var(--color-text)]">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                    {project.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.impactTags.map((tag) => (
                      <span key={tag.label} className="tag-pill">
                        {tag.label}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 5).map((item) => (
                      <span key={item} className="tech-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--color-text-soft)]">
                    {project.period}
                  </p>
                  <button
                    type="button"
                    className="project-card-arrow"
                    onClick={() => openProject(project)}
                    aria-label={`View ${project.title}`}
                  >
                    <span>View</span>
                    <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </article>
            </Reveal>
          );
        })}
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
          className="modal-overlay project-modal-overlay fixed inset-x-0 z-[60] flex items-start justify-center backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={closeProject}
        >
          <div
            className="modal-surface project-modal-surface relative max-h-full w-full max-w-6xl overflow-y-auto rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-6 xl:h-full xl:overflow-hidden xl:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="project-modal-grid grid gap-6 xl:h-full xl:min-h-0 xl:grid-cols-[1.08fr_0.92fr] xl:gap-8">
              <div className="project-modal-media min-h-0 xl:max-h-full xl:overflow-y-auto xl:pr-1">
                <div className="project-modal-heading flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
                      {activeProject.category}
                    </p>
                    <h3
                      id="project-modal-title"
                      className="project-modal-title mt-3 text-2xl font-semibold text-[var(--color-text)] sm:text-3xl"
                    >
                      {activeProject.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    className="icon-close project-popup-close shrink-0"
                    onClick={closeProject}
                    aria-label="Close project details"
                  >
                    ×
                  </button>
                </div>

                {activeGalleryImage ? (
                  <div className="project-modal-gallery mt-6 min-h-0 sm:mt-8">
                    <div className="project-slider-shell">
                      {activeProject.images.length > 1 ? (
                        <button
                          type="button"
                          className="project-gallery-nav project-gallery-nav-prev"
                          onClick={showPreviousImage}
                          aria-label="Previous project image"
                        >
                          ‹
                        </button>
                      ) : null}

                      <button
                        type="button"
                        className="project-gallery-stage"
                        onClick={() => setLightboxImage(activeGalleryImage)}
                      >
                        <div className="project-gallery-frame">
                          <div className="project-gallery-scroll">
                            <Image
                              src={activeGalleryImage.src}
                              alt={activeGalleryImage.alt}
                              width={900}
                              height={1800}
                              className="project-gallery-image"
                            />
                          </div>
                        </div>
                      </button>

                      {activeProject.images.length > 1 ? (
                        <button
                          type="button"
                          className="project-gallery-nav project-gallery-nav-next"
                          onClick={showNextImage}
                          aria-label="Next project image"
                        >
                          ›
                        </button>
                      ) : null}
                    </div>

                    <div className="project-gallery-caption mt-3 flex items-center justify-between gap-4">
                      <span className="project-gallery-meta">
                        {activeGalleryImage.label}
                      </span>
                      <span className="project-gallery-meta">
                        {activeImageIndex + 1} / {activeProject.images.length}
                      </span>
                    </div>

                    {activeProject.images.length > 1 ? (
                      <div className="project-thumb-row">
                        {activeProject.images.map((image, index) => (
                          <button
                            key={image.src}
                            type="button"
                            className={`project-thumb ${
                              activeGalleryImage.src === image.src ? "is-active" : ""
                            }`}
                            onClick={() => setActiveImageIndex(index)}
                          >
                            <div className="project-thumb-frame">
                              <Image
                                src={image.src}
                                alt={image.alt}
                                width={900}
                                height={1800}
                                className="project-thumb-image"
                              />
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>

              <div className="project-modal-details min-h-0 xl:max-h-full xl:overflow-y-auto xl:pr-1">
                <div className="project-modal-stats grid gap-3 sm:grid-cols-3 xl:grid-cols-3 xl:gap-4">
                  <div className="glass-card p-4">
                    <p className="text-xs uppercase tracking-[0.26em] text-[var(--color-text-soft)]">
                      Role
                    </p>
                    <p className="mt-2 text-[var(--color-text)]">{activeProject.role}</p>
                  </div>
                  <div className="glass-card p-4">
                    <p className="text-xs uppercase tracking-[0.26em] text-[var(--color-text-soft)]">
                      Timeline
                    </p>
                    <p className="mt-2 text-[var(--color-text)]">{activeProject.period}</p>
                  </div>
                  <div className="glass-card p-4">
                    <p className="text-xs uppercase tracking-[0.26em] text-[var(--color-text-soft)]">
                      Location
                    </p>
                    <p className="mt-2 text-[var(--color-text)]">{activeProject.location}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-text-soft)]">
                    Overview
                  </p>
                  <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">
                    {activeProject.description}
                  </p>
                </div>

                <div className="mt-8">
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-text-soft)]">
                    Tech Stack
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {activeProject.tech.map((item) => (
                      <span key={item} className="tech-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-modal-actions mt-8 flex flex-wrap gap-2">
                  {activeProject.links.live ? (
                    <a
                      href={activeProject.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="button-primary button-compact"
                    >
                      Live View
                    </a>
                  ) : null}
                  <button
                    type="button"
                    className="button-secondary button-compact"
                    onClick={closeProject}
                  >
                    Back
                  </button>
                </div>

                <div className="mt-8">
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-text-soft)]">
                    What I Delivered
                  </p>
                  <div className="mt-4 grid gap-3">
                    {activeProject.details.map((detail) => (
                      <div
                        key={detail}
                        className="rounded-[1.25rem] border border-[var(--color-border)] bg-[rgba(248,250,252,0.92)] px-4 py-3 text-sm leading-7 text-[var(--color-text)]"
                      >
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {lightboxImage ? (
        <div
          className="modal-overlay project-lightbox-overlay fixed inset-x-0 z-[70] flex items-start justify-center backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Project image viewer"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="modal-surface project-lightbox-surface relative w-full max-w-5xl overflow-hidden rounded-[1.8rem] p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="icon-close project-popup-close absolute right-4 top-4 z-10"
              onClick={() => setLightboxImage(null)}
              aria-label="Close project image"
            >
              ×
            </button>
            <div className="project-lightbox-scroll">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                width={900}
                height={1800}
                className="project-lightbox-image"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
