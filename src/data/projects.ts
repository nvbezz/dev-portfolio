import { Project } from "@/types";

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
  {
    slug: "reposhot",
    title: "reposhot — context packing for LLMs",
    shortDescription:
      "CLI en TypeScript que empaqueta cualquier repositorio local en un único archivo XML estructurado, optimizado para ser consumido por LLMs como Claude, ChatGPT o Gemini.",
    fullDescription:
      "Desarrollé reposhot como una alternativa minimalista a herramientas similares, con solo 2 dependencias de producción frente a las 25+ que tienen competidores directos. La herramienta recorre el árbol de directorios de forma síncrona, respeta .gitignore y patrones personalizados via minimatch, detecta archivos binarios por inspección de bytes nulos, y genera un XML con metadata completa del repositorio incluyendo conteo real de tokens usando tiktoken con el encoding cl100k_base. Incluye CI/CD con GitHub Actions, suite de tests con node:test nativo y está publicado en npm. La v1.1.0 incorpora mejoras de seguridad: detección de secrets con --check-secrets, protección contra symlinks externos y validación del path de salida.",
    tags: [
      "TypeScript",
      "Node.js",
      "CLI",
      "tsup",
      "tiktoken",
      "minimatch",
      "XML",
    ],
    status: "completed",
    repoUrl: "https://github.com/nvbezz/reposhot",
    demoUrl: "https://www.npmjs.com/package/reposhot",
    demoLabel: "Ver en npm",
    cardCover: "/images/projects/reposhot/cover.jpg",
    detailMediaUrl: "/images/projects/reposhot/detail.gif",
    gallery: [
      "/images/projects/reposhot/screenshot-1.png",
      "/images/projects/reposhot/screenshot-2.png",
      "/images/projects/reposhot/screenshot-3.png",
      "/images/projects/reposhot/screenshot-4.png",

    ],
    featured: true,
    date: "2026-04",
  },
];
