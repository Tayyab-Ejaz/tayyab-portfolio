"use client";

import { useEffect, useRef, useState } from "react";
import { type ContactFormFields, type PersonalProfile } from "@/data/portfolio";

type ContactModalProps = {
  profile: PersonalProfile;
};

const initialForm: ContactFormFields = {
  name: "",
  email: "",
  projectSummary: "",
  budget: "",
  timeline: "",
};

export function ContactModal({ profile }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<ContactFormFields>(initialForm);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const isOpen = window.location.hash === "#contact-form";

    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        window.location.hash = "contact";
      }

      if (event.key === "Tab" && dialogRef.current) {
        const elements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, textarea, select',
        );
        const first = elements[0];
        const last = elements[elements.length - 1];

        if (!first || !last) {
          return;
        }

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    const focusTarget = dialogRef.current?.querySelector<HTMLElement>("input, button");
    focusTarget?.focus();

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleChange =
    (field: keyof ContactFormFields) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <>
      <section id="contact" className="relative z-10 mx-auto mt-6 w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="contact-banner">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent)]">
              Let&apos;s Build
            </p>
            <h2 className="contact-banner-title mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a product, platform, or workflow that needs strong engineering behind it?
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--color-hero-muted)] sm:text-lg">
              I work with teams that care about shipping clean systems, improving performance, and turning rough ideas into production-ready experiences.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="contact-pill">{profile.availability}</span>
              <span className="contact-pill">{profile.location}</span>
            </div>
          </div>

          <div className="contact-action-stack">
            <a href="#contact-form" className="button-primary">
              Start a Project Conversation
            </a>
            <div className="flex flex-wrap gap-3">
              {profile.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="button-secondary"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div id="contact-form" className="modal-target modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
        <a href="#contact" className="absolute inset-0" aria-label="Close contact form" />
          <div
            ref={dialogRef}
            className="modal-panel modal-surface relative w-full max-w-2xl rounded-[2rem] p-6 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  Get in Touch
                </p>
                <h3 id="contact-modal-title" className="mt-3 text-3xl font-semibold text-[var(--color-text)]">
                  Let&apos;s talk about your next build
                </h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-text-muted)]">
                  Share a little context and I&apos;ll use it later when backend handling is connected. For now, this form is a polished frontend preview of the inquiry experience.
                </p>
              </div>
              <a
                href="#contact"
                className="icon-close"
                aria-label="Close contact form"
              >
                ×
              </a>
            </div>

            {submitted ? (
              <div className="mt-8 rounded-[1.5rem] border border-[rgba(59,130,246,0.18)] bg-[rgba(59,130,246,0.08)] p-6">
                <p className="text-lg font-semibold text-[var(--color-text)]">Thanks for reaching out.</p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                  The backend isn&apos;t connected yet, but the interaction flow is ready. Replace this mock submission with a real API or email action in the next step.
                </p>
              </div>
            ) : (
              <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="field-group">
                    <span>Name</span>
                    <input
                      type="text"
                      value={form.name}
                      onChange={handleChange("name")}
                      placeholder="Your name"
                    />
                  </label>
                  <label className="field-group">
                    <span>Email</span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={handleChange("email")}
                      placeholder="name@example.com"
                    />
                  </label>
                </div>
                <label className="field-group">
                  <span>Project summary</span>
                  <textarea
                    rows={5}
                    value={form.projectSummary}
                    onChange={handleChange("projectSummary")}
                    placeholder="Tell me what you're building, where things stand, and what you need help with."
                  />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="field-group">
                    <span>Budget</span>
                    <input
                      type="text"
                      value={form.budget}
                      onChange={handleChange("budget")}
                      placeholder="Optional"
                    />
                  </label>
                  <label className="field-group">
                    <span>Timeline</span>
                    <input
                      type="text"
                      value={form.timeline}
                      onChange={handleChange("timeline")}
                      placeholder="Optional"
                    />
                  </label>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <p className="text-sm text-[var(--color-text-soft)]">
                    Preview mode only. Backend submission will be added later.
                  </p>
                  <div className="flex gap-3">
                    <a href={profile.socialLinks[0]?.href ?? "#"} className="button-secondary">
                      GitHub
                    </a>
                    <button type="submit" className="button-primary">
                      Send Inquiry
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
    </>
  );
}
