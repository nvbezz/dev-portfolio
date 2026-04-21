"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

const links = [
  { href: "/", label: "Inicio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/contacto", label: "Contacto" },
]

export const Navbar = () => {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-primary/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-accent">YC</span>
          <span className="hidden text-sm font-medium text-text-primary sm:block">
            Yeider Catari
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 sm:flex">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm transition-colors ${
                    pathname === href
                      ? "text-accent"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-text-muted transition-colors hover:text-text-primary"
              aria-label="Cambiar tema"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
        </div>
      </nav>
    </header>
  )
}
