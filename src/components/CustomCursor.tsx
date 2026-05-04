import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const ringRef = useRef<HTMLSpanElement | null>(null)
  const dotRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)')

    const handleCapabilityChange = () => {
      setIsEnabled(mediaQuery.matches)
      setIsVisible(false)
    }

    handleCapabilityChange()
    mediaQuery.addEventListener('change', handleCapabilityChange)

    return () => mediaQuery.removeEventListener('change', handleCapabilityChange)
  }, [])

  useEffect(() => {
    if (!isEnabled) {
      return
    }

    const handleMove = (event: MouseEvent) => {
      const transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`

      if (ringRef.current) {
        ringRef.current.style.transform = transform
      }

      if (dotRef.current) {
        dotRef.current.style.transform = transform
      }

      setIsVisible(true)
    }

    const hideCursor = () => setIsVisible(false)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', hideCursor)
    window.addEventListener('blur', hideCursor)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', hideCursor)
      window.removeEventListener('blur', hideCursor)
    }
  }, [isEnabled])

  if (!isEnabled) {
    return null
  }

  return (
    <>
      <span ref={ringRef} className={`custom-cursor-ring ${isVisible ? 'is-visible' : ''}`} aria-hidden="true" />
      <span ref={dotRef} className={`custom-cursor-dot ${isVisible ? 'is-visible' : ''}`} aria-hidden="true" />
    </>
  )
}
