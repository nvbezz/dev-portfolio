import { Skill } from "@/types"

const categoryLabel: Record<Skill["category"], string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Bases de datos",
  tools: "Herramientas",
}

const levelColor: Record<Skill["level"], string> = {
  básico: "bg-border text-text-muted",
  intermedio: "bg-accent/20 text-accent",
  avanzado: "bg-accent text-white",
}

type SkillsGridProps = {
  skills: Skill[]
}

export const SkillsGrid = ({ skills }: SkillsGridProps) => {
  const categories = (
    ["frontend", "backend", "database", "tools"] as Skill["category"][]
  ).filter((cat) => skills.some((s) => s.category === cat))

  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {categories.map((category) => (
        <div key={category}>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-text-muted">
            {categoryLabel[category]}
          </h3>
          <ul className="flex flex-col gap-2">
            {skills
              .filter((s) => s.category === category)
              .map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center justify-between rounded-lg border border-border bg-bg-card px-4 py-2.5"
                >
                  <span className="text-sm text-text-primary">{skill.name}</span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${levelColor[skill.level]}`}
                  >
                    {skill.level}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
