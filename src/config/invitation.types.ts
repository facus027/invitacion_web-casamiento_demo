export interface InvitationConfig {
  couple: {
    bride: string;
    groom: string;
    displayName: string;
  };


  assets: {
    namesImage: string;
    dateImage?: string;
  };

  texts: {
    intro: string;
  };

  event: {
  subtitle: string;
  date: string;

  ceremony: {
    title: string;
    hour:string;
    place: string;
    address: string;
    mapUrl: string;
  };

  party: {
    title: string;
    hour:string;
    place: string;
    address: string;
    mapUrl: string;
  };
};

gallery: {
  enabled: boolean;
  title: string;
   images: string[]
};

rsvp: {
  enabled: boolean;
  title: string;
  description: string;
  buttonText: string;

  payment: {
  enabled: boolean,
  cardPrice: number,
  mercadoPagoUrl: string
},

scripts: {
    simpleUrl: string;
    paymentUrl: string;
  };

};

}