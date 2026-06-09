import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import type { IconType } from 'react-icons'
import { FaFileExcel } from 'react-icons/fa6'
import { FiMousePointer } from 'react-icons/fi'
import {
  SiCss,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHtml5,
  SiGithubcopilot,
  SiGooglegemini,
  SiOpenai,
  SiOpenjdk,
  SiOpencv,
  SiPerplexity,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiStreamlit,
  SiSupabase,
  SiTensorflow,
  SiVercel,
} from 'react-icons/si'
import HeroSection from '../components/HeroSection'
import ProjectsSection from '../components/ProjectsSection'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import {
  aboutCards,
  achievements,
  profileData,
  projects,
  quickStats,
  skills,
} from '../data/portfolioData'

const skillIconMap: Record<string, IconType> = {
  Python: SiPython,
  Java: SiOpenjdk,
  React: SiReact,
  HTML: SiHtml5,
  CSS: SiCss,
  Git: SiGit,
  GitHub: SiGithub,
  Firebase: SiFirebase,
  Vercel: SiVercel,
  Excel: FaFileExcel,
  Flutter: SiFlutter,
  OpenCV: SiOpencv,
  Supabase: SiSupabase,
  'Scikit-learn': SiScikitlearn,
  TensorFlow: SiTensorflow,
  Streamlit: SiStreamlit,
  'GitHub Copilot': SiGithubcopilot,
  'Google Gemini': SiGooglegemini,
  ChatGPT: SiOpenai,
  Cursor: FiMousePointer,
  Perplexity: SiPerplexity,
}

export default function HomePage() {
  const [lineIndex, setLineIndex] = useState(0)

  const dynamicLine = useMemo(
    () => profileData.rotatingLines[lineIndex % profileData.rotatingLines.length],
    [lineIndex],
  )

  useEffect(() => {
    const interval = window.setInterval(() => {
      setLineIndex((prev) => prev + 1)
    }, 2600)

    return () => window.clearInterval(interval)
  }, [])

  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3)
  const achievementBadges = achievements.slice(0, 4)

  return (
    <main>
      <HeroSection dynamicLine={dynamicLine} />

      <section className="section-padding pt-0">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-4 md:grid-cols-3">
            {quickStats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 70}>
                <article className="theme-panel-soft h-full rounded-2xl px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--border-strong)]">
                  <p className="font-heading text-2xl font-semibold text-[var(--accent-ink)]">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">{stat.label}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {achievementBadges.map((achievement, index) => (
              <Reveal key={achievement.title} delay={index * 60}>
                <span className="theme-chip inline-flex items-center rounded-full px-3 py-1 text-xs font-medium">
                  {achievement.title}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader
            eyebrow="About"
            title="Focused, Practical, and Built for Momentum"
            description="A short snapshot of how I approach software: build fast, keep the UX clean, and ship work that solves real problems."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {aboutCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 90}>
                <article className="theme-panel-soft h-full rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--border-strong)]">
                  <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)]">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{card.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProjectsSection
        eyebrow="Featured Projects"
        title="Top 3 Projects"
        description="The most representative work from the portfolio, shown first for a cleaner home-page experience."
        projectsToShow={featuredProjects}
        columnsClassName="lg:grid-cols-3"
        sectionClassName="section-padding pt-0"
      />

      <section className="section-padding pt-0">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader
            eyebrow="Skills"
            title="Technical Stack"
            description="A compact, categorized view of the tools and platforms used across the portfolio."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((category, index) => (
              <Reveal key={category.title} delay={index * 80}>
                <article className="theme-panel-soft h-full rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--border-strong)] hover:shadow-[var(--shadow-soft)]">
                  <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)]">{category.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.items.map((skill) => {
                      const Icon = skillIconMap[skill]

                      return (
                        <span key={skill} className="theme-chip inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium">
                          {Icon ? <Icon size={13} /> : null}
                          {skill}
                        </span>
                      )
                    })}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0 pb-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="theme-panel overflow-hidden rounded-3xl p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-ink)]">Contact CTA</p>
                <h2 className="mt-3 font-heading text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
                  Open to internships, collaborations, and meaningful product work.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                  If you want to discuss a role, a project, or an idea worth building, the contact page has the best ways to reach me.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link to="/contact" className="btn-primary">
                  Contact Me
                </Link>
                <a href={profileData.resumeUrl} className="btn-secondary">
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}