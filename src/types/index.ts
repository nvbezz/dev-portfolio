export interface Project {
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  tags: string[]
  status: "completed" | "in-progress" | "archived"
  repoUrl: string
  demoUrl?: string
  cardCover?: string
  detailMediaUrl?: string
  gallery?: string[]
  featured: boolean
  date: string
}

export interface Skill {
  name: string
  category: "frontend" | "backend" | "database" | "tools"
  level: "básico" | "intermedio" | "avanzado"
}

export interface TimelineItem {
  title: string
  subtitle: string
  description?: string
  date: string
  type: "work" | "education"
}
