import type { ReactElement } from 'react'
import { FaCode, FaRobot, FaTools } from 'react-icons/fa'
import { skills } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const skillIcons: Record<string, ReactElement> = {
  Programming: <FaCode size={18} />,
  'Web Development': <FaCode size={18} />,
  'Tools & Platforms': <FaTools size={18} />,
  'AI & Tech': <FaRobot size={18} />,
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          eyebrow="Skills"
          title="Technical Toolkit"
          description="Core technologies and tools I use across development, collaboration, and experimentation."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((category, categoryIndex) => (
            <Reveal key={category.title} delay={categoryIndex * 70}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-brand-300/40 hover:shadow-glow">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-300/30 bg-brand-500/10 text-brand-100">
                    {skillIcons[category.title]}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-slate-100">{category.title}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/15 bg-slate-950/60 px-3 py-1 text-xs text-slate-200 transition hover:border-brand-300/40 hover:text-brand-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
