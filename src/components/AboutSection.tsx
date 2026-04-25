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
          description="I’m a 2nd year B.Tech CSE student at Manav Rachna University, passionate about building practical and scalable tech solutions."
        />

        <p className="mx-auto mb-8 max-w-3xl text-center text-slate-300">
          I actively participate in hackathons and technical events, where I learn by building, collaborating, and improving my ideas into usable products.
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
