export const siteConfig = {
  name: "GAGE Center",
  phoneDisplay: "(816) 229-7775",
  phoneHref: "tel:+18162297775",
  email: "info@gagecenter.com",
  address: "1101 NW Jefferson St, Blue Springs, MO 64015",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=1101+NW+Jefferson+St+Blue+Springs+MO+64015",
  external: {
    // Replace these centralized destinations when GAGE confirms each iClassPro deep link.
    parentPortal: "https://portal.iclasspro.com/dragongym",
    classes: "https://portal.iclasspro.com/dragongym/classes?programs=20",
    trial: "https://portal.iclasspro.com/dragongym/classes?programs=20",
    camps: "https://portal.iclasspro.com/dragongym",
    parties: "https://portal.iclasspro.com/dragongym",
  },
  hours: [
    "Monday–Thursday: 9 AM–8 PM",
    "Friday: 9 AM–7 PM",
    "Saturday: 8 AM–2 PM",
    "Sunday: By event",
  ],
} as const;