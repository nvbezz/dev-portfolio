import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Todos los campos son requeridos." }, { status: 400 })
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
