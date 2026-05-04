import { useEffect, useMemo, useState } from 'react'
import AboutSection from './components/AboutSection'
import AcademicsSection from './components/AcademicsSection'
import AmbientBackground from './components/AmbientBackground'
import AchievementsSection from './components/AchievementsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'
import ScrollTopButton from './components/ScrollTopButton'
import SkillsSection from './components/SkillsSection'
import CustomCursor from './components/CustomCursor'
import { navItems, profileData } from './data/portfolioData'

type ThemeMode = 'dark' | 'light'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [showTopButton, setShowTopButton] = useState(false)
  const [lineIndex, setLineIndex] = useState(0)
  const [theme, setTheme] = useState<ThemeMode>('dark')

  const dynamicLine = useMemo(
    () => profileData.rotatingLines[lineIndex % profileData.rotatingLines.length],
    [lineIndex],
  )

  useEffect(() => {
    const interval = window.setInterval(() => {
      setLineIndex((prev) => prev + 1)
    }, 2600)

    return () => window.clearInterval(interval)
  }, [])

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
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: '-20% 0px -55% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

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
      <Navbar items={navItems} activeSection={activeSection} theme={theme} onToggleTheme={handleThemeToggle} />
      <main>
        <HeroSection dynamicLine={dynamicLine} />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <AcademicsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollTopButton isVisible={showTopButton} />
    </div>
  )
}
