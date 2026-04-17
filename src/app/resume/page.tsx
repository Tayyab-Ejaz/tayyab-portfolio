import Link from "next/link";
import type { Metadata } from "next";
import { portfolioData } from "@/data/portfolio";
import { ResumePrintButton } from "@/components/resume-print-button";
import styles from "./resume.module.css";

export const metadata: Metadata = {
  title: "Resume | Tayyab Ejaz",
  description: "Desktop-style printable resume generated from Tayyab Ejaz portfolio data.",
};

const resumeProjects = portfolioData.projects.slice(0, 4);
const resumeSkills = portfolioData.skills.map((category) => ({
  ...category,
  skills: category.skills.slice(0, 4),
}));

export default function ResumePage() {
  const { profile, education } = portfolioData;
  const primaryEducation = education[0];

  return (
    <div className={styles.page}>
      <div className={styles.viewport}>
        <div className={styles.shell}>
          <div className={styles.toolbar}>
           
            <div className={styles.toolbarActions}>
              <Link href="/" className="button-secondary">
                Back to Site
              </Link>
              <ResumePrintButton />
            </div>
          </div>

          <article className={styles.sheet}>
            <header className={styles.sheetHeader}>
              <div className={styles.identity}>
                <span className={styles.eyebrow}>Resume</span>
                <h1 className={styles.title}>{profile.name}</h1>
                <p className={styles.role}>{profile.title}</p>
                <p className={styles.summary}>{profile.intro}</p>
              </div>

              <div className={styles.headerAside}>
                <div className={styles.contactCard}>
                  <p className={styles.contactLabel}>Location</p>
                  <p className={styles.contactValue}>{profile.location}</p>
                </div>
                <div className={styles.contactCard}>
                  <p className={styles.contactLabel}>Availability</p>
                  <p className={styles.contactValue}>{profile.availability}</p>
                </div>
                <div className={styles.contactCard}>
                  <p className={styles.contactLabel}>Links</p>
                  <div className={styles.contactLinks}>
                    {profile.socialLinks.map((link) => (
                      <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </header>

            <div className={styles.main}>
              <aside className={styles.sidebar}>
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>Highlights</h2>
                  <div className={styles.highlightGrid}>
                    <div className={styles.highlightCard}>
                      <div className={styles.highlightValue}>{profile.experienceYears}+</div>
                      <div className={styles.highlightLabel}>Years building production-ready digital products</div>
                    </div>
                    <div className={styles.highlightCard}>
                      <div className={styles.highlightValue}>{profile.projectsCompleted}+</div>
                      <div className={styles.highlightLabel}>Projects delivered across SaaS, analytics, and platform work</div>
                    </div>
                    <div className={styles.highlightCard}>
                      <div className={styles.highlightValue}>{profile.companiesServed}+</div>
                      <div className={styles.highlightLabel}>Companies supported through product and engineering delivery</div>
                    </div>
                  </div>
                </section>

                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>Core Skills</h2>
                  <div className={styles.highlightGrid}>
                    {resumeSkills.map((category) => (
                      <div key={category.title} className={styles.skillGroup}>
                        <h3 className={styles.skillGroupTitle}>{category.title}</h3>
                        <div className={styles.skillList}>
                          {category.skills.map((skill) => (
                            <span key={skill.name} className={styles.skillPill}>
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {primaryEducation ? (
                  <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Education</h2>
                    <div className={styles.educationCard}>
                      <h3 className={styles.educationTitle}>{primaryEducation.degree}</h3>
                      <p className={styles.educationMeta}>
                        {primaryEducation.institution} • {primaryEducation.period}
                      </p>
                      <p className={styles.educationSummary}>{primaryEducation.summary}</p>
                    </div>
                  </section>
                ) : null}
              </aside>

              <section className={styles.content}>
                <div className={styles.section}>
                  <h2 className={styles.sectionTitle}>Selected Experience</h2>
                  <div className={styles.experienceList}>
                    {resumeProjects.map((project) => (
                      <article key={project.id} className={styles.experienceCard}>
                        <div className={styles.experienceHeader}>
                          <div>
                            <h3 className={styles.experienceTitle}>{project.title}</h3>
                            <p className={styles.experienceMeta}>
                              {project.role} • {project.period} • {project.location}
                            </p>
                          </div>
                          <span className={styles.experienceBadge}>{project.category}</span>
                        </div>

                        <p className={styles.experienceSummary}>{project.description}</p>

                        <ul className={styles.detailList}>
                          {project.details.slice(0, 1).map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>

                        <div className={styles.techRow}>
                          {project.tech.slice(0, 6).map((item) => (
                            <span key={item} className={styles.techChip}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
