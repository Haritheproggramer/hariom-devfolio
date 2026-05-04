import type { ReactElement } from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { socialLinks } from '../data/portfolioData'
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
          <div className="theme-panel mx-auto max-w-3xl rounded-3xl p-5 shadow-[var(--shadow-soft)] md:p-6">
            <div className="theme-panel-soft rounded-2xl p-4 md:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-ink)]">Social Profiles</p>
              <div className="mt-3 grid gap-2">
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
