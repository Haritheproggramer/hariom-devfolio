import { socialLinks } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950/80 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="font-heading text-lg font-semibold text-slate-100">Hariom Jha</p>
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-slate-300">
          <a href="#home" className="hover:text-brand-200">
            Home
          </a>
          <a href="#projects" className="hover:text-brand-200">
            Projects
          </a>
          <a href="#contact" className="hover:text-brand-200">
            Contact
          </a>
        </div>

        <div className="flex gap-2">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300 transition hover:border-brand-300/50 hover:text-brand-100"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
