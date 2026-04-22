import { Skill } from "@/types"

export const skills: Skill[] = [
  // Frontend
  { name: "Next.js", category: "frontend", level: "básico" },
  { name: "React", category: "frontend", level: "intermedio" },
  { name: "TypeScript", category: "frontend", level: "básico" },
  { name: "JavaScript", category: "frontend", level: "intermedio" },
  { name: "Tailwind CSS", category: "frontend", level: "básico" },
  { name: "HTML / CSS", category: "frontend", level: "avanzado" },

  // Backend
  { name: "Node.js", category: "backend", level: "intermedio" },
  { name: "Express", category: "backend", level: "intermedio" },
  { name: "Java (Spring Boot)", category: "backend", level: "intermedio" },
  { name: "Python", category: "backend", level: "básico" },

  // Database
  { name: "MySQL", category: "database", level: "intermedio" },
  { name: "PostgreSQL", category: "database", level: "intermedio" },
  { name: "MongoDB", category: "database", level: "intermedio" },
  { name: "SQLite", category: "database", level: "intermedio" },

  // Tools
  { name: "Git / GitHub", category: "tools", level: "avanzado" },
  { name: "Docker", category: "tools", level: "básico" },
  { name: "VS Code / IntelliJ", category: "tools", level: "avanzado" },
  { name: "Jira / Trello", category: "tools", level: "intermedio" },
]
