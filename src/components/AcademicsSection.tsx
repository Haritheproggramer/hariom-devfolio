import SectionHeader from './SectionHeader'
import { academics } from '../data/portfolioData'

export default function AcademicsSection() {
  return (
    <section id="education" className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader 
          eyebrow="Education" 
          title="Academic Journey" 
          description="Complete education background from school to university"
        />
        
        <div className="mt-8 space-y-6">
          {academics.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 transition-all duration-300 hover:border-[var(--accent-ink)] hover:shadow-[var(--shadow-soft)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  {edu.degree}
                </h3>
                <span className="text-sm font-medium text-[var(--accent-ink)]">
                  {edu.year}
                </span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-1">
                {edu.institution}
              </p>
              <p className="text-sm text-[var(--text-secondary)]">
                {edu.focus}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
