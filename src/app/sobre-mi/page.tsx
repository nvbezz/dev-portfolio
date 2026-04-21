import { skills } from "@/data/skills"
import { workExperience, education } from "@/data/experience"
import { SkillsGrid } from "@/components/about/SkillsGrid"
import { Timeline } from "@/components/about/Timeline"

export const metadata = {
  title: "Sobre mí — Yeider Catari",
  description: "Conoce más sobre Yeider Catari, desarrollador Full Stack.",
}

export default function SobreMiPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold tracking-tight text-text-primary">
        Sobre mí
      </h1>
      <p className="mb-16 max-w-xl text-lg leading-relaxed text-text-muted">
        Soy un desarrollador Full Stack independiente apasionado por construir
        productos digitales útiles. Me enfoco en escribir código limpio, crear
        interfaces intuitivas y aprender constantemente. Trabajo de forma
        autónoma con clientes y en proyectos propios.
      </p>

      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-bold text-text-primary">Skills</h2>
        <SkillsGrid skills={skills} />
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-bold text-text-primary">Experiencia</h2>
        <Timeline items={workExperience} />
      </section>

      <section>
        <h2 className="mb-8 text-2xl font-bold text-text-primary">Educación</h2>
        <Timeline items={education} />
      </section>
    </article>
  )
}
