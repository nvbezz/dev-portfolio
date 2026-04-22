import { Project } from "@/types"

export const projects: Project[] = [
  {
    slug: "whatsapp-agend-ai",
    title: "Sistema de Agendamiento con IA (WhatsApp)",
    shortDescription:
      "Asistente conversacional para WhatsApp impulsado por Gemini AI, diseñado para automatizar el agendamiento de citas mediante lenguaje natural.",
    fullDescription:
      "Desarrollé este agente backend en Node.js integrando la Cloud API oficial de Meta vía Webhooks. A diferencia de los bots tradicionales basados en comandos rígidos, este sistema utiliza Gemini 2.5 Flash para entender el contexto del usuario, solicitar los datos faltantes (servicio, fecha, hora) y conversar de forma natural. Además, implementé una base de datos local con SQLite (better-sqlite3) para persistir el historial de cada chat y registrar las citas confirmadas de forma segura.",
    tags: ["Node.js", "Express", "Meta Cloud API", "Gemini AI", "SQLite"],
    status: "in-progress",
    repoUrl: "https://github.com/nvbezz/whatsapp-agend-ai",
    cardCover: "/images/projects/whatsapp-agend-ai/cover.jpg",
    detailMediaUrl: "/images/projects/whatsapp-agend-ai/detail.gif",
    gallery: [
      "/images/projects/whatsapp-agend-ai/screenshot-1.jpeg",
      "/images/projects/whatsapp-agend-ai/screenshot-2.jpeg",
      "/images/projects/whatsapp-agend-ai/screenshot-3.jpeg",
    ],
    featured: true,
    date: "2026-04",
  },
]
