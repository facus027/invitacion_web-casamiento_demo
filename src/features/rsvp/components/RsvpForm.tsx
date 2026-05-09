// /features/rsvp/components/RsvpForm.tsx
import { useState } from "react"
import { useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { rsvpSchema } from "../schemas/rsvp.schema"
import type { RsvpFormData, RsvpFormInput } from "../schemas/rsvp.schema"

import { calcTotal } from "../utils/calcTotal"
import { weddingPaymentConfig } from "../config/payment.config"
import { sendRsvp } from "../services/rsvp.service"

export const RsvpForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [total, setTotal] = useState(0)
  const [guestSummary, setGuestSummary] = useState<RsvpFormData | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RsvpFormInput, unknown, RsvpFormData>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      name: "",
      lastName: "",
      guests: 1,
    },
  })

  const guestsValue = useWatch({
    control,
    name: "guests",
  })

  const guests = Number(guestsValue) || 1

  const onSubmit = async (data: RsvpFormData) => {
    try {
      setIsSubmitting(true)

      const totalAmount = await sendRsvp(data)

      setTotal(totalAmount)
      setGuestSummary(data)
      setSubmitted(true)
    } catch (error) {
      console.error("Error enviando RSVP:", error)
      alert("No pudimos registrar tu asistencia. Intentá nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted && guestSummary) {
  return (
    <div className="space-y-5 text-center text-[#262e54]">
      <h2 className="font-serif text-2xl uppercase tracking-[0.25em] text-[#c9a227]">
        ¡Gracias por acompañarnos!
      </h2>

      <p className="text-sm leading-relaxed text-[#262e54]/70">
        Tu presencia es lo más importante para nosotros
        y estamos muy felices de que formes parte de este momento.
      </p>

      <div className="rounded-2xl border border-[#d4af37]/40 bg-[#f8f4ed] p-5 text-left shadow-sm">
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-semibold text-[#c9a227]">Nombre:</span>{" "}
            {guestSummary.name} {guestSummary.lastName}
          </p>

          <p>
            <span className="font-semibold text-[#c9a227]">Personas:</span>{" "}
            {guestSummary.guests}
          </p>

          <p>
            <span className="font-semibold text-[#c9a227]">
              Valor por persona:
            </span>{" "}
            ${weddingPaymentConfig.cardPrice.toLocaleString()}
          </p>
        </div>

        <div className="mt-4 border-t border-[#d4af37]/30 pt-4 text-center">
          <p className="text-xs uppercase tracking-widest text-[#262e54]/50">
            Tu asistencia fue registrada correctamente.
          </p>

          <p className="mt-1 text-2xl font-semibold text-[#262e54]">
            ${total.toLocaleString()}
          </p>
        </div>
      </div>

      <p className="text-xs leading-relaxed text-[#262e54]/60">
        La asistencia quedará pendiente hasta que la pareja verifique el pago en
        Mercado Pago.
      </p>

      <a
        href={weddingPaymentConfig.mercadoPagoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full rounded-full bg-gradient-to-r from-[#d4af37] to-[#f1d27a] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#262e54] shadow-md transition hover:scale-[1.02]"
      >
        Pagar con Mercado Pago
      </a>
    </div>
  )
}

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-md space-y-4"
    >
      <input
        {...register("name")}
        placeholder="Nombre"
        className="w-full rounded-xl border border-[#d4af37]/30 bg-[#fffaf2] p-3 text-[#262e54] outline-none transition placeholder:text-[#262e54]/40 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20"
      />
      {errors.name && <p className="text-sm text-red-400">{errors.name.message}</p>}

      <input
        {...register("lastName")}
        placeholder="Apellido"
        className="w-full rounded-xl border border-[#d4af37]/30 bg-[#fffaf2] p-3 text-[#262e54] outline-none transition placeholder:text-[#262e54]/40 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20"
      />
      {errors.lastName && (
        <p className="text-sm text-red-400">{errors.lastName.message}</p>
      )}

      <input
        type="number"
        min={1}
        max={10}
        {...register("guests")}
        placeholder="Cantidad de personas"
        className="w-full rounded-xl border border-[#d4af37]/30 bg-[#fffaf2] p-3 text-[#262e54] outline-none transition placeholder:text-[#262e54]/40 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20"
      />
      {errors.guests && (
        <p className="text-sm text-red-400">{errors.guests.message}</p>
      )}

     <div className="rounded-2xl border border-[#d4af37]/40 bg-[#f8f4ed] p-4 text-center shadow-sm">
  <p className="text-xs uppercase tracking-widest text-[#262e54]/50">
    Total estimado
  </p>

  <p className="mt-1 text-2xl font-semibold text-[#c9a227]">
    ${calcTotal(guests).toLocaleString()}
  </p>

  <p className="mt-1 text-xs text-[#262e54]/50">
    ${weddingPaymentConfig.cardPrice.toLocaleString()} por persona
  </p>
</div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full border border-[#d4af37] px-5 py-3 text-sm font-semibold uppercase tracking-wide text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Registrando..." : "Confirmar asistencia"}
      </button>
    </form>
  )
}