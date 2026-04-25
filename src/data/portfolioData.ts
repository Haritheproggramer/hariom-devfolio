export type NavItem = {
  id: string
  label: string
}

export type Project = {
  title: string
  category: string
  description: string
  techStack: string[]
  github: string
  liveDemo?: string
}

export type SkillCategory = {
  title: string
  items: string[]
}

export type AcademicItem = {
  degree: string
  institution: string
  year: string
  focus: string
}

export type AchievementItem = {
  title: string
  tag: string
  details: string
  year: string
}

export type SocialLink = {
  label: string
  url: string
}

export type QuickStat = {
  label: string
  value: string
}

export type MilestoneItem = {
  year: string
  title: string
  summary: string
  highlight: string
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export const profileData = {
  name: 'Hariom Jha',
  tagline: 'Aspiring Software Developer | Focused on AI, Web & Real-World Problem Solving',
  intro:
    'Hariom is a 2nd year Computer Science student passionate about building scalable and practical tech solutions. He works on AI-based systems, web platforms, and real-world problem-solving projects. He actively participates in hackathons and technical events, focusing on innovation and impactful development.',
  rotatingLines: [
    'Building practical AI and web solutions.',
    'Turning ideas into deployable products.',
    'Focused on hackathons and real-world impact.',
  ],
  resumeUrl: '/assets/Aarav-Sharma-Resume.pdf',
  email: 'jhahariom855@gmail.com',
  profileImage: '/profile.jpg',
  initials: 'HJ',
}

export const aboutCards = [
  {
    title: 'Build Focus',
    description:
      'Creates AI-driven and web-based solutions that are practical, scalable, and ready to solve real problems.',
  },
  {
    title: 'Hackathon Mindset',
    description:
      'Comfortable moving fast in team environments, validating ideas, and delivering polished demos under pressure.',
  },
  {
    title: 'Learning Loop',
    description:
      'Keeps improving through projects, events, and experimentation with new tools across AI, web, and product workflows.',
  },
]

export const projects: Project[] = [
  {
    title: 'MudraSense',
    category: 'SIH Project',
    description:
      'AI-based system for real-time recognition of Bharatiya Natya mudras using computer vision.',
    techStack: ['Python', 'YOLO', 'OpenCV'],
    github: 'https://github.com/Haritheproggramer',
  },
  {
    title: 'MRU Event Hub',
    category: 'Web Platform',
    description:
      'Centralized platform to discover, register, and manage university events.',
    techStack: ['React', 'Firebase', 'Vercel'],
    github: 'https://github.com/Haritheproggramer',
    liveDemo: 'https://mru-event-hub.vercel.app',
  },
  {
    title: 'MEDICLOCK',
    category: 'Productivity App',
    description:
      'Smart medication reminder system with notifications, tracking, and a user-friendly interface.',
    techStack: ['Flutter', 'Firebase'],
    github: 'https://github.com/Haritheproggramer',
  },
  {
    title: 'Gaming Arena',
    category: 'Game Suite',
    description:
      'Mini arcade system including Snake, Pong, and Tic-Tac-Toe with GUI and CLI versions.',
    techStack: ['Flutter', 'Firebase'],
    github: 'https://github.com/Haritheproggramer',
  },
]

export const skills: SkillCategory[] = [
  {
    title: 'Programming',
    items: ['C', 'Python', 'Java'],
  },
  {
    title: 'Web Development',
    items: ['HTML', 'CSS', 'React'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'Firebase', 'Vercel', 'Excel'],
  },
  {
    title: 'AI & Tech',
    items: ['OpenCV', 'Basic ML Concepts', 'AI Tool Utilization'],
  },
]

export const academics: AcademicItem[] = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Manav Rachna University',
    year: '2nd Year',
    focus: 'Currently building foundations in software engineering, AI, and product development.',
  },
]

export const achievements: AchievementItem[] = [
  {
    title: 'Finalist - Smart India Hackathon',
    tag: 'Hackathon',
    details: 'Reached the final round with a solution focused on practical problem solving and scalable impact.',
    year: 'SIH',
  },
  {
    title: 'Finalist - HackMor',
    tag: 'Competition',
    details: 'Built and presented a college hackathon project with strong collaboration and rapid execution.',
    year: 'HackMor',
  },
  {
    title: 'Coordinator - Clan Wild Cats',
    tag: 'Leadership',
    details: 'Supported coordination, communication, and event flow as part of a campus team.',
    year: 'Team',
  },
  {
    title: 'Former Event Head - TEDxMRU',
    tag: 'Leadership',
    details: 'Managed event responsibilities with a focus on planning, coordination, and smooth execution.',
    year: 'TEDxMRU',
  },
]

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/hariom-jha-039360320' },
  { label: 'GitHub', url: 'https://github.com/Haritheproggramer' },
  { label: 'Instagram', url: 'https://www.instagram.com/hariomxjha029' },
  { label: 'Email', url: 'mailto:jhahariom855@gmail.com' },
]

export const quickStats: QuickStat[] = [
  { label: 'Projects', value: '4+' },
  { label: 'Hackathon Finalist', value: 'Yes' },
  { label: 'Active Developer', value: 'Always' },
]

export const milestones: MilestoneItem[] = [
  {
    year: '2023',
    title: 'Started coding journey',
    summary: 'Built programming fundamentals through consistent practice, mini-projects, and DSA basics.',
    highlight: 'Explored core logic and coding foundations',
  },
  {
    year: '2024',
    title: 'Built first full-stack project',
    summary: 'Developed and deployed a full-stack web app with authentication, database integration, and responsive UI.',
    highlight: 'Learned end-to-end product delivery',
  },
  {
    year: '2025',
    title: 'Won hackathon and built AI apps',
    summary: 'Worked in fast team sprints to ship AI-enabled applications and secure top positions in competitions.',
    highlight: 'Strong momentum in AI and innovation events',
  },
  {
    year: '2026',
    title: 'Preparing for internships',
    summary: 'Strengthening project depth, system design thinking, and interview readiness for top internship roles.',
    highlight: 'Focused on scalable engineering outcomes',
  },
]
