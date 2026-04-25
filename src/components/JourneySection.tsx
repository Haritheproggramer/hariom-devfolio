import { milestones } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function JourneySection() {
  return (
    <section id="journey" className="section-padding">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          eyebrow="Journey"
          title="Progress Through Milestones"
          description="A quick timeline of how my focus evolved from fundamentals to product-oriented engineering."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-brand-300/50 via-brand-400/30 to-transparent sm:left-1/2" />

          <div className="space-y-6">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0

              return (
                <Reveal key={`${milestone.year}-${milestone.title}`} delay={index * 80}>
                  <article
                    className={`relative ml-12 rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-brand-300/40 hover:bg-white/10 hover:shadow-glow sm:ml-0 sm:w-[calc(50%-1.5rem)] ${
                      isEven ? 'sm:mr-auto' : 'sm:ml-auto'
                    }`}
                  >
                    <span className="absolute -left-10 top-7 inline-flex h-6 min-w-12 items-center justify-center rounded-full border border-brand-300/40 bg-brand-500/15 px-2 text-xs font-semibold text-brand-100 sm:-left-6 sm:min-w-14">
                      {milestone.year}
                    </span>

                    <h3 className="font-heading text-xl font-semibold text-slate-100">{milestone.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{milestone.summary}</p>
                    <p className="mt-3 inline-flex rounded-full border border-brand-300/35 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-100">
                      {milestone.highlight}
                    </p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}