import { useEffect, useRef, useState } from "react"

interface MusicPlayerProps {
  src: string
  defaultVolume?: number // 0..1
  className?: string
}

export function MusicPlayer({
  src,
  defaultVolume = 0.35,
  className,
}: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      if (!ready) {
        audio.volume = defaultVolume
        setReady(true)
      }

      if (audio.paused) {
        await audio.play()
        setPlaying(true)
      } else {
        audio.pause()
        setPlaying(false)
      }
    } catch {
      // Algunos móviles requieren doble interacción
      alert("Tocá otra vez para activar la música 🎵")
    }
  }

  // Pausar al cambiar de pestaña
  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.hidden) {
        audioRef.current?.pause()
        setPlaying(false)
      }
    }

    document.addEventListener("visibilitychange", onVisibilityChange)
    return () =>
      document.removeEventListener("visibilitychange", onVisibilityChange)
  }, [])

  return (
    <div className={className}>
      <audio ref={audioRef} src={src} loop preload="metadata" />

      <button
        type="button"
        onClick={togglePlay}
        aria-label={playing ? "Pausar música" : "Reproducir música"}
        className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-background md:px-4 px-1 md:py-2 py-0.5 text-xs uppercase text-black/70 shadow-sm backdrop-blur hover:bg-white"
      >
        <span className="md:text-base text-xs leading-none">
          {playing ? "⏸" : "▶️"}
        </span>
        <span>{playing ? "Música" : "Activar música"}</span>
      </button>
    </div>
  )
}
