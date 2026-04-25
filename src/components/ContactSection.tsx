import type { ReactElement } from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { profileData, socialLinks } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const iconMap: Record<string, ReactElement> = {
  LinkedIn: <FaLinkedinIn size={16} />,
  GitHub: <FaGithub size={16} />,
  Instagram: <FaInstagram size={16} />,
  Email: <FiMail size={16} />,
}

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding pb-20">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Connect"
          description="Available for collaborations, internships, project discussions, and placement opportunities."
        />

        <Reveal>
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-brand-950/50 p-6 shadow-2xl shadow-brand-500/10 md:grid-cols-[0.95fr_1.05fr] md:p-8">
            <div>
              <h3 className="font-heading text-2xl font-semibold text-slate-100">Reach Out</h3>
              <p className="mt-3 max-w-xl text-slate-300">
                If you are looking for a motivated student developer for internships, team projects, or hackathons, I would love to connect.
              </p>
              <a
                href={`mailto:${profileData.email}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-300/40 bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-100 transition hover:-translate-y-0.5 hover:bg-brand-500/20"
              >
                <FiMail size={16} />
                {profileData.email}
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-200">Social Profiles</p>
              <div className="mt-4 grid gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-slate-200 transition hover:-translate-y-0.5 hover:border-brand-300/40 hover:bg-brand-500/10"
                  >
                    <span className="inline-flex items-center gap-2 text-sm">
                      {iconMap[social.label]}
                      {social.label}
                    </span>
                    <span className="text-xs text-slate-400 transition group-hover:text-brand-100">Open</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
