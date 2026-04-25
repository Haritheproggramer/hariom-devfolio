import { achievements } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          eyebrow="Achievements"
          title="Highlights"
          description="Milestones across hackathons, leadership, and campus involvement."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {achievements.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-300/40 hover:shadow-glow">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-brand-300/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-100">
                    {item.tag}
                  </span>
                  <span className="text-sm text-slate-400">{item.year}</span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold text-slate-100">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{item.details}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
