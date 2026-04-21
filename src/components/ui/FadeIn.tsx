"use client"

import { motion } from "framer-motion"

type FadeInProps = {
  children: React.ReactNode
  delay?: number
  className?: string
}

export const FadeIn = ({ children, delay = 0, className }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
)
