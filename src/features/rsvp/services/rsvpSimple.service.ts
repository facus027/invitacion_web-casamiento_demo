import { invitationConfig } from "../../../config/invitation.config";
import type { RsvpSimpleFormData } from "../schemas/rsvpSimple.schema";

export const sendSimpleRsvp = async (data: RsvpSimpleFormData) => {
  const { rsvp } = invitationConfig;

  await fetch(rsvp.scripts.simpleUrl, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({
      name: data.name,
      lastName: data.lastName,
      foodRestriction: data.foodRestriction,
      foodRestrictionDetail: data.foodRestrictionDetail || "",
      status: "confirmado",
    }),
  });
};