"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

type Props = {
  images: string[]
  initialIndex: number
  onClose: () => void
}

export const GalleryLightbox = ({ images, initialIndex, onClose }: Props) => {
  const [index, setIndex] = useState(initialIndex)

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setIndex((i) => (i + 1) % images.length)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <button
          className="absolute top-4 right-4 rounded-full p-2 text-white/70 transition-colors hover:text-white"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <X size={24} />
        </button>

        <button
          className="absolute left-4 rounded-full p-2 text-white/70 transition-colors hover:text-white"
          onClick={(e) => { e.stopPropagation(); prev() }}
          aria-label="Anterior"
        >
          <ChevronLeft size={32} />
        </button>

        <div
          className="relative mx-16 max-h-[85vh] w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            key={index}
            src={images[index]}
            alt={`Screenshot ${index + 1}`}
            width={1280}
            height={720}
            className="h-auto max-h-[85vh] w-full rounded-xl object-contain"
          />
          <p className="mt-2 text-center text-sm text-white/50">
            {index + 1} / {images.length}
          </p>
        </div>

        <button
          className="absolute right-4 rounded-full p-2 text-white/70 transition-colors hover:text-white"
          onClick={(e) => { e.stopPropagation(); next() }}
          aria-label="Siguiente"
        >
          <ChevronRight size={32} />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
