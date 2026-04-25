import { FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'
import type { NavItem } from '../data/portfolioData'

type NavbarProps = {
  items: NavItem[]
  activeSection: string
}

export default function Navbar({ items, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/80 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="font-heading text-lg font-semibold tracking-wide text-slate-100">
          Hariom Jha
        </a>

        <div className="hidden items-center gap-2 lg:flex">
          {items.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-brand-500/20 text-brand-200 shadow-glow'
                    : 'text-slate-300 hover:text-slate-100 hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        <button
          className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-slate-200 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-ink-950/95 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  activeSection === item.id
                    ? 'bg-brand-500/20 text-brand-200'
                    : 'text-slate-300 hover:bg-white/5 hover:text-slate-100'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
