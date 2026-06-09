import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import type { NavItem } from '../data/portfolioData'

type NavbarProps = {
  items: NavItem[]
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export default function Navbar({ items, theme, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  const getLinkClassName = (isActive: boolean) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      isActive
        ? 'border border-[color:var(--border-strong)] bg-[var(--accent-soft)] text-[var(--accent-ink)] shadow-[var(--shadow-soft)]'
        : 'text-[var(--text-secondary)] hover:bg-[var(--surface-muted)] hover:text-[var(--text-primary)]'
    }`

  return (
    <header className="theme-navbar fixed inset-x-0 top-0 z-50 border-b backdrop-blur-lg">
      <nav className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        <NavLink to="/" end className="font-heading text-base font-semibold tracking-wide text-[var(--text-primary)] sm:text-lg">
          Hariom Jha
        </NavLink>

        <div className="hidden items-center gap-2 lg:flex">
          {items.map((item) => {
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }: { isActive: boolean }) => getLinkClassName(isActive)}
              >
                {item.label}
              </NavLink>
            )
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle dark and light mode"
            className="theme-icon-button"
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>

        <div className="inline-flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle dark and light mode"
            className="theme-icon-button"
          >
            {theme === 'dark' ? <FiSun size={17} /> : <FiMoon size={17} />}
          </button>
          <button
            className="theme-icon-button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            type="button"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="theme-mobile-menu border-t px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-2">
            {items.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={closeMenu}
                className={({ isActive }: { isActive: boolean }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'border border-[color:var(--border-strong)] bg-[var(--accent-soft)] text-[var(--accent-ink)]'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--surface-muted)] hover:text-[var(--text-primary)]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
