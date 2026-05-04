import { academics } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function AcademicsSection() {
  return (
    <section id="education" className="section-padding">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          eyebrow="Education"
          title="Education"
          description="Academic foundation currently shaping my engineering thinking and project work."
        />

        <div className="space-y-4">
          {academics.map((item, index) => (
            <Reveal key={item.degree} delay={index * 90}>
              <article className="theme-panel-soft rounded-2xl p-6 transition duration-300 hover:border-[color:var(--border-strong)]">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-[var(--text-primary)]">{item.degree}</h3>
                    <p className="text-[var(--text-secondary)]">{item.institution}</p>
                  </div>
                  <span className="theme-badge rounded-full px-3 py-1 text-xs font-semibold">
                    {item.year}
                  </span>
                </div>
                <p className="mt-3 text-sm text-[var(--text-secondary)]">{item.focus}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
