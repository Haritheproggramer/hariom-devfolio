import { FiChevronUp } from 'react-icons/fi'

type ScrollTopButtonProps = {
  isVisible: boolean
}

export default function ScrollTopButton({ isVisible }: ScrollTopButtonProps) {
  if (!isVisible) {
    return null
  }

  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-5 right-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[var(--accent-soft)] text-[var(--accent-ink)] shadow-[var(--shadow-soft)] transition hover:-translate-y-1"
    >
      <FiChevronUp size={20} />
    </button>
  )
}
