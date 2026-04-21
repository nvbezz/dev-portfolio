import { Skill } from "@/types"

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: "avanzado" },
  { name: "Next.js", category: "frontend", level: "avanzado" },
  { name: "TypeScript", category: "frontend", level: "intermedio" },
  { name: "Tailwind CSS", category: "frontend", level: "avanzado" },
  { name: "HTML / CSS", category: "frontend", level: "avanzado" },

  // Backend
  { name: "Node.js", category: "backend", level: "avanzado" },
  { name: "Express", category: "backend", level: "intermedio" },
  { name: "Python", category: "backend", level: "básico" },

  // Database
  { name: "MongoDB", category: "database", level: "intermedio" },
  { name: "PostgreSQL", category: "database", level: "básico" },

  // Tools
  { name: "Git / GitHub", category: "tools", level: "avanzado" },
  { name: "VS Code", category: "tools", level: "avanzado" },
  { name: "Docker", category: "tools", level: "básico" },
]
