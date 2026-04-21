export interface Project {
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  tags: string[]
  status: "completed" | "in-progress" | "archived"
  repoUrl: string
  demoUrl?: string
  imageUrl: string
  featured: boolean
  date: string
}

export interface Skill {
  name: string
  category: "frontend" | "backend" | "database" | "tools"
  level: "básico" | "intermedio" | "avanzado"
}
