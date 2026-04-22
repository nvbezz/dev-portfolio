import { projects } from "@/data/projects"
import { ProjectGrid } from "@/components/projects/ProjectGrid"

export const metadata = {
  title: "Proyectos — Yeider Catari",
  description: "Proyectos desarrollados por Yeider Catari.",
}

export default function ProyectosPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-2 text-4xl font-bold tracking-tight text-text-primary">
        Proyectos
      </h1>
      <p className="mb-12 text-text-muted">
        Cosas que he construido.
      </p>
      <ProjectGrid projects={projects} />
    </section>
  )
}
