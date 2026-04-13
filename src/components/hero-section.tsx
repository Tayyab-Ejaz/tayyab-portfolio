"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { portfolioData, type PersonalProfile } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";

type HeroSectionProps = {
  profile: PersonalProfile;
};

export function HeroSection({ profile }: HeroSectionProps) {
  const [visibleStats, setVisibleStats] = useState([0, 0, 0]);
  const [typedCommand, setTypedCommand] = useState("");
  const [showJson, setShowJson] = useState(false);
  const command = profile.detailCommand;
  const jsonLines = useMemo(
    () => {
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
    },
    [profile.detailJson],
  );

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

    return () => statIntervals.forEach((id) => window.clearInterval(id));
  }, []);

  useEffect(() => {
    let index = 0;
    const typeInterval = window.setInterval(() => {
      setTypedCommand(command.slice(0, index + 1));
      index += 1;

      if (index === command.length) {
        window.clearInterval(typeInterval);
        window.setTimeout(() => setShowJson(true), 260);
      }
    }, 70);

    return () => window.clearInterval(typeInterval);
  }, [command]);

  return (
    <section
      id="about"
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(10,16,34,0.98),rgba(5,8,18,0.92))] px-5 py-8 shadow-[0_0_80px_rgba(17,24,39,0.6)] sm:px-8 sm:py-10 lg:px-10 lg:py-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(65,224,255,0.12),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(160,90,255,0.14),transparent_30%)]" />
      <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="flex h-full flex-col justify-between">
            <div>
              <div className="hero-portrait-card mb-8">
                <div className="hero-portrait-scan" />
                <div className="hero-portrait-orbit hero-portrait-orbit-a" />
                <div className="hero-portrait-orbit hero-portrait-orbit-b" />
                <div className="hero-portrait-grid" />
                <div className="hero-portrait-image-wrap">
                  <Image
                    src="/profile-placeholder.svg"
                    alt={profile.imageAlt}
                    width={320}
                    height={380}
                    priority
                    className="hero-portrait-image"
                  />
                </div>
       
              </div>

              <p className="inline-flex items-center rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/10 px-4 py-1 text-xs uppercase tracking-[0.32em] text-[var(--color-accent)]">
                Full-Stack Engineer
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl xl:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-4 max-w-3xl text-xl font-medium leading-8 text-[var(--color-text)] sm:text-2xl">
                {profile.title}
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
                {profile.intro}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  className="button-primary"
                  onClick={() => window.dispatchEvent(new CustomEvent("contact:open"))}
                >
                  Get in Touch
                </button>
                <a href="#projects" className="button-secondary">
                  Projects
                </a>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {portfolioData.heroStats.map((stat, index) => (
                <div key={stat.label} className="glass-card p-5">
                  <p className="text-3xl font-semibold text-white sm:text-4xl">
                    {visibleStats[index]}
                    {stat.suffix ?? ""}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)]">
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
              <span className="ml-4 text-xs uppercase tracking-[0.3em] text-[var(--color-text-soft)]">
                details.json
              </span>
            </div>

            <div className="terminal-body">
              <div className="font-mono text-sm leading-7 text-slate-200">
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
