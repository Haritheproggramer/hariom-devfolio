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
import { navItems, profileData } from './data/portfolioData'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [showTopButton, setShowTopButton] = useState(false)
  const [lineIndex, setLineIndex] = useState(0)

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

  return (
    <div className="min-h-screen bg-ink-950 text-slate-100 selection:bg-brand-500/40 selection:text-white">
      <AmbientBackground />
      <Navbar items={navItems} activeSection={activeSection} />
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
