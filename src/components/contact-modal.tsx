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
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<ContactFormFields>(initialForm);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const openModal = () => setIsOpen(true);
    window.addEventListener("contact:open", openModal);

    return () => {
      window.removeEventListener("contact:open", openModal);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
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
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
    window.setTimeout(() => setSubmitted(false), 220);
  };

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
      <section className="relative z-10 mx-auto mt-6 w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,24,0.96),rgba(7,10,20,0.92))] px-6 py-8 sm:px-8 sm:py-10 lg:flex lg:items-end lg:justify-between lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-accent)]">
              Let&apos;s Build
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Have a product, platform, or workflow that needs strong engineering behind it?
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
              I work with teams that care about shipping clean systems, improving performance, and turning rough ideas into production-ready experiences.
            </p>
          </div>

          <button
            type="button"
            className="button-primary mt-8 lg:mt-0"
            onClick={() => setIsOpen(true)}
          >
            Start a Project Conversation
          </button>
        </div>
      </section>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            ref={dialogRef}
            className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,16,34,1),rgba(6,10,22,0.98))] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  Get in Touch
                </p>
                <h3 id="contact-modal-title" className="mt-3 text-3xl font-semibold text-white">
                  Let&apos;s talk about your next build
                </h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-text-muted)]">
                  Share a little context and I&apos;ll use it later when backend handling is connected. For now, this form is a polished frontend preview of the inquiry experience.
                </p>
              </div>
              <button
                type="button"
                className="icon-close"
                onClick={closeModal}
                aria-label="Close contact form"
              >
                ×
              </button>
            </div>

            {submitted ? (
              <div className="mt-8 rounded-[1.5rem] border border-emerald-400/20 bg-emerald-400/10 p-6">
                <p className="text-lg font-semibold text-white">Thanks for reaching out.</p>
                <p className="mt-3 text-sm leading-7 text-emerald-50/90">
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
      ) : null}
    </>
  );
}
