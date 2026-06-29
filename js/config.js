// Configurações centrais do site.
// Edite somente este arquivo para atualizar contato, endereço e horários.

export const clinicConfig = {
  professionalName: "Dra. Aline Sanfelice",
  clinicName: "Aline Sanfelice — Odontopediatria Avançada",

  cro: "CRO-PR 22438",

  city: "Cascavel",
  state: "PR",

  instagramUsername: "@alinesanfelice",
  instagramUrl: "https://www.instagram.com/alinesanfelice/",

  // Dados extraídos do perfil profissional público (Google Maps / Instagram):
  whatsapp: "5545984333443",
  phone: "(45) 98433-3443",
  email: "",
  address: "R. Fortaleza, 1850 - Centro, Cascavel - PR, 85810-051",
  googleMapsUrl: "https://maps.app.goo.gl/1zPVbfsscRTXwTze8",
  openingHours: "Seg a Sex • até às 18h",

  domain: "",

  whatsappMessage:
    "Olá, Dra. Aline! Conheci o atendimento pelo site e gostaria de receber mais informações."
};

export function buildWhatsappLink() {
  const { whatsapp, whatsappMessage } = clinicConfig;
  if (!whatsapp) return "";
  const text = encodeURIComponent(whatsappMessage || "");
  return `https://wa.me/${whatsapp}?text=${text}`;
}
