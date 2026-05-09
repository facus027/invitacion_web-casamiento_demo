import type { InvitationConfig } from "./invitation.types";

export const invitationConfig : InvitationConfig = {
  couple: {
    bride: "Emilia",
    groom: "Nicolás",
    displayName: "Emilia & Nicolás",
  },

  assets: {
    namesImage: "/nombres-04.png",
    dateImage: "/fecha.png",
  },

  texts: {
    intro:
      "Queremos vivir este momento rodeados de personas especiales para nosotros.",
  },

  event: {
  subtitle: "¡Nos casamos!",
  date: "2026-11-22T00:00:00-03:00",

  ceremony: {
    title: "Ceremonia Religiosa",
    hour:"18:00",
    place: "Parroquia Ntra Sra del Carmen.",
    address: "Mendoza, Argentina",
    mapUrl: "https://maps.app.goo.gl/VvtgWXs9whp9ZbAD6",
  },

  party: {
    title: "Civil y Fiesta",
    hour:"20:00",
    place: "ALMANDINO - Casa de Eventos.",
    address: "Mendoza, Argentina",
    mapUrl: "https://maps.app.goo.gl/5oMXhxMrJsCDbWTF7",
  },
},

gallery: {
  enabled: true,
  title: "Nuestros momentos",
  images: [
     "/fotos/1.jpg",
     "/fotos/2.jpg",    
     "/fotos/3.jpg",
     "/fotos/4.jpg",
     "/fotos/5.jpg",
     "/fotos/6.jpg",
  ],
},

rsvp: {
  enabled: true,
  title: "TU PRESENCIA ES NUESTRO MEJOR REGALO",
  description:
    "Si querés acompañarnos en este momento tan importante, solo necesitamos que confirmes tu asistencia.",
  buttonText: "Confirmar Asistencia",
  

  payment: {
  enabled: true,
  cardPrice: 80000,
  mercadoPagoUrl: "",
},

 scripts: {
    simpleUrl: "https://script.google.com/macros/s/AKfycbz31hiovF6SkGIrY2Z8nzzJBug-KaCXpHsgiHTSj21fBIBlocJ9GYlpGrz4Ztz019OY/exec",
    paymentUrl: "https://script.google.com/macros/s/AKfycbyfgxc3BhDox-cp5q2ilXv-roaNbJbqyp4SSRrVebidv_YbKP2lqo386wgW0ZyFMMrV/exec",
  },
},

};