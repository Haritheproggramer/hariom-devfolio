import type { ReactElement } from 'react'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { socialLinks } from '../data/portfolioData'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const iconMap: Record<string, ReactElement> = {
  LinkedIn: <FaLinkedinIn size={16} />,
  GitHub: <FaGithub size={16} />,
  Instagram: <FaInstagram size={16} />,
  Discord: <FaDiscord size={16} />,
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
          <div className="theme-panel grid gap-4 rounded-3xl p-5 shadow-[var(--shadow-soft)] md:grid-cols-[0.95fr_1.05fr] md:gap-6 md:p-7">
            <div>
              <h3 className="font-heading text-2xl font-semibold text-[var(--text-primary)]">Reach Out</h3>
              <p className="mt-2 max-w-xl text-[var(--text-secondary)]">
                If you are looking for a motivated student developer for internships, team projects, or hackathons, I would love to connect.
              </p>
            </div>

            <div className="theme-panel-soft rounded-2xl p-4 md:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-ink)]">Social Profiles</p>
              <div className="mt-3 grid gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target={social.label === 'Email' ? undefined : '_blank'}
                    rel={social.label === 'Email' ? undefined : 'noreferrer'}
                    className="theme-social-row group flex items-center justify-between rounded-xl px-3.5 py-2.5 transition hover:-translate-y-0.5"
                  >
                    <span className="inline-flex items-center gap-2 text-sm">
                      {iconMap[social.label]}
                      {social.label}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] transition group-hover:text-[var(--accent-ink)]">Open</span>
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
