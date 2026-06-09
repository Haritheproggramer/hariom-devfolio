import { useEffect, useState } from 'react'
import AmbientBackground from './components/AmbientBackground'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollTopButton from './components/ScrollTopButton'
import CustomCursor from './components/CustomCursor'
import { navItems } from './data/portfolioData'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import JourneyPage from './pages/JourneyPage'
import ProjectsPage from './pages/ProjectsPage'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

type ThemeMode = 'dark' | 'light'

function RouteScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [pathname])

  return null
}

export default function App() {
  const [showTopButton, setShowTopButton] = useState(false)
  const [theme, setTheme] = useState<ThemeMode>('dark')

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    const initialTheme: ThemeMode = savedTheme === 'light' ? 'light' : 'dark'
    setTheme(initialTheme)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const handleScroll = () => setShowTopButton(window.scrollY > 420)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="theme-root min-h-screen selection:bg-brand-500/40 selection:text-white">
      <AmbientBackground />
      <CustomCursor />
      <Navbar items={navItems} theme={theme} onToggleTheme={handleThemeToggle} />
      <RouteScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <ScrollTopButton isVisible={showTopButton} />
    </div>
  )
}
