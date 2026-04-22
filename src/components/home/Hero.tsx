"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/Button"

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
})

export const Hero = () => (
  <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6">
    <div className="mx-auto max-w-3xl text-center">
      <motion.p className="mb-2 text-text-muted" {...fadeUp(0)}>
        Hola, soy
      </motion.p>
      <motion.h1
        className="mb-3 text-5xl font-bold tracking-tight text-text-primary sm:text-6xl"
        {...fadeUp(0.1)}
      >
        Yeider Catari
      </motion.h1>
      <motion.p
        className="mb-6 text-2xl font-medium text-accent sm:text-3xl"
        {...fadeUp(0.2)}
      >
        Full Stack Developer
      </motion.p>
      <motion.p
        className="mx-auto mb-10 max-w-xl text-lg text-text-muted"
        {...fadeUp(0.3)}
      >
        Desarrollador Full Stack en formación y estudiante de Ingeniería en Duoc UC. Disfruto creando herramientas digitales que simplifican tareas, desde automatizaciones personalizadas hasta interfaces de usuario intuitivas.
      </motion.p>
      <motion.div
        className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        {...fadeUp(0.4)}
      >
        <Button href="/proyectos" variant="primary">
          Ver proyectos <ArrowRight size={16} />
        </Button>
        <Button href="https://github.com/nvbezz" variant="outline" external>
          GitHub
        </Button>
        <a
          href="/cv.pdf"
          download
          className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-primary"
        >
          <Download size={15} /> Descargar CV
        </a>
      </motion.div>
    </div>
  </section>
)
