import { ContactForm } from "@/components/contact/ContactForm"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

export const metadata = {
  title: "Contacto — Yeider Catari",
  description: "Ponte en contacto con Yeider Catari.",
}

export default function ContactoPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-2 text-4xl font-bold tracking-tight text-text-primary">
        Contacto
      </h1>
      <p className="mb-12 text-text-muted">
        ¿Tienes un proyecto en mente o quieres charlar? Escríbeme.
      </p>

      <div className="grid gap-12 sm:grid-cols-[1fr_auto]">
        <ContactForm />

        <aside className="flex flex-col gap-4 sm:pt-8">
          <p className="text-sm font-medium text-text-muted uppercase tracking-widest">
            También aquí
          </p>
          <a
            href="https://github.com/nvbezz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-primary"
          >
            <FaGithub size={16} /> github.com/nvbezz
          </a>
          <a
            href="https://linkedin.com/in/yeidercatari"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-primary"
          >
            <FaLinkedinIn size={16} /> linkedin.com/in/yeidercatari
          </a>
        </aside>
      </div>
    </section>
  )
}
