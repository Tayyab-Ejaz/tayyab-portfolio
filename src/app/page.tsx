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
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
          

      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="tech-grid absolute inset-0" />
        <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top_left,_rgba(65,224,255,0.18),_transparent_42%),radial-gradient(circle_at_top_right,_rgba(142,92,255,0.18),_transparent_35%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[40rem] bg-[radial-gradient(circle_at_bottom,_rgba(0,255,163,0.12),_transparent_38%)]" />
      </div>

      <SiteHeader />

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 pb-24 pt-24 sm:px-6 lg:px-8">
        <HeroSection profile={portfolioData.profile} />
        <SkillsSection categories={portfolioData.skills} />
        <ProjectsSection projects={portfolioData.projects} />
        <EducationSection entries={portfolioData.education} />
      </main>

      <ContactModal profile={portfolioData.profile} />
    </div>
  );
}
