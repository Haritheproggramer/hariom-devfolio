import type { IconType } from 'react-icons'
import {
  SiC,
  SiCss,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiOpenjdk,
  SiOpencv,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiStreamlit,
  SiTensorflow,
  SiVercel,
} from 'react-icons/si'
import { skills } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const skillItemIcons: Record<string, IconType> = {
  C: SiC,
  Python: SiPython,
  Java: SiOpenjdk,
  HTML: SiHtml5,
  CSS: SiCss,
  React: SiReact,
  Git: SiGit,
  GitHub: SiGithub,
  Firebase: SiFirebase,
  Vercel: SiVercel,
  OpenCV: SiOpencv,
  'Scikit-learn': SiScikitlearn,
  TensorFlow: SiTensorflow,
  Streamlit: SiStreamlit,
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
              <article className="theme-panel-soft h-full rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--border-strong)] hover:shadow-[var(--shadow-soft)]">
                <div className="flex items-center gap-3">
                  <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)]">{category.title}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((skill) => {
                    const Icon = skillItemIcons[skill]

                    return (
                      <span key={skill} className="theme-chip inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs transition">
                        {Icon ? <Icon size={13} /> : null}
                        {skill}
                      </span>
                    )
                  })}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
