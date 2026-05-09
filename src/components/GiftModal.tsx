import { useEffect } from "react"

type GiftModalProps = {
  open: boolean
  onClose: () => void
  bankName?: string
  accountType?: string
  cbu: string
  alias: string
  aliasusd: string
  holder: string
}

export function GiftModal({
  open,
  onClose,
  bankName = "BBVA",
  accountType = "Caja de ahorro en pesos",
  cbu,
  aliasusd,
  alias,
  holder,
}: GiftModalProps) {
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", onKeyDown)
    // Bloqueo scroll del fondo
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center sm:items-center px-5"
      role="dialog"
      aria-modal="true"
      aria-label="Datos para regalo"
    >
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-label="Cerrar"
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-[420px] rounded-3xl bg-lunamiel p-5 shadow-xl sm:rounded-3xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-texto">
              {accountType} · {bankName}
            </p>
            <h3 className="mt-1 text-lg font-montserratMedium text-title">
              <img
          src="/gifts/luna de miel.gif"
          alt="gift_lunaDeMiel"
          className="mx-auto h-auto w-20 object-contain"
        />
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-black/10 px-3 py-1 text-sm text-texto"
          >
            Cerrar
          </button>
        </div>

        <div className="mt-5 space-y-3">
          <CopyRow label="CBU" value={cbu} />
          <CopyRow label="Alias (En pesos)" value={alias} />
          <CopyRow label="Alias (En dólares)" value={aliasusd} />
          <InfoRow label="Titular" value={holder} />
        </div>

        <p className="mt-5 text-xs text-texto">
          Tip: tocá “Copiar” y pegalo en tu banco desde el celular.
        </p>
      </div>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">
      <p className="text-[11px] uppercase tracking-widest text-texto">
        {label}
      </p>
      <p className="mt-1 break-words text-sm text-texto">{value}</p>
    </div>
  )
}

function CopyRow({ label, value }: { label: string; value: string }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      // Si querés, acá podés mostrar un toast (te dejo opción abajo)
      alert(`${label} copiado ✅`)
    } catch {
      // Fallback por si clipboard falla (algunos iOS viejos)
      const textarea = document.createElement("textarea")
      textarea.value = value
      textarea.style.position = "fixed"
      textarea.style.opacity = "0"
      document.body.appendChild(textarea)
      textarea.focus()
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
      alert(`${label} copiado ✅`)
    }
  }

  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-black/10 bg-black/[0.02] p-4">
      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-widest text-texto">
          {label}
        </p>
        <p className="mt-1 break-all text-sm text-texto">{value}</p>
      </div>

      <button
        type="button"
        onClick={handleCopy}
        className="shrink-0 rounded-full border border-title px-3 py-1 text-xs font-montserrat text-texto"
      >
        Copiar
      </button>
    </div>
  )
}
