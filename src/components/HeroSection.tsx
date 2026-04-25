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
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="hero-spotlight pointer-events-none" />
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-center">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-200">
            B.Tech CSE Student | Building AI-driven & Real-World Tech Solutions
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {profileData.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-200">{profileData.tagline}</p>
          <p className="mt-2 text-brand-200 transition-all duration-500">{dynamicLine}</p>
          <p className="mt-6 max-w-xl text-slate-300">{profileData.intro}</p>

          <div className="mt-6 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
            {quickStats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 backdrop-blur-sm">
                <p className="font-heading text-xl font-semibold text-brand-100">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-brand-300/50 hover:bg-brand-500/15 hover:text-brand-100"
              >
                {socialIconMap[social.label]}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal className="mx-auto w-full max-w-sm float-slow" delay={120}>
          <div className="relative overflow-hidden rounded-3xl border border-brand-300/30 bg-white/5 p-3 shadow-2xl shadow-brand-500/10 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-brand-200/50">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-400/20 blur-3xl" />
            {profileData.profileImage ? (
              <img
                src="/profile.jpg"
                alt="Hariom Jha"
                className="aspect-square w-full rounded-2xl object-cover"
              />
            ) : (
              <div className="flex aspect-square w-full items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-brand-950 text-6xl font-bold text-brand-200">
                {profileData.initials}
              </div>
            )}
            <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-200">Profile Snapshot</p>
              <p className="mt-1 text-sm text-slate-200">AI, web, and real-world problem solving</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
