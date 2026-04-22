# Portafolio — Yeider Catari

Portafolio personal construido con Next.js 16, TypeScript y Tailwind CSS. Muestra mis proyectos, habilidades, experiencia y formación como desarrollador Full Stack.

## Demo

[dev-portfolio-yeider-catari.vercel.app](https://dev-portfolio-yeider-catari.vercel.app)

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| Animaciones | Framer Motion |
| Iconos | Lucide React + React Icons |
| Email | Resend |
| CAPTCHA | Cloudflare Turnstile |
| Rate limiting | Upstash Redis |
| Deploy | Vercel |

---

## Características

- Diseño responsive con navbar hamburguesa en mobile
- Modo claro / oscuro con persistencia
- Galería de proyectos con lightbox y navegación por teclado
- Formulario de contacto con rate limiting y CAPTCHA invisible
- SSG completo (páginas estáticas) + API route para contacto
- SEO: metadata, Open Graph, sitemap y robots.txt
- CV descargable

---

## Estructura

```
src/
├── app/                  → Rutas (App Router)
├── components/
│   ├── ui/               → Button, Badge, FadeIn
│   ├── layout/           → Navbar, Footer
│   ├── home/             → Hero
│   ├── projects/         → ProjectCard, ProjectDetail, GalleryLightbox
│   ├── about/            → SkillsGrid, Timeline
│   └── contact/          → ContactForm
├── data/                 → projects.ts, skills.ts, experience.ts
├── lib/                  → utils.ts
└── types/                → index.ts
```

---

## Correr localmente

```bash
git clone https://github.com/nvbezz/dev-portfolio.git
cd dev-portfolio
npm install
cp .env.example .env.local
# Completa las variables en .env.local
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Variables de entorno

```bash
RESEND_API_KEY=                     # API key de Resend (formulario de contacto)
NEXT_PUBLIC_SITE_URL=               # URL de producción
CONTACT_EMAIL=                      # Email que recibe los mensajes
UPSTASH_REDIS_REST_URL=             # URL de Upstash (rate limiting)
UPSTASH_REDIS_REST_TOKEN=           # Token de Upstash
NEXT_PUBLIC_TURNSTILE_SITE_KEY=     # Site key de Cloudflare Turnstile
TURNSTILE_SECRET_KEY=               # Secret key de Cloudflare Turnstile
```

---

## Git

Flujo GitFlow adaptado:

```
main      → Producción (Vercel)
develop   → Integración
feature/* | fix/* | style/* | content/* | docs/* | chore/*
```

Commits en [Conventional Commits](https://www.conventionalcommits.org/).

