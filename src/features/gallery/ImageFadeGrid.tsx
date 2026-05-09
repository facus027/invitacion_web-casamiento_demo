import { useEffect, useMemo, useState } from "react"

interface ImageFadeGridProps {
  images: string[]
  intervalMs?: number
}

export function ImageFadeGrid({
  images,
  intervalMs = 5500,
}: ImageFadeGridProps) {
  const ITEMS_PER_VIEW = 3

  const groups = useMemo(() => {
    const result: string[][] = []
    for (let i = 0; i < images.length; i += ITEMS_PER_VIEW) {
      result.push(images.slice(i, i + ITEMS_PER_VIEW))
    }
    return result
  }, [images])

  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  )

  useEffect(() => {
    if (groups.length <= 1 || selectedImageIndex !== null) return

    const interval = setInterval(() => {
      setVisible(false)

      const timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % groups.length)
        setVisible(true)
      }, 500)

      return () => clearTimeout(timeout)
    }, intervalMs)

    return () => clearInterval(interval)
  }, [groups.length, intervalMs, selectedImageIndex])

  const currentImages = groups[index] ?? []

  const openImage = (src: string) => {
    const realIndex = images.findIndex((image) => image === src)
    setSelectedImageIndex(realIndex)
  }

  const closeImage = () => {
    setSelectedImageIndex(null)
  }

  const showPrevImage = () => {
    setSelectedImageIndex((prev) => {
      if (prev === null) return null
      return prev === 0 ? images.length - 1 : prev - 1
    })
  }

  const showNextImage = () => {
    setSelectedImageIndex((prev) => {
      if (prev === null) return null
      return prev === images.length - 1 ? 0 : prev + 1
    })
  }

  const selectedImage =
    selectedImageIndex !== null ? images[selectedImageIndex] : null

  return (
    <div className="mx-auto mt-10 w-full">
      <div
        className={`grid grid-cols-3 gap-0.5 px-1 transition-opacity duration-500 ease-in-out md:gap-2 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {currentImages.map((src, i) => (
          <button
            key={`${src}-${i}`}
            type="button"
            onClick={() => openImage(src)}
            className="aspect-square overflow-hidden rounded-xl bg-black/5"
            aria-label="Ver imagen en grande"
          >
            <img
              src={src}
              alt="Foto de Emilia y Nicolas"
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
          <button
            type="button"
            onClick={closeImage}
            aria-label="Cerrar imagen"
            className="absolute right-5 top-5 text-3xl text-white/80 transition hover:text-[#d4af37]"
          >
            ×
          </button>

          <button
            type="button"
            onClick={showPrevImage}
            aria-label="Imagen anterior"
            className="absolute left-4 rounded-full border border-[#d4af37]/50 px-4 py-2 text-2xl text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
          >
            ‹
          </button>

          <img
            src={selectedImage}
            alt="Foto ampliada de Emilia y Nicolas"
            className="max-h-[82vh] max-w-[90vw] rounded-2xl object-contain shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
          />

          <button
            type="button"
            onClick={showNextImage}
            aria-label="Imagen siguiente"
            className="absolute right-4 rounded-full border border-[#d4af37]/50 px-4 py-2 text-2xl text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
          >
            ›
          </button>
        </div>
      )}
    </div>
  )
}