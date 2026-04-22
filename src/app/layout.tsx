import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export const metadata: Metadata = {
  title: {
    default: "Yeider Catari — Full Stack Developer",
    template: "%s — Yeider Catari",
  },
  description: "Portafolio personal de Yeider Catari, desarrollador Full Stack.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "Yeider Catari",
    title: "Yeider Catari — Full Stack Developer",
    description: "Portafolio personal de Yeider Catari, desarrollador Full Stack.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yeider Catari — Full Stack Developer",
    description: "Portafolio personal de Yeider Catari, desarrollador Full Stack.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-bg-primary text-text-primary">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
