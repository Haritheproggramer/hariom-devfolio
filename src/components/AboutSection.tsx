import { aboutCards } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          eyebrow="About Me"
          title="Building with Curiosity and Purpose"
          description="Hariom is a 2nd year Computer Science student focused on AI-based systems, web platforms, and practical problem solving."
        />

        <p className="mx-auto mb-8 max-w-3xl text-center text-slate-300">
          Hariom builds scalable and practical tech solutions with a strong interest in AI-driven systems, interactive web products, and meaningful real-world outcomes. He enjoys hackathons, technical events, and shipping polished work that creates measurable impact.
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          {aboutCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 90}>
              <article className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-300/40 hover:bg-white/10 hover:shadow-glow">
                <h3 className="font-heading text-xl font-semibold text-slate-100">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{card.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
