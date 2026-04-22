import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { Redis } from "@upstash/redis"
import { Ratelimit } from "@upstash/ratelimit"

const resend = new Resend(process.env.RESEND_API_KEY)

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

const limiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(2, "1 h"),
})

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/

export async function POST(req: NextRequest) {
  const { name, email, message, turnstileToken } = await req.json()

  if (!name || !email || !message || !turnstileToken) {
    return NextResponse.json({ error: "Todos los campos son requeridos." }, { status: 400 })
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Por favor, ingresa un correo electrónico válido." }, { status: 400 })
  }

  const ip = req.headers.get("x-forwarded-for") ?? "unknown"
  const { success } = await limiter.limit(ip)
  if (!success) {
    return NextResponse.json(
      { error: "Has enviado demasiados mensajes. Por favor, inténtalo en una hora." },
      { status: 429 }
    )
  }

  const verification = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET_KEY!,
      response: turnstileToken,
    }),
  })
  const verificationData = await verification.json()
  if (!verificationData.success) {
    return NextResponse.json({ error: "Verificación de seguridad fallida." }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: "Portafolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `Nuevo mensaje de contacto — ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[contact] Resend error:", error)
    return NextResponse.json({ error: "No se pudo enviar el mensaje." }, { status: 500 })
  }
}
