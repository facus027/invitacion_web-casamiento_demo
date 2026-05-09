import { invitationConfig } from "../../../config/invitation.config";
import { weddingPaymentConfig } from "../config/payment.config"
import type { RsvpFormData } from "../schemas/rsvp.schema"



export const sendRsvp = async (data: RsvpFormData) => {

   const { rsvp } = invitationConfig;

  const total = data.guests * weddingPaymentConfig.cardPrice

  await fetch(rsvp.scripts.paymentUrl, {
    method: "POST",
    body: JSON.stringify({
      name: data.name,
      lastName: data.lastName,
      guests: data.guests,
      price: weddingPaymentConfig.cardPrice,
      total,
      status: "pendiente",
    }),
  })

  return total
}