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
              <article className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-brand-300/40 hover:bg-white/10">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-slate-100">{item.degree}</h3>
                    <p className="text-slate-300">{item.institution}</p>
                  </div>
                  <span className="rounded-full border border-brand-300/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-100">
                    {item.year}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-300">{item.focus}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
