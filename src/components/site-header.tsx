"use client";

import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Academia", href: "#academia" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const openContact = () => {
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent("contact:open"));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[color:rgba(6,10,24,0.68)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#about" className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 font-mono text-sm text-[var(--color-accent)] shadow-[0_0_24px_rgba(65,224,255,0.18)]">
            {"<T/>"}
          </span>
          <span>
            <span className="block text-xs uppercase tracking-[0.35em] text-[var(--color-text-soft)]">
              Portfolio
            </span>
            <span className="block text-sm font-semibold tracking-[0.18em] text-white">
              Tayyab
            </span>
          </span>
        </a>

        <button
          type="button"
          className="mobile-menu-button hidden max-md:inline-flex"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-text-soft)] transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            className="button-primary"
            onClick={openContact}
          >
            Get in Touch
          </button>
        </nav>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-[color:rgba(7,11,24,0.96)] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-[var(--color-text)]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button type="button" className="button-primary w-full" onClick={openContact}>
              Get in Touch
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
