"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Turnstile from "react-turnstile"

type FormState = "idle" | "loading" | "success" | "error"

export const ContactForm = () => {
  const [state, setState] = useState<FormState>("idle")
  const [error, setError] = useState("")
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState("loading")
    setError("")

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      turnstileToken,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json()
        throw new Error(body.error ?? "Error desconocido")
      }

      setState("success")
      form.reset()
      setTurnstileToken(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo enviar el mensaje.")
      setState("error")
    }
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-bg-card px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors focus:border-accent"

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm text-text-muted">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Tu nombre"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm text-text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="tu@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm text-text-muted">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="¿En qué puedo ayudarte?"
          className={`${inputClass} resize-none`}
        />
      </div>

      <Turnstile
        sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        onVerify={(token) => setTurnstileToken(token)}
        size="invisible"
      />

      {state === "success" && (
        <p className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
          ¡Mensaje enviado! Te responderé pronto.
        </p>
      )}

      {state === "error" && (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </p>
      )}

      <div>
        <Button
          variant="primary"
          disabled={!turnstileToken || state === "loading"}
          className={!turnstileToken || state === "loading" ? "opacity-60 cursor-not-allowed" : ""}
        >
          <Send size={16} />
          {!turnstileToken ? "Preparando formulario..." : state === "loading" ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </div>
    </form>
  )
}
