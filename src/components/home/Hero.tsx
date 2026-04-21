import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"

export const Hero = () => {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-text-muted">Hola, soy</p>
        <h1 className="mb-3 text-5xl font-bold tracking-tight text-text-primary sm:text-6xl">
          Yeider Catari
        </h1>
        <p className="mb-6 text-2xl font-medium text-accent sm:text-3xl">
          Full Stack Developer
        </p>
        <p className="mx-auto mb-10 max-w-xl text-lg text-text-muted">
          Construyo productos digitales con foco en experiencia de usuario y código limpio.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/proyectos" variant="primary">
            Ver proyectos <ArrowRight size={16} />
          </Button>
          <Button href="https://github.com/nvbezz" variant="outline" external>
            GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
