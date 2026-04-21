import { Project } from "@/types"
import { ProjectCard } from "@/components/projects/ProjectCard"
import { FadeIn } from "@/components/ui/FadeIn"

type ProjectGridProps = {
  projects: Project[]
}

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
  if (projects.length === 0) {
    return (
      <p className="text-center text-text-muted">
        No hay proyectos disponibles todavía.
      </p>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <FadeIn key={project.slug} delay={i * 0.1}>
          <ProjectCard project={project} />
        </FadeIn>
      ))}
    </div>
  )
}
