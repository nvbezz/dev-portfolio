import { MetadataRoute } from "next"
import { projects } from "@/data/projects"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = projects.map((p) => ({
    url: `${siteUrl}/proyectos/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/proyectos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/sobre-mi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/contacto`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    ...projectPages,
  ]
}
