"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Academia", href: "#academia" },
];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[color:rgba(6,10,24,0.68)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#about" className="flex items-center gap-3">
          <span className="inline-flex h-11 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5 font-mono text-sm text-[var(--color-accent)] shadow-[0_0_24px_rgba(65,224,255,0.18)]">
            {"<T/>"}
          </span>
          <span>
            <span className="block text-xs uppercase tracking-[0.35em] text-[var(--color-text-soft)]">
              
            </span>
            <span className="block text-sm font-semibold tracking-[0.18em] text-white">
              Tayyab Ejaz
            </span>
          </span>
        </a>

        <button
          type="button"
          className={`mobile-menu-button md:hidden ${isMobileMenuOpen ? "is-hidden" : ""}`}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          <span className={isMobileMenuOpen ? "is-open" : ""} />
          <span className={isMobileMenuOpen ? "is-open" : ""} />
          <span className={isMobileMenuOpen ? "is-open" : ""} />
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
          <a href="#contact" className="button-primary">
            Get in Touch
          </a>
        </nav>
      </div>

      <div
        className={`mobile-drawer-shell md:hidden ${isMobileMenuOpen ? "is-open" : ""}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <button
          type="button"
          className="mobile-drawer-backdrop"
          aria-label="Close navigation menu"
          onClick={closeMobileMenu}
        />

        <aside
          id="mobile-navigation"
          className="mobile-drawer-panel"
          aria-label="Mobile navigation"
        >
          <div className="mobile-drawer-header">
            <div>
              <span className="block text-[0.7rem] uppercase tracking-[0.32em] text-[var(--color-text-soft)]">
                Navigation
              </span>
              <span className="mt-2 block text-lg font-semibold text-white">
                Tayyab Ejaz
              </span>
            </div>
            <button
              type="button"
              className="mobile-drawer-close"
              aria-label="Close navigation menu"
              onClick={closeMobileMenu}
            >
              <span />
              <span />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="mobile-drawer-link"
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="button-primary mt-6 w-full" onClick={closeMobileMenu}>
            Get in Touch
          </a>
        </aside>
      </div>
    </header>
  );
}
