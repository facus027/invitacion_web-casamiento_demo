import { useState } from "react";
import { useForm, useWatch  } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  FOOD_RESTRICTION_OPTIONS,
  rsvpSimpleSchema,
  type RsvpSimpleFormData,
} from "../schemas/rsvpSimple.schema";
import { sendSimpleRsvp } from "../services/rsvpSimple.service";

export const RsvpSimpleForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

 const {
  register,
  handleSubmit,
  control,
  formState: { errors },
} = useForm<RsvpSimpleFormData>({
    resolver: zodResolver(rsvpSimpleSchema),
    defaultValues: {
      name: "",
      lastName: "",
      foodRestriction: "Sin restricciones",
      foodRestrictionDetail: "",
    },
  });

  const selectedFoodRestriction = useWatch({
  control,
  name: "foodRestriction",
});

  const onSubmit = async (data: RsvpSimpleFormData) => {
    try {
      setIsSubmitting(true);
      await sendSimpleRsvp(data);
      setSubmitted(true);
    } catch (error) {
      console.error("Error enviando RSVP simple:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="space-y-4 text-center">
        <h3 className="font-serif text-xl uppercase tracking-widest text-[#d4af37]">
          ¡Gracias por confirmar!
        </h3>

        <p className="text-sm leading-relaxed text-texto">
          Tu asistencia fue registrada correctamente.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register("name")}
          type="text"
          placeholder="Nombre"
          className="w-full rounded-xl border border-[#d4af37]/40 bg-white px-4 py-3 text-sm text-texto outline-none focus:border-[#d4af37]"
        />
        {errors.name && (
          <p className="mt-1 text-left text-xs text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <input
          {...register("lastName")}
          type="text"
          placeholder="Apellido"
          className="w-full rounded-xl border border-[#d4af37]/40 bg-white px-4 py-3 text-sm text-texto outline-none focus:border-[#d4af37]"
        />
        {errors.lastName && (
          <p className="mt-1 text-left text-xs text-red-600">
            {errors.lastName.message}
          </p>
        )}
      </div>

      <div>
        <select
          {...register("foodRestriction")}
          className="w-full rounded-xl border border-[#d4af37]/40 bg-white px-4 py-3 text-sm text-texto outline-none focus:border-[#d4af37]"
        >
          {FOOD_RESTRICTION_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {errors.foodRestriction && (
          <p className="mt-1 text-left text-xs text-red-600">
            {errors.foodRestriction.message}
          </p>
        )}
      </div>

      {selectedFoodRestriction === "Otro" && (
        <div>
          <textarea
            {...register("foodRestrictionDetail")}
            placeholder="Contanos tu restricción alimentaria"
            rows={3}
            className="w-full resize-none rounded-xl border border-[#d4af37]/40 bg-white px-4 py-3 text-sm text-texto outline-none focus:border-[#d4af37]"
          />

          {errors.foodRestrictionDetail && (
            <p className="mt-1 text-left text-xs text-red-600">
              {errors.foodRestrictionDetail.message}
            </p>
          )}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-[#b8962f] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Enviando..." : "Confirmar asistencia"}
      </button>
    </form>
  );
};