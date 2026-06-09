import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import {
  SiCss,
  SiDart,
  SiFirebase,
  SiFlutter,
  SiHtml5,
  SiOpenjdk,
  SiOpencv,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiStreamlit,
  SiSupabase,
  SiVercel,
} from 'react-icons/si'
import type { Project } from '../data/portfolioData'
import { projects } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const techIconMap: Record<string, IconType> = {
  Python: SiPython,
  Java: SiOpenjdk,
  React: SiReact,
  HTML: SiHtml5,
  CSS: SiCss,
  Firebase: SiFirebase,
  Vercel: SiVercel,
  Flutter: SiFlutter,
  Supabase: SiSupabase,
  OpenCV: SiOpencv,
  Postgres: SiPostgresql,
  Dart: SiDart,
  Pandas: SiPandas,
  'Scikit-learn': SiScikitlearn,
  Streamlit: SiStreamlit,
}

function renderTech(tech: string) {
  const Icon = techIconMap[tech]

  if (!Icon) {
    return (
      <span key={tech} className="theme-badge rounded-full px-3 py-1 text-xs font-medium">
        {tech}
      </span>
    )
  }

  return (
    <span key={tech} className="theme-badge inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium">
      <Icon size={12} />
      {tech}
    </span>
  )
}

type ProjectsSectionProps = {
  title?: string
  description?: string
  projectsToShow?: Project[]
  columnsClassName?: string
  eyebrow?: string
  sectionClassName?: string
}

export default function ProjectsSection({
  title = 'Selected Work',
  description = 'A compact set of AI, web, and software projects built to solve real problems and showcase practical implementation.',
  projectsToShow = projects,
  columnsClassName = 'md:grid-cols-2 xl:grid-cols-3',
  eyebrow = 'Projects',
  sectionClassName = 'section-padding',
}: ProjectsSectionProps) {
  return (
    <section id="projects" className={sectionClassName}>
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />

        <div className={`grid auto-rows-fr gap-6 ${columnsClassName}`}>
          {projectsToShow.map((project, index) => (
            <Reveal key={project.title} delay={index * 110}>
              <article className="theme-panel group flex h-full flex-col overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--border-strong)] hover:shadow-[var(--shadow-soft)]">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-ink)]">{project.category}</p>
                <h3 className="mt-2 font-heading text-xl font-semibold text-[var(--text-primary)]">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">{project.techStack.map((tech) => renderTech(tech))}</div>

                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary !py-2">
                      <FaGithub size={16} />
                      GitHub
                    </a>
                  ) : null}
                  {project.liveDemo ? (
                    <a href={project.liveDemo} target="_blank" rel="noreferrer" className="btn-secondary !py-2">
                      <FiExternalLink size={16} />
                      Live Demo
                    </a>
                  ) : null}
                  {!project.github && !project.liveDemo ? (
                    <span className="theme-chip inline-flex items-center rounded-full px-3 py-1 text-xs">
                      Details only
                    </span>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}