import type { ReactElement } from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { SiDiscord } from 'react-icons/si'
import { FiMail } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import { contactChannels, profileData } from '../data/portfolioData'

const iconMap: Record<string, ReactElement> = {
  LinkedIn: <FaLinkedinIn size={16} />,
  GitHub: <FaGithub size={16} />,
  Instagram: <FaInstagram size={16} />,
  Discord: <SiDiscord size={16} />,
  Email: <FiMail size={16} />,
}

export default function ContactPage() {
  return (
    <main className="pt-14 sm:pt-16">
      <section className="section-padding pt-10 pb-20">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader
            eyebrow="Contact"
            title="Let's Connect"
            description="Open to internships, collaborations, and project discussions."
          />

          <p className="mx-auto -mt-4 max-w-3xl text-center text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            If you want to collaborate on a product, discuss a role, or simply compare ideas, these are the best ways to reach me.
          </p>

          <div className="mx-auto mt-8 max-w-3xl">
            <Reveal>
              <div className="theme-panel rounded-3xl p-5 shadow-[var(--shadow-soft)] md:p-6">
                <div className="grid gap-3">
                  {contactChannels.map((channel) => {
                    const isEmail = channel.label === 'Email'

                    if (!channel.url) {
                      return (
                        <div key={channel.label} className="theme-social-row flex items-center justify-between rounded-xl px-3.5 py-3">
                          <span className="inline-flex items-center gap-2 text-sm">
                            {iconMap[channel.label]}
                            {channel.label}
                          </span>
                          <span className="text-xs text-[var(--text-muted)]">{channel.note}</span>
                        </div>
                      )
                    }

                    return (
                      <a
                        key={channel.label}
                        href={channel.url}
                        target={isEmail ? undefined : '_blank'}
                        rel={isEmail ? undefined : 'noreferrer'}
                        className="theme-social-row group flex items-center justify-between rounded-xl px-3.5 py-3 transition hover:-translate-y-0.5"
                      >
                        <span className="inline-flex items-center gap-2 text-sm">
                          {iconMap[channel.label]}
                          {isEmail ? profileData.email : channel.label}
                        </span>
                        <span className="text-xs text-[var(--text-muted)] transition group-hover:text-[var(--accent-ink)]">
                          {isEmail ? 'Send mail' : 'Open'}
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}