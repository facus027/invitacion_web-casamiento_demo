import { z } from "zod"

export const rsvpSchema = z.object({
  name: z.string().min(2, "Nombre requerido"),
  lastName: z.string().min(2, "Apellido requerido"),
  guests: z.coerce
    .number()
    .min(1, "Mínimo 1 persona")
    .max(10, "Máximo 10 personas"),
})

export type RsvpFormInput = z.input<typeof rsvpSchema>
export type RsvpFormData = z.output<typeof rsvpSchema>