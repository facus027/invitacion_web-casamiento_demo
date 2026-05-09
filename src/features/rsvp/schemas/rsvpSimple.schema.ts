import { z } from "zod";

export const FOOD_RESTRICTION_OPTIONS = [
  "Sin restricciones",
  "Vegetariano",
  "Vegano",
  "Celíaco / Sin TACC",
  "Intolerancia a lactosa",
  "Otro",
] as const;

export const rsvpSimpleSchema = z.object({
  name: z.string().min(2, "Ingresá tu nombre"),
  lastName: z.string().min(2, "Ingresá tu apellido"),

  foodRestriction: z.enum(FOOD_RESTRICTION_OPTIONS),

  foodRestrictionDetail: z.string().max(300, "Máximo 300 caracteres").optional(),
});

export type RsvpSimpleFormData = z.infer<typeof rsvpSimpleSchema>;