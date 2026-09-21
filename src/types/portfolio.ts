export interface NavItem {
  id: string
  label: string
}

export interface SocialLink {
  label: string
  href: string
  kind: 'linkedin' | 'email' | 'github'
}

export interface SkillGroup {
  title: string
  icon: string
  items: string[]
}

export interface ExperienceItem {
  id: string
  company: string
  title: string
  period: string
  summary: string
  highlights: string[]
  technologies: string[]
}

export interface ProjectItem {
  id: string
  name: string
  shortDescription: string
  purpose: string
  contribution: string[]
  technologies: string[]
  highlights: string[]
}

export interface ArchitectureTopic {
  title: string
  description: string
  icon: string
}

export interface JourneyItem {
  id: string
  period: string
  title: string
  organization: string
  type: 'education' | 'internship' | 'role'
}

export interface EducationItem {
  program: string
  institution: string
  period: string
}
