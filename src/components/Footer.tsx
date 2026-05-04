import { socialLinks } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="theme-navbar border-t px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="font-heading text-lg font-semibold text-[var(--text-primary)]">Hariom Jha</p>
          <p className="text-sm text-[var(--text-muted)]">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-[var(--text-secondary)]">
          <a href="#home" className="hover:text-[var(--accent-ink)]">
            Home
          </a>
          <a href="#projects" className="hover:text-[var(--accent-ink)]">
            Projects
          </a>
          <a href="#contact" className="hover:text-[var(--accent-ink)]">
            Contact
          </a>
        </div>

        <div className="flex gap-2">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target={social.label === 'Email' ? undefined : '_blank'}
              rel={social.label === 'Email' ? undefined : 'noreferrer'}
              className="theme-chip rounded-full px-3 py-1 text-xs transition hover:border-[color:var(--border-strong)] hover:text-[var(--accent-ink)]"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
