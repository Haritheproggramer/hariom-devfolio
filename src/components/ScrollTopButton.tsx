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
      className="fixed bottom-5 right-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-300/40 bg-brand-500/20 text-brand-100 shadow-glow transition hover:-translate-y-1 hover:bg-brand-500/30"
    >
      <FiChevronUp size={20} />
    </button>
  )
}
