import type { ReactElement } from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { profileData, quickStats, socialLinks } from '../data/portfolioData'
import Reveal from './Reveal'

const socialIconMap: Record<string, ReactElement> = {
  LinkedIn: <FaLinkedinIn size={16} />,
  GitHub: <FaGithub size={16} />,
  Instagram: <FaInstagram size={16} />,
  Email: <FiMail size={16} />,
}

type HeroSectionProps = {
  dynamicLine: string
}

export default function HeroSection({ dynamicLine }: HeroSectionProps) {
  const profileCard = (
    <div className="theme-panel relative overflow-hidden rounded-3xl p-3 shadow-[var(--shadow-soft)] transition duration-500 hover:-translate-y-1 hover:border-[color:var(--border-strong)]">
      <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[var(--accent-soft)] blur-3xl" />
      {profileData.profileImage ? (
        <img src="/profile.jpg" alt="Hariom Jha" className="h-[16rem] w-full rounded-2xl object-cover object-top sm:h-[18rem]" />
      ) : (
        <div className="theme-panel-muted flex h-[16rem] w-full items-center justify-center rounded-2xl text-6xl font-bold text-[var(--accent-ink)] sm:h-[18rem]">
          {profileData.initials}
        </div>
      )}
      <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-[color:var(--border-subtle)] bg-[var(--surface-overlay)] px-4 py-3 text-center backdrop-blur-md">
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent-ink)]">Hariom Jha</p>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">Turning ideas into working tech</p>
      </div>
    </div>
  )

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-10 pt-20 sm:px-6 sm:pb-12 lg:px-8 lg:pt-24">
      <div className="hero-spotlight pointer-events-none" />
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-12">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-[var(--accent-soft)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-ink)]">
            B.Tech CSE Student | Building AI-driven & Real-World Tech Solutions
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
            {profileData.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-[var(--text-secondary)]">{profileData.tagline}</p>
          <p className="mt-2 text-[var(--accent-ink)] transition-all duration-500">{dynamicLine}</p>
          <p className="mt-4 inline-flex max-w-xl items-center rounded-full border border-[color:var(--border-subtle)] bg-[var(--surface-soft)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)] sm:text-sm">
            Currently building: AI tools, web platforms, and real-world student-focused solutions.
          </p>

          <Reveal className="mx-auto mt-4 w-full max-w-[15rem] lg:hidden" delay={120}>
            {profileCard}
          </Reveal>

          <p className="mt-5 max-w-xl text-[var(--text-secondary)]">{profileData.intro}</p>

          <div className="mt-5 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
            {quickStats.map((stat) => (
              <div key={stat.label} className="theme-panel-soft rounded-xl px-4 py-3 backdrop-blur-sm">
                <p className="font-heading text-xl font-semibold text-[var(--accent-ink)]">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact
            </a>
          </div>

          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target={social.label === 'Email' ? undefined : '_blank'}
                rel={social.label === 'Email' ? undefined : 'noreferrer'}
                aria-label={social.label}
                className="theme-social-icon group inline-flex h-10 w-10 items-center justify-center rounded-full transition hover:-translate-y-1"
              >
                {socialIconMap[social.label]}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal className="mx-auto hidden w-full max-w-sm float-slow lg:block" delay={120}>
          {profileCard}
        </Reveal>
      </div>
    </section>
  )
}
