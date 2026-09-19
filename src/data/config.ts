export const siteConfig = {
  name: "GAGE Center",
  phoneDisplay: "(816) 229-7775",
  phoneHref: "tel:+18162297775",
  email: "info@gagecenter.com",
  address: "1101 NW Jefferson St, Blue Springs, MO 64015",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=1101+NW+Jefferson+St+Blue+Springs+MO+64015",
  external: {
    // iClassPro is the sole destination for schedules, trials, enrollment, and billing.
    // Until GAGE confirms category-specific links, each action safely opens the verified live class list.
    parentPortal: "https://portal.iclasspro.com/dragongym",
    classes: "https://portal.iclasspro.com/dragongym/classes?programs=20",
    trial: "https://portal.iclasspro.com/dragongym/classes?programs=20",
    camps: "https://portal.iclasspro.com/dragongym",
    parties: "https://portal.iclasspro.com/dragongym",
  },
  registration: {
    provider: "iClassPro",
    trialLinkVerified: false,
    trialNote: "Choose a live class in the GAGE registration portal, then select the available trial option.",
  },
  hours: [
    "Monday: 9:00 AM–8:30 PM",
    "Tuesday: 9:00 AM–8:30 PM",
    "Wednesday: 9:00 AM–10:00 PM",
    "Thursday: 9:00 AM–8:30 PM",
    "Friday: 9:00 AM–8:30 PM",
    "Saturday: 9:00 AM–6:00 PM",
    "Sunday: 1:00 PM–5:00 PM",
  ],
} as const;