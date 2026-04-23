"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { Project } from "@/types"
import { Badge } from "@/components/ui/Badge"
import { GalleryLightbox } from "@/components/projects/GalleryLightbox"

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
  const { title, fullDescription, tags, status, repoUrl, demoUrl, demoLabel, detailMediaUrl, gallery, date } = project
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/proyectos"
        className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-primary"
      >
        <ArrowLeft size={16} /> Volver a proyectos
      </Link>

      {detailMediaUrl && (
        <div className="relative mb-8 h-64 w-full overflow-hidden rounded-xl bg-bg-secondary sm:h-80">
          <Image src={detailMediaUrl} alt={title} fill className="object-cover" unoptimized />
        </div>
      )}

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
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm text-bg-primary transition-colors hover:bg-accent-hover"
          >
            <ExternalLink size={16} /> {demoLabel ?? "Ver demo"}
          </a>
        )}
      </div>

      {gallery && gallery.length > 0 && (
        <div className="mt-12">
          <h2 className="mb-6 text-xl font-bold text-text-primary">Imágenes del proyecto</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {gallery.map((src, i) => (
            <button
              key={i}
              className="relative h-48 w-full overflow-hidden rounded-xl bg-bg-secondary cursor-zoom-in"
              onClick={() => setLightboxIndex(i)}
            >
              <Image src={src} alt={`${title} screenshot ${i + 1}`} fill className="object-cover transition-transform duration-300 hover:scale-105" />
            </button>
          ))}
          </div>
        </div>
      )}

      {lightboxIndex !== null && gallery && (
        <GalleryLightbox
          images={gallery}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </article>
  )
}
