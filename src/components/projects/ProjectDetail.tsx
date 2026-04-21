import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { Project } from "@/types"
import { Badge } from "@/components/ui/Badge"

const statusLabel: Record<Project["status"], string> = {
  completed: "Completado",
  "in-progress": "En progreso",
  archived: "Archivado",
}

const statusColor: Record<Project["status"], string> = {
  completed: "text-emerald-400",
  "in-progress": "text-accent",
  archived: "text-text-muted",
}

type ProjectDetailProps = {
  project: Project
}

export const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const { title, fullDescription, tags, status, repoUrl, demoUrl, imageUrl, date } = project

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/proyectos"
        className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-primary"
      >
        <ArrowLeft size={16} /> Volver a proyectos
      </Link>

      <div className="relative mb-8 h-64 w-full overflow-hidden rounded-xl bg-bg-secondary sm:h-80">
        {imageUrl ? (
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-6xl font-bold text-border">
              {title.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className={`text-sm font-medium ${statusColor[status]}`}>
          {statusLabel[status]}
        </span>
        <span className="text-text-muted">·</span>
        <span className="text-sm text-text-muted">{date}</span>
      </div>

      <h1 className="mb-4 text-4xl font-bold tracking-tight text-text-primary">
        {title}
      </h1>

      <p className="mb-6 text-lg leading-relaxed text-text-muted">{fullDescription}</p>

      <div className="mb-8 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-text-muted transition-colors hover:border-accent/40 hover:text-text-primary"
        >
          <FaGithub size={16} /> Ver código
        </a>
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm text-white transition-colors hover:bg-accent-hover"
          >
            <ExternalLink size={16} /> Ver demo
          </a>
        )}
      </div>
    </article>
  )
}
