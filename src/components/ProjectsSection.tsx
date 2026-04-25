import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          eyebrow="Projects"
          title="Selected Work"
          description="A compact set of AI, web, and software projects built to solve real problems and showcase practical implementation."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 110}>
              <article className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 transition duration-300 hover:-translate-y-1 hover:border-brand-300/40 hover:shadow-glow">
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">{project.category}</p>
                  <h3 className="mt-2 font-heading text-xl font-semibold text-slate-100">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-brand-300/30 bg-brand-500/10 px-3 py-1 text-xs text-brand-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary !py-2">
                      <FaGithub size={16} />
                      GitHub
                    </a>
                    {project.liveDemo ? (
                      <a href={project.liveDemo} target="_blank" rel="noreferrer" className="btn-secondary !py-2">
                        <FiExternalLink size={16} />
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
