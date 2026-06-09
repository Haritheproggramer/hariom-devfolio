import ProjectsSection from '../components/ProjectsSection'
import { projects } from '../data/portfolioData'

export default function ProjectsPage() {
  return (
    <main className="pt-14 sm:pt-16">
      <ProjectsSection
        eyebrow="Projects"
        title="All Projects"
        description="The full project collection, arranged in a symmetrical and responsive grid with icons where available."
        projectsToShow={projects}
        columnsClassName="md:grid-cols-2 xl:grid-cols-3"
        sectionClassName="section-padding pt-10 pb-20"
      />
    </main>
  )
}