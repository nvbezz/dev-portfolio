import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
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

type ProjectCardProps = {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { slug, title, shortDescription, tags, status, repoUrl, demoUrl, demoLabel, cardCover } = project

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-bg-card transition-colors hover:border-accent/40">
      <Link href={`/proyectos/${slug}`} className="block">
        <div className="relative h-48 w-full bg-bg-secondary">
          {cardCover ? (
            <Image src={cardCover} alt={title} fill className="object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="text-4xl font-bold text-border">
                {title.slice(0, 2).toUpperCase()}
              </span>
            </div>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between">
          <span className={`text-xs font-medium ${statusColor[status]}`}>
            {statusLabel[status]}
          </span>
        </div>

        <Link href={`/proyectos/${slug}`}>
          <h2 className="font-semibold text-text-primary transition-colors hover:text-accent">
            {title}
          </h2>
        </Link>

        <p className="flex-1 text-sm text-text-muted">{shortDescription}</p>

        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-1">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text-primary"
            aria-label="Repositorio"
          >
            <FaGithub size={15} /> GitHub
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text-primary"
              aria-label={demoLabel ?? "Demo"}
            >
              <ExternalLink size={15} /> {demoLabel ?? "Demo"}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
