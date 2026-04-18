// "use client";
import { portfolioData } from "@/data/portfolio";
import { ContactModal } from "@/components/contact-modal";
import { EducationSection } from "@/components/education-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SiteHeader } from "@/components/site-header";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <div className="page-chrome relative min-h-screen overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="tech-grid absolute inset-0" />
        <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.14),_transparent_42%),radial-gradient(circle_at_top_right,_rgba(125,211,252,0.12),_transparent_35%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[40rem] bg-[radial-gradient(circle_at_bottom,_rgba(96,165,250,0.1),_transparent_38%)]" />
      </div>
      <div className="page-aurora page-aurora-a" />
      <div className="page-aurora page-aurora-b" />
      <div className="page-aurora page-aurora-c" />

      <SiteHeader />

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-28 pt-28 sm:px-6 lg:px-8">
        <HeroSection profile={portfolioData.profile} />
        <ProjectsSection projects={portfolioData.projects} />
        <SkillsSection categories={portfolioData.skills} />
        <EducationSection entries={portfolioData.education} />
      </main>

      <ContactModal profile={portfolioData.profile} />
    </div>
  );
}
