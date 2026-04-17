"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { portfolioData, type PersonalProfile } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";

type HeroSectionProps = {
  profile: PersonalProfile;
};

export function HeroSection({ profile }: HeroSectionProps) {
  const command = profile.detailCommand;
  const finalStats = useMemo(
    () => portfolioData.heroStats.map((stat) => stat.value),
    [],
  );
  const [visibleStats, setVisibleStats] = useState(finalStats);
  const [typedCommand, setTypedCommand] = useState(command);
  const [showJson, setShowJson] = useState(true);
  const jsonLines = useMemo(() => {
    const entries = Object.entries(profile.detailJson);
    const lines = ["{"];

    entries.forEach(([key, value], index) => {
      const serializedValue = Array.isArray(value)
        ? `[${value.map((item) => JSON.stringify(item)).join(", ")}]`
        : JSON.stringify(value);

      lines.push(
        `  ${JSON.stringify(key)}: ${serializedValue}${index === entries.length - 1 ? "" : ","}`,
      );
    });

    lines.push("}");
    return lines;
  }, [profile.detailJson]);

  const renderJsonToken = (token: string) => {
    if (token === "true" || token === "false") {
      return <span className="json-boolean">{token}</span>;
    }

    if (/^-?\d+(\.\d+)?$/.test(token)) {
      return <span className="json-number">{token}</span>;
    }

    if (/^".*"$/.test(token)) {
      return <span className="json-value">{token}</span>;
    }

    return <span className="json-punctuation">{token}</span>;
  };

  const renderJsonLine = (line: string) => {
    const indent = line.match(/^\s*/)?.[0] ?? "";
    const trimmed = line.trim();

    if (!trimmed) {
      return null;
    }

    if (
      trimmed === "{" ||
      trimmed === "}" ||
      trimmed === "[" ||
      trimmed === "]" ||
      trimmed === "]," ||
      trimmed === "},"
    ) {
      return (
        <>
          <span className="json-indent">{indent}</span>
          <span className="json-punctuation">{trimmed}</span>
        </>
      );
    }

    const keyValueMatch = trimmed.match(/^"([^"]+)":\s(.+?)(,)?$/);

    if (keyValueMatch) {
      const [, key, rawValue, trailingComma] = keyValueMatch;
      return (
        <>
          <span className="json-indent">{indent}</span>
          <span className="json-key">&quot;{key}&quot;</span>
          <span className="json-punctuation">: </span>
          {renderJsonToken(rawValue)}
          {trailingComma ? (
            <span className="json-punctuation">{trailingComma}</span>
          ) : null}
        </>
      );
    }

    return (
      <>
        <span className="json-indent">{indent}</span>
        {renderJsonToken(trimmed)}
      </>
    );
  };

  useEffect(() => {
    const shouldAnimate =
      window.matchMedia("(min-width: 768px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!shouldAnimate) {
      return;
    }

    const startTimeout = window.setTimeout(() => {
      setVisibleStats([0, 0, 0]);
    }, 0);

    const statIntervals = portfolioData.heroStats.map((stat, index) => {
      const duration = 1400;
      const frames = 42;
      let frame = 0;

      return window.setInterval(() => {
        frame += 1;
        const nextValue = Math.min(
          stat.value,
          Math.round((frame / frames) * stat.value),
        );

        setVisibleStats((current) => {
          const copy = [...current];
          copy[index] = nextValue;
          return copy;
        });

        if (frame >= frames) {
          window.clearInterval(statIntervals[index]);
        }
      }, duration / frames);
    });

    return () => {
      window.clearTimeout(startTimeout);
      statIntervals.forEach((id) => window.clearInterval(id));
    };
  }, [finalStats]);

  useEffect(() => {
    const shouldAnimate =
      window.matchMedia("(min-width: 768px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!shouldAnimate) {
      return;
    }

    const startTimeout = window.setTimeout(() => {
      setTypedCommand("");
      setShowJson(false);
    }, 0);

    let index = 0;
    const typeInterval = window.setInterval(() => {
      setTypedCommand(command.slice(0, index + 1));
      index += 1;

      if (index === command.length) {
        window.clearInterval(typeInterval);
        window.setTimeout(() => setShowJson(true), 260);
      }
    }, 70);

    return () => {
      window.clearTimeout(startTimeout);
      window.clearInterval(typeInterval);
    };
  }, [command]);

  return (
    <section
      id="about"
      className="hero-panel relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14"
    >
      <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="flex h-full flex-col justify-between">
            <div>
              <div className="hero-portrait-card mb-8">
                <div className="pointer-events-none hero-portrait-scan" />
                <div className="pointer-events-none hero-portrait-orbit hero-portrait-orbit-a" />
                <div className="pointer-events-none hero-portrait-orbit hero-portrait-orbit-b" />
                <div className="pointer-events-none hero-portrait-grid" />
                <div className="hero-portrait-image-wrap">
                  <Image
                    src="/images/profile.webp"
                    alt={profile.imageAlt}
                    width={320}
                    height={380}
                    priority
                    className="hero-portrait-image"
                  />
                </div>
              </div>

              <h1 className="hero-title mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl xl:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-4 max-w-3xl text-xl font-medium leading-8 text-[var(--color-hero-text)] sm:text-2xl">
                {profile.title}
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-hero-muted)] sm:text-lg">
                {profile.intro}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="button-primary">
                  Get in Touch
                </a>
                <a href="#projects" className="button-secondary">
                  View Projects
                </a>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {portfolioData.heroStats.map((stat, index) => (
                <div key={stat.label} className="hero-stat-card rounded-[1.5rem] p-5">
                  <p className="hero-stat-value text-3xl font-semibold sm:text-4xl">
                    {visibleStats[index]}
                    {stat.suffix ?? ""}
                  </p>
                  <p className="hero-stat-label mt-2 text-sm leading-6">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="delay-100">
          <div className="terminal-shell relative min-h-[34rem]">
            <div className="terminal-bar">
              <span className="terminal-dot bg-rose-400" />
              <span className="terminal-dot bg-amber-300" />
              <span className="terminal-dot bg-emerald-400" />
              <span className="ml-4 text-xs uppercase tracking-[0.3em] text-[rgba(219,234,254,0.72)]">
                PORTFOLIO
              </span>
            </div>

            <div className="terminal-body">
              <div className="font-mono text-sm leading-7 text-[var(--color-hero-muted)]">
                <span className="text-[var(--color-accent)]">$ </span>
                {typedCommand}
                <span className="terminal-cursor" aria-hidden="true" />
              </div>

              <div
                className={`json-viewer mt-6 w-full max-w-xl transition duration-700 ${showJson ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              >
                <pre className="json-pre">
                  <code>
                    {jsonLines.map((line, index) => (
                      <div key={`${line}-${index}`} className="json-line">
                        {renderJsonLine(line)}
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
              <a
                href="/resume"
                target="_blank"
                rel="noreferrer"
                className="social-chip social-chip-resume"
              >
                <span className="social-chip-arrow" aria-hidden="true">
                  ↓
                </span>
                <span>Resume</span>
              </a>
              {profile.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="social-chip"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
