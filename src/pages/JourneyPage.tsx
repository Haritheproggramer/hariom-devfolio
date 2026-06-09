import type { ReactElement } from 'react'
import { FaAward, FaGraduationCap, FaPeopleGroup } from 'react-icons/fa6'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import { achievements, academics, milestones } from '../data/portfolioData'

type JourneyEntry = {
  year: string
  title: string
  summary: string
  kind: string
}

const journeyEntries: JourneyEntry[] = [
  {
    year: '2024',
    title: 'B.Tech CSE, Manav Rachna University',
    summary: academics[0].focus,
    kind: 'Education',
  },
  {
    year: '2025',
    title: 'SIH 2025 Finalist',
    summary: achievements[0].details,
    kind: 'Achievement',
  },
  {
    year: '2026',
    title: 'HackMor 2026 Finalist',
    summary: achievements[1].details,
    kind: 'Achievement',
  },
  {
    year: '2025',
    title: 'Former Event Head, TEDxMRU',
    summary: achievements[3].details,
    kind: 'Leadership',
  },
  {
    year: '2025',
    title: 'Coordinator, Clan Wildcats',
    summary: achievements[2].details,
    kind: 'Leadership',
  },
  ...milestones.map((milestone) => ({
    year: milestone.year,
    title: milestone.title,
    summary: `${milestone.summary} ${milestone.highlight}`,
    kind: 'Milestone',
  })),
]

const kindIcons: Record<string, ReactElement> = {
  Education: <FaGraduationCap size={16} />,
  Achievement: <FaAward size={16} />,
  Leadership: <FaPeopleGroup size={16} />,
  Milestone: <FaAward size={16} />,
}

export default function JourneyPage() {
  return (
    <main className="pt-14 sm:pt-16">
      <section className="section-padding pt-10 pb-20">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader
            eyebrow="Journey"
            title="Education, Leadership, and Milestones"
            description="A single timeline that combines academics, achievements, leadership roles, and major project progress."
          />

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-[var(--border-strong)] via-[color:var(--border-subtle)] to-transparent sm:left-1/2" />

            <div className="space-y-6">
              {journeyEntries.map((entry, index) => {
                const isEven = index % 2 === 0

                return (
                  <Reveal key={`${entry.year}-${entry.title}`} delay={index * 70}>
                    <article
                      className={`relative ml-12 rounded-2xl border border-[color:var(--border-subtle)] bg-[var(--surface)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--border-strong)] hover:shadow-[var(--shadow-soft)] sm:ml-0 sm:w-[calc(50%-1.5rem)] ${
                        isEven ? 'sm:mr-auto' : 'sm:ml-auto'
                      }`}
                    >
                      <span className="absolute -left-10 top-6 inline-flex h-8 min-w-14 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[var(--accent-soft)] px-2 text-xs font-semibold text-[var(--accent-ink)] sm:-left-6 sm:min-w-14">
                        {entry.year}
                      </span>

                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-ink)]">
                        {kindIcons[entry.kind]}
                        <span>{entry.kind}</span>
                      </div>
                      <h3 className="mt-2 font-heading text-lg font-semibold text-[var(--text-primary)] sm:text-xl">{entry.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{entry.summary}</p>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}