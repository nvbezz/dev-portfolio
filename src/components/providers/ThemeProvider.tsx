"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <NextThemesProvider
    attribute="class"
    defaultTheme="dark"
    storageKey="theme-preference"
    disableTransitionOnChange
  >
    {children}
  </NextThemesProvider>
)
