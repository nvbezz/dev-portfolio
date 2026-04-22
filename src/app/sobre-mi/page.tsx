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
        Soy estudiante de Ingeniería Informática y desarrollador Full Stack apasionado
        por la automatización y la inteligencia artificial. No solo escribo código; diseño
        soluciones que resuelven problemas reales, desde sistemas de agendamiento inteligente
        hasta arquitecturas de software escalables.
        <br></br>
        <br></br>
        Me enfoco en el rendimiento y la experiencia de usuario, priorizando siempre la calidad técnica en cada entrega. Mi objetivo es transformar ideas complejas en productos digitales intuitivos, eficientes y, sobre todo, útiles para las personas.
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
