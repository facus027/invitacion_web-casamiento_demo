import { useState } from "react"
import { GiftModal } from "./GiftModal"

export function LunaDeMielCard() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="bg-lunamiel p-6 mt-10 mb-5 text-center">
        <img
          src="/gifts/luna de miel.gif"
          alt="gift_lunaDeMiel"
          className="mx-auto h-auto w-20 object-contain"
        />

        <h2 className="md:text-xl text-sm font-montserratMedium text-title tracking-wider uppercase mt-2">
          LUNA DE MIEL
        </h2>

        <p className="md:text-lg text-xs font-montserra text-title uppercase w-3/5 mx-auto mt-5 mb-5">
          Si desean hacernos un regalo les agradecemos nos ayuden en nuestra luna
          de miel.
        </p>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="px-4 py-0.5 text-sm uppercase border font-montserrat text-title border-title rounded-full focus:ring-1"
        >
          CONTRIBUIR
        </button>
      </div>

      <GiftModal
        open={open}
        onClose={() => setOpen(false)}
        accountType="Caja de ahorro"
        bankName="BBVA"
        cbu="01702400040000032173756"
        alias="fyf2026"
        aliasusd="fyf2026usd"
        holder="Federico Gabriel Fernandez"
      />
    </>
  )
}
